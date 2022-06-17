<template>
    <div class="main container max-w-7xl mx-auto p-3">
        <h1 class="text-2xl text-center">TOOLS</h1>
        <section class="grid gap-8 grid-cols-1">
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

    </div>
</template>
