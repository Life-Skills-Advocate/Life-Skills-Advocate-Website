// ============================================================
// VERCEL SERVERLESS FUNCTION — POST /api/lead-magnet/request
//
// Receives { email, first_name, resource_id | exercise_id } from
// js/lead-magnet-form.js, adds the X-API-Key, and forwards it to
// Advocate360. Returns Advocate360's response (incl. "link") as-is.
//
// Required environment variable (Vercel → Settings → Environment
// Variables). Never commit the key to the repo:
//   LEAD_MAGNET_API_KEY = <production key>
//
// Optional (defaults to production):
//   LEAD_MAGNET_API_URL = https://dev-app.lifeskillsadvocate.com/api/lead-magnet/request
// ============================================================

const DEFAULT_API_URL = "https://app.lifeskillsadvocate.com/api/lead-magnet/request";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {

    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ success: false, detail: "Method not allowed" });
    }

    const apiKey = process.env.LEAD_MAGNET_API_KEY;

    if (!apiKey) {
        console.error("LEAD_MAGNET_API_KEY is not set");
        return res.status(500).json({ success: false, detail: "Server not configured" });
    }

    const body = req.body || {};
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const firstName = typeof body.first_name === "string" ? body.first_name.trim() : "";
    const resourceId = Number(body.resource_id);
    const exerciseId = Number(body.exercise_id);
    const hasResource = Number.isInteger(resourceId) && resourceId > 0;
    const hasExercise = Number.isInteger(exerciseId) && exerciseId > 0;

    if (!EMAIL_PATTERN.test(email) || hasResource === hasExercise) {
        return res.status(422).json({ success: false, detail: "Invalid request" });
    }

    const payload = { email };

    if (firstName) {
        payload.first_name = firstName.slice(0, 100);
    }

    if (hasResource) {
        payload.resource_id = resourceId;
    } else {
        payload.exercise_id = exerciseId;
    }

    try {

        const upstream = await fetch(process.env.LEAD_MAGNET_API_URL || DEFAULT_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": apiKey
            },
            body: JSON.stringify(payload)
        });

        const data = await upstream.json().catch(() => null);

        if (!upstream.ok) {
            console.error("Advocate360 error:", upstream.status, data);
        }

        return res.status(upstream.status).json(data || { success: false });

    } catch (error) {

        console.error("Advocate360 request failed:", error);

        return res.status(502).json({ success: false, detail: "Upstream request failed" });

    }

}
