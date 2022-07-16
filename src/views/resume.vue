<template>
    <div class="cv max-w-7xl mx-auto drop-shadow-md px-1">
        <section class="cv-header p-5 flex justify-center">
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
                    <p class="text-lg mb-5">My main skill is Markup. I like working with Vue.js, and I'm interested in
                        Javascript programming. Working with graphic
                        editors and prototyping.</p>
                </div>
            </article>
        </section>

        <section>
            <h2 class="text-2xl text-center">Contact info</h2>
            <article class="flex flex-col md:flex-row items-center justify-around">
                <ul class="divide-y divide-slate-400/10 w-max">
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

        <section>
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
        </section>

        <section>
            <article>
                <h2 class="text-2xl text-center">Knowledge</h2>
                <ul class="w-full md:w-max mx-auto">
                    <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded">
                        Programming in Javascript (ES6+), jQuery, basic PHP skills.
                    </li>
                    <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded">
                        SPA development on Vue3, Vite.
                    </li>
                    <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded">
                        HTML/CSS coding, BEM, Sass and TailwindCSS. SMACSS. Responsive.
                    </li>
                    <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded">
                        Some experience with Twig, Liquid templating engines and Gulp.
                    </li>
                    <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded">
                        Teamwork using Jira and Git.
                    </li>
                    <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded">
                        Working with REST and CRUD.
                    </li>
                    <li class="bg-white dark:bg-slate-800 mb-3 p-4 rounded">
                        CMS development on Drupal, Shopify and cloud services Firebase.
                    </li>
                    <li class="bg-white dark:bg-slate-800 p-4 rounded">
                        Prototyping in Figma.
                    </li>
                </ul>
            </article>
        </section>

        <section class="working-experience">
            <h2 class="text-2xl text-center">Working experience</h2>
            <article class="relative">
                <canvas id="canvas"></canvas>
                <div ref="wrapperForExperienceBlock" class="h-max pl-10 md:pl-0">
                    <dl ref="experience_item_1" class="border p-3">
                        <dt class="underline">Front-end developer ( Freelance ) 6+ months.</dt>
                        <dd>Some period of freelance jobs and test cases. Prototyping. Markup on
                            Vue-Vite-Tailwind. Rest
                            and Crud (Axios, Express, PostgreSQL).</dd>
                        <dd class="text-slate-400">Markup, Vue, Vite, Tailwind, REST, CRUD, Express, Firebase, Smacss,
                            Figma.</dd>
                    </dl>
                    <dl ref="experience_item_2" class="border p-3">
                        <dt class="underline">Front-end developer ( experience_item_2 ) 4 months.</dt>
                        <dd>Work on existing company websites. Development of new functionality. Correction of existing
                            bugs. Creating svg in Figma. Teamwork in Git.</dd>
                        <dd class="text-slate-400">Markup, BEM, Scss, Git, Gitlab, Gulp, Php, Figma.</dd>
                    </dl>

                    <dl ref="experience_item_3" class="border p-3">
                        <dt class="underline">junior Shopify developer ( InTechSoft ) 4 months.</dt>
                        <dd>Internship. Learning Shopify eCommerce. Performing Jira training tasks.</dd>
                        <dd class="text-slate-400">Shopify, Liquid, Markup, Git, Jira.</dd>
                    </dl>
                    <dl ref="experience_item_4" class="border p-3">
                        <dt class="underline">junior Front-end developer ( Art-coral ) 2 years.</dt>
                        <dd>CMS Drupal development. Markup. Content management. Prototyping in Figma.</dd>
                        <dd class="text-slate-400">Drupal, Html/Css/Sass, Twig, jQuery, REST, Gulp, Figma, Jira,
                            Photoshop.</dd>
                    </dl>
                </div>
            </article>
        </section>

        <section>
            <article>
                <h2 class="text-2xl text-center">Summary</h2>
                <ul class="w-full md:w-max mx-auto">
                    <li class="mb-3"><span class="font-semibold">Course:</span> SourceIT 'Java and Web technologies'
                    </li>
                    <li class="mb-3"><span class="font-semibold">University:</span> Kharkiv National University of Civil
                        Engineering and Architecture. The Architect.</li>
                    <li class="mb-3"><span class="font-semibold">English:</span> Pre-Intermediate.</li>
                </ul>
            </article>
        </section>

    </div>
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
}

.cv .avatar img {
    border-radius: 25% 75% 58% 42% / 55% 32% 68% 45%;
    transition-duration: 0.3s;
}

.cv :is(dl, dt, dd) {
    margin: revert;
}

.cv article :is(ul, p, td, dt, dd) {
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
