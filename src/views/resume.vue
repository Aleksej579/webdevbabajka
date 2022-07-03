<template>
    <div class="cv max-w-7xl mx-auto">
        <h1 class="text-2xl text-center ">ALEKSEJ EREMENKO</h1>

        <section class="flex flex-col md:flex-row gap-5 px-2">
            <aside class="cv__aside--left w-full md:w-1/4">
                <article class="avatar hover:drop-shadow-md dark:bg-slate-800">
                    <img src="/src/assets/ava_sq.jpg" width="200" height="auto" alt="Aleksej Eremenko photo">
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
                            <a href="tel: +380 (97) 337-14-28">+380 (97) 337-14-28</a>
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
                            <a href="mailto:aleksej.eremenko579@gmail.com">aleksej.eremenko579@gmail.com</a>
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
                    <ul class="flex flex-col md:flex-row mx-auto w-max">
                        <li class="flex flex-col items-center p-6 text-center">
                            Markup 75%
                            <meter value="0.75"></meter>
                        </li>
                        <li class="flex flex-col items-center p-6 text-center">
                            Programming 25%
                            <meter value="0.25"></meter>
                        </li>
                    </ul>
                </article>

                <article class="hover:drop-shadow-md dark:bg-slate-800">
                    <h3>KNOWLEDGE</h3>
                    <ul class="list-disc list-inside font-bold">
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
                        <dt class="underline">Front-end developer ( Freelance ) - 6+ months.</dt>
                        <dd>Some period of freelance jobs and test cases. Prototyping. Markup on
                            Vue-Vite-Tailwind. Rest
                            and Crud (Axios, Express, PostgreSQL). Current project - my website webdev|babajka.</dd>
                        <dd class="text-slate-400">Markup, Vue, Vite, Tailwind, REST, CRUD, Express, Firebase, Smacss,
                            Figma.</dd>
                    </dl>
                    <dl>
                        <dt class="underline">Front-end developer ( Intertool ) - 4 months.</dt>
                        <dd>Work on existing company websites. Development of new functionality. Correction of existing
                            bugs. Creating svg in Figma. Teamwork in Git.</dd>
                        <dd class="text-slate-400">Markup, BEM, Scss, Git, Gitlab, Gulp, Php, Figma.</dd>
                    </dl>
                    <dl>
                        <dt class="underline">Shopify developer ( InTechSoft ) - 4 months.</dt>
                        <dd>Internship. Learning Shopify eCommerce. Performing Jira training tasks.</dd>
                        <dd class="text-slate-400">Shopify, Liquid, Markup, Git, Jira.</dd>
                    </dl>
                    <dl>
                        <dt class="underline">Junior front-end developer ( Art-coral ) - 2 years.</dt>
                        <dd>CMS Drupal development. Markup. Content management. Prototyping in Figma.</dd>
                        <dd class="text-slate-400">Drupal, Html/Css/Sass, Twig, jQuery, REST, Gulp, Figma, Jira,
                            Photoshop.</dd>
                    </dl>
                </article>

                <article class="hover:drop-shadow-md dark:bg-slate-800">
                    <h3>SOME OF MY WORK</h3>
                    <ul class="flex flex-col md:flex-row justify-between text-sky-400 underline">
                        <li><a href="https://test-e8a57.web.app">Webdev|babajka</a></li>
                        <li><a href="https://authentication-5bff9.web.app/">Auth</a></li>
                        <li><a href="http://naturetour.eu3.biz/">Naturetour</a></li>
                        <li><a href="http://art-coral.com">Art-coral.com</a></li>
                        <li><a href="https://intertool.ua/">Intertoolua.ua</a></li>
                    </ul>
                </article>

                <article class="hover:drop-shadow-md dark:bg-slate-800">
                    <h3>SUMMARY</h3>
                    <ul>
                        <li>Course: SourceIT 'Java and Web technologies'</li>
                        <li>University: Kharkiv National University of Civil Engineering and Architecture</li>
                        <li>English: Pre-Intermediate.</li>
                    </ul>
                </article>

                <a href="/Aleksej-Eremenko--Frontend.pdf" download
                    class="border rounded border-teal-500 text-teal-500 p-1 hover:text-white dark:hover:text-slate-800 hover:bg-teal-500">
                    Download resume PDF
                </a>

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
    border-radius: 25% 75% 58% 42% / 55% 32% 68% 45%;
    transition-duration: 0.3s;

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

meter,
meter::-webkit-meter-bar,
meter::-webkit-meter-optimum-value,
meter::-webkit-meter-suboptimum-value,
meter::-webkit-meter-even-less-good-value,
meter::-webkit-meter-inner-element {
    @apply rounded-none border-none w-full h-2;
}
</style>
