<template>
    <div class="max-w-7xl mx-auto px-2">
        <h1 class="text-2xl text-center">TOOLS</h1>
        <section class="grid gap-8 grid-cols-1 mb-10 bg-white dark:bg-slate-800 p-5">
            <p>Topical sites for studying web development:
                <a href="https://www.freecodecamp.org/">Freecodecamp</a>,
                <a href="https://learn.javascript.ru/">learn.javascript.ru</a>,
                <a href="https://www.w3schools.com/">W3schools</a>,
                <a href="https://css-tricks.com/">Css-tricks</a>,
            </p>

            <p>Markup on the
                <a class="tooltip" href="" tooltip="HyperText Markup Language — язык гипертекстовой разметки">HTML</a>
                and
                <a class="tooltip" href="" tooltip="Cascading Style Sheets — каскадные таблицы стилей">CSS3</a>.
            </p>

            <div>
                <p><strong>HTML5</strong> must have:</p>
                <ul class="list-disc list-inside">
                    <li><mark>semantics</mark></li>
                    <li><mark>validation</mark> on the <a href="https://validator.w3.org">validator.w3.org</a></li>
                    <li><mark>microdata</mark> on the <a href="https://json-ld.org">json-ld.org</a></li>
                    <li><mark>BEM-naming</mark></li>
                    <li>use <mark>svg</mark>, and <mark>canvas</mark></li>
                </ul>
            </div>

            <p>Template-based markup on
                <a href="https://pugjs.org/api/getting-started.html">PUG</a> or
                <a href="https://twig.symfony.com/">TWIG</a>
            </p>

            <div>
                <p><strong>CSS3</strong> must be:</p>
                <ul class="list-disc list-inside">
                    <li><mark>cross browser</mark> ( Ch. Ff. E. IE. S. O ) <a href="https://caniuse.com">caniuse.com</a>
                    </li>
                    <li><mark>responsive</mark> @media( 320-768-1280-1920 ), Grid, Flex, %,</li>
                    <li><mark>pixel-perfect</mark></li>
                    <li>and must have <mark>animation</mark> @keyframes</li>
                </ul>
            </div>

            <p>For performance use the preprocessor
                <a href="https://sass-lang.com">SASS</a>,
                and methodology <a href="http://smacss.com/">SMACSS</a>,
            </p>

            <p>CSS libraries
                <a href="https://tailwindcss.com">TailwindCSS</a>, and
                <a href="https://getbootstrap.com/">Bootstrap</a>
            </p>

            <p>Programming on <strong>JavaScript</strong> use <strong>ES6+</strong>.</p>

            <p>Framewerk applications <strong>Vue.js</strong> use <strong>pinia, i18n, quill ...</strong>.</p>

            <p>Building the project on <strong>Vite</strong>, <strong>Gulp</strong>, <strong>Webpack</strong>.</p>

            <p>Version control system <strong>GIT</strong> with the repositories on the
                <a href="https://github.com">GitHub</a> and <strong>GitLab</strong>.
            </p>

            <p>Knowledge of backend tools, for example:
                <a href="https://expressjs.com/">Express.js</a>,
                <strong>REST</strong>,
                database like <strong>PostgreSQL</strong>,
                some operations like <strong class="tooltip" tooltip="Create, Read, Update, Delete">CRUD</strong>.
            </p>

            <p>Knowledge of cloud platforms
                <a href="https://www.netlify.com/">Netlify</a>, and
                <a href="https://firebase.google.com/">Firebase</a>
            </p>

        </section>

        <section class="w-4/5 mx-auto">
            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    Prototyping
                </summary>
                <ul>
                    <li>WIREFRAME "каркас приложения"</li>
                    <li>PROTOTYPE "минимум стилей"</li>
                    <li>MOCKUP "для демонстрации"</li>
                </ul>
            </details>

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    BEM
                </summary>
                <ul>
                    <li>Block-name</li>
                    <li>Block-name__Element-name</li>
                    <li>Block-name__Element-name--Modifier</li>
                </ul>
            </details>

            <details class="bg-white dark:bg-slate-800 mb-2.5 text-slate-400">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    SASS
                </summary>
                <ul>
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
                    SMACSS
                </summary>
                <ul>
                    <li>Base</li>
                    <li>Layout</li>
                    <li>Modules</li>
                    <li>State</li>
                    <li>Theme</li>
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
