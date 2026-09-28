const POSTS_PER_LOAD = 6;

let posts = [];
let currentIndex = 0;

let categories = [];
let categoriesById = new Map();

let filteredPosts = [];

const postGrid = document.querySelector(".post-grid");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(
    '.search-form input[type="search"]'
);


// ============================================================
// CARGAR JSON
// ============================================================

async function loadPosts() {

    try {

        const postsResponse = await fetch("./posts/posts.json");
        const categoriesResponse = await fetch("./posts/categories.json");


        if (!postsResponse.ok) {
            throw new Error(
                `No se pudo cargar posts.json (${postsResponse.status})`
            );
        }


        if (!categoriesResponse.ok) {
            throw new Error(
                `No se pudo cargar categories.json (${categoriesResponse.status})`
            );
        }


        posts = await postsResponse.json();
        categories = await categoriesResponse.json();


        categoriesById = new Map(
            categories.map(category => [
                category.id,
                category
            ])
        );


        // Al comenzar mostramos todos los posts
        filteredPosts = [...posts];


        // Limpiar contenido original del HTML
        postGrid.innerHTML = "";


        // Cargar los primeros 6
        loadMorePosts();


    } catch (error) {

        console.error("Error cargando los datos:", error);

    }

}


// ============================================================
// CREAR POST
// ============================================================

function createPost(post, index) {

    const article = document.createElement("article");

    article.className = "blog-post";


    // --------------------------------------------------------
    // CATEGORÍAS
    // --------------------------------------------------------

    const categoriesHTML = post.categories
        .map(categoryId => {

            const category = categoriesById.get(categoryId);

            if (!category) {
                return "";
            }

            return `
                <a href="blog.html?category=${category.slug}">
                    ${category.name}
                </a>
            `;

        })
        .filter(Boolean)
        .join(", ");


    // --------------------------------------------------------
    // RUTA DE LA IMAGEN
    // --------------------------------------------------------

    const originalIndex = posts.indexOf(post);

    const coverPath = `./posts/${getPostFolder(originalIndex)}/cover.png`;


    // --------------------------------------------------------
    // ARTÍCULO
    // --------------------------------------------------------

    article.innerHTML = `

        <p class="post-categories">
            ${categoriesHTML}
        </p>

        <h2>
            <a href="post.html?slug=${encodeURIComponent(post.slug)}">
                ${post.title}
            </a>
        </h2>

        <a
            class="post-thumb"
            href="post.html?slug=${encodeURIComponent(post.slug)}"
            style="background-image: url('${coverPath}');"
            aria-label="Read: ${post.title}"
        ></a>

    `;


    return article;
}


// ============================================================
// OBTENER CARPETA DEL POST
// ============================================================

function getPostFolder(index) {

    const number = String(index + 1).padStart(2, "0");

    return `post${number}`;

}


// ============================================================
// OBTENER CATEGORÍAS SELECCIONADAS
// ============================================================

function getSelectedCategories() {

    const checkboxes = document.querySelectorAll(
        'input[data-category-id]:checked'
    );


    return Array.from(checkboxes).map(
        checkbox => Number(
            checkbox.dataset.categoryId
        )
    );

}


// ============================================================
// FILTRAR POSTS
// ============================================================

function filterPosts() {

    const selectedCategories =
        getSelectedCategories();

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();


    // ========================================================
    // FILTRAR POSTS
    // ========================================================

    filteredPosts = posts.filter(post => {


        // ----------------------------------------------------
        // FILTRO POR CATEGORÍA
        // ----------------------------------------------------

        const matchesCategory =
            selectedCategories.length === 0 ||
            selectedCategories.some(
                categoryId =>
                    post.categories.includes(categoryId)
            );


        // ----------------------------------------------------
        // FILTRO POR BÚSQUEDA
        // ----------------------------------------------------

        const title =
            post.title?.toLowerCase() || "";

        const categories =
            post.categories
                ?.map(categoryId => {
                    const category = categoriesById.get(categoryId);
                    return category?.name?.toLowerCase() || "";
                })
                .join(" ") || "";


        const matchesSearch =
            searchTerm === "" ||
            title.includes(searchTerm) ||
            categories.includes(searchTerm);

        // ----------------------------------------------------
        // DEBEN CUMPLIR AMBOS
        // ----------------------------------------------------

        return (
            matchesCategory &&
            matchesSearch
        );

    });


    // ========================================================
    // REINICIAR LISTADO
    // ========================================================

    currentIndex = 0;

    postGrid.innerHTML = "";

    loadMorePosts();

}


// ============================================================
// CARGAR SIGUIENTES POSTS
// ============================================================

function loadMorePosts() {

    const nextIndex = Math.min(
        currentIndex + POSTS_PER_LOAD,
        filteredPosts.length
    );


    for (
        let i = currentIndex;
        i < nextIndex;
        i++
    ) {

        const post = filteredPosts[i];


        const article = createPost(
            post,
            i
        );


        postGrid.appendChild(article);

    }


    currentIndex = nextIndex;


    // --------------------------------------------------------
    // CONTROLAR SCROLL
    // --------------------------------------------------------

    if (currentIndex >= filteredPosts.length) {

        window.removeEventListener(
            "scroll",
            handleScroll
        );

    }

    else {

        window.addEventListener(
            "scroll",
            handleScroll
        );

    }

}


// ============================================================
// DETECTAR SCROLL
// ============================================================

function handleScroll() {

    const scrollPosition =
        window.innerHeight + window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight;


    // Cuando estamos a 500px del final
    if (
        scrollPosition >=
        pageHeight - 500
    ) {

        loadMorePosts();

    }

}


// ============================================================
// EVENTOS DE FILTROS
// ============================================================

function setupFilters() {

    const categoryCheckboxes =
        document.querySelectorAll(
            'input[data-category-id]'
        );


    categoryCheckboxes.forEach(
        checkbox => {

            checkbox.addEventListener(
                "change",
                filterPosts
            );

        }
    );

}
function setupSearch() {

    searchForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            filterPosts();

        }
    );


    searchInput.addEventListener(
        "input",
        filterPosts
    );

}


// ============================================================
// INICIALIZAR
// ============================================================

window.addEventListener(
    "scroll",
    handleScroll
);


setupFilters();
setupSearch();

loadPosts();