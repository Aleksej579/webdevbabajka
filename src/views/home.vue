<template>
    <div class="main max-w-7xl mx-auto p-3 flex flex-col items-center md:flex-row justify-around ">
        <img class="header__logoTree w-40 h-auto z-10" src="/src/assets/tree.png" alt="WebDev">
        <!-- <figure class="card w-full md:w-1/2">
            <figcaption>
                Text
            </figcaption>
        </figure> -->
    </div>
</template>

<style>
.card {
    @apply h-52 bg-slate-800 text-slate-400 p-5;
    border: 5px solid;
    border-image: linear-gradient(#ff512f, #dd2476, #1c64ff) 1;
    animation: rotate 2.5s ease-in infinite;
}

@keyframes rotate {
    50% {
        border-image: linear-gradient(360deg, #dd2476, #1c64ff) 1;
    }
}
</style>