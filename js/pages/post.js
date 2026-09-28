const pageTitle = document.querySelector(".page-hero h1");
const postContent = document.querySelector(".post-content");
const postFiledUnder = document.querySelector(".filed-under");
const postDates = document.querySelector(".post-dates");

const authorName = document.querySelector(".written-by-cont a");

const relatedPostList = document.querySelector(".related-post-list");

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

// ============================================================
// RELATED POSTS
// ============================================================

function loadRelatedPosts(posts, currentPost) {

    const relatedPosts = posts
        .filter(post => post.slug !== currentPost.slug)
        .slice(0, 5);


    relatedPostList.innerHTML = relatedPosts
        .map(post => {

            return `
                <article class="related-post-item">

                    <a
                        href="post.html?slug=${encodeURIComponent(post.slug)}"
                    >
                        ${post.title}
                    </a>

                </article>
            `;

        })
        .join("");

}

async function loadPost() {

    if (!slug) {
        console.error("No se encontró el slug del post en la URL.");

        pageTitle.textContent = "Post no encontrado";
        postContent.innerHTML = `
            <p>No se especificó ningún artículo.</p>
        `;

        return;
    }

    try {

        // ========================================================
        // CARGAR JSON
        // ========================================================

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


        const posts = await postsResponse.json();
        const categories = await categoriesResponse.json();


        // ========================================================
        // BUSCAR POST
        // ========================================================

        const post = posts.find(
            post => post.slug === slug
        );


        if (!post) {

            console.error(
                `No se encontró ningún post con slug: ${slug}`
            );

            pageTitle.textContent = "Post no encontrado";

            postContent.innerHTML = `
                <p>El artículo que estás buscando no existe.</p>
            `;

            return;
        }


        // ========================================================
        // TÍTULO
        // ========================================================

        pageTitle.textContent = post.title;


        // ========================================================
        // FILED UNDER
        // ========================================================

        const categoryNames = post.categories
            .map(categoryId => {

                const category = categories.find(
                    category => category.id === categoryId
                );

                return category?.name || "";

            })
            .filter(Boolean);


        postFiledUnder.textContent =
            categoryNames.join(", ");


        // ========================================================
        // POST DATES
        // ========================================================

        const publishedDate =
            new Date(post.date);

        const modifiedDate =
            new Date(post.modified);


        postDates.innerHTML = `
            <p>
                Published: ${publishedDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}
            </p>

            <p>
                Updated: ${modifiedDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}
            </p>
        `;


        // ========================================================
        // CONTENIDO
        // ========================================================

        postContent.innerHTML = post.content;


        // ========================================================
        // TÍTULO DE LA PESTAÑA
        // ========================================================

        document.title = post.title;


        // ========================================================
        // RELATED POSTS
        // ========================================================

        loadRelatedPosts(
            posts,
            post
        );


        console.log(
            "Post cargado:",
            post
        );

    } catch (error) {

        console.error(
            "Error cargando el post:",
            error
        );

        pageTitle.textContent = "Error";

        postContent.innerHTML = `
            <p>No se pudo cargar el artículo.</p>
        `;
    }
}


loadPost();