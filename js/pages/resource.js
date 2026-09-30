/* ============================================================
   RESOURCE PAGE
   ============================================================ */


/* ============================================================
   INITIALIZATION
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    loadResource
);


/* ============================================================
   NORMALIZE RESOURCE CONTENT
   ============================================================ */

async function normalizeResourceContent() {

    const main =
        document.getElementById(
            "resource-content"
        );


    if (!main) {
        return;
    }


    /* ========================================================
       ORIGINAL ELEMENTS
       ======================================================== */

    const elements =
        Array.from(
            main.children
        );


    /*
     * Guardamos los elementos originales
     * antes de modificar el DOM.
     */


    /* ========================================================
       DOWNLOAD BUTTON
       ======================================================== */

    const description =
        elements[2];

    if (description) {

        const button =
            document.createElement(
                "a"
            );

        button.textContent =
            "Download Now";

        button.href =
            "#";

        button.classList.add(
            "resource-download-button"
        );

        description.after(
            button
        );

    }


    /* ========================================================
       WHAT'S INCLUDED
       ======================================================== */

    const includedImage =
        elements[3];

    const includedTitle =
        elements[4];

    const includedList =
        elements[5];


    if (
        includedImage &&
        includedTitle &&
        includedList
    ) {

        const section =
            document.createElement(
                "section"
            );

        section.classList.add(
            "resource-included"
        );


        /*
         * Reemplazamos primero
         * el elemento original.
         */

        includedImage.replaceWith(
            section
        );


        /*
         * Imagen
         */

        const imageContainer =
            document.createElement(
                "div"
            );

        imageContainer.classList.add(
            "resource-included-image"
        );

        imageContainer.appendChild(
            includedImage
        );


        /*
         * Contenido
         */

        const content =
            document.createElement(
                "div"
            );

        content.classList.add(
            "resource-included-content"
        );

        content.appendChild(
            includedTitle
        );

        content.appendChild(
            includedList
        );


        /*
         * Construir sección
         */

        section.appendChild(
            imageContainer
        );

        section.appendChild(
            content
        );

    }


    /* ========================================================
       WHAT CAN YOU DO
       ======================================================== */

    const benefitsTitle =
        elements[6];

    const benefitTitle1 =
        elements[7];

    const benefitDesc1 =
        elements[8];

    const benefitTitle2 =
        elements[9];

    const benefitDesc2 =
        elements[10];

    const benefitTitle3 =
        elements[11];

    const benefitDesc3 =
        elements[12];


    if (
        benefitsTitle &&
        benefitTitle1 &&
        benefitDesc1 &&
        benefitTitle2 &&
        benefitDesc2 &&
        benefitTitle3 &&
        benefitDesc3
    ) {

        const section =
            document.createElement(
                "section"
            );

        section.classList.add(
            "resource-benefits"
        );


        /*
         * Reemplazamos primero
         * el título original.
         */

        benefitsTitle.replaceWith(
            section
        );


        /*
         * Título
         */

        section.appendChild(
            benefitsTitle
        );


        /*
         * Grid
         */

        const grid =
            document.createElement(
                "div"
            );

        grid.classList.add(
            "resource-benefits-grid"
        );


        /*
         * Card 1
         */

        const card1 =
            document.createElement(
                "article"
            );

        card1.classList.add(
            "resource-benefit-card"
        );

        card1.appendChild(
            benefitTitle1
        );

        card1.appendChild(
            benefitDesc1
        );


        /*
         * Card 2
         */

        const card2 =
            document.createElement(
                "article"
            );

        card2.classList.add(
            "resource-benefit-card"
        );

        card2.appendChild(
            benefitTitle2
        );

        card2.appendChild(
            benefitDesc2
        );


        /*
         * Card 3
         */

        const card3 =
            document.createElement(
                "article"
            );

        card3.classList.add(
            "resource-benefit-card"
        );

        card3.appendChild(
            benefitTitle3
        );

        card3.appendChild(
            benefitDesc3
        );


        /*
         * Add cards to grid
         */

        grid.appendChild(
            card1
        );

        grid.appendChild(
            card2
        );

        grid.appendChild(
            card3
        );


        /*
         * Add grid to section
         */

        section.appendChild(
            grid
        );

    }

    /* ========================================================
    GET YOUR FREE RESOURCE
    ======================================================== */

    const downloadTitle =
        elements[13];

    const downloadImage =
        elements[14];


    if (
        downloadTitle &&
        downloadImage
    ) {

        const section =
            document.createElement(
                "section"
            );

        section.classList.add(
            "resource-download-section"
        );


        /*
        * Reemplazar primero
        */

        downloadTitle.replaceWith(
            section
        );


        /*
        * Título
        */

        section.appendChild(
            downloadTitle
        );


        /*
        * Contenedor principal
        */

        const content =
            document.createElement(
                "div"
            );

        content.classList.add(
            "resource-download-content"
        );


        /*
        * Imagen
        */

        const imageContainer =
            document.createElement(
                "div"
            );

        imageContainer.classList.add(
            "resource-download-image"
        );

        imageContainer.appendChild(
            downloadImage
        );


        /*
        * Contenido derecho
        */

        const formContainer =
            document.createElement(
                "div"
            );

        formContainer.classList.add(
            "resource-download-form"
        );


        /*
        * Formulario
        */

        const form =
            document.createElement(
                "form"
            );

        form.classList.add(
            "resource-resource-form"
        );


        /*
        * Email input
        */

        const email =
            document.createElement(
                "input"
            );

        email.type =
            "email";

        email.placeholder =
            "Enter your email";

        email.required =
            true;

        email.name =
            "email";


        /*
        * Submit button
        */

        const button =
            document.createElement(
                "button"
            );

        button.type =
            "submit";

        button.textContent =
            "SEND ME THE 11 EVIDENCE-BASED WAYS TO TEACH DAILY LIVING SKILLS";


        form.appendChild(
            email
        );

        form.appendChild(
            button
        );


        /*
        * What happens after submit
        */

        const afterSubmit =
            document.createElement(
                "div"
            );

        afterSubmit.classList.add(
            "resource-download-after"
        );


        afterSubmit.innerHTML = `
            <h3>What Happens After You Submit?</h3>

            <p>
                Once you submit the form, this resource
                will be emailed straight to your inbox.
            </p>

            <p>
                We respect your privacy. Your information
                will never be shared or sold, and you
                won’t receive spam. Just helpful resources.
            </p>

            <p>
                If, for any reason, this form doesn’t work,
                please email me directly at
                <a href="mailto:chris@lifeskillsadvocate.com">
                    chris@lifeskillsadvocate.com
                </a>,
                and I’ll make sure you receive the assessment.
            </p>

            <p>
                Best,
            </p>

            <img
                class="signature"
                src="https://lifeskillsadvocate.com/wp-content/uploads/2024/07/signature.png"
                alt="Chris signature"
            >
        `;


        /*
        * Add form and information
        */

        formContainer.appendChild(
            form
        );

        formContainer.appendChild(
            afterSubmit
        );


        /*
        * Build content
        */

        content.appendChild(
            imageContainer
        );

        content.appendChild(
            formContainer
        );


        section.appendChild(
            content
        );

    }

    /* ========================================================
    ADVOCATE360
    ======================================================== */

    const advocateTitle =
        elements[15];

    const advocateLogo =
        elements[16];

    const advocateDescription =
        elements[17];

    const advocateOriginalButton =
        elements[18];


    if (
        advocateTitle &&
        advocateLogo &&
        advocateDescription
    ) {

        const section =
            document.createElement(
                "section"
            );

        section.classList.add(
            "resource-advocate"
        );


        /*
        * Reemplazar primero
        */

        advocateTitle.replaceWith(
            section
        );


        /*
        * Título
        */

        section.appendChild(
            advocateTitle
        );


        /*
        * Card
        */

        const card =
            document.createElement(
                "div"
            );

        card.classList.add(
            "resource-advocate-card"
        );


        /*
        * Logo
        */

        const logoContainer =
            document.createElement(
                "div"
            );

        logoContainer.classList.add(
            "resource-advocate-logo"
        );

        logoContainer.appendChild(
            advocateLogo
        );


        /*
        * Descripción
        */

        const description =
            document.createElement(
                "div"
            );

        description.classList.add(
            "resource-advocate-description"
        );

        description.appendChild(
            advocateDescription
        );


        /*
        * Botón
        */

        const button =
            document.createElement(
                "a"
            );

        button.href =
            "https://advocate360.app/?utm_source=lifeskillsadvocate.com&utm_medium=referral&utm_campaign=resource";

        button.target =
            "_blank";

        button.rel =
            "noopener noreferrer";

        button.textContent =
            "Create a Free Advocate360 Account";

        button.classList.add(
            "resource-advocate-button"
        );


        /*
        * Construir card
        */

        card.appendChild(
            logoContainer
        );

        card.appendChild(
            description
        );

        card.appendChild(
            button
        );


        /*
        * Agregar card a la sección
        */

        section.appendChild(
            card
        );


        /*
        * Eliminar contenido original
        * del botón/configuración
        */

        if (advocateOriginalButton) {

            advocateOriginalButton.remove();

        }

    }

    /* ========================================================
    FAQ
    ======================================================== */

    const faqTitle =
        elements[19];

    if (faqTitle) {

        const section =
            document.createElement(
                "section"
            );

        section.classList.add(
            "resource-faq"
        );


        /*
        * Reemplazar primero
        */

        faqTitle.replaceWith(
            section
        );


        /*
        * Título
        */

        section.appendChild(
            faqTitle
        );


        /*
        * FAQ data
        */

        const faqData = [
            {
                question:
                    "Is this a printable PDF?",

                answer:
                    "Yes, it is a single-page PDF you can print or share."
            },

            {
                question:
                    "Does it include full lesson plans?",

                answer:
                    "No, it’s a quick-reference overview of effective approaches."
            },

            {
                question:
                    "Can I use this with teens and adults?",

                answer:
                    "Yes, strategies can be adapted across ages and contexts."
            },

            {
                question:
                    "Can I share this with my team?",

                answer:
                    "Yes, it’s designed for easy sharing with families and professionals."
            }
        ];


        /*
        * FAQ list
        */

        const faqList =
            document.createElement(
                "div"
            );

        faqList.classList.add(
            "resource-faq-list"
        );


        faqData.forEach(
            (item) => {

                const faqItem =
                    document.createElement(
                        "article"
                    );

                faqItem.classList.add(
                    "resource-faq-item"
                );


                /*
                * Question button
                */

                const question =
                    document.createElement(
                        "button"
                    );

                question.type =
                    "button";

                question.classList.add(
                    "resource-faq-question"
                );

                question.innerHTML = `
                    <span>
                        ${item.question}
                    </span>

                    <span class="resource-faq-icon">
                        >
                    </span>
                `;


                /*
                * Answer
                */

                const answer =
                    document.createElement(
                        "div"
                    );

                answer.classList.add(
                    "resource-faq-answer"
                );

                answer.innerHTML = `
                    <p>
                        ${item.answer}
                    </p>
                `;


                /*
                * Accordion
                */

                question.addEventListener(
                    "click",
                    () => {

                        const isOpen =
                            faqItem.classList.contains(
                                "is-open"
                            );


                        /*
                        * Close all
                        */

                        faqList
                            .querySelectorAll(
                                ".resource-faq-item"
                            )
                            .forEach(
                                (item) => {

                                    item.classList.remove(
                                        "is-open"
                                    );

                                }
                            );


                        /*
                        * Open selected
                        */

                        if (!isOpen) {

                            faqItem.classList.add(
                                "is-open"
                            );

                        }

                    }
                );


                faqItem.appendChild(
                    question
                );

                faqItem.appendChild(
                    answer
                );

                faqList.appendChild(
                    faqItem
                );

            }
        );


        /*
        * Add FAQ list
        */

        section.appendChild(
            faqList
        );


        /*
        * CTA
        */

        const cta =
            document.createElement(
                "a"
            );

        cta.href =
            "#";

        cta.textContent =
            "Get The Free Resource";

        cta.classList.add(
            "resource-faq-cta"
        );


        section.appendChild(
            cta
        );

    }

    /* ========================================================
    RELATED RESOURCES
    ======================================================== */

    const relatedTitle =
        elements[20];

    const relatedImage1 =
        elements[21];

    const relatedTitle1 =
        elements[22];

    const relatedImage2 =
        elements[23];

    const relatedTitle2 =
        elements[24];

    const relatedImage3 =
        elements[25];

    const relatedTitle3 =
        elements[26];


    if (
        relatedTitle &&
        relatedImage1 &&
        relatedTitle1 &&
        relatedImage2 &&
        relatedTitle2 &&
        relatedImage3 &&
        relatedTitle3
    ) {

        const section =
            document.createElement(
                "section"
            );

        section.classList.add(
            "resource-related"
        );


        /*
        * Reemplazar primero
        */

        relatedTitle.replaceWith(
            section
        );


        /*
        * Título
        */

        section.appendChild(
            relatedTitle
        );


        /*
        * Recursos relacionados
        */

        const relatedSlugs = [
            "what-do-i-need-reminder-worksheet",
            "weekly-organization-checklist",
            "weekly-menu-planner"
        ];


        /*
        * Buscar recursos y determinar
        * automáticamente su carpeta.
        */

        const relatedResources =
            relatedSlugs
                .map(
                    slug => {

                        const index =
                            window.resourcesData?.findIndex(
                                resource =>
                                    resource.slug === slug
                            );


                        if (
                            index === undefined ||
                            index === -1
                        ) {
                            return null;
                        }


                        const resource =
                            window.resourcesData[index];


                        return {
                            resource: resource,

                            folder:
                                `resource${String(
                                    index + 1
                                ).padStart(
                                    2,
                                    "0"
                                )}`
                        };

                    }
                )
                .filter(Boolean);


        /*
        * Grid
        */

        const grid =
            document.createElement(
                "div"
            );

        grid.classList.add(
            "resource-related-grid"
        );


        /*
        * Crear cards
        */

        relatedResources.forEach(
            related => {

                const resource =
                    related.resource;


                /*
                * Card
                */

                const card =
                    document.createElement(
                        "article"
                    );

                card.classList.add(
                    "resource-related-card"
                );


                /*
                * Imagen
                */

                const image =
                    document.createElement(
                        "img"
                    );

                image.src =
                    `/resources/${related.folder}/cover.png`;

                image.alt =
                    resource.title;


                /*
                * Título
                */

                const title =
                    document.createElement(
                        "h2"
                    );

                const link =
                    document.createElement(
                        "a"
                    );

                link.href =
                    `resource.html?id=${encodeURIComponent(
                        resource.id
                    )}`;

                link.textContent =
                    resource.title;


                title.appendChild(
                    link
                );


                /*
                * Construir card
                */

                card.appendChild(
                    image
                );

                card.appendChild(
                    title
                );


                /*
                * Agregar card al grid
                */

                grid.appendChild(
                    card
                );

            }
        );


        /*
        * Agregar grid a la sección
        */

        section.appendChild(
            grid
        );


        /*
        * Eliminar contenido original
        * de Related Resources
        */

        relatedImage1.remove();
        relatedTitle1.remove();

        relatedImage2.remove();
        relatedTitle2.remove();

        relatedImage3.remove();
        relatedTitle3.remove();

    }

    /* ========================================================
    WHO CREATED THIS RESOURCE
    ======================================================== */

    const createdTitle =
        elements[27];

    const createdDescription =
        elements[28];

    const chrisTitle =
        elements[29];

    const chrisBio1 =
        elements[30];

    const chrisBio2 =
        elements[31];

    const chrisBio3 =
        elements[32];

    const chrisSignature =
        elements[33];

    const amyTitle =
        elements[34];

    const amyBio1 =
        elements[35];

    const amyBio2 =
        elements[36];

    const amyBio3 =
        elements[37];

    const amySignature =
        elements[38];


    if (
        createdTitle &&
        createdDescription &&
        chrisTitle &&
        chrisBio1 &&
        chrisBio2 &&
        chrisBio3 &&
        chrisSignature &&
        amyTitle &&
        amyBio1 &&
        amyBio2 &&
        amyBio3 &&
        amySignature
    ) {

        /*
        * Cargar autores
        */

        const response =
            await fetch(
                "/authors/authors.json"
            );


        if (!response.ok) {

            throw new Error(
                `Error loading authors: ${response.status}`
            );

        }


        const authors =
            await response.json();


        /*
        * Buscar autores
        */

        const chrisAuthor =
            authors.find(
                author =>
                    author.name.toLowerCase() ===
                    "chris hanson"
            );


        const amyAuthor =
            authors.find(
                author =>
                    author.name.toLowerCase() ===
                    "amy sippl"
            );


        /*
        * Crear sección
        */

        const section =
            document.createElement(
                "section"
            );

        section.classList.add(
            "resource-created"
        );


        /*
        * Reemplazar primero
        */

        createdTitle.replaceWith(
            section
        );


        /*
        * Título
        */

        section.appendChild(
            createdTitle
        );


        /*
        * Descripción
        */

        section.appendChild(
            createdDescription
        );


        /* ====================================================
        CHRIS
        ==================================================== */

        const chris =
            document.createElement(
                "article"
            );

        chris.classList.add(
            "resource-author",
            "resource-author-chris"
        );


        /*
        * Imagen
        */

        const chrisImage =
            document.createElement(
                "img"
            );


        if (chrisAuthor?.image) {

            chrisImage.src =
                `/${chrisAuthor.image}`;

        }

        chrisImage.alt =
            chrisAuthor?.name ||
            "Chris Hanson";


        /*
        * Contenido
        */

        const chrisContent =
            document.createElement(
                "div"
            );

        chrisContent.classList.add(
            "resource-author-content"
        );

        chrisContent.appendChild(
            chrisTitle
        );

        chrisContent.appendChild(
            chrisBio1
        );

        chrisContent.appendChild(
            chrisBio2
        );

        chrisContent.appendChild(
            chrisBio3
        );

        chrisContent.appendChild(
            chrisSignature
        );


        chris.appendChild(
            chrisImage
        );

        chris.appendChild(
            chrisContent
        );


        /* ====================================================
        AMY
        ==================================================== */

        const amy =
            document.createElement(
                "article"
            );

        amy.classList.add(
            "resource-author",
            "resource-author-amy"
        );


        /*
        * Imagen
        */

        const amyImage =
            document.createElement(
                "img"
            );


        if (amyAuthor?.image) {

            amyImage.src =
                `/${amyAuthor.image}`;

        }

        amyImage.alt =
            amyAuthor?.name ||
            "Amy Sippl";


        /*
        * Contenido
        */

        const amyContent =
            document.createElement(
                "div"
            );

        amyContent.classList.add(
            "resource-author-content"
        );

        amyContent.appendChild(
            amyTitle
        );

        amyContent.appendChild(
            amyBio1
        );

        amyContent.appendChild(
            amyBio2
        );

        amyContent.appendChild(
            amyBio3
        );

        amyContent.appendChild(
            amySignature
        );


        /*
        * Para Amy:
        * contenido primero, imagen después.
        */

        amy.appendChild(
            amyContent
        );

        amy.appendChild(
            amyImage
        );


        /*
        * Agregar autores
        */

        section.appendChild(
            chris
        );

        section.appendChild(
            amy
        );

    }

}


/* ============================================================
   LOAD RESOURCE
   ============================================================ */

async function loadResource() {

    try {

        /*
         * Get resource ID from URL.
         */

        const params =
            new URLSearchParams(
                window.location.search
            );


        const resourceId =
            params.get("id");


        /*
         * Make sure an ID was provided.
         */

        if (!resourceId) {

            renderResourceError(
                "Resource not found."
            );

            return;

        }


        /*
         * Load resources JSON.
         */

        const response =
            await fetch(
                "/resources/resources.json"
            );


        if (!response.ok) {

            throw new Error(
                `HTTP error: ${response.status}`
            );

        }


        const resources =
            await response.json();

        window.resourcesData =
            resources;  


        /*
         * Find resource by ID.
         */

        const resource =
            resources.find(
                item =>
                    String(item.id) ===
                    String(resourceId)
            );


        /*
         * Resource does not exist.
         */

        if (!resource) {

            renderResourceError(
                "Resource not found."
            );

            return;

        }


        /*
         * Render resource.
         */

        renderResource(
            resource
        );


    } catch (error) {

        console.error(
            "Error loading resource:",
            error
        );


        renderResourceError(
            "Unable to load this resource."
        );

    }

}


/* ============================================================
   RENDER RESOURCE
   ============================================================ */

function renderResource(
    resource
) {

    const main =
        document.getElementById(
            "resource-content"
        );


    if (!main) {
        return;
    }


    /*
     * Render the WordPress content
     * already stored in resources.json.
     */

    main.innerHTML =
        resource.content || "";


    normalizeResourceContent();


    /*
     * Update browser title.
     */

    if (resource.title) {

        document.title =
            resource.title;

    }

}


/* ============================================================
   ERROR
   ============================================================ */

function renderResourceError(
    message
) {

    const main =
        document.getElementById(
            "resource-content"
        );


    if (!main) {
        return;
    }


    main.innerHTML = `
        <section class="resource-error">
            <h1>${message}</h1>

            <a href="resources.html">
                Back to resources
            </a>
        </section>
    `;

}