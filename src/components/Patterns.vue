<template>
    <div class="main container max-w-7xl mx-auto p-3">
        <h1 class="text-2xl text-center">PATTERNS</h1>
        <section class="sm:px-3 md:px-5 grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class=" space-y-8">
                <article class="dark:bg-slate-800">
                    <h2 class="text-base font-semibold text-center">{{ t('oop') }}</h2>
                    <ul>
                        <li class="border-b border-slate-400/10 mb-3">
                            <span class="text-sky-400 font-mono">{{ t('oopEnc') }}</span>
                            - {{ t('oopEncDesc') }}
                        </li>
                        <li class="border-b border-slate-400/10 mb-3">
                            <span class="text-sky-400 font-mono">{{ t('oopInherit') }}</span>
                            - {{ t('oopInheritDesc') }}.
                        </li>
                        <li class="border-b border-slate-400/10 mb-3">
                            <span class="text-sky-400 font-mono">{{ t('oopPoly') }}</span>
                            - {{ t('oopPolyDesc') }}.
                        </li>
                        <li>
                            <span class="text-sky-400 font-mono">{{ t('oopAbstract') }}</span>
                        </li>
                    </ul>

                </article>
                <article class="dark:bg-slate-800">
                    <h2 class="text-base font-semibold text-center">SOLID</h2>
                    <ul>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">SRP</span>
                            - объект отвечает только за одно дело.
                        </li>
                        <li class=" border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">OCP</span>
                            - программные сущности открыты для расширения но закрыты для модификации.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">LSP</span>
                            - где используется базовый класс должен подходить и его наследуемый класс.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">ISP</span>
                            - много интерфейсов для клиента лучше чем один интерфейс общего назначения.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">DIP</span>
                            - использовать все классы через интерфейсы.
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800">
                    <h2 class="text-base font-semibold text-center">GRASP</h2>
                    <ul>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Information Expert</span>
                            - информация должна обрабатываться там где находится
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Creator</span>
                            - объект создаваться там где его используют.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Controller</span>
                            - ловить многопоточность на входе и превращать в один поток.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Low Coupling</span>
                            - между разными объектами должно быть минимум связей.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">High Cohesion</span>
                            - в одном объекте должны быть идентичные сущности, а непохожие в другом месте.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Polymorphism</span>
                            - разное поведение объектов можно программировать на основе разного код класса.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Pure Fabrication</span>
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Indirection</span>
                            - объект зависит не от другого объекта а от его интерфейса.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Protected Variations</span>
                            - любые изменения в коде должны минимально его ломать.
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800">
                    <h2 class="text-base font-semibold text-center">GOF - Creation</h2>
                    <ul>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Information Expert</span>
                            - создает семейство взаимосвязанных объектов.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Builder</span>
                            - поэтапное создание сложного объекта.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Factory Method</span>
                            - определяет интерфейс для создания объекта, при этом его тип определяется подклассами.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Object Pool</span>
                            - создание "затратных" объектов за счет их многократного использования.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Prototype</span>
                            - создание объектов на основе прототипов.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Singleton</span>
                            - создает единственный экземпляр некоторого класса и предоставляет к нему доступ.
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800">
                    <h2 class="text-base font-semibold text-center">GOF - Structural</h2>
                    <ul>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Adapter</span>
                            - преобразует интерфейс существующего класса к виду, подходящему для использования.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Bridge</span>
                            - делает абстракцию и реализацию независимыми друг от друга.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Composite</span>
                            - группирует схожие объекты в древовидные структуры.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Decorator</span>
                            - динамически добавляет объекту новую функциональность.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Facade</span>
                            - предоставляет унифицированный интерфейс вместо набора интерфейсов некоторой системы.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Flyweight</span>
                            - использует разделение для поддержки множества мелких объектов.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Proxy</span>
                            - подменяет другой объект для контроля доступа к нему.
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800">
                    <h2 class="text-base font-semibold text-center">GOF - Behavioral</h2>
                    <ul>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Chain of Responsibility</span>
                            - предоставляет способ передачи запроса по цепочке получателей.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Command</span>
                            - инкапсулирует запрос в виде объекта.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Interpreter</span>
                            - для языка определяет его грамматику и интерпретатор, использующий эту грамматику.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Iterator</span>
                            - предоставляет механизм обхода элементов коллекции.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Mediator</span>
                            - инкапсулирует взаимодействие между множеством объектов в объект-посредник.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Memento</span>
                            - сохраняет и восстанавливает состояние объекта.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Observer</span>
                            - при изменении объекта извещает всех зависимые объекты для их обновления.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">State</span>
                            - изменяет поведение объекта при изменении его состояния.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Strategy</span>
                            - переносит алгоритмы в отдельную иерархию классов, делая их взаимозаменяемыми.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Template method</span>
                            - определяет шаги алгоритма, позволяя подклассам изменить некоторые из них.
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Visitor</span>
                            - определяет новую операцию в классе без его изменения.
                        </li>
                    </ul>
                </article>
            </div>

            <div class="space-y-8">
                <article class="dark:bg-slate-800">
                    <h2 class="text-base font-semibold text-center">Акроним</h2>
                    <ul>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">KISS</span>
                            делай проще
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">DRY</span>
                            не повторяйся
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">YAGNI</span>
                            тебе это не понадобиться
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">SMART</span>
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
                <article class="dark:bg-slate-800">
                    <h2 class="text-base font-semibold text-center">Software architecture pattern</h2>
                    <ul>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">MVC</span>
                            Model-View-Controller
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">HMVC</span>
                            Hierarchical model–view–controller
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">MVVM</span>
                            Model-View-View Model
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">MVP</span>
                            Model-View-Presenter
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">CQRS</span>
                            comand or request in unit time
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Flux</span>
                            (State) dispatcher, stores, views
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Microservice architecture</span>
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800">
                    <h2 class="text-base font-semibold text-center">Agile</h2>
                    <ul>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Scrum</span>
                            итерации, наращивание функциональности
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Lean</span>
                            бережливое производство
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Kanban</span>
                            перемещение задач по статусам
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">RUP</span>
                            inception | elaboration | construction | transition
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">XP</span>
                            работа в паре и тестирование
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">RAD</span>
                            rapid application development
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800">
                    <h2 class="text-base font-semibold text-center">Programming models</h2>
                    <ul>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Императивный</span>
                            что?
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Декларативный</span>
                            как?
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Структурное</span>
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Реактивное</span>
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Контрактное</span>
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Функциональное 'BigO'</span>
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
                <article class="dark:bg-slate-800">
                    <h2 class="text-base font-semibold text-center">Data structures</h2>
                    <ul>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">
                                number, string, boolean, NaN, undefined, infinity, BigInt;
                            </span>
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Array</span>
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Stack</span>
                            LIFO
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Queue</span>
                            FIFO
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Linked list</span>
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Tree</span>
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Trie</span>
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Graph</span>
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Set</span>
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Map</span>
                        </li>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">Hash table</span>
                        </li>
                    </ul>
                </article>
                <article class="dark:bg-slate-800">
                    <h2 class="text-base font-semibold text-center">Network protocols</h2>
                    <ul>
                        <li class="border-b border-slate-400/10">
                            <span class="text-sky-400 font-mono">RESTful</span>
                            <ul>
                                <li>модель клиент-сервер</li>
                                <li>отсутствие состояния</li>
                                <li>кэширование</li>
                                <li>единообразие интерфейса</li>
                                <li>слои</li>
                                <li>код по требованию</li>
                            </ul>
                        </li>
                        <li class="border-b border-slate-400/10">GraphQl</li>
                        <li class="border-b border-slate-400/10">Web APIs</li>
                        <li class="border-b border-slate-400/10">Web sockets - Протоколы</li>
                        <li class="border-b border-slate-400/10">Web Workers фоновый поток выполнения</li>
                        <li class="border-b border-slate-400/10">JWT JSON Web Token</li>
                        <li class="border-b border-slate-400/10">CRUD create, read, update, delete</li>
                        <li class="border-b border-slate-400/10">
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
article {
    @apply rounded-lg p-6 bg-slate-300;
}
</style>