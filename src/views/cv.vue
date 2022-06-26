<template>
    <div class="main cv max-w-7xl mx-auto">
        <h1 class="text-2xl text-center ">ALEKSEJ EREMENKO</h1>
        <section class="flex flex-col md:flex-row gap-5 px-2">
            <aside class="cv__aside--left w-full md:w-1/4">
                <article class="avatar hover:drop-shadow-md dark:bg-slate-800">
                    <img src="/src/assets/ava_sq.jpg" width="200" height="auto" alt="Aleksej Eremenko photo"
                        class="rounded">
                </article>

                <article class="contact-info hover:drop-shadow-md dark:bg-slate-800 overflow-auto">
                    <ul class="divide-y divide-slate-400/10">
                        <li class="flex-col md:flex-row items-center md:items-start">
                            <span class="w-7 text-center">
                                <i class="fa-solid fa-user"></i>
                            </span>
                            Front-end developer
                        </li>
                        <li class="flex-col md:flex-row items-center md:items-start">
                            <span class="w-7 text-center">
                                <i class="fa-solid fa-house"></i>
                            </span>
                            Kharkiv, Ukraine
                        </li>
                        <li class="flex-col md:flex-row items-center md:items-start">
                            <span class="w-7 text-center">
                                <i class="fa-solid fa-mobile-screen-button"></i>
                            </span>
                            +380 (97) 337-14-28
                        </li>
                        <li class="flex-col md:flex-row items-center md:items-start">
                            <span class="w-7 text-center">
                                <i class="fa-brands fa-github"></i>
                            </span>
                            <a href="https://github.com/aleksej579">github.com/aleksej579</a>
                        </li>
                        <li class="flex-col md:flex-row items-center md:items-start">
                            <span class="w-7 text-center">
                                <i class="fa-solid fa-envelope"></i>
                            </span>
                            aleksej.eremenko579@gmail.com
                        </li>
                        <li class="flex-col md:flex-row items-center md:items-start">
                            <span class="w-7 text-center">
                                <i class="fa-brands fa-linkedin"></i>
                            </span>
                            <a href="https://www.linkedin.com/in/aleksej579/">linkedin.com/in/aleksje579</a>
                        </li>
                    </ul>
                </article>
            </aside>

            <aside class="cv__aside--right w-full md:w-3/4">
                <article class="hover:drop-shadow-md dark:bg-slate-800">
                    <h3>SKILLS</h3>
                    <table class="mx-auto">
                        <tbody>
                            <tr class="flex">
                                <td class="flex flex-col items-center p-6">
                                    Markup 75%
                                    <meter value="0.75"></meter>
                                </td>
                                <td class="flex flex-col items-center p-6">
                                    Programming 25%
                                    <meter value="0.25"></meter>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </article>

                <article class="hover:drop-shadow-md dark:bg-slate-800">
                    <h3>KNOWLEDGE </h3>
                    <ul class="list-disc list-inside">
                        <li>Programming in Javascript (ES6+), jQuery, basic PHP skills.</li>
                        <li>SPA development on Vue3, Vite.</li>
                        <li>HTML/CSS coding, BEM, Sass and TailwindCSS. SMACSS. Responsive.</li>
                        <li>Some experience with Twig, Liquid templating engines and Gulp.</li>
                        <li>Teamwork using Jira and Git.</li>
                        <li>Working with REST and CRUD.</li>
                        <li>CMS development on Drupal, Shopify and cloud services Firebase.</li>
                        <li>Prototyping in Figma.</li>
                    </ul>
                </article>

                <article class="hover:drop-shadow-md dark:bg-slate-800">
                    <h3>WORKING EXPERIENCE</h3>
                    <dl>
                        <dt>Front-end developer ( Freelance ) - 6+ months.</dt>
                        <dd>Some period of freelance jobs and test cases. Prototyping. Markup on
                            Vue-Vite-Tailwind. Rest
                            and Crud (Axios, Express, PostgreSQL). Current project - my website webdev|babajka.</dd>
                        <dd class="text-slate-400">Markup, Vue, Vite, Tailwind, REST, CRUD, Express, Firebase, Smacss,
                            Figma.</dd>
                    </dl>
                    <dl>
                        <dt>Front-end developer ( Intertool ) - 4 months.</dt>
                        <dd>Work on existing company websites. Development of new functionality. Correction of existing
                            bugs. Creating svg in Figma. Teamwork in Git.</dd>
                        <dd class="text-slate-400">Markup, BEM, Scss, Git, Gitlab, Gulp, Php, Figma.</dd>
                    </dl>
                    <dl>
                        <dt>Shopify developer ( InTechSoft ) - 4 months.</dt>
                        <dd>Internship. Learning Shopify eCommerce. Performing Jira training tasks.</dd>
                        <dd class="text-slate-400">Shopify, Liquid, Markup, Git, Jira.</dd>
                    </dl>
                    <dl>
                        <dt>Junior front-end developer ( Art-coral ) - 2 years.</dt>
                        <dd>CMS Drupal development. Markup. Content management. Prototyping in Figma.</dd>
                        <dd class="text-slate-400">Drupal, Html/Css/Sass, Twig, jQuery, REST, Gulp, Figma, Jira,
                            Photoshop.</dd>
                    </dl>
                </article>

                <article class="hover:drop-shadow-md dark:bg-slate-800">
                    <h3>SOME OF MY WORK</h3>
                    <ul class="flex flex-col md:flex-row justify-between">
                        <li><a href="https://test-e8a57.web.app">Webdev|babajka</a></li>
                        <li><a href="https://authentication-5bff9.web.app/">Auth</a></li>
                        <li><a href="http://naturetour.eu3.biz/">Naturetour</a></li>
                        <li><a href="http://art-coral.com">Art-coral.com</a></li>
                        <li><a href="https://intertool.ua/">Intertoolua.ua</a></li>
                    </ul>
                </article>

                <article class="hover:drop-shadow-md dark:bg-slate-800">
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
    @apply text-teal-500 text-center border-b border-slate-400/10 mb-2 font-bold;
}

.cv__aside--left article:first-child {
    @apply flex justify-center items-center;
}

.cv .avatar img {
    transition-duration: 0.3s;
}

.cv .avatar:hover img {
    transform: scale(1.1) rotate(-5deg);
}

.cv__aside--left li {
    @apply py-3 flex;
}

.cv__aside--left li span {
    @apply block text-teal-500 mr-2;
}

.cv :is(dl, dt, dd) {
    margin: revert;
}

.cv article:not(.contact-info) :is(ul, p, td, dt, dd) {
    font-family: "dm", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    font-style: italic;
}
</style>