/* ============================================================
   LIFE SKILLS ADVOCATE
   RESOURCES PAGE
   ============================================================ */


/* ============================================================
   CONFIG
   ============================================================ */

const RESOURCES_JSON = "/resources/resources.json";

const ITEMS_PER_PAGE = 12;

const DEFAULT_COVER =
    "assets/images/resource-placeholder.png";


/* ============================================================
   STATE
   ============================================================ */

let resources = [];

let filteredResources = [];

let currentPage = 1;

let selectedAudience = "";


/* ============================================================
   DOM
   ============================================================ */

const featuredAudiences =
    document.getElementById("featured-audiences");

const featuredGrid =
    document.getElementById("featured-grid");

const resourcesGrid =
    document.getElementById("resources-grid");

const resourcesEmpty =
    document.getElementById("resources-empty");

const resourcesPagination =
    document.getElementById("resources-pagination");

const resourcesResultsCount =
    document.getElementById("resources-results-count");

const filterSkill =
    document.getElementById("filter-skill");

const filterContentType =
    document.getElementById("filter-content-type");

const filterAudience =
    document.getElementById("filter-audience");

const clearFiltersButton =
    document.getElementById("clear-filters");



const FILTER_OPTIONS = {
    skills: [
        { id: 300, name: "Attentional Control", slug: "attentional-control" },
        { id: 303, name: "Problem Solving", slug: "problem-solving" },
        { id: 305, name: "Organization", slug: "organization" },
        { id: 306, name: "Planning", slug: "planning" },
        { id: 307, name: "Flexibility", slug: "flexibility" },
        { id: 308, name: "Emotional Control", slug: "emotional-control" },
        { id: 310, name: "Time Management", slug: "time-management" },
        { id: 311, name: "Task Initiation", slug: "task-initiation" },
        { id: 312, name: "Working Memory", slug: "working-memory" },
        { id: 313, name: "Impulse Control", slug: "impulse-control" },
        { id: 314, name: "Self-Monitoring", slug: "self-monitoring" }
    ],

    content_type: [
        { id: 269, name: "Guide", slug: "guide" },
        { id: 291, name: "Template", slug: "template" },
        { id: 293, name: "Exercise", slug: "exercise" }
    ],

    audience: [
        { id: 294, name: "Educators and Clinicians", slug: "educators-and-clinicians" },
        { id: 295, name: "Parents and Families", slug: "parents-and-families" },
        { id: 296, name: "Adults", slug: "adults" },
        { id: 297, name: "Students and Teens", slug: "students-and-teens" }
    ]
};
/* ============================================================
   INIT
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    initResourcesPage
);


async function initResourcesPage() {

    try {

        const response =
            await fetch(RESOURCES_JSON);


        if (!response.ok) {

            throw new Error(
                `Error loading ${RESOURCES_JSON}`
            );

        }


        resources =
            await response.json();


        /* ----------------------------------------------------
           Validate JSON
        ---------------------------------------------------- */

        if (!Array.isArray(resources)) {

            throw new Error(
                "resources.json must contain an array."
            );

        }


        /* ----------------------------------------------------
           Only published resources
        ---------------------------------------------------- */

        resources =
            resources.filter(resource => {

                if (resource.status) {

                    return (
                        resource.status === "publish"
                    );

                }

                return true;

            });


        /* ----------------------------------------------------
           Sort newest first
        ---------------------------------------------------- */

        resources.sort((a, b) => {

            const dateA =
                new Date(a.date || 0);

            const dateB =
                new Date(b.date || 0);

            return dateB - dateA;

        });


        /* ----------------------------------------------------
           Filters
        ---------------------------------------------------- */

        populateFilters();


        /* ----------------------------------------------------
           Featured resources
        ---------------------------------------------------- */

        renderFeatured();


        /* ----------------------------------------------------
           All resources
        ---------------------------------------------------- */

        applyFilters();


        /* ----------------------------------------------------
           Events
        ---------------------------------------------------- */

        setupEvents();


    } catch (error) {

        console.error(
            "Resources page error:",
            error
        );


        if (resourcesResultsCount) {

            resourcesResultsCount.textContent =
                "Unable to load resources.";

        }

    }

}


/* ============================================================
   FILTER DATA
   ============================================================ */
function populateFilters() {
    populateSelect(filterSkill, FILTER_OPTIONS.skills);
    populateSelect(filterContentType, FILTER_OPTIONS.content_type);
    populateSelect(filterAudience, FILTER_OPTIONS.audience);
}


/* ============================================================
   TAXONOMY HELPERS
   ============================================================ */

function getUniqueTaxonomyValues(
    resourceList,
    property
) {

    const values = [];


    resourceList.forEach(resource => {

        const taxonomy =
            resource[property];


        if (!Array.isArray(taxonomy)) {
            return;
        }


        taxonomy.forEach(item => {

            /*
             * Expected format:
             *
             * {
             *     id: 123,
             *     name: "Planning",
             *     slug: "planning"
             * }
             */

            if (
                !item ||
                typeof item !== "object"
            ) {
                return;
            }


            if (!item.name) {
                return;
            }


            const slug =
                item.slug ||
                slugify(item.name);


            const alreadyExists =
                values.some(
                    value =>
                        value.slug === slug
                );


            if (!alreadyExists) {

                values.push({

                    id: item.id,

                    name: item.name,

                    slug: slug

                });

            }

        });

    });


    return values.sort(
        (a, b) =>
            a.name.localeCompare(
                b.name
            )
    );

}


/* ============================================================
   POPULATE SELECT
   ============================================================ */

function populateSelect(select, values) {
    if (!select) return;

    values.forEach(value => {
        const option = document.createElement("option");

        option.value = value.id;
        option.textContent = value.name;

        select.appendChild(option);
    });
}


/* ============================================================
   FEATURED
   ============================================================ */

function renderFeatured() {
    const featuredResources = resources.filter(resource =>
        hasFeaturedTaxonomy(resource)
    );

    if (!featuredResources.length) {
        const section = document.getElementById("featured-resources");

        if (section) {
            section.hidden = true;
        }

        return;
    }

    const audiences = FILTER_OPTIONS.audience;

    featuredAudiences.innerHTML = "";

    audiences.forEach((audience, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "featured-audience-button";

        if (index === 0) {
            button.classList.add("active");
        }

        button.textContent = audience.name;
        button.dataset.audience = audience.id;

        button.addEventListener("click", () => {
            document
                .querySelectorAll(".featured-audience-button")
                .forEach(button => {
                    button.classList.remove("active");
                });

            button.classList.add("active");

            selectedAudience = audience.id;

            renderFeaturedCards(featuredResources);
        });

        featuredAudiences.appendChild(button);
    });

    selectedAudience = audiences[0]?.id || "";

    renderFeaturedCards(featuredResources);
}


/* ============================================================
   FEATURED CARDS
   ============================================================ */

function renderFeaturedCards(featuredResources) {
    let resourcesToRender = featuredResources;

    if (selectedAudience) {
        resourcesToRender = featuredResources.filter(resource =>
            hasTaxonomy(resource.audience, selectedAudience)
        );
    }

    resourcesToRender = resourcesToRender.slice(0, 3);

    featuredGrid.innerHTML = "";

    resourcesToRender.forEach(resource => {
        featuredGrid.appendChild(
            createResourceCard(resource)
        );
    });
}


/* ============================================================
   APPLY FILTERS
   ============================================================ */

function applyFilters() {

    const skill =
        filterSkill?.value || "";


    const contentType =
        filterContentType?.value || "";


    const audience =
        filterAudience?.value || "";


    filteredResources =
        resources.filter(resource => {


            /* ------------------------------------------------
               Skill
            ------------------------------------------------ */

            if (
                skill &&
                !hasTaxonomy(
                    resource.skills,
                    skill
                )
            ) {

                return false;

            }


            /* ------------------------------------------------
               Content Type
            ------------------------------------------------ */

            if (
                contentType &&
                !hasTaxonomy(
                    resource.content_type,
                    contentType
                )
            ) {

                return false;

            }


            /* ------------------------------------------------
               Audience
            ------------------------------------------------ */

            if (
                audience &&
                !hasTaxonomy(
                    resource.audience,
                    audience
                )
            ) {

                return false;

            }


            return true;

        });


    /*
     * Whenever filters change,
     * return to page 1.
     */

    currentPage = 1;


    renderResources();

}


/* ============================================================
   RENDER ALL RESOURCES
   ============================================================ */

function renderResources() {

    /*
     * Clear current cards.
     */

    resourcesGrid.innerHTML = "";


    /*
     * Number of filtered resources.
     */

    const total =
        filteredResources.length;


    /* --------------------------------------------------------
       EMPTY STATE
    -------------------------------------------------------- */

    if (total === 0) {

        resourcesEmpty.hidden = false;


        resourcesPagination.innerHTML = "";


        resourcesResultsCount.textContent =
            "0 resources found.";


        return;

    }


    /*
     * Hide empty state.
     */

    resourcesEmpty.hidden = true;


    /* --------------------------------------------------------
       TOTAL PAGES
    -------------------------------------------------------- */

    const totalPages =
        Math.ceil(
            total / ITEMS_PER_PAGE
        );


    /*
     * Safety check.
     */

    if (currentPage < 1) {

        currentPage = 1;

    }


    if (currentPage > totalPages) {

        currentPage =
            totalPages;

    }


    /* --------------------------------------------------------
       CURRENT PAGE RANGE
    -------------------------------------------------------- */

    const start =
        (currentPage - 1) *
        ITEMS_PER_PAGE;


    const end =
        start +
        ITEMS_PER_PAGE;


    /*
     * Only get resources
     * belonging to this page.
     */

    const pageResources =
        filteredResources.slice(
            start,
            end
        );


    /* --------------------------------------------------------
       RENDER CARDS
    -------------------------------------------------------- */

    pageResources.forEach(
        resource => {

            const card =
                createResourceCard(
                    resource
                );


            resourcesGrid.appendChild(
                card
            );

        }
    );


    /* --------------------------------------------------------
       RESULTS COUNTER
    -------------------------------------------------------- */

    const showingStart =
        start + 1;


    const showingEnd =
        Math.min(
            end,
            total
        );


    resourcesResultsCount.textContent =
        `Showing ${showingStart}–${showingEnd} of ${total} resources`;


    /* --------------------------------------------------------
       PAGINATION
    -------------------------------------------------------- */

    renderPagination(
        totalPages
    );

}


/* ============================================================
   RESOURCE CARD
   ============================================================ */

function createResourceCard(
    resource
) {

    const article =
        document.createElement("article");


    article.className =
        "resource-card";


    /*
     * Optional resource ID.
     */

    if (resource.id) {

        article.dataset.resourceId =
            resource.id;

    }


    /*
     * --------------------------------------------------------
     * IMAGE
     * --------------------------------------------------------
     */

    const imageWrapper =
        document.createElement("div");


    imageWrapper.className =
        "resource-card-image";


    const image =
        document.createElement("img");


    image.src =
        getResourceCover(
            resource
        );


    image.alt =
        resource.title ||
        "Resource";


    image.loading =
        "lazy";


    /*
     * Image fallback.
     */

    image.addEventListener(
        "error",
        () => {

            if (
                image.src !==
                DEFAULT_COVER
            ) {

                image.src =
                    DEFAULT_COVER;

            }

        }
    );


    imageWrapper.appendChild(
        image
    );


    /*
     * --------------------------------------------------------
     * CONTENT
     * --------------------------------------------------------
     */

    const content =
        document.createElement("div");


    content.className =
        "resource-card-content";


    /*
     * --------------------------------------------------------
     * META
     * --------------------------------------------------------
     */

    const meta =
        document.createElement("div");


    meta.className =
        "resource-card-meta";


    const firstAudienceId = resource.audience?.[0];

    const firstAudience = getTaxonomyName(
        FILTER_OPTIONS.audience,
        firstAudienceId
    );

    if (firstAudience) {
        const tag = document.createElement("span");

        tag.className = "resource-card-tag";
        tag.textContent = firstAudience;

        meta.appendChild(tag);
    }

    /*
     * --------------------------------------------------------
     * TITLE
     * --------------------------------------------------------
     */

    const title =
        document.createElement("h3");


    title.textContent =
        resource.title ||
        "Untitled Resource";


    /*
     * --------------------------------------------------------
     * LINK
     * --------------------------------------------------------
     */

    const link =
        document.createElement("a");


    link.className =
        "resource-card-link";


    link.href =
        getResourceUrl(
            resource
        );


    link.innerHTML = `
        View Resource
        <span aria-hidden="true">→</span>
    `;


    /*
     * Append content.
     */

    content.appendChild(
        meta
    );


    content.appendChild(
        title
    );


    content.appendChild(
        link
    );


    /*
     * Append card.
     */

    article.appendChild(
        imageWrapper
    );


    article.appendChild(
        content
    );


    return article;

}


/* ============================================================
   RESOURCE URL
   ============================================================ */

function getResourceUrl(
    resource
) {

    /*
     * Future local URL.
     *
     * Example:
     *
     * "local_url":
     * "resources/weekly-organization-checklist/"
     */

    if (resource.local_url) {

        return resource.local_url;

    }


    /*
     * Temporary fallback
     * to original WordPress URL.
     */

    if (resource.link) {

        return resource.link;

    }


    return "#";

}


/* ============================================================
   RESOURCE COVER
   ============================================================ */

function getResourceCover(
    resource
) {

    /*
     * Normal case:
     *
     * "cover":
     * "resources/resource01/cover.png"
     */

    if (resource.cover) {

        return resource.cover;

    }


    /*
     * Alternative:
     *
     * "folder":
     * "resources/resource01"
     */

    if (resource.folder) {

        return (
            `${resource.folder}/cover.png`
        );

    }


    return DEFAULT_COVER;

}


/* ============================================================
   PAGINATION
   ============================================================ */

function renderPagination(
    totalPages
) {

    /*
     * Clear pagination.
     */

    resourcesPagination.innerHTML = "";


    /*
     * No need for pagination
     * if there is only one page.
     */

    if (totalPages <= 1) {

        return;

    }


    /*
     * FIRST
     */

    resourcesPagination.appendChild(

        createPaginationButton(
            "First",
            1,
            currentPage === 1
        )

    );


    /*
     * PREVIOUS
     */

    resourcesPagination.appendChild(

        createPaginationButton(
            "Previous",
            currentPage - 1,
            currentPage === 1
        )

    );


    /*
     * PAGE NUMBERS
     */

    const pageNumbers =
        getPaginationPages(
            currentPage,
            totalPages
        );


    pageNumbers.forEach(
        page => {

            /*
             * Ellipsis
             */

            if (page === "...") {

                const dots =
                    document.createElement(
                        "span"
                    );


                dots.className =
                    "pagination-dots";


                dots.textContent =
                    "...";


                resourcesPagination.appendChild(
                    dots
                );


                return;

            }


            /*
             * Page number
             */

            resourcesPagination.appendChild(

                createPaginationButton(
                    page,
                    page,
                    false,
                    page === currentPage
                )

            );

        }
    );


    /*
     * NEXT
     */

    resourcesPagination.appendChild(

        createPaginationButton(
            "Next",
            currentPage + 1,
            currentPage === totalPages
        )

    );


    /*
     * LAST
     */

    resourcesPagination.appendChild(

        createPaginationButton(
            "Last",
            totalPages,
            currentPage === totalPages
        )

    );

}


/* ============================================================
   PAGINATION BUTTON
   ============================================================ */

function createPaginationButton(
    label,
    page,
    disabled = false,
    active = false
) {

    const button =
        document.createElement(
            "button"
        );


    button.type =
        "button";


    button.className =
        "pagination-button";


    /*
     * Active page.
     */

    if (active) {

        button.classList.add(
            "active"
        );

    }


    button.textContent =
        label;


    button.disabled =
        disabled;


    /*
     * Click event.
     */

    button.addEventListener(
        "click",
        () => {

            if (disabled) {

                return;

            }


            currentPage =
                page;


            /*
             * Render new page.
             */

            renderResources();


            /*
             * Scroll to resource section.
             */

            document
                .getElementById(
                    "all-resources"
                )
                ?.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

        }
    );


    return button;

}


/* ============================================================
   PAGINATION RANGE
   ============================================================ */

function getPaginationPages(
    current,
    total
) {

    /*
     * If there are 7 pages or less,
     * show everything.
     *
     * 1 2 3 4 5 6 7
     */

    if (total <= 7) {

        return Array.from(
            {
                length: total
            },
            (_, index) =>
                index + 1
        );

    }


    const pages = [];


    /*
     * First page.
     */

    pages.push(1);


    /*
     * Left ellipsis.
     */

    if (current > 4) {

        pages.push("...");

    }


    /*
     * Pages around current page.
     */

    const start =
        Math.max(
            2,
            current - 1
        );


    const end =
        Math.min(
            total - 1,
            current + 1
        );


    for (
        let page = start;
        page <= end;
        page++
    ) {

        pages.push(page);

    }


    /*
     * Right ellipsis.
     */

    if (current < total - 3) {

        pages.push("...");

    }


    /*
     * Last page.
     */

    pages.push(total);


    return pages;

}


/* ============================================================
   EVENTS
   ============================================================ */

function setupEvents() {

    /*
     * Skill filter.
     */

    filterSkill?.addEventListener(
        "change",
        applyFilters
    );


    /*
     * Content type filter.
     */

    filterContentType?.addEventListener(
        "change",
        applyFilters
    );


    /*
     * Audience filter.
     */

    filterAudience?.addEventListener(
        "change",
        applyFilters
    );


    /*
     * Clear filters.
     */

    clearFiltersButton?.addEventListener(
        "click",
        clearFilters
    );

}


/* ============================================================
   CLEAR FILTERS
   ============================================================ */

function clearFilters() {

    /*
     * Reset selects.
     */

    if (filterSkill) {

        filterSkill.value = "";

    }


    if (filterContentType) {

        filterContentType.value = "";

    }


    if (filterAudience) {

        filterAudience.value = "";

    }


    /*
     * Return to page 1
     * and render everything.
     */

    currentPage = 1;

    applyFilters();

}


/* ============================================================
   TAXONOMY CHECK
   ============================================================ */

function hasTaxonomy(taxonomy, id) {
    if (!Array.isArray(taxonomy)) return false;

    return taxonomy.some(item => Number(item) === Number(id));
}


/* ============================================================
   FEATURED CHECK
   ============================================================ */

function hasFeaturedTaxonomy(resource) {
    if (!Array.isArray(resource.featured)) return false;

    return resource.featured.length > 0;
}   


function getTaxonomyName(taxonomy, id) {
    const option = taxonomy.find(item => Number(item.id) === Number(id));
    return option?.name || "";
}

/* ============================================================
   FIRST TAXONOMY NAME
   ============================================================ */

function getFirstTaxonomyName(
    taxonomy
) {

    if (!Array.isArray(taxonomy)) {

        return "";

    }


    const first =
        taxonomy.find(
            item => {

                return (
                    item &&
                    typeof item === "object" &&
                    item.name
                );

            }
        );


    return first?.name || "";

}


/* ============================================================
   SLUGIFY
   ============================================================ */

function slugify(text) {

    return String(text)

        .normalize("NFD")

        .replace(
            /[\u0300-\u036f]/g,
            ""
        )

        .toLowerCase()

        .trim()

        .replace(
            /[^a-z0-9]+/g,
            "-"
        )

        .replace(
            /^-+|-+$/g,
            "");

}
