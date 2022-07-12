<template>
    <div class="roadmap max-w-7xl mx-auto px-2 min-h-screen">

        <h2>ROADMAP</h2>
        <fieldset class="w-full flex flex-col md:flex-row gap-2 md:gap-5 items-end md:items-center md:justify-end mb-5">
            <span>Show: </span>
            <label for="html" class="md:w-auto">
                Html
                <input type="checkbox" id='html' v-model="detailsHTML" />
            </label>

            <label for="css" class="md:w-auto">
                Css
                <input type="checkbox" id='css' v-model="detailsCSS">
            </label>

            <label for="js" class="md:w-auto">
                JavaScript
                <input type="checkbox" id='js' v-model="detailsJS">
            </label>

            <label for="fonts" class="md:w-auto">
                Fonts
                <input type="checkbox" id='fonts' v-model="detailsFONTS">
            </label>

            <label for="other" class="md:w-auto">
                Other
                <input type="checkbox" id='other' v-model="detailsOTHER">
            </label>

            <button @click="collapseAll"
                class="border rounded border-teal-500 px-1 cursor-pointer text-white hover:text-teal-500 dark:hover:text-teal-500 bg-teal-500 hover:bg-inherit">
                Collapse All Card
            </button>
        </fieldset>

        <section class="mb-1 flex flex-wrap justify-center">
            <details v-if="detailsHTML" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    <span class="tooltip" tooltip="HyperText Markup Language">
                        <strong>HTML</strong>
                    </span> must have:
                </summary>
                <ul class="list-disc list-inside">
                    <li>semantics</li>
                    <li>validation on the <a href="https://validator.w3.org" target="_blank">validator.w3.org</a></li>
                    <li>microdata on the <a href="https://json-ld.org" target="_blank">json-ld.org</a></li>
                    <li>BEM-naming</li>
                    <li>use svg, and canvas</li>
                </ul>
            </details>

            <details v-if="detailsHTML" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    <span class="tooltip" tooltip="Block Element Modifier">
                        <strong>BEM</strong>
                    </span> naming
                </summary>
                <a href="https://9elements.com/bem-cheat-sheet/" target="_blank">Bem-cheat-sheet</a>
                <ul>
                    <li>Block-name</li>
                    <li>Container or Wrapper</li>
                    <li>Block-name__Element-name</li>
                    <li>Block-name__Element-name--Is-modifier</li>
                </ul>
            </details>

            <details v-if="detailsCSS" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    <span class="tooltip" tooltip="Cascading Style Sheets">
                        <strong>CSS3</strong>
                    </span>
                    must be:
                </summary>
                <ul class="list-disc list-inside">
                    <li>cross browser ( Ch. Ff. E. IE. S. O )
                        <a href="https://caniuse.com" target="_blank">caniuse.com</a>
                    </li>
                    <li>responsive @media( 320-768-1280-1920 ), Grid, Flex, %,</li>
                    <li>pixel-perfect</li>
                    <li>and must have animation @keyframes</li>
                </ul>
            </details>

            <details v-if="detailsCSS" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    <strong>SASS</strong> preprocessor
                </summary>
                <a href="https://sass-lang.com" target="_blank">SASS</a>
                <ul class="list-disc list-inside">
                    <li>Variables</li>
                    <li>Nesting</li>
                    <li>Partials</li>
                    <li>Modules</li>
                    <li>Mixins</li>
                    <li>Extend/Inheritance</li>
                    <li>Operators</li>
                    <li>Functions</li>
                </ul>
            </details>

            <details v-if="detailsCSS" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    <span class="tooltip" tooltip="Scalable and Modular Architecture for CSS">
                        <strong>SMACSS</strong>
                    </span> methodology
                </summary>
                <a href="http://smacss.com/" target="_blank">SMACSS</a>
                <ul class="list-disc list-inside">
                    <li>Base</li>
                    <li>Layout</li>
                    <li>Modules</li>
                    <li>State</li>
                    <li>Theme</li>
                </ul>
            </details>

            <details v-if="detailsCSS" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Framework-CSS
                </summary>
                <ul>
                    <li><a href="https://tailwindcss.com" target="_blank">TailwindCSS</a></li>
                    <li><a href="https://getbootstrap.com/" target="_blank">Bootstrap</a></li>
                    <li><a href="https://mdbootstrap.com/" target="_blank">MDbootstrap</a></li>
                    <li><a href="https://mui.com/" target="_blank">MUI</a></li>
                    <li><a href="https://material.angular.io/" target="_blank">Angular Material</a></li>
                    <li><a href="https://element-plus.org/" target="_blank">ElementUI+</a></li>
                    <li><a href="https://bulma.io/" target="_blank">Bulma</a></li>
                </ul>
            </details>

            <details v-if="detailsFONTS" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Fonts & Icons
                </summary>
                <ul>
                    <li><a href="https://fontawesome.com/" target="_blank">Fontawesome</a></li>
                    <li><a href="https://fonts.google.com/" target="_blank">Google fonts</a></li>
                    <li><a href="https://css.gg/" target="_blank">Css Gg</a></li>
                    <li><a href="https://boxicons.com/" target="_blank">Boxicons</a></li>
                </ul>
            </details>

            <details v-if="detailsHTML" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    HTML Component
                </summary>
                <ul>
                    <li><a href="https://lit.dev/" target="_blank">Lit</a></li>
                    <li><a href="https://stenciljs.com/" target="_blank">Stencil</a></li>
                </ul>
            </details>

            <details v-if="detailsHTML" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Template engine & Markdown
                </summary>
                <ul>
                    <li><a href="https://www.markdownguide.org/" target="_blank">Markdown</a></li>
                    <li><a href="https://pugjs.org/api/getting-started.html" target="_blank">Pug</a></li>
                    <li><a href="https://twig.symfony.com/" target="_blank">Twig</a></li>
                    <li><a href="https://www.shopify.ca/partners/shopify-cheat-sheet" target="_blank">Liquid</a></li>
                </ul>
            </details>

            <details v-if="detailsJS" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    <strong>JavaScript</strong> ES6+
                </summary>
                <ul>
                    <li>Data structures</li>
                    <li>Algorithm</li>
                    <li>OOP</li>
                    <li>SOLID</li>
                    <li>GRASP</li>
                    <li>GOF</li>
                    <li>KISS</li>
                    <li>DRY</li>
                    <li>YAGNI</li>
                </ul>
            </details>

            <details v-if="detailsJS" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    JS-Library
                </summary>
                <ul>
                    <li><a href="https://axios-http.com/" target="_blank">Axios</a></li>
                    <li><a href="https://splidejs.com/integration/vue-splide/" target="_blank">Splide</a></li>
                    <li><a href="https://nodemon.io/" target="_blank">Nodemon</a></li>
                    <li><a href="https://auth0.com/" target="_blank">Auth0</a></li>
                    <li><a href="https://animejs.com/" target="_blank">Animejs</a></li>
                    <li><a href="https://greensock.com/" target="_blank">Greensock</a></li>
                    <li><a href="https://animxyz.com/" target="_blank">Animxyz</a></li>
                    <li><a href="https://www.theatrejs.com/" target="_blank">Theatrejs</a></li>
                    <li><a href="https://party.js.org/" target="_blank">Party</a></li>
                    <li><a href="https://airbnb.io/lottie/#/" target="_blank">Lottie</a></li>
                    <li><a href="https://anijs.github.io/" target="_blank">Anijs</a></li>
                    <li><a href="https://popmotion.io/" target="_blank">Popmotion</a></li>
                    <li><a href="https://mojs.github.io/" target="_blank">Mojs</a></li>
                </ul>
            </details>

            <details v-if="detailsJS" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Framework-JS-UI
                </summary>
                <ul>
                    <li>
                        <a href="https://vuejs.org/" target="_blank">Vue.js</a>
                        <ul class="list-disc list-inside">
                            <li><a href="https://pinia.vuejs.org" target="_blank">Pinia</a></li>
                            <li><a href="https://router.vuejs.org/" target="_blank">Router</a></li>
                            <li><a href="https://vueup.github.io/vue-quill/" target="_blank">Vue-quill</a></li>
                            <li><a href="https://v3.vue-final-modal.org/" target="_blank">Vue-final-modal</a></li>
                            <li><a href="https://vue-i18n.intlify.dev/" target="_blank">Vue-i18n</a></li>
                            <li><a href="https://www.vuestorefront.io/" target="_blank">Vuestorefront</a></li>
                        </ul>
                    </li>
                    <li><a href="https://reactjs.org/" target="_blank">React.js</a></li>
                    <li><a href="https://angular.io/" target="_blank">Angular</a></li>
                    <li><a href="https://svelte.dev/" target="_blank">Svelte</a></li>
                </ul>
            </details>

            <details v-if="detailsJS" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Framework-JS-Test
                </summary>
                <ul>
                    <li><a href="https://jestjs.io/" target="_blank">Jest</a></li>
                    <li><a href="https://www.cypress.io/" target="_blank">Cypress</a></li>
                </ul>
            </details>

            <details v-if="detailsJS" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Framework-JS-Build
                </summary>
                <ul>
                    <li><a href="https://vitejs.dev/" target="_blank">Vite</a></li>
                    <li><a href="https://gulpjs.com/" target="_blank">Gulp</a></li>
                    <li><a href="https://webpack.js.org/" target="_blank">Webpack</a></li>
                </ul>
            </details>

            <details v-if="detailsJS" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Framework-JS-Backend
                </summary>
                <ul>
                    <li><a href="https://nodejs.org/api/" target="_blank">Nodejs</a></li>
                    <li><a href="https://expressjs.com/" target="_blank">Express.js</a></li>
                    <li><a href="https://nestjs.com/" target="_blank">Nestjs</a></li>
                    <li><a href="https://rxjs.dev/" target="_blank">RxJS</a></li>
                    <li><a href="https://nativescript.org/" target="_blank">Nativescript</a></li>
                    <li><a href="https://graphql.org/" target="_blank">Graphql</a></li>
                    <li>REST</li>
                    <li>PostgreSQL</li>
                    <li class="tooltip" tooltip="Create, Read, Update, Delete">CRUD</li>
                </ul>
            </details>

            <details v-if="detailsOTHER" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    <span class="tooltip" tooltip="Version Control System">
                        <strong>VCS</strong>
                    </span>
                </summary>
                <a href="https://git-scm.com/book/ru/v2" target="_blank">GIT</a>
                <ul class="list-disc list-inside">
                    <li><a href="https://github.com" target="_blank">GitHub</a></li>
                    <li><a href="https://about.gitlab.com/" target="_blank">GitLab</a></li>
                    <li><a href="https://bitbucket.org/" target="_blank">Bitbucket</a></li>
                    <li><a href="https://learngitbranching.js.org/" target="_blank">Learngitbranching</a></li>
                </ul>
            </details>

            <details v-if="detailsOTHER" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Cloud platforms
                </summary>
                <ul>
                    <li><a href="https://firebase.google.com/" target="_blank">Firebase</a></li>
                    <li><a href="https://console.cloud.google.com/" target="_blank">Google cloud</a></li>
                    <li><a href="https://cdnjs.com/" target="_blank">Cdnjs</a></li>
                    <li><a href="https://www.netlify.com/" target="_blank">Netlify</a></li>
                    <li><a href="https://www.prisma.io/" target="_blank">Prisma</a></li>
                    <li><a href="https://vercel.com/" target="_blank">Vercel</a></li>
                    <li><a href="https://web.postman.co/" target="_blank">Postman</a></li>
                    <li><a href="https://codepen.io/" target="_blank">Codepen</a></li>
                    <li><a href="https://www.figma.com/" target="_blank">Figma</a></li>
                    <li><a href="https://www.canva.com/" target="_blank">Canva</a></li>
                    <li><a href="https://app.spline.design/" target="_blank">Spline</a></li>
                    <li><a href="https://app.vectary.com/" target="_blank">Vectary</a></li>
                    <li><a href="https://miro.com/" target="_blank">Miro</a></li>
                    <li><a href="https://www.taiga.io/" target="_blank">Taiga</a></li>
                </ul>
            </details>

            <details v-if="detailsOTHER" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Online tools
                </summary>
                <ul>
                    <li><a href="https://codebeautify.org/" target="_blank">Codebeautify</a></li>
                    <li><a href="http://autoprefixer.github.io/" target="_blank">Autoprefixer</a></li>
                    <li><a href="https://www.base64-image.de/" target="_blank">Base64</a></li>
                    <li><a href="https://squoosh.app/" target="_blank">Squoosh</a></li>
                    <li><a href="https://poet.so/" target="_blank">Poet</a></li>
                    <li><a href="https://carbon.now.sh/" target="_blank">Carbon</a></li>
                    <li><a href="https://unsplash.com/developers" target="_blank">Unsplash</a></li>
                    <li><a href="https://getwaves.io/" target="_blank">Getwaves</a></li>
                    <li><a href="https://neumorphism.io/#e0e0e0" target="_blank">Neumorphism</a></li>
                    <li><a href="http://tridiv.com/" target="_blank">Tridiv</a></li>
                    <li><a href="https://9elements.github.io/fancy-border-radius/#55.30.30.30--."
                            target="_blank">Fancy-border-radius</a></li>
                    <li><a href="https://css.glass/" target="_blank">Glass</a></li>
                    <li><a href="https://validator.w3.org/" target="_blank">Validator</a></li>
                    <li><a href="https://search.google.com/test/rich-results" target="_blank">Rich-results</a></li>
                    <li><a href="https://readme.so/" target="_blank">Readme</a></li>
                    <li><a href="https://regexr.com/" target="_blank">Regexr</a></li>
                </ul>
            </details>

            <details v-if="detailsOTHER" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    E-commerce Shopify
                </summary>
                <ul>
                    <li><a href="https://www.shopify.com/" target="_blank">Shopify.com</a></li>
                    <li><a href="https://shopify.dev/" target="_blank">Shopify.dev</a></li>
                    <li><a href="https://www.shopify.com/partners" target="_blank">Shopify.com/partners</a></li>
                </ul>
            </details>

            <details v-if="detailsOTHER" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Topical sites
                </summary>
                <ul>
                    <li><a href="https://www.freecodecamp.org/" target="_blank">Freecodecamp</a></li>
                    <li><a href="https://learn.javascript.ru/" target="_blank">learn.javascript.ru</a></li>
                    <li><a href="https://www.w3schools.com/" target="_blank">W3schools</a></li>
                    <li><a href="https://css-tricks.com/" target="_blank">Css-tricks</a></li>
                    <li><a href="https://scrimba.com/" target="_blank">Scrimba</a></li>
                </ul>
            </details>

            <details v-if="detailsOTHER" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Prototyping
                </summary>
                <ul class="list-disc list-inside">
                    <li>Wireframe</li>
                    <li>Prototype</li>
                    <li>Mockup</li>
                </ul>
            </details>

            <details v-if="detailsOTHER" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    English
                </summary>
                <ul class="list-disc list-inside">
                    <li><a href="https://www.deepl.com/ru/translator" target="_blank">Deepl</a></li>
                    <li><a href="https://grammarway.com/ru" target="_blank">Grammarway</a></li>
                    <li><a href="https://www.native-english.ru/" target="_blank">Native-english</a></li>
                    <li><a href="https://www.cambly.com/" target="_blank">Camblycambly</a></li>
                </ul>
            </details>

            <details v-if="detailsJS" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    The Algorithm
                </summary>
                <ul class="list-disc list-inside">
                    <li>Linear</li>
                    <li>Choices</li>
                    <li>Cycle</li>
                </ul>
            </details>

            <details v-if="detailsOTHER" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Block diagram
                </summary>
                <ul class="list-disc list-inside">
                    <li>Терминатор</li>
                    <li>Процес</li>
                    <li>Данные</li>
                    <li>Предопределенный процес</li>
                    <li>Решение</li>
                    <li>Цикл</li>
                    <li>Соединитель</li>
                    <li>Коментарий</li>
                    <li>Паралельные действия</li>
                </ul>
            </details>

            <details v-if="detailsOTHER" class="w-full md:w-auto dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    <span class="tooltip" tooltip="Unified Modeling Language">
                        <strong>UML</strong>
                    </span>
                </summary>
                <ul class="list-square list-inside">
                    <li>Структурные
                        <ul class="list-disc list-inside ml-6">
                            <li>классов</li>
                            <li>компонентов</li>
                            <li>композитной структуры</li>
                            <li>кооперации</li>
                            <li>развёртывания</li>
                            <li>объектов</li>
                            <li>пакетов</li>
                            <li>профилей</li>
                        </ul>
                    </li>
                    <li>Поведения
                        <ul class="list-disc list-inside ml-6">
                            <li>деятельности</li>
                            <li>состояний</li>
                            <li>вариантов использования</li>
                        </ul>
                    </li>
                    <li>Взаимодействия
                        <ul class="list-disc list-inside ml-6">
                            <li>коммуникации</li>
                            <li>обзора взаимодействия </li>
                            <li>последовательности</li>
                            <li>синхронизации</li>
                        </ul>
                    </li>
                    <li>Зависимость
                        <ul class="list-disc list-inside ml-6">
                            <li>агрегация</li>
                            <li>композиция</li>
                            <li>зависимость</li>
                            <li>обобщение</li>
                        </ul>
                    </li>
                </ul>
            </details>
        </section>

        <h2>PATTERNS</h2>
        <Patterns />

        <h2>JavaScript</h2>
        <iframe scrolling="no" title="JS notes"
            src="https://codepen.io/Aleksej579/embed/MWQZvwX?default-tab=html%2Cresult" frameborder="no" loading="lazy"
            allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/Aleksej579/pen/MWQZvwX">
                JS notes</a> by Aleksej579 (<a href="https://codepen.io/Aleksej579">@Aleksej579</a>)
            on <a href="https://codepen.io">CodePen</a>.
        </iframe>

        <h2>jQuery</h2>
        <iframe scrolling="no" title="jQuery notes"
            src="https://codepen.io/Aleksej579/embed/zYRydqb?default-tab=html%2Cresult" frameborder="no" loading="lazy"
            allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/Aleksej579/pen/zYRydqb">
                jQuery notes</a> by Aleksej579 (<a href="https://codepen.io/Aleksej579">@Aleksej579</a>)
            on <a href="https://codepen.io">CodePen</a>.
        </iframe>

        <h2>HTML tags</h2>
        <iframe scrolling="no" title="HTML tags"
            src="https://codepen.io/Aleksej579/embed/PoKZrXM?default-tab=html%2Cresult" frameborder="no" loading="lazy"
            allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/Aleksej579/pen/PoKZrXM">
                HTML tags</a> by Aleksej579 (<a href="https://codepen.io/Aleksej579">@Aleksej579</a>)
            on <a href="https://codepen.io">CodePen</a>.
        </iframe>

        <h2>Grid</h2>
        <iframe scrolling="no" title="Grid" src="https://codepen.io/Aleksej579/embed/KKZqxer?default-tab=html%2Cresult"
            frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/Aleksej579/pen/KKZqxer">
                Grid</a> by Aleksej579 (<a href="https://codepen.io/Aleksej579">@Aleksej579</a>)
            on <a href="https://codepen.io">CodePen</a>.
        </iframe>

        <h2>CSS notes</h2>
        <iframe scrolling="no" title="CSS notes"
            src="https://codepen.io/Aleksej579/embed/dydwRGg?default-tab=html%2Cresult" frameborder="no" loading="lazy"
            allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/Aleksej579/pen/dydwRGg">
                CSS notes</a> by Aleksej579 (<a href="https://codepen.io/Aleksej579">@Aleksej579</a>)
            on <a href="https://codepen.io">CodePen</a>.
        </iframe>
    </div>
</template>

<script>
import Patterns from "../components/Patterns.vue";

export default {
    components: {
        Patterns,
    },
    data() {
        return {
            detailsHTML: true,
            detailsCSS: true,
            detailsFONTS: true,
            detailsJS: true,
            detailsOTHER: true,
        }
    },
    methods: {
        collapseAll() {
            let allDetails = document.querySelectorAll('details');
            allDetails.forEach((item) => {
                item.open = false;
            })
        }
    }
}
</script>

<style>
iframe {
    @apply h-80 w-full;
}

fieldset label {
    @apply border rounded border-teal-500 px-1 text-teal-500 w-full flex justify-between;
}

fieldset label input {
    @apply ml-4;
}

fieldset input {
    @apply accent-teal-500;
}

.roadmap details {
    @apply m-2.5 h-max p-3 bg-white mb-2.5 text-slate-400 cursor-pointer;
}

.roadmap details[open] {
    @apply p-3 w-full;
}

.roadmap details[open] summary {
    @apply mb-3;
}

.roadmap summary {
    @apply -m-2.5 text-slate-400 font-medium font-mono text-center p-2;
}
</style>