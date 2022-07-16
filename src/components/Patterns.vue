<template>
    <div class="max-w-7xl mx-auto">
        <section class="pattern sm:px-3 md:px-2 grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class=" space-y-8">
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h3>{{ t('oop') }}</h3>
                    <ul>
                        <li>
                            <span class="dark:text-sky-400">{{ t('oopEnc') }}</span>
                            - {{ t('oopEncDesc') }}
                        </li>
                        <li>
                            <span class="dark:text-sky-400">{{ t('oopInherit') }}</span>
                            - {{ t('oopInheritDesc') }}.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">{{ t('oopPoly') }}</span>
                            - {{ t('oopPolyDesc') }}.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">{{ t('oopAbstract') }}</span>
                            {{ t('oopAbstractDesc') }}
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h3>SOLID</h3>
                    <ul>
                        <li>
                            <span class="dark:text-sky-400">Single responsibility principle</span>
                            {{ t('solid_s') }}
                        </li>
                        <li class=" border-b border-slate-400/10">
                            <span class="dark:text-sky-400">Open/closed principle</span>
                            {{ t('solid_o') }}
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Liskov substitution principle</span>
                            {{ t('solid_l') }}
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Interface segregation principle</span>
                            {{ t('solid_i') }}
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Dependency inversion principle</span>
                            {{ t('solid_d') }}
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h3>GRASP</h3>
                    <ul>
                        <li>
                            <span class="dark:text-sky-400">Information Expert</span>
                            - информация должна обрабатываться там где находится
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Creator</span>
                            - объект создаваться там где его используют.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Controller</span>
                            - ловить многопоточность на входе и превращать в один поток.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Low Coupling</span>
                            - между разными объектами должно быть минимум связей.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">High Cohesion</span>
                            - в одном объекте должны быть идентичные сущности, а непохожие в другом месте.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Polymorphism</span>
                            - разное поведение объектов можно программировать на основе разного код класса.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Pure Fabrication</span>
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Indirection</span>
                            - объект зависит не от другого объекта а от его интерфейса.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Protected Variations</span>
                            - любые изменения в коде должны минимально его ломать.
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h3>GOF - Creation</h3>
                    <ul>
                        <li>
                            <span class="dark:text-sky-400">Information Expert</span>
                            - создает семейство взаимосвязанных объектов.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Builder</span>
                            - поэтапное создание сложного объекта.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Factory Method</span>
                            - определяет интерфейс для создания объекта, при этом его тип определяется подклассами.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Object Pool</span>
                            - создание "затратных" объектов за счет их многократного использования.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Prototype</span>
                            - создание объектов на основе прототипов.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Singleton</span>
                            - создает единственный экземпляр некоторого класса и предоставляет к нему доступ.
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h3>GOF - Structural</h3>
                    <ul>
                        <li>
                            <span class="dark:text-sky-400">Adapter</span>
                            - преобразует интерфейс существующего класса к виду, подходящему для использования.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Bridge</span>
                            - делает абстракцию и реализацию независимыми друг от друга.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Composite</span>
                            - группирует схожие объекты в древовидные структуры.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Decorator</span>
                            - динамически добавляет объекту новую функциональность.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Facade</span>
                            - предоставляет унифицированный интерфейс вместо набора интерфейсов некоторой системы.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Flyweight</span>
                            - использует разделение для поддержки множества мелких объектов.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Proxy</span>
                            - подменяет другой объект для контроля доступа к нему.
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h3>GOF - Behavioral</h3>
                    <ul>
                        <li>
                            <span class="dark:text-sky-400">Chain of Responsibility</span>
                            - предоставляет способ передачи запроса по цепочке получателей.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Command</span>
                            - инкапсулирует запрос в виде объекта.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Interpreter</span>
                            - для языка определяет его грамматику и интерпретатор, использующий эту грамматику.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Iterator</span>
                            - предоставляет механизм обхода элементов коллекции.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Mediator</span>
                            - инкапсулирует взаимодействие между множеством объектов в объект-посредник.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Memento</span>
                            - сохраняет и восстанавливает состояние объекта.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Observer</span>
                            - при изменении объекта извещает всех зависимые объекты для их обновления.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">State</span>
                            - изменяет поведение объекта при изменении его состояния.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Strategy</span>
                            - переносит алгоритмы в отдельную иерархию классов, делая их взаимозаменяемыми.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Template method</span>
                            - определяет шаги алгоритма, позволяя подклассам изменить некоторые из них.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Visitor</span>
                            - определяет новую операцию в классе без его изменения.
                        </li>
                    </ul>
                </article>
            </div>

            <div class="space-y-8">
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h3>{{ t('acronym') }}</h3>
                    <ul>
                        <li>
                            <span class="dark:text-sky-400">KISS</span>
                            {{ t("kiss") }}
                        </li>
                        <li>
                            <span class="dark:text-sky-400">DRY</span>
                            {{ t('dry') }}
                        </li>
                        <li>
                            <span class="dark:text-sky-400">YAGNI</span>
                            {{ t("yagni") }}
                        </li>
                        <li>
                            <span class="dark:text-sky-400">SMART</span>
                            <ul class="list-disc list-inside">
                                <li>specific</li>
                                <li>measurable</li>
                                <li>attainable</li>
                                <li>relevant</li>
                                <li>time-bound</li>
                            </ul>
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h3>Software architecture pattern</h3>
                    <ul>
                        <li>
                            <span class="dark:text-sky-400">MVC</span>
                            Model-View-Controller
                        </li>
                        <li>
                            <span class="dark:text-sky-400">HMVC</span>
                            Hierarchical model–view–controller
                        </li>
                        <li>
                            <span class="dark:text-sky-400">MVVM</span>
                            Model-View-View Model
                        </li>
                        <li>
                            <span class="dark:text-sky-400">MVP</span>
                            Model-View-Presenter
                        </li>
                        <li>
                            <span class="dark:text-sky-400">CQRS</span>
                            comand or request in unit time
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Flux</span>
                            (State) dispatcher, stores, views
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Microservice architecture</span>
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h3>Agile</h3>
                    <ul>
                        <li>
                            <span class="dark:text-sky-400">Scrum</span>
                            итерации, наращивание функциональности
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Lean</span>
                            бережливое производство
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Kanban</span>
                            перемещение задач по статусам
                        </li>
                        <li>
                            <span class="dark:text-sky-400">RUP</span>
                            <ul class="list-disc list-inside">
                                <li>inception</li>
                                <li>elaboration</li>
                                <li>construction</li>
                                <li>transition</li>
                            </ul>
                        </li>
                        <li>
                            <span class="dark:text-sky-400">XP</span>
                            работа в паре и тестирование
                        </li>
                        <li>
                            <span class="dark:text-sky-400">RAD</span>
                            rapid application development
                        </li>
                        <li>
                            <span class="dark:text-sky-400">SDLC</span>
                            System/Software Development Life Cycle
                            <ul class="list-disc list-inside">
                                <li>Planning</li>
                                <li>Define Requirements</li>
                                <li>Design and Prototyping</li>
                                <li>Software Development</li>
                                <li>Testing</li>
                                <li>Deployment</li>
                                <li>Operations and Maintenance</li>
                            </ul>
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h3>Programming models</h3>
                    <ul>
                        <li>
                            <span class="dark:text-sky-400">Императивный</span>
                            что?
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Декларативный</span>
                            как?
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Структурное</span>
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Реактивное</span>
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Контрактное</span>
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Функциональное 'BigO'</span>
                            <ul class="list-disc list-inside">
                                <li>чистые функции детерминированые, без побочных эффектов</li>
                                <li>функции высших порядков функция принимающая другую функцию</li>
                                <li>композиция функций общий path - типы данных</li>
                                <li>имутабельность данных функция не должна изменять переданный аргумент только создать
                                    копию и его
                                </li>
                                <li>каррироваие</li>
                            </ul>
                        </li>
                    </ul>
                </article>
            </div>

            <div class="space-y-8">
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h3>Data structures</h3>
                    <ul>
                        <li>
                            <span class="dark:text-sky-400">
                                number, string, boolean, NaN, undefined, infinity, BigInt;
                            </span>
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Array</span>
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Stack</span>
                            LIFO
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Queue</span>
                            FIFO
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Linked list</span>
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Tree</span>
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Trie</span>
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Graph</span>
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Set</span>
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Map</span>
                        </li>
                        <li>
                            <span class="dark:text-sky-400">Hash table</span>
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h3>Network protocols</h3>
                    <ul>
                        <li>
                            <span class="dark:text-sky-400">REST-ful</span>
                            <ul class="list-disc list-inside">
                                <li>модель клиент-сервер</li>
                                <li>отсутствие состояния</li>
                                <li>кэширование</li>
                                <li>единообразие интерфейса</li>
                                <li>слои</li>
                                <li>код по требованию</li>
                            </ul>
                        </li>
                        <li><span class="dark:text-sky-400">GraphQl</span></li>
                        <li><span class="dark:text-sky-400">Web APIs</span></li>
                        <li><span class="dark:text-sky-400">Web sockets</span></li>
                        <li><span class="dark:text-sky-400">Web Workers</span></li>
                        <li><span class="dark:text-sky-400">JWT JSON Web Token</span></li>
                        <li>
                            <span class="dark:text-sky-400">CRUD</span>
                            <ul class="list-disc list-inside">
                                <li>create</li>
                                <li>read</li>
                                <li>update</li>
                                <li>delete</li>
                            </ul>
                        </li>
                        <li>
                            <span class="dark:text-sky-400">ACID</span>
                            <ul class="list-disc list-inside">
                                <li>Atomicity</li>
                                <li>Consistency</li>
                                <li>Isolation</li>
                                <li>Durability</li>
                            </ul>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
    setup() {
        const { locale, t } = useI18n()
        return { locale, t }
    },
}
</script>

<style>
.pattern article {
    @apply p-6 bg-white;
}

.pattern h3 {
    @apply text-base font-semibold text-center;
}

.pattern li:not(:last-child) {
    @apply border-b border-slate-400/10 mb-3;
}

.pattern span {
    @apply text-teal-500;
}

.pattern li {
    font-family: "dm", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    @apply italic;
}
</style>