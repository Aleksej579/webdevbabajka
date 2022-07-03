<template>
    <div class="roadmap max-w-7xl mx-auto px-2 min-h-screen">
        <h1 class="text-2xl text-center">TOOLS</h1>
        <fieldset class="w-full flex flex-col md:flex-row gap-2 md:gap-5 items-end md:items-center md:justify-end mb-5">
            <span>Show: </span>
            <label for="html" class="border rounded border-teal-500 px-1 text-teal-500">
                Html
                <input type="checkbox" id='html' v-model="detailsHTML" />
            </label>

            <label for="css" class="border rounded border-teal-500 px-1 text-teal-500">
                Css
                <input type="checkbox" id='css' v-model="detailsCSS">
            </label>

            <label for="js" class="border rounded border-teal-500 px-1 text-teal-500">
                JavaScript
                <input type="checkbox" id='js' v-model="detailsJS">
            </label>

            <label for="other" class="border rounded border-teal-500 px-1 text-teal-500">
                Other
                <input type="checkbox" id='other' v-model="detailsOTHER">
            </label>

            <button @click="collapseAll"
                class="border rounded border-teal-500 px-1 cursor-pointer text-teal-500 hover:text-white dark:hover:text-slate-800 hover:bg-teal-500">
                Collapse All Card
            </button>
        </fieldset>

        <section class="mb-1 flex flex-wrap justify-center">
            <details v-if="detailsHTML" class="details dark:bg-slate-800 hover:drop-shadow-md">
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

            <details v-if="detailsHTML" class="dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    <span class="tooltip" tooltip="Block Element Modifier">
                        <strong>BEM</strong>
                    </span> naming
                </summary>
                <ul>
                    <li>Block-name</li>
                    <li>Container or Wrapper</li>
                    <li>Block-name__Element-name</li>
                    <li>Block-name__Element-name--Is-modifier</li>
                </ul>
            </details>

            <details v-if="detailsCSS" class="dark:bg-slate-800 hover:drop-shadow-md">
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

            <details v-if="detailsCSS" class="dark:bg-slate-800 hover:drop-shadow-md">
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

            <details v-if="detailsCSS" class="dark:bg-slate-800 hover:drop-shadow-md">
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

            <details v-if="detailsCSS" class="dark:bg-slate-800 hover:drop-shadow-md">
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

            <details v-if="detailsHTML" class="dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Template engine
                </summary>
                <ul>
                    <li><a href="https://pugjs.org/api/getting-started.html" target="_blank">Pug</a></li>
                    <li><a href="https://twig.symfony.com/" target="_blank">Twig</a></li>
                    <li><a href="https://www.shopify.ca/partners/shopify-cheat-sheet" target="_blank">Liquid</a></li>
                </ul>
            </details>

            <details v-if="detailsJS" class="dark:bg-slate-800 hover:drop-shadow-md">
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

            <details v-if="detailsJS" class="dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Framework-JS-UI
                </summary>
                <ul>
                    <li><a href="https://vuejs.org/" target="_blank">Vue.js</a></li>
                    <li><a href="https://reactjs.org/" target="_blank">React.js</a></li>
                    <li><a href="https://angular.io/" target="_blank">Angular</a></li>
                    <li><a href="https://svelte.dev/" target="_blank">Svelte</a></li>
                </ul>
            </details>

            <details v-if="detailsJS" class="dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Framework-JS-Test
                </summary>
                <ul>
                    <li><a href="https://jestjs.io/" target="_blank">Jest</a></li>
                    <li><a href="https://www.cypress.io/" target="_blank">Cypress</a></li>
                </ul>
            </details>

            <details v-if="detailsJS" class="dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Framework-JS-Build
                </summary>
                <ul>
                    <li><a href="https://vitejs.dev/" target="_blank">Vite</a></li>
                    <li><a href="https://gulpjs.com/" target="_blank">Gulp</a></li>
                    <li><a href="https://webpack.js.org/" target="_blank">Webpack</a></li>
                </ul>
            </details>

            <details v-if="detailsJS" class="dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Framework-JS-Backend
                </summary>
                <ul>
                    <li><a href="https://expressjs.com/">Express.js</a></li>
                    <li><a href="https://rxjs.dev/">RxJS</a></li>
                    <li>REST</li>
                    <li>PostgreSQL</li>
                    <li class="tooltip" tooltip="Create, Read, Update, Delete">CRUD</li>
                </ul>
            </details>

            <details v-if="detailsOTHER" class="dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    <span class="tooltip" tooltip="Version Control System">
                        <strong>VCS</strong>
                    </span>
                </summary>
                <a href="https://git-scm.com/" target="_blank">GIT</a>
                <ul class="list-disc list-inside">
                    <li><a href="https://github.com" target="_blank">GitHub</a></li>
                    <li><a href="https://about.gitlab.com/" target="_blank">GitLab</a></li>
                    <li><a href="https://bitbucket.org/" target="_blank">Bitbucket</a></li>
                </ul>
            </details>

            <details v-if="detailsOTHER" class="dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Cloud platforms
                </summary>
                <ul>
                    <li><a href="https://firebase.google.com/" target="_blank">Firebase</a></li>
                    <li><a href="https://www.netlify.com/" target="_blank">Netlify</a></li>
                </ul>
            </details>

            <details v-if="detailsOTHER" class="dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    E-commerce Shopify
                </summary>
                <ul>
                    <li><a href="https://www.shopify.com/" target="_blank">Shopify.com</a></li>
                    <li><a href="https://shopify.dev/" target="_blank">Shopify.dev</a></li>
                    <li><a href="https://www.shopify.com/partners" target="_blank">Shopify.com/partners</a></li>
                </ul>
            </details>

            <details v-if="detailsOTHER" class="dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Topical sites
                </summary>
                <ul>
                    <li><a href="https://www.freecodecamp.org/" target="_blank">Freecodecamp</a></li>
                    <li><a href="https://learn.javascript.ru/" target="_blank">learn.javascript.ru</a></li>
                    <li><a href="https://www.w3schools.com/" target="_blank">W3schools</a></li>
                    <li><a href="https://css-tricks.com/" target="_blank">Css-tricks</a></li>
                </ul>
            </details>

            <details v-if="detailsOTHER" class="dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    Prototyping
                </summary>
                <ul class="list-disc list-inside">
                    <li>Wireframe</li>
                    <li>Prototype</li>
                    <li>Mockup</li>
                </ul>
            </details>

            <details v-if="detailsJS" class="dark:bg-slate-800 hover:drop-shadow-md">
                <summary>
                    The Algorithm
                </summary>
                <ul class="list-disc list-inside">
                    <li>Linear</li>
                    <li>Choices</li>
                    <li>Cycle</li>
                </ul>
            </details>

            <details v-if="detailsOTHER" class="dark:bg-slate-800 hover:drop-shadow-md">
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

            <details v-if="detailsOTHER" class="dark:bg-slate-800 hover:drop-shadow-md">
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            detailsHTML: true,
            detailsCSS: true,
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
fieldset label {
    @apply text-slate-400;
}

fieldset input {
    @apply accent-teal-500;
}

.roadmap details {
    @apply m-2.5 h-max w-max p-3 bg-white mb-2.5 text-slate-400 cursor-pointer;
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
