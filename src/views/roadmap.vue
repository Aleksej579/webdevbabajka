<template>
    <div class="max-w-7xl mx-auto px-2">
        <h1 class="text-2xl text-center">TOOLS</h1>
        <section class="mb-1 flex flex-wrap">
            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
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

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    <span class="tooltip" tooltip="Block Element Modifier">
                        <strong>BEM</strong>
                    </span> naming
                </summary>
                <ul>
                    <li>Block-name</li>
                    <li>Block-name__Element-name</li>
                    <li>Block-name__Element-name--Modifier</li>
                </ul>
            </details>

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
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

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
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

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
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

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    CSS-framework
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

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    Template engine
                </summary>
                <ul>
                    <li><a href="https://pugjs.org/api/getting-started.html" target="_blank">Pug</a></li>
                    <li><a href="https://twig.symfony.com/" target="_blank">Twig</a></li>
                    <li><a href="https://www.shopify.ca/partners/shopify-cheat-sheet" target="_blank">Liquid</a></li>
                </ul>
            </details>

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    <strong>JavaScript</strong> use <strong>ES6+</strong>
                </summary>
                <!-- <ul>
                    <li><a href="https://vuejs.org/" target="_blank">Vue.js</a></li>
                </ul> -->
            </details>

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    Framework-JS-UI
                </summary>
                <ul>
                    <li><a href="https://vuejs.org/" target="_blank">Vue.js</a></li>
                    <li><a href="https://reactjs.org/" target="_blank">React.js</a></li>
                    <li><a href="https://angular.io/" target="_blank">Angular</a></li>
                    <li><a href="https://svelte.dev/" target="_blank">Svelte</a></li>
                </ul>
            </details>

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    Framework-JS-Test
                </summary>
                <ul>
                    <li><a href="https://jestjs.io/" target="_blank">Jest</a></li>
                    <li><a href="https://www.cypress.io/" target="_blank">Cypress</a></li>
                </ul>
            </details>

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    Framework-JS-Build
                </summary>
                <ul>
                    <li><a href="https://vitejs.dev/" target="_blank">Vite</a></li>
                    <li><a href="https://gulpjs.com/" target="_blank">Gulp</a></li>
                    <li><a href="https://webpack.js.org/" target="_blank">Webpack</a></li>
                </ul>
            </details>

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    Framework-JS-Backend
                </summary>
                <ul>
                    <li><a href="https://expressjs.com/">Express.js</a></li>
                    <li><a href="https://rxjs.dev/">RxJS</a></li>
                    <li><strong>REST</strong></li>
                    <li><strong>PostgreSQL</strong></li>
                    <li><strong class="tooltip" tooltip="Create, Read, Update, Delete">CRUD</strong></li>
                </ul>
            </details>

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    <strong>GIT</strong> version control system
                </summary>
                <ul>
                    <li><a href="https://github.com" target="_blank">GitHub</a></li>
                    <li><a href="https://about.gitlab.com/" target="_blank">GitLab</a></li>
                    <li><a href="https://bitbucket.org/" target="_blank">Bitbucket</a></li>
                </ul>
            </details>

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    Cloud platforms
                </summary>
                <ul>
                    <li><a href="https://firebase.google.com/" target="_blank">Firebase</a></li>
                    <li><a href="https://www.netlify.com/" target="_blank">Netlify</a></li>
                </ul>
            </details>

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    E-commerce Shopify
                </summary>
                <ul>
                    <li><a href="https://www.shopify.com/" target="_blank">Shopify.com</a></li>
                    <li><a href="https://shopify.dev/" target="_blank">Shopify.dev</a></li>
                    <li><a href="https://www.shopify.com/partners" target="_blank">Shopify.com/partners</a></li>
                </ul>
            </details>

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    Topical sites
                </summary>
                <ul>
                    <li><a href="https://www.freecodecamp.org/" target="_blank">Freecodecamp</a></li>
                    <li><a href="https://learn.javascript.ru/" target="_blank">learn.javascript.ru</a></li>
                    <li><a href="https://www.w3schools.com/" target="_blank">W3schools</a></li>
                    <li><a href="https://css-tricks.com/" target="_blank">Css-tricks</a></li>
                </ul>
            </details>

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    Prototyping
                </summary>
                <ul>
                    <li>WIREFRAME</li>
                    <li>PROTOTYPE</li>
                    <li>MOCKUP</li>
                </ul>
            </details>

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    ALGORITHM
                </summary>
                <ul>
                    <li>Linear</li>
                    <li>Choices</li>
                    <li>Cycle</li>
                </ul>
            </details>

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    BLOCK DIAGRAM
                </summary>
                <ul>
                    <table>
                        <tbody>
                            <tr>
                                <td>Терминатор </td>
                                <td>Овал</td>
                                <td>(начало и конец алгоритма)</td>
                            </tr>
                            <tr>
                                <td>Процес</td>
                                <td>Прямоугольник</td>
                                <td>(обработка данных)</td>
                            </tr>
                            <tr>
                                <td>Данные</td>
                                <td>Параллелепипед</td>
                                <td>(отображает данные)</td>
                            </tr>
                            <tr>
                                <td>Предопределенный процес</td>
                                <td>Прямоугольник с линиями</td>
                                <td>(ссылка на код в другом месте)</td>
                            </tr>
                            <tr>
                                <td>Решение</td>
                                <td>Ромб</td>
                                <td>(выбор)</td>
                            </tr>
                            <tr>
                                <td>Цикл</td>
                                <td>Восьмигранник</td>
                                <td>(цикл)</td>
                            </tr>
                            <tr>
                                <td>Соединитель</td>
                                <td>Круг</td>
                                <td>(разделение блок схемы на части)</td>
                            </tr>
                            <tr>
                                <td>Коментарий</td>
                                <td>Скоба + штрихпунктир</td>
                                <td>(коментарий)</td>
                            </tr>
                            <tr>
                                <td>Паралельные действия</td>
                                <td>паралельные линии</td>
                                <td>(паралельное выполнение)</td>
                            </tr>
                        </tbody>
                    </table>
                </ul>
            </details>

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    UML
                </summary>
                <ul>
                    <li>Структурные "элементы диаграммы"
                        <ul>
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
                    <li>Поведения "элементы диаграммы"
                        <ul>
                            <li>деятельности</li>
                            <li>состояний</li>
                            <li>вариантов использования</li>
                        </ul>
                    </li>
                    <li>Взаимодействия "элементы диаграммы"
                        <ul>
                            <li>коммуникации</li>
                            <li>обзора взаимодействия </li>
                            <li>последовательности</li>
                            <li>синхронизации</li>
                        </ul>
                    </li>
                    <li>Зависимость
                        <ul>
                            <li>агрегация "линия + ромб (часть - целое) часть отдельно сущ. от целого"</li>
                            <li>композиция "линия + ромб закрашеный (часть - целое) часть не отдельно от целого"</li>
                            <li>зависимость "пунктир + стрелка (независимое влияет на зависимое)"</li>
                            <li>обобщение "линия + стрелка (отношение наследования или реализации интерфейса)"</li>
                        </ul>
                    </li>
                </ul>
            </details>
        </section>
    </div>
</template>

<style>
details {
    padding: .5em .5em 0;
    width: max-content;
    height: max-content;
    margin: 10px;
}

summary {
    margin: -.5em -.5em 0;
}

details[open] {
    padding: .5em;
}

details[open] summary {
    border-bottom: 1px solid grey;
    margin-bottom: .5em;
}
</style>
