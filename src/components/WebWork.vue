<template>
    <h2 class="text-2xl text-center">My work</h2>
    <!-- Photo Grid -->
    <div class="webWork row after:dark:to-slate-900" @click="showImghWebWork" ref="webWork">
        <div class="column">
            <img src="/src/assets/web_work/shopify-1.jpg" alt="Web">
            <img src="/src/assets/web_work/shopify-2.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/shopify-3.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/naturetour.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/errors.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/istar.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/darly-angular.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/darly-react.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/python-tkinter.jpg" loading="lazy" alt="Web">
        </div>
        <div class="column">
            <img src="/src/assets/web_work/intertool-1.jpg" alt="Web">
            <img src="/src/assets/web_work/intertool-2.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/intertool-3.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/mirinstrumenta.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/vlasov.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/test-intertool.jpg" loading="lazy" alt="Web">
        </div>
        <div class="column">
            <img src="/src/assets/web_work/art-coral-1.jpg" alt="Web">
            <img src="/src/assets/web_work/art-coral-2.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/art-coral-3.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/art-coral-4.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/tesey.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/misma-1.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/misma-2.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/ok-guru-1.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/ok-guru-2.jpg" loading="lazy" alt="Web">
        </div>
        <div class="column">
            <img src="/src/assets/web_work/yoga.jpg" alt="Web">
            <img src="/src/assets/web_work/big-drop.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/ho-studio.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/robots.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/uikit-calendar.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/order.jpg" loading="lazy" alt="Web">
            <img src="/src/assets/web_work/weather-vue.jpg" loading="lazy" alt="Web">
        </div>
    </div>
    <button @click="showMore"
        class="border rounded border-teal-500 px-1 cursor-pointer text-white hover:text-teal-500 dark:hover:text-teal-500 bg-teal-500 hover:bg-inherit mx-auto block mt-2.5">
        Show more
    </button>
</template>

<style>
.webWork.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 4px;
    position: relative;
    height: 600px;
    overflow: hidden;
}

.webWork .column {
    -ms-flex: 25%;
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
}

.webWork .column img {
    @apply cursor-pointer w-full mt-2 align-middle;
}

.webWork .column img:not(.webWorkImgFull):hover {
    filter: brightness(0.4);
}

.webWorkBg:before {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.8;
}

.webWork:after {
    content: "";
    @apply bg-gradient-to-b from-transparent to-gray-100 absolute h-36 w-full bottom-0 block;
}

.webWorkImgFull {
    @apply absolute inset-x-0 !w-4/5 mx-auto rounded-xl;
}

@media screen and (max-width: 800px) {
    .webWork .column {
        -ms-flex: 50%;
        flex: 50%;
        max-width: 50%;
    }
}

@media screen and (max-width: 600px) {
    .webWork .column {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
    }
}
</style>

<script>
export default {
    methods: {
        showImghWebWork(e) {
            if (e.target.tagName !== "DIV") {
                e.target.classList.toggle("webWorkImgFull");
                document.querySelector('.webWork').classList.toggle("webWorkBg");
                this.$refs.webWork.style.height = 'max-content'
            }

        },
        showMore() {
            this.$refs.webWork.style.height = 'max-content'
        }
    }
}
</script>