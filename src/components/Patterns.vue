<template>
    <div class="main container max-w-7xl mx-auto p-3">
        <h1 class="text-2xl text-center">PATTERNS</h1>
        <section class="pattern sm:px-3 md:px-5 grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class=" space-y-8">
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h2>{{ t('oop') }}</h2>
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
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h2>SOLID</h2>
                    <ul>
                        <li>
                            <span class="dark:text-sky-400">SRP</span>
                            - объект отвечает только за одно дело.
                        </li>
                        <li class=" border-b border-slate-400/10">
                            <span class="dark:text-sky-400">OCP</span>
                            - программные сущности открыты для расширения но закрыты для модификации.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">LSP</span>
                            - где используется базовый класс должен подходить и его наследуемый класс.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">ISP</span>
                            - много интерфейсов для клиента лучше чем один интерфейс общего назначения.
                        </li>
                        <li>
                            <span class="dark:text-sky-400">DIP</span>
                            - использовать все классы через интерфейсы.
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h2>GRASP</h2>
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
                    <h2>GOF - Creation</h2>
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
                    <h2>GOF - Structural</h2>
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
                    <h2>GOF - Behavioral</h2>
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
                    <h2>Акроним</h2>
                    <ul>
                        <li>
                            <span class="dark:text-sky-400">KISS</span>
                            делай проще
                        </li>
                        <li>
                            <span class="dark:text-sky-400">DRY</span>
                            не повторяйся
                        </li>
                        <li>
                            <span class="dark:text-sky-400">YAGNI</span>
                            тебе это не понадобиться
                        </li>
                        <li>
                            <span class="dark:text-sky-400">SMART</span>
                            <ul>
                                <li>specific конкретная</li>
                                <li>measurable измеримая</li>
                                <li>attainable достижимая</li>
                                <li>relevant уместная или актуальная</li>
                                <li>time-bound ограниченная по времени</li>
                            </ul>
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h2>Software architecture pattern</h2>
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
                    <h2>Agile</h2>
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
                            inception | elaboration | construction | transition
                        </li>
                        <li>
                            <span class="dark:text-sky-400">XP</span>
                            работа в паре и тестирование
                        </li>
                        <li>
                            <span class="dark:text-sky-400">RAD</span>
                            rapid application development
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h2>Programming models</h2>
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
                            <ul>
                                <li>чистые функции детерминированые, без побочных эффектов</li>
                                <li>функции высших порядков функция принимающая другую функцию</li>
                                <li>композиция функций общий path - типы данных</li>
                                <li>имутабельность данных функция не должна изменять переданный аргумент только
                                    создать
                                    копию и
                                    его
                                </li>
                                <li>каррироваие</li>
                            </ul>
                        </li>
                    </ul>
                </article>
            </div>

            <div class="space-y-8">
                <article class="dark:bg-slate-800 hover:drop-shadow-md">
                    <h2>Data structures</h2>
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
                    <h2>Network protocols</h2>
                    <ul>
                        <li>
                            <span class="dark:text-sky-400">RESTful</span>
                            <ul>
                                <li>модель клиент-сервер</li>
                                <li>отсутствие состояния</li>
                                <li>кэширование</li>
                                <li>единообразие интерфейса</li>
                                <li>слои</li>
                                <li>код по требованию</li>
                            </ul>
                        </li>
                        <li>GraphQl</li>
                        <li>Web APIs</li>
                        <li>Web sockets - Протоколы</li>
                        <li>Web Workers фоновый поток выполнения</li>
                        <li>JWT JSON Web Token</li>
                        <li>CRUD create, read, update, delete</li>
                        <li>
                            ACID Atomicity | Consistency | Isolation | Durability
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

.pattern h2 {
    @apply text-base font-semibold text-center;
}

.pattern li {
    @apply border-b border-slate-400/10 mb-3;
}

.pattern span {
    /* @apply text-sky-500 font-mono; */
    @apply text-teal-500 font-mono;
}
</style>