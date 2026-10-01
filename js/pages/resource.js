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

async function normalizeResourceContent(
    authors) {

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
                src="assets/img/signature.png"
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


    /*
    * Normalizar texto
    */

    const normalizeText =
        text =>
            text
                .replace(/\u00a0/g, " ")
                .replace(/\s+/g, " ")
                .trim()
                .toLowerCase();


    /*
    * Buscar autores dentro del contenido
    *
    * Solo consideramos como autor un elemento que:
    *
    * 1. Sea un <p>
    * 2. Tenga un <strong> o <b>
    * 3. El texto destacado coincida exactamente
    *    con un autor de authors.json
    *
    * Esto evita detectar menciones normales
    * de autores dentro de otros párrafos.
    */

    const detectedAuthors = [];


    elements.forEach(
        (element, index) => {

            if (
                element.tagName !== "P"
            ) {
                return;
            }


            const highlighted =
                element.querySelector(
                    "strong, b"
                );


            if (!highlighted) {
                return;
            }


            const highlightedName =
                normalizeText(
                    highlighted.textContent
                );


            const author =
                authors.find(
                    item =>
                        normalizeText(
                            item.name
                        ) ===
                        highlightedName
                );


            if (!author) {
                return;
            }


            /*
            * Evitar duplicados
            */

            if (
                detectedAuthors.some(
                    item =>
                        item.author.id ===
                        author.id
                )
            ) {
                return;
            }


            detectedAuthors.push({

                author: author,

                index: index

            });

        }
    );


    /*
    * Si no encontramos autores,
    * no hacemos nada.
    */

    if (
        detectedAuthors.length > 0
    ) {


        /*
        * ====================================================
        * BUSCAR TÍTULO DE LA SECCIÓN
        * ====================================================
        */

        let createdTitle = null;

        let createdDescription = null;


        const titleIndex =
            elements.findIndex(
                element => {

                    if (
                        ![
                            "H2",
                            "H3"
                        ].includes(
                            element.tagName
                        )
                    ) {
                        return false;
                    }


                    return normalizeText(
                        element.textContent
                    ).includes(
                        "who created this resource"
                    );

                }
            );


        /*
        * Si existe el título,
        * lo utilizamos.
        */

        if (
            titleIndex !== -1
        ) {

            createdTitle =
                elements[
                    titleIndex
                ];


            /*
            * El párrafo inmediatamente
            * posterior al título puede ser
            * la descripción de la sección.
            */

            const possibleDescription =
                elements[
                    titleIndex + 1
                ];


            if (
                possibleDescription &&
                possibleDescription.tagName ===
                    "P"
            ) {

                createdDescription =
                    possibleDescription;

            }

        }


        /*
        * ====================================================
        * CREAR SECCIÓN
        * ====================================================
        */

        const section =
            document.createElement(
                "section"
            );


        section.classList.add(
            "resource-created"
        );


        /*
        * El primer autor detectado será
        * el punto donde insertamos la sección.
        */

        const firstAuthorIndex =
            detectedAuthors[0].index;


        const firstAuthorElement =
            elements[
                firstAuthorIndex
            ];


        firstAuthorElement.replaceWith(
            section
        );


        /*
        * ====================================================
        * TÍTULO
        * ====================================================
        */

        if (
            createdTitle
        ) {

            section.appendChild(
                createdTitle
            );

        }


        /*
        * ====================================================
        * DESCRIPCIÓN
        * ====================================================
        */

        if (
            createdDescription
        ) {

            section.appendChild(
                createdDescription
            );

        }


        /*
        * ====================================================
        * CREAR CADA AUTOR
        * ====================================================
        */

        detectedAuthors.forEach(
            (
                detected,
                authorIndex
            ) => {

                const author =
                    detected.author;


                const startIndex =
                    detected.index;


                /*
                * El contenido del autor
                * termina justo antes del
                * siguiente autor detectado.
                */

                const nextAuthor =
                    detectedAuthors[
                        authorIndex + 1
                    ];


                const endIndex =
                    nextAuthor
                        ? nextAuthor.index
                        : elements.length;


                /*
                * Obtener todos los elementos
                * pertenecientes a este autor.
                */

                const authorElements =
                    elements.slice(
                        startIndex,
                        endIndex
                    );


                /*
                * El primer elemento es el
                * nombre/cargo del autor.
                */

                const authorTitle =
                    authorElements.shift();


                /*
                * Crear article
                */

                const article =
                    document.createElement(
                        "article"
                    );


                article.classList.add(
                    "resource-author"
                );


                /*
                * Clase específica para
                * alternar el layout.
                */

                if (
                    authorIndex % 2 === 0
                ) {

                    article.classList.add(
                        "resource-author-left"
                    );

                } else {

                    article.classList.add(
                        "resource-author-right"
                    );

                }


                /*
                * =================================================
                * IMAGEN
                * =================================================
                */

                const image =
                    document.createElement(
                        "img"
                    );


                if (
                    author.image
                ) {

                    image.src =
                        `/${author.image}`;

                }


                image.alt =
                    author.name;


                /*
                * =================================================
                * CONTENIDO
                * =================================================
                */

                const content =
                    document.createElement(
                        "div"
                    );


                content.classList.add(
                    "resource-author-content"
                );


                /*
                * Nombre + cargo
                */

                if (
                    authorTitle
                ) {

                    content.appendChild(
                        authorTitle
                    );

                }


                /*
                * Bio + firma
                */

                authorElements.forEach(
                    element => {

                        content.appendChild(
                            element
                        );

                    }
                );


                /*
                * =================================================
                * ORDEN DEL LAYOUT
                * =================================================
                *
                * Autor 1:
                * imagen | contenido
                *
                * Autor 2:
                * contenido | imagen
                *
                */

                if (
                    authorIndex % 2 === 0
                ) {

                    article.appendChild(
                        image
                    );

                    article.appendChild(
                        content
                    );

                } else {

                    article.appendChild(
                        content
                    );

                    article.appendChild(
                        image
                    );

                }


                /*
                * Agregar autor a la sección
                */

                section.appendChild(
                    article
                );

            }
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
        * Load authors JSON.
        */

        const authorsResponse =
            await fetch(
                "/authors/authors.json"
            );


        if (!authorsResponse.ok) {

            throw new Error(
                `HTTP error loading authors: ${authorsResponse.status}`
            );

        }


        const authors =
            await authorsResponse.json();


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
            resource,
            authors     
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
    resource,
    authors
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


    normalizeResourceContent(authors);


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