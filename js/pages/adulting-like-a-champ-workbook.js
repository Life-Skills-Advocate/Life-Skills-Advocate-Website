// ============================================================
// LEAD MAGNET FORM — "Adulting Like A Champ" free workbook
//
// This posts to a SAME-ORIGIN server route, not directly to
// Advocate360. Per advocate360-lead-magnet-api.md (section 6),
// the Advocate360 endpoint cannot be called from browser JS:
//
//   - CORS only allows the Advocate360 hostnames as an origin —
//     lifeskillsadvocate.com is deliberately not on that list.
//   - The X-API-Key would be exposed to anyone who opens devtools.
//   - The endpoint has no rate limit; it was built for
//     server-to-server WordPress traffic only.
//
// LEAD_MAGNET_ENDPOINT below is a placeholder path. A real
// server-side route (a Vercel/Netlify function, etc.) needs to
// exist at that path, hold the X-API-Key in its own environment
// variables, and forward { email, resource_id } to:
//   https://advocate360.app/api/lead-magnet/request
//
// Until that route exists, submissions here fail — that failure
// is caught below and shown to the visitor as a normal
// "try again" message, same as any other network hiccup.
// ============================================================

const LEAD_MAGNET_ENDPOINT = "/api/lead-magnet/request";
const RESOURCE_ID = 106; // Advocate360 resource_id for "Adulting Like A Champ"

const form = document.getElementById("workbookEmailForm");
const status = document.getElementById("workbookFormStatus");
const submitButton = form ? form.querySelector('button[type="submit"]') : null;


// ============================================================
// ENVIAR FORMULARIO
// ============================================================

async function handleSubmit(event) {

    event.preventDefault();

    const emailInput = form.elements.email;
    const email = emailInput.value.trim();

    if (!email) {

        showStatus("Please enter your email address.", "error");
        emailInput.focus();

        return;

    }

    setSubmitting(true);
    showStatus("", null);

    try {

        const response = await fetch(LEAD_MAGNET_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                resource_id: RESOURCE_ID
            })
        });

        const data = await response.json().catch(() => null);

        if (response.ok && data && data.success) {

            showStatus(
                "Check your email — your free workbook is on its way!",
                "success"
            );

            form.reset();

        } else {

            showStatus(
                (data && data.detail) ||
                "Something went wrong. Please try again in a moment.",
                "error"
            );

        }

    } catch (error) {

        console.error("Lead magnet request failed:", error);

        showStatus(
            "Something went wrong. Please try again in a moment.",
            "error"
        );

    } finally {

        setSubmitting(false);

    }

}


// ============================================================
// ESTADO DEL BOTÓN
// ============================================================

function setSubmitting(isSubmitting) {

    if (!submitButton) return;

    submitButton.disabled = isSubmitting;
    submitButton.textContent = isSubmitting
        ? "Sending..."
        : "Get the free workbook";

}


// ============================================================
// MENSAJE DE ESTADO
// ============================================================

function showStatus(message, type) {

    if (!status) return;

    status.textContent = message;
    status.classList.remove("is-success", "is-error");

    if (type) {
        status.classList.add(type === "success" ? "is-success" : "is-error");
    }

}


// ============================================================
// INICIALIZAR
// ============================================================

if (form) {
    form.addEventListener("submit", handleSubmit);
}
