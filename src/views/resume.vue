<template>
    <section class="cv p-5 flex justify-center drop-shadow-md mb-10">
        <article class="flex flex-col md:flex-row items-center gap-6 w-full md:w-2/3">
            <figure class="avatar p-4 w-full md:w-1/3">
                <img class="mx-auto" src="/src/assets/ava_sq.jpg" width="250" height="auto"
                    alt="Aleksej Eremenko photo">
                <figcaption></figcaption>
            </figure>
            <div class="w-full md:w-2/3">
                <p class="text-6xl mb-5 text-center md:text-left">Hello</p>
                <p class="text-2xl mb-5">Let me introduce myself</p>
                <p class="text-lg mb-5">My name is <span class="font-extrabold">Aleksej Eremenko</span> I am a
                    <mark>Front-end developer</mark>. My main area of activity is the development of the interfaces
                    of websites and applications.
                </p>
                <p class="text-lg mb-5">I like working with Vue.js, and I'm interested in
                    Javascript programming. Working with graphic
                    editors and prototyping.</p>
            </div>
        </article>
    </section>

    <section class="cv main-skill mb-10">
        <article>
            <h2 class="text-2xl text-center">Knowledge</h2>
            <ul class="text-lg w-full md:w-max mx-auto">
                <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded hover:drop-shadow-md">
                    Client-side development for a web application
                </li>
                <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded hover:drop-shadow-md">
                    I create <strong>responsive</strong> web design with <strong>semantic</strong> markup.
                </li>
                <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded hover:drop-shadow-md">
                    Using <strong>BEM</strong>-naming. Familiar with <strong>Twig</strong>, <strong>Liquid</strong>.
                </li>
                <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded hover:drop-shadow-md">
                    Can work with <strong>Sass</strong> preprocessor and <strong>Smacss</strong> architecture.
                </li>
                <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded hover:drop-shadow-md">
                    Used css libraries like: <strong>TailwindCSS</strong>, <strong>ElementUI+</strong>,
                    <strong>UiKit</strong> and some other.
                </li>
                <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded hover:drop-shadow-md">
                    Programming in <strong>Javascript</strong> (ES6+), can work with <strong>jQuery</strong> and have
                    basic <strong>PHP</strong> skills.
                </li>
                <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded hover:drop-shadow-md">
                    In SPA development I prefer to use <strong>Vue.js</strong>.
                </li>
                <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded hover:drop-shadow-md">
                    Using build tools <strong>Vite.js</strong> and <strong>Gulp.js</strong>. Some experience with
                    <strong>Webpack.js</strong>.
                </li>
                <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded hover:drop-shadow-md">
                    I use <strong>Git</strong> and have worked with <strong>Jira</strong>.
                </li>
                <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded hover:drop-shadow-md">
                    CMS development on <strong>Drupal</strong>, <strong>Shopify</strong> and cloud services
                    <strong>Firebase</strong>.
                </li>
                <li class="bg-white dark:bg-slate-800 p-4 rounded hover:drop-shadow-md">
                    Creating a prototype in <strong>Figma</strong>. Working with raster and vector graphics and 3D
                    modeling.
                </li>
            </ul>
        </article>
    </section>


    <!-- <section class="cv skills mb-10">
        <h2 class="text-2xl text-center">Skills</h2>
        <article>
            <ul class="flex flex-col md:flex-row mx-auto w-max">
                <li class="flex flex-col items-center p-6 text-center">
                    Markup 65%
                    <meter value="0.75"></meter>
                </li>
                <li class="flex flex-col items-center p-6 text-center">
                    Programming 35%
                    <meter value="0.25"></meter>
                </li>
            </ul>
        </article>
    </section> -->


    <section class="cv working-experience drop-shadow-md mb-10">
        <h2 class="text-2xl text-center">Working experience</h2>
        <article class="relative">
            <canvas id="canvas"></canvas>
            <div ref="wrapperForExperienceBlock" class="h-max pl-10 md:pl-0 text-lg">
                <dl ref="experience_item_1" class="border p-3 dark:bg-slate-800 dark:border-slate-800">
                    <dt class="underline">Front-end developer ( <b>Freelance</b> ) 6+ months.</dt>
                    <dd>Freelance and pet projects. Prototyping.</dd>
                    <dd class="text-slate-400">Markup, Vue, Vite, Tailwind, REST, CRUD, Express, Firebase, Smacss,
                        Figma.</dd>
                </dl>
                <dl ref="experience_item_2" class="border p-3 dark:bg-slate-800 dark:border-slate-800">
                    <dt class="underline">Front-end developer ( <b>Intertool</b> ) 4 months.</dt>
                    <dd>Improving existing sites. Redesigning existing CSS, replacing graphics icons with SVG. Layout of
                        new pages. Adapting for mobile devices. Development of new functionality such as a quick order
                        basket. Simple work with PHP in Html of e.g. display a list of products. Working with Figma.
                        Teamwork in Git.</dd>
                    <dd class="text-slate-400">Markup, BEM, Scss, Git, Gitlab, Gulp, Php, Figma.</dd>
                </dl>

                <dl ref="experience_item_3" class="border p-3 dark:bg-slate-800 dark:border-slate-800">
                    <dt class="underline">junior Shopify developer ( <b>InTechSoft</b> ) 4 months.</dt>
                    <dd>Internship. Learning Shopify eCommerce. Working with Jira. Creating and setting up the store.
                        Developing new functionality for it on Liquid. Working with the project manager - creating
                        reports and a weekly report to the supervisor with a demonstration of the work.</dd>
                    <dd class="text-slate-400">Shopify, Liquid, Markup, Git, Jira.</dd>
                </dl>
                <dl ref="experience_item_4" class="border p-3 dark:bg-slate-800 dark:border-slate-800">
                    <dt class="underline">junior Front-end developer ( <b>Art-coral</b> ) 2 years.</dt>
                    <dd>Drupal development. Markup. Working with REST. Content management. Prototyping in Figma. Manual
                        testing of a mobile app.</dd>
                    <dd class="text-slate-400">Drupal, Html/Css/Sass, Twig, jQuery, REST, Gulp, Figma, Jira,
                        Photoshop.</dd>
                </dl>
            </div>
        </article>
    </section>

    <section class="cv drop-shadow-md mb-10">
        <h2 class="text-2xl text-center">Contact info</h2>
        <article class="flex flex-col md:flex-row items-center justify-around">
            <ul class="divide-y divide-slate-400/10 w-max text-lg">
                <li class="py-3 flex flex-col md:flex-row items-center md:items-start">
                    <span class="block text-teal-500 mr-2 w-7 text-center">
                        <i class="fa-solid fa-house"></i>
                    </span>
                    Kharkiv, Ukraine
                </li>
                <li class="py-3 flex flex-col md:flex-row items-center md:items-start">
                    <span class="block text-teal-500 mr-2 w-7 text-center">
                        <i class="fa-solid fa-mobile-screen-button"></i>
                    </span>
                    <a href="tel: +380 (97) 337-14-28">+380 (97) 337-14-28</a>
                </li>
                <li class="py-3 flex flex-col md:flex-row items-center md:items-start">
                    <span class="block text-teal-500 mr-2 w-7 text-center">
                        <i class="fa-brands fa-github"></i>
                    </span>
                    <a href="https://github.com/aleksej579">github.com/aleksej579</a>
                </li>
                <li class="py-3 flex flex-col md:flex-row items-center md:items-start">
                    <span class="block text-teal-500 mr-2 w-7 text-center">
                        <i class="fa-solid fa-envelope"></i>
                    </span>
                    <a href="mailto:aleksej.eremenko579@gmail.com">aleksej.eremenko579@gmail.com</a>
                </li>
                <li class="py-3 flex flex-col md:flex-row items-center md:items-start">
                    <span class="block text-teal-500 mr-2 w-7 text-center">
                        <i class="fa-brands fa-linkedin"></i>
                    </span>
                    <a href="https://www.linkedin.com/in/aleksej579/">linkedin.com/in/aleksje579</a>
                </li>
            </ul>
            <a href="/Aleksej-Eremenko--Frontend.pdf" download
                class="border rounded border-teal-500 text-teal-500 p-1 hover:text-white dark:hover:text-slate-800 hover:bg-teal-500">
                Download Resume
            </a>
        </article>
    </section>

    <section class="cv drop-shadow-md mb-10">
        <article>
            <h2 class="text-2xl text-center">Summary</h2>
            <ul class="w-full md:w-max mx-auto text-lg">
                <li class="mb-3">
                    <span class="font-semibold">Self-Study: </span>
                    <a href="https://www.freecodecamp.org/aleksej579" target="_blank" class="underline">Freecodecamp
                    </a>,
                    <a href="https://ru.hexlet.io/u/aleksej579" target="_blank" class="underline">Hexlet </a>,
                    <a href="https://www.sololearn.com/profile/16638599" target="_blank" class="underline">Sololearn
                    </a>,
                    <a href="https://www.codewars.com/users/Aleksej579" target="_blank" class="underline">Codewars </a>,
                    w3schools,
                    learn_javascript, etc.
                </li>
                <li class="mb-3"><span class="font-semibold">Course:</span> SourceIT 'Java and Web technologies'
                </li>
                <li class="mb-3"><span class="font-semibold">University:</span> Kharkiv National University of Civil
                    Engineering and Architecture. The Architect.</li>
                <li class="mb-3"><span class="font-semibold">English:</span> Pre-Intermediate.</li>
            </ul>
        </article>
    </section>
</template>

<script>
export default {
    methods: {
        drawPixi() {
            var canvas = document.getElementById('canvas');
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');

                let height_1 = this.$refs.experience_item_1.getBoundingClientRect().height;
                let height_2 = this.$refs.experience_item_2.getBoundingClientRect().height;
                let height_3 = this.$refs.experience_item_3.getBoundingClientRect().height;
                let height_4 = this.$refs.experience_item_4.getBoundingClientRect().height;

                canvas.width = 10;
                canvas.height = height_1 + height_2 + height_3 + height_4 + 100;

                ctx.beginPath();
                ctx.strokeStyle = '#00c5a7';
                ctx.moveTo(5, 0);
                ctx.lineTo(5, height_1 + height_2 + height_3 + height_4 + 50);
                ctx.stroke();

                ctx.fillStyle = "#00c5a7";

                ctx.fillRect(0, height_1 / 2 - 8, 10, 10);
                ctx.fillRect(0, height_1 + (height_2 / 2), 10, 10);
                ctx.fillRect(0, height_1 + height_2 + (height_3 / 2) + 32, 10, 10);
                ctx.fillRect(0, height_1 + height_2 + height_3 + + (height_4 / 2) + 32, 10, 10);
            }
        },
    },
    mounted() {
        this.drawPixi()
    },
}
</script>

<style>
.main-skill li {
    /* font-family: 'Signika Negative', sans-serif;
    @apply not-italic font-light; */
}

.main-skill li strong {
    @apply font-extrabold;
}

.working-experience {
    overflow: hidden;
}

#canvas {
    position: absolute;
}

@media (min-width: 768px) {
    #canvas {
        left: 50%;
        transform: translateX(-50%);
    }

    dl:nth-child(odd) {
        width: 45%;
        transform: translateX(120%);
    }

    dl:nth-child(even) {
        width: 45%;
    }
}

dl {
    height: auto;
    @apply bg-white;
}

.cv .avatar img {
    border-radius: 25% 75% 58% 42% / 55% 32% 68% 45%;
    transition-duration: 0.3s;
}

.cv :is(dl, dt, dd) {
    margin: revert;
    /* font-family: 'Signika Negative', sans-serif;
    @apply not-italic font-light bg-white; */
}

/* .cv article :is(ul, p, td, dt, dd) { */
.cv article :is(p) {
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
