<template>
    <div class="main container max-w-7xl mx-auto p-3">
        <h1 class="text-2xl text-center">INFO</h1>
        <section class="bg-slate-800/25 w-4/5 mx-auto rounded-xl p-8">
            <details class="border bg-slate-800 border-indigo-500/100 mb-2.5 rounded">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    Предоставление информации в HTML
                </summary>
                <ul class="text-white text-sm font-bold">
                    <li>Текст</li>
                    <li>Выпадающий список</li>
                    <li>Слайдер</li>
                    <li>Кнопка</li>
                    <li>Текстовое после</li>
                </ul>
            </details>

            <details class="border bg-slate-800 border-indigo-500/100 mb-2.5 rounded">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    Предоставление информации в CSS
                </summary>
                <ul class="text-white text-sm font-bold">
                    <li>STYLUS</li>
                    <li>переменные</li>
                    <li>вложенности</li>
                    <li>импорт</li>
                    <li>миксины</li>
                    <li>наследование</li>
                </ul>
            </details>

            <details class="border bg-slate-800 border-indigo-500/100 mb-2.5 rounded">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">SMACSS</summary>
                <ul class="text-white text-sm font-bold">
                    <li>base</li>
                    <li>layout</li>
                    <li>modules</li>
                    <li>state</li>
                    <li>theme</li>
                </ul>
            </details>

            <details class="border bg-slate-800 border-indigo-500/100 mb-2.5 rounded">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">BEM</summary>
                <ul class="text-white text-sm font-bold">
                    <li>Блок</li>
                    <li>Элемент</li>
                    <li>Модификатор<ul>
                            <li>булевый</li>
                            <li>ключ-значение</li>
                        </ul>
                    </li>
                    <li>Микс<ul>
                            <li>совмещение однотипных сущ.</li>
                            <li>повторное использование имеющихся сущ.</li>
                        </ul>
                    </li>
                    <li>Файловая структура<ul>
                            <li>имя-блока_имя-модификатора</li>
                            <li>имя-блока_имя-модификатора_значение-модификатора</li>
                            <li>имя-блока__имя-элемента</li>
                            <li>имя-блока__имя-элемента_имя-модификатора</li>
                            <li>имя-блока__имя-элемента_имя-модификатора_значение-модификатора</li>
                        </ul>
                    </li>
                </ul>
            </details>

            <details class="border bg-slate-800 border-indigo-500/100 mb-2.5 rounded">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    USER STORY and USE CASE
                </summary>
                <ul class="text-white text-sm font-bold">
                    <li>USER STORY "что нужно сделать (пожелание)"<ul>
                            <li>что</li>
                            <li>зачем </li>
                            <li>для кого </li>
                        </ul>
                    </li>
                    <li>USE CASE "сортировка пожелания по группам"<ul>
                            <li>GUI </li>
                            <li>процессы </li>
                            <li>дополнительно </li>
                        </ul>
                    </li>
                </ul>
            </details>

            <details class="border bg-slate-800 border-indigo-500/100 mb-2.5 rounded">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    ЖИЗНЕННЫЙ ЦИКЛ ПО
                </summary>
                <ul class="text-white text-sm font-bold">
                    <li>СODE AND FIX "разработка по до валидации заказчика"</li>
                    <li>RUP "методология каскадная (Rational Unified Process)"<ul>
                            <li>v-образная "паралельное тестирование"<ul>
                                    <li>инкрементная модель "модульный выпуск"</li>
                                    <li>спиральная модель "аналог каскадной в виде цикла (исключение риска)"</li>
                                </ul>
                            </li>
                            <li>XP "Extreme Programming (экстримальное программирование)"<ul>
                                    <li>Короткий цикл обратной связи<ul>
                                            <li>разработка через тестирование</li>
                                            <li>игра в планирование</li>
                                            <li>заказчик всегда рядом</li>
                                            <li>парное программирование</li>
                                        </ul>
                                    </li>
                                    <li>Непрерывный, а не пакетный процесс<ul>
                                            <li>непрерывная интеграция</li>
                                            <li>рефакторинг</li>
                                            <li>частые небольшие релизы</li>
                                        </ul>
                                    </li>
                                    <li>Понимание, разделяемое всеми<ul>
                                            <li>простота</li>
                                            <li>метафора системы</li>
                                            <li>коллективное владение кодом</li>
                                            <li>стандарт кодирования</li>
                                        </ul>
                                    </li>
                                    <li>Социальная защищённость программиста<ul>
                                            <li>40-часовая рабочая неделя</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>AGILE "методология итераций"<ul>
                                    <li>Scrum "проект на части и итерировать"</li>
                                    <li>Kanban "точно в срок + доска со стикерами"</li>
                                </ul>
                            </li>
                            <li>ПРОТОТИПНАЯ<ul>
                                    <li>иследовательский "уточнение требований к ПО (для UI)"</li>
                                    <li>экспериментальный "проверка технологии"</li>
                                    <li>эволюционный "простая версия продукта"</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </details>

            <details class="border bg-slate-800 border-indigo-500/100 mb-2.5 rounded">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    АРХИТЕКТУРА ПО
                </summary>
                <ul class="text-white text-sm font-bold">
                    <li>MVC "модель-представление-контроллер"</li>
                    <li>MVP "модель-представление-презентатор"</li>
                    <li>MVVM "модель-представление-модель-представление"</li>
                    <li>BEM-методологии "блок, элемент, модификатор"</li>
                    <li>SMACSS-методологии "масштабируемая и модульная архитектура для CSS + namespace !!!"
                        <ul>
                            <li>основа "стили по умолчанию для базовых селекторов"</li>
                            <li>структура "структура вёрстки, размеры элементов, их выравнивание"</li>
                            <li>модуль "элементы, из которых строится модуль"</li>
                            <li>тема "визуальное представление элементов стандартно"</li>
                            <li>состояние "состояния элементов после применения модификаторов"</li>
                        </ul>
                    </li>
                    <li>OOCSS-методологии "объектно-ориентированный CSS"</li>
                    <li>MCSS-методологии "многослойный CSS"</li>
                    <li>AMCSS-методологии "модули атрибутов для CSS"</li>
                    <li>FUN-методологии "плоская иерархия селекторов, служебные стили, компоненты с неймспейсами"</li>
                </ul>
            </details>

            <details class="border bg-slate-800 border-indigo-500/100 mb-2.5 rounded">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">ООП</summary>
                <ul class="text-white text-sm font-bold">
                    <li>Инкапсуляция</li>
                    <li>Наследование</li>
                    <li>Полиморфизм</li>
                    <li>Абстракция</li>
                    <li>Посылка сообщений</li>
                    <li>Повторное использование</li>
                </ul>
            </details>

            <details class="border bg-slate-800 border-indigo-500/100 mb-2.5 rounded">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    АЛГОРИТМ
                </summary>
                <ul class="text-white text-sm font-bold">
                    <li>Линейный</li>
                    <li>Выбора</li>
                    <li>Цикла</li>
                </ul>
            </details>

            <details class="border bg-slate-800 border-indigo-500/100 mb-2.5 rounded">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    ПАТТЕРНЫ
                </summary>
                <ul class="text-white text-sm font-bold">
                    <li>GRASP "новые обобщенные"
                        <ul>
                            <li>Information expert "информационный эксперт"</li>
                            <li>Creator "создатель"</li>
                            <li>Controller "контроллер"</li>
                            <li>Low coupling "слабое зацепление"</li>
                            <li>High cohesion "высокая степень связанности"</li>
                            <li>Polymorphism "полиморфизм"</li>
                            <li>Pure fabrication "чистая выдумка"</li>
                            <li>Indirection "посредник"</li>
                            <li>Protected variations "устойчивый к изменениям"</li>
                        </ul>
                    </li>
                    <li>GOF
                        <ul>
                            <li>Создание объектов "механизм инициализации, создавать объекты удобным способом."
                                <ul>
                                    <li>Singleton</li>
                                    <li>Factory Method</li>
                                    <li>Prototype</li>
                                    <li>Builder</li>
                                    <li>Abstract Factory</li>
                                </ul>
                            </li>
                            <li>Структурные "отношения между классами и объектами (работать совместно)"
                                <ul>
                                    <li>Adapter</li>
                                    <li>Facade</li>
                                    <li>Composite</li>
                                    <li>Decorator</li>
                                    <li>Proxy</li>
                                    <li>Bridge</li>
                                    <li>Flyweight</li>
                                </ul>
                            </li>
                            <li>Поведенческие "упростить взаимодействие между сущностями."
                                <ul>
                                    <li>Strategy</li>
                                    <li>Iterator</li>
                                    <li>Observer</li>
                                    <li>Memento</li>
                                    <li>Command</li>
                                    <li>Interpreter</li>
                                    <li>Mediator</li>
                                    <li>State</li>
                                    <li>Template method</li>
                                    <li>Visitor</li>
                                    <li>Chain of responsibility</li>
                                </ul>
                            </li>
                            <li>АКРОНИМ
                                <ul>
                                    <li>KISS "чем проще система тем надежнее"</li>
                                    <li>DRY "не повторяй себя"</li>
                                    <li>SOLID
                                        <ul>
                                            <li>SRP "принцип единственной обязанности (Single responsibility principle)"
                                            </li>
                                            <li>OCP "принцип открытости/закрытости (Open/closed principle)"</li>
                                            <li>LSP "принцип подстановки Барбары Лисков (Liskov substitution principle)"
                                            </li>
                                            <li>ISP "принцип разделения интерфейса (Interface segregation principle)"
                                            </li>
                                            <li>DIP "принцип инверсии зависимостей (Dependency inversion principle)"
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </details>

            <details class="border bg-slate-800 border-indigo-500/100 mb-2.5 rounded">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    БЛОК СХЕМА
                </summary>
                <ul class="text-white text-sm font-bold">
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

            <details class="border bg-slate-800 border-indigo-500/100 mb-2.5 rounded">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    UML
                </summary>
                <ul class="text-white text-sm font-bold">
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

            <details class="border bg-slate-800 border-indigo-500/100 mb-2.5 rounded">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    ПРОТОТИПЫ ПРОЕКТА
                </summary>
                <ul class="text-white text-sm font-bold">
                    <li>WIREFRAME "каркас приложения"</li>
                    <li>PROTOTYPE "минимум стилей"</li>
                    <li>MOCKUP "для демонстрации"</li>
                </ul>
            </details>

            <details class="border bg-slate-800 border-indigo-500/100 mb-2.5 rounded">
                <summary class="text-slate-400 font-medium font-mono text-center p-2">
                    ТЕСТИРОВАНИЕ
                </summary>
                <ul class="text-white text-sm font-bold">
                    <li>UNIT TEST</li>
                    <li>ТЕСТИРОВАНИЕ</li>
                    <li>функциональное тестирование</li>
                    <li>тестирования Верстки</li>
                    <li>usability тестирование</li>
                    <li>тестирование безопасности</li>
                    <li>тестирование производительности сайта</li>
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
    border-bottom: 1px solid rgb(99 102 241);
    margin-bottom: .5em;
}
</style>