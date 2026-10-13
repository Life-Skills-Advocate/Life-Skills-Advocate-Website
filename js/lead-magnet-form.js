// ============================================================
// LEAD MAGNET FORMS — Advocate360
//
// Any <form data-resource-id="###"> (or data-exercise-id) on the
// page is wired up. On submit it sends:
//
//   { email, first_name, resource_id }   (or exercise_id)
//
// to the SAME-ORIGIN route below, then redirects the visitor to
// the "link" returned by Advocate360.
//
// The X-API-Key is NOT here on purpose. The server route holds it
// and forwards the request to
//   https://app.lifeskillsadvocate.com/api/lead-magnet/request
// (see advocate360-lead-magnet-api.md, section 6 — browser calls
// are blocked by CORS and would expose the key).
// ============================================================

const LEAD_MAGNET_ENDPOINT = "/api/lead-magnet/request";


// ============================================================
// ENVIAR FORMULARIO
// ============================================================

async function handleLeadMagnetSubmit(event) {

    const form = event.target;

    if (!form.matches("form[data-resource-id], form[data-exercise-id]")) {
        return;
    }

    event.preventDefault();
    const emailInput = form.elements.email;
    const nameInput = form.elements.first_name;
    const submitButton = form.querySelector('button[type="submit"]');

    const email = emailInput ? emailInput.value.trim() : "";
    const firstName = nameInput ? nameInput.value.trim() : "";

    if (!email || !emailInput.checkValidity()) {

        showLeadMagnetStatus(form, "Please enter a valid email address.", "error");

        if (emailInput) emailInput.focus();

        return;

    }

    const payload = { email };

    if (firstName) {
        payload.first_name = firstName;
    }

    if (form.dataset.resourceId) {
        payload.resource_id = Number(form.dataset.resourceId);
    } else {
        payload.exercise_id = Number(form.dataset.exerciseId);
    }

    setLeadMagnetSubmitting(submitButton, true);
    showLeadMagnetStatus(form, "", null);

    try {

        const response = await fetch(LEAD_MAGNET_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json().catch(() => null);

        if (response.ok && data && data.success && data.link) {

            showLeadMagnetStatus(
                form,
                "Success! Check your email — taking you to your resource now...",
                "success"
            );

            window.location.href = data.link;

            return;

        }

        console.error("Lead magnet request failed:", response.status, data);

        showLeadMagnetStatus(
            form,
            "Something went wrong. Please try again in a moment.",
            "error"
        );

    } catch (error) {

        console.error("Lead magnet request failed:", error);

        showLeadMagnetStatus(
            form,
            "Something went wrong. Please try again in a moment.",
            "error"
        );

    }

    setLeadMagnetSubmitting(submitButton, false);

}


// ============================================================
// ESTADO DEL BOTÓN
// ============================================================

function setLeadMagnetSubmitting(button, isSubmitting) {

    if (!button) return;

    if (!button.dataset.label) {
        button.dataset.label = button.textContent.trim();
    }

    button.disabled = isSubmitting;
    button.textContent = isSubmitting ? "Sending..." : button.dataset.label;

}


// ============================================================
// MENSAJE DE ESTADO
// ============================================================

function showLeadMagnetStatus(form, message, type) {

    // Reuse a status element inside the form if the page has one;
    // otherwise create it right after the form so it doesn't break
    // inline (email + button) form layouts.
    let status = form.querySelector(".lead-magnet-status");

    if (!status && form.nextElementSibling &&
        form.nextElementSibling.classList.contains("lead-magnet-status")) {
        status = form.nextElementSibling;
    }

    if (!status) {

        status = document.createElement("p");
        status.className = "lead-magnet-status";
        status.setAttribute("role", "status");
        status.setAttribute("aria-live", "polite");

        form.insertAdjacentElement("afterend", status);

    }

    status.textContent = message;
    status.classList.remove("is-success", "is-error");

    if (type) {
        status.classList.add(type === "success" ? "is-success" : "is-error");
    }

}


// ============================================================
// INICIALIZAR
// ============================================================

// Delegated so forms added later by page scripts (resource.js) are
// covered too.
document.addEventListener("submit", handleLeadMagnetSubmit);
