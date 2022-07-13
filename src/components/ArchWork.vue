<template>
    <div class="archwork row after:dark:to-slate-900" @click="showImghArchWork" ref="archwork">
        <div class="column">
            <img src="/src/assets/arch_work/1.jpg" alt="Architect">
            <img src="/src/assets/arch_work/2.jpg" alt="Architect">
            <img src="/src/assets/arch_work/3.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/4.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/5.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/6.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/7.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/8.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/9.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/10.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/11.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/12.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/13.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/14.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/15.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/16.jpg" loading="lazy" alt="Architect">
        </div>
        <div class="column">
            <img src="/src/assets/arch_work/17.jpg" alt="Architect">
            <img src="/src/assets/arch_work/18.jpg" alt="Architect">
            <img src="/src/assets/arch_work/19.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/20.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/21.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/22.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/23.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/24.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/25.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/26.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/27.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/28.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/29.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/30.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/31.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/32.jpg" loading="lazy" alt="Architect">
        </div>
        <div class="column">
            <img src="/src/assets/arch_work/33.jpg" alt="Architect">
            <img src="/src/assets/arch_work/34.jpg" alt="Architect">
            <img src="/src/assets/arch_work/35.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/36.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/37.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/38.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/39.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/40.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/41.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/42.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/43.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/44.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/45.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/46.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/47.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/48.jpg" loading="lazy" alt="Architect">
        </div>
        <div class="column">
            <img src="/src/assets/arch_work/49.jpg" alt="Architect">
            <img src="/src/assets/arch_work/50.jpg" alt="Architect">
            <img src="/src/assets/arch_work/51.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/52.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/53.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/54.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/55.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/56.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/57.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/58.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/59.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/60.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/61.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/62.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/63.jpg" loading="lazy" alt="Architect">
            <img src="/src/assets/arch_work/64.jpg" loading="lazy" alt="Architect">
        </div>
    </div>
    <button @click="showMore" ref="archworkBtn"
        class="border rounded border-teal-500 px-1 cursor-pointer text-white hover:text-teal-500 dark:hover:text-teal-500 bg-teal-500 hover:bg-inherit mx-auto block mt-2.5">
        Show more
    </button>
</template>

<style>
.archwork.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 4px;
    position: relative;
    height: 600px;
    overflow: hidden;
}

.archwork .column {
    -ms-flex: 25%;
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
}

.archwork .column img {
    @apply cursor-pointer w-full mt-2 align-middle;
}

.archwork .column img:not(.archworkImgFull):hover {
    filter: brightness(0.4);
}

.archworkBg:before {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.8;
}

.archwork:after {
    content: "";
    @apply bg-gradient-to-b from-transparent to-gray-100 absolute h-36 w-full bottom-0 block;
}

.archworkImgFull {
    @apply absolute inset-x-0 !w-4/5 mx-auto rounded-xl;
}

@media screen and (max-width: 800px) {
    .archwork .column {
        -ms-flex: 50%;
        flex: 50%;
        max-width: 50%;
    }
}

@media screen and (max-width: 600px) {
    .archwork .column {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
    }
}
</style>

<script>
export default {
    methods: {
        showImghArchWork(e) {
            if (e.target.tagName !== "DIV") {
                e.target.classList.toggle("archworkImgFull");
                document.querySelector('.archwork').classList.toggle("archworkBg");
                this.$refs.archwork.style.height = 'max-content'
            }
        },
        showMore() {
            this.$refs.archwork.style.height = 'max-content'
            this.$refs.archworkBtn.style.display = 'none'
        }
    }
}
</script>