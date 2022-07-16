<template>
    <a class="go-to-top hover:text-teal-600 sm:bottom-12 sm:right-12 " href="#" title="Go to top">
        <i class="fa-solid fa-circle-arrow-up fa-2xl"></i>
    </a>
</template>

<style>
.go-to-top {
    @apply h-8 w-8 block rounded-full text-teal-500 cursor-pointer fixed bottom-8 right-5 z-30;
    animation: pulse 2000ms infinite;
}

@keyframes pulse {
    0% {
        box-shadow: #59baa6 0 0 0 0;
    }

    75% {
        box-shadow: #59baa600 0 0 0 16px;
    }
}
</style>