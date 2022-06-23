<template>
    <div class="main container cv max-w-7xl mx-auto  p-3">
        <h1 class="text-2xl text-center ">ALEKSEJ EREMENKO</h1>
        <h2 class="text-2xl text-center ">Front-end developer</h2>
        <section class="flex gap-5">
            <aside class="cv__aside--left w-1/4">
                <article class="hover:drop-shadow-md">
                    <img src="/src/assets/ava_sq.jpg" width="200" height="auto" alt="Aleksej Eremenko photo"
                        class="rounded">
                </article>

                <article class="hover:drop-shadow-md">
                    <ul>
                        <li>
                            <span><i class="fa-solid fa-house"></i></span>
                            Kharkiv, Ukraine
                        </li>
                        <li>
                            <span><i class="fa-solid fa-mobile-screen-button"></i></span>
                            +380 (97) 337-14-28
                        </li>
                        <li>
                            <span><i class="fa-brands fa-github"></i></span>
                            github.com/aleksej579
                        </li>
                        <li>
                            <span><i class="fa-solid fa-envelope"></i></span>
                            aleksej.eremenko579@gmail.com
                        </li>
                        <li>
                            <span><i class="fa-brands fa-linkedin"></i></span>
                            linkedin.com/in/aleksje579
                        </li>
                    </ul>
                </article>

            </aside>

            <aside class="cv__aside--right w-3/4">
                <article class="hover:drop-shadow-md">
                    <h3>GOAL</h3>
                    <p>Main area of activity - HTML/CSS coding. Also developing SPA in Vue.js.</p>
                </article>

                <article class="hover:drop-shadow-md">
                    <h3>SKILLS & KNOWLEDGE </h3>
                    <p>HTML (BEM-naming), CSS (Sass, Tailwind, SMACSS), Javascript ES6+, Vue, Vite/Gulp, Git, Jira,
                        Figma.
                    </p>
                </article>

                <article class="hover:drop-shadow-md">
                    <h3>WORKING EXPERIENCE</h3>
                    <p>Experience of 3 years in companies “Coralmedia”, “Intechsoft”, “Intertool”, freelance.</p>
                    <ul>
                        <li>Prototyping in Figma.</li>
                        <li>Familiar with Twig, Liquid, templating engines.</li>
                        <li>Writing styles in Css/Sass, frameworks TailwindCSS, Element+, UiKit.</li>
                        <li>Using BEM-naming, SMACSS methodology, Responsive.</li>
                        <li>Automation and build - Vite, Gulp.</li>
                        <li>Javascript programming, ES6+. Working with DOM in jQuery. Simple work with PHP in HTML.</li>
                        <li>SPA development on Vue3 using router, state, translation, editor.</li>
                        <li>Experience in team development in Jira (task, report), Git (GitLab).</li>
                        <li>Working with REST (endpoints Drupal, test Postman) and CRUD (Axios, Express, Postgresql).
                        </li>
                        <li>Using cloud services Firebase (deployment, authentication, database).</li>
                        <li>CMS development on Drupal, Shopify.</li>
                    </ul>
                </article>

                <article class="hover:drop-shadow-md">
                    <h3>SOME OF MY WORK</h3>
                    <p>site: Webdev , source-code: Webdev (Vue Tailwind Firebase)</p>
                    <p>site: Auth , source-code: Auth (Angular Firebase)</p>
                    <p>site: Naturetour , source-code: Naturetour (Markup Ajax Sprites)</p>
                    <p>site: Dogsbomba , source-code: Dogsbomba (UI Php MySQL )</p>
                    <p>site: Coralmedia , Intertoolua (An example of 2 company websites that I worked on)</p>
                </article>

                <article class="hover:drop-shadow-md">
                    <h3>SUMMARY</h3>
                    <p>English: Pre-Intermediate.</p>
                </article>

            </aside>
        </section>

    </div>
</template>

<style>
.cv article {
    @apply bg-white p-4 mb-4;
}

.cv h3 {
    @apply text-teal-500;
}

.cv__aside--left article:first-child {
    @apply flex justify-center items-center;
}

.cv__aside--left li {
    @apply mb-3 flex;
}

.cv__aside--left li span {
    @apply block w-7 text-teal-500 text-center;
}
</style>