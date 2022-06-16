<template>
    <div class="main container max-w-7xl mx-auto pb-8">
        <h1 class="text-2xl text-center">PATTERNS</h1>

        <div class="relative rounded-xl overflow-hidden bg-slate-800/25 w-4/5 mx-auto">
            <div style="background-position:10px 10px;"
                class="absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]">
            </div>
            <div class="relative rounded-xl overflow-auto p-8">
                <div class="grid lg:grid-cols-3 gap-4 text-white text-sm text-center font-bold leading-6">

                    <article class="flex flex-col items-center shrink-0">
                        <h2 class="text-2xl font-medium font-mono text-center mb-3 text-slate-400">
                            OOP</h2>
                        <ul class="p-4 shadow-sm bg-slate-900 border-indigo-500/100 border-4 text-left">
                            <li><b>Инкапсуляция</b><i> - изменение объекта его же методами.</i></li>
                            <li><b>Наследование</b><i> - переиспользование полей и методов другого класса.</i></li>
                            <li><b>Полиморфизм</b><i> - способность функции работать с данными разных типов.</i>
                            </li>
                            <li><b>Абстракция</b><i>?</i></li>
                        </ul>
                    </article>

                    <article class="flex flex-col items-center shrink-0">
                        <h2 class="text-2xl font-medium font-mono text-center mb-3 text-slate-400">
                            SOLID</h2>
                        <ul class="p-4 shadow-sm bg-slate-900 border-indigo-500/100 border-4 text-left">
                            <li><b>SRP</b><i> - объект отвечает только за одно дело.</i></li>
                            <li><b>OCP</b><i> - программные сущности открыты для расширения но закрыты для
                                    модификации.</i></li>
                            <li><b>LSP</b><i> - где используется базовый класс должен подходить и его наследуемый
                                    класс.</i>
                            </li>
                            <li><b>ISP</b><i> - много интерфейсов для клиента лучше чем один интерфейс общего
                                    назначения.</i>
                            </li>
                            <li><b>DIP</b><i> - использовать все классы через интерфейсы.</i></li>
                        </ul>
                    </article>

                    <article class="flex flex-col items-center shrink-0">
                        <h2 class="text-2xl font-medium font-mono text-center mb-3 text-slate-400">
                            GRASP</h2>
                        <ul class="p-4 shadow-sm bg-slate-900 border-indigo-500/100 border-4 text-left">
                            <li><b>Information Expert</b><i> - информация должна обрабатываться там где находится.</i>
                            </li>
                            <li><b>Creator</b><i> - объект создаваться там где его используют.</i></li>
                            <li><b>Controller</b><i> - ловить многопоточность на входе и превращать в один поток.</i>
                            </li>
                            <li><b>Low Coupling</b><i> - между разными объектами должно быть минимум связей.</i></li>
                            <li><b>High Cohesion</b><i> - в одном объекте должны быть идентичные сущности, а непохожие в
                                    другом
                                    месте.</i></li>
                            <li><b>Polymorphism</b><i> - разное поведение объектов можно программировать на основе
                                    разного код
                                    класса.</i></li>
                            <li><b>Pure Fabrication</b><i></i></li>
                            <li><b>Indirection</b><i> - объект зависит не от другого объекта а от его интерфейса.</i>
                            </li>
                            <li><b>Protected Variations</b><i> - любые изменения в коде должны минимально его
                                    ломать.</i></li>
                        </ul>
                    </article>

                    <article class="flex flex-col items-center shrink-0">
                        <h2 class="text-2xl font-medium font-mono text-center mb-3 text-slate-400">
                            GOF - Creation</h2>
                        <ul class="p-4 shadow-sm bg-slate-900 border-indigo-500/100 border-4 text-left">
                            <li><b>Information Expert</b><i> - создает семейство взаимосвязанных объектов.</i></li>
                            <li><b>Builder</b><i> - поэтапное создание сложного объекта.</i></li>
                            <li><b>Factory Method</b><i> - определяет интерфейс для создания объекта, при этом его тип
                                    определяется подклассами.</i></li>
                            <li><b>Object Pool</b><i> - создание "затратных" объектов за счет их многократного
                                    использования.</i>
                            </li>
                            <li><b>Prototype</b><i> - создание объектов на основе прототипов.</i></li>
                            <li><b>Singleton</b><i> - создает единственный экземпляр некоторого класса и предоставляет к
                                    нему доступ.</i></li>
                        </ul>
                    </article>

                    <article class="flex flex-col items-center shrink-0">
                        <h2 class="text-2xl font-medium font-mono text-center mb-3 text-slate-400">
                            GOF - Structural</h2>
                        <ul class="p-4 shadow-sm bg-slate-900 border-indigo-500/100 border-4 text-left">
                            <li><b>Adapter</b><i> - преобразует интерфейс существующего класса к виду, подходящему для
                                    использования.</i></li>
                            <li><b>Bridge</b><i> - делает абстракцию и реализацию независимыми друг от друга.</i></li>
                            <li><b>Composite</b><i> - группирует схожие объекты в древовидные структуры.</i></li>
                            <li><b>Decorator</b><i> - динамически добавляет объекту новую функциональность.</i></li>
                            <li><b>Facade</b><i> - предоставляет унифицированный интерфейс вместо набора интерфейсов
                                    некоторой системы.</i></li>
                            <li><b>Flyweight</b><i> - использует разделение для поддержки множества мелких объектов.</i>
                            </li>
                            <li><b>Proxy</b><i> - подменяет другой объект для контроля доступа к нему.</i></li>
                        </ul>
                    </article>

                    <article class="flex flex-col items-center shrink-0">
                        <h2 class="text-2xl font-medium font-mono text-center mb-3 text-slate-400">
                            GOF - Behavioral</h2>
                        <ul class="p-4 shadow-sm bg-slate-900 border-indigo-500/100 border-4 text-left">
                            <li><b>Chain of Responsibility</b><i> - предоставляет способ передачи запроса по цепочке
                                    получателей.</i>
                            </li>
                            <li><b>Command</b><i> - инкапсулирует запрос в виде объекта.</i></li>
                            <li><b>Interpreter</b><i> - для языка определяет его грамматику и интерпретатор,
                                    использующий эту
                                    грамматику.</i></li>
                            <li><b>Iterator</b><i> - предоставляет механизм обхода элементов коллекции.</i></li>
                            <li><b>Mediator</b><i> - инкапсулирует взаимодействие между множеством объектов в
                                    объект-посредник.</i>
                            </li>
                            <li><b>Memento</b><i> - сохраняет и восстанавливает состояние объекта.</i></li>
                            <li><b>Observer</b><i> - при изменении объекта извещает всех зависимые объекты для их
                                    обновления.</i>
                            </li>
                            <li><b>State</b><i> - изменяет поведение объекта при изменении его состояния.</i></li>
                            <li><b>Strategy</b><i>- переносит алгоритмы в отдельную иерархию классов, делая их
                                    взаимозаменяемыми.</i>
                            </li>
                            <li><b>Template method</b><i> - определяет шаги алгоритма, позволяя подклассам изменить
                                    некоторые из них.</i></li>
                            <li><b>Visitor</b><i> - определяет новую операцию в классе без его изменения.</i></li>
                        </ul>
                    </article>

                    <article class="flex flex-col items-center shrink-0">
                        <h2 class="text-2xl font-medium font-mono text-center mb-3 text-slate-400">
                            Акроним</h2>
                        <ul class="p-4 shadow-sm bg-slate-900 border-indigo-500/100 border-4 text-left">
                            <li><b>KISS</b><i> делай проще</i></li>
                            <li><b>DRY</b><i> не повторяйся</i></li>
                            <li><b>YAGNI</b><i> тебе это не понадобиться</i></li>
                            <li>
                                <b>SMART</b>
                                <ul>
                                    <li>specific <i>конкретная</i></li>
                                    <li>measurable <i>измеримая</i></li>
                                    <li>attainable <i>достижимая</i></li>
                                    <li>relevant <i>уместная или актуальная</i></li>
                                    <li>time-bound <i>ограниченная по времени</i></li>
                                </ul>
                            </li>
                        </ul>
                    </article>

                    <article class="flex flex-col items-center shrink-0">
                        <h2 class="text-2xl font-medium font-mono text-center mb-3 text-slate-400">
                            Software architecture pattern</h2>
                        <ul class="p-4 shadow-sm bg-slate-900 border-indigo-500/100 border-4 text-left">
                            <li><b>MVC</b><i>Model-View-Controller</i></li>
                            <li><b>HMVC</b><i>Hierarchical model–view–controller</i></li>
                            <li><b>MVVM</b><i>Model-View-View Model</i></li>
                            <li><b>MVP</b><i>Model-View-Presenter</i></li>
                            <li><b>CQRS</b><i>comand or request in unit time</i></li>
                            <li><b>Flux</b><i>(State) dispatcher, stores, views</i></li>
                            <li><b>Microservice architecture</b><i></i></li>
                        </ul>
                    </article>

                    <article class="flex flex-col items-center shrink-0">
                        <h2 class="text-2xl font-medium font-mono text-center mb-3 text-slate-400">
                            Agile</h2>
                        <ul class="p-4 shadow-sm bg-slate-900 border-indigo-500/100 border-4 text-left">
                            <li><b>Scrum</b><i> итерации, наращивание функциональности</i></li>
                            <li><b>Lean</b><i> бережливое производство</i></li>
                            <li><b>Kanban</b><i> перемещение задач по статусам</i></li>
                            <li><b>RUP</b><i> inception | elaboration | construction | transition</i></li>
                            <li><b>XP</b><i> работа в паре и тестирование</i></li>
                            <li><b>RAD</b><i> rapid application development</i></li>
                        </ul>
                    </article>

                    <article class="flex flex-col items-center shrink-0">
                        <h2 class="text-2xl font-medium font-mono text-center mb-3 text-slate-400">
                            Programming models</h2>
                        <ul class="p-4 shadow-sm bg-slate-900 border-indigo-500/100 border-4 text-left">
                            <li><b>Императивный</b><i> что?</i></li>
                            <li><b>Декларативный</b><i> как?</i></li>
                            <li><b>Структурное</b></li>
                            <li><b>Реактивное</b></li>
                            <li><b>Контрактное</b></li>
                            <li>
                                <b>Функциональное 'BigO'</b>
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

                    <article class="flex flex-col items-center shrink-0">
                        <h2 class="text-2xl font-medium font-mono text-center mb-3 text-slate-400">
                            Data structures</h2>
                        <ul class="p-4 shadow-sm bg-slate-900 border-indigo-500/100 border-4 text-left">
                            <li><b>number, string, boolean, NaN, undefined, infinity, BigInt;</b></li>
                            <li><b>Array</b></li>
                            <li><b>Stack</b><i> LIFO</i></li>
                            <li><b>Queue</b><i> FIFO</i></li>
                            <li><b>Linked list</b></li>
                            <li><b>Tree</b></li>
                            <li><b>Trie</b></li>
                            <li><b>Graph</b></li>
                            <li><b>Set</b></li>
                            <li><b>Map</b></li>
                            <li><b>Hash table</b></li>
                        </ul>
                    </article>

                    <article class="flex flex-col items-center shrink-0">
                        <h2 class="text-2xl font-medium font-mono text-center mb-3 text-slate-400">
                            Network protocols</h2>
                        <ul class="p-4 shadow-sm bg-slate-900 border-indigo-500/100 border-4 text-left">
                            <li>
                                <b>RESTful</b>
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
                            <li>ACID Atomicity | Consistency | Isolation | Durability</li>
                        </ul>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>