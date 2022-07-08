<template>
    <h2 class="text-2xl text-center">Simple image gallery</h2>
    <!-- Photo Grid -->
    <div class="archwork row" @click="showImghArchWork" ref="archwork">
        <div class="column">
            <img src="/src/assets/arch_work/1.jpg">
            <img src="/src/assets/arch_work/2.jpg">
            <img src="/src/assets/arch_work/3.jpg">
            <img src="/src/assets/arch_work/4.jpg">
            <img src="/src/assets/arch_work/5.jpg">
            <img src="/src/assets/arch_work/6.jpg">
            <img src="/src/assets/arch_work/7.jpg">
            <img src="/src/assets/arch_work/8.jpg">
            <img src="/src/assets/arch_work/9.jpg">
            <img src="/src/assets/arch_work/10.jpg">
            <img src="/src/assets/arch_work/11.jpg">
            <img src="/src/assets/arch_work/12.jpg">
            <img src="/src/assets/arch_work/13.jpg">
            <img src="/src/assets/arch_work/14.jpg">
            <img src="/src/assets/arch_work/15.jpg">
            <img src="/src/assets/arch_work/16.jpg">
        </div>
        <div class="column">
            <img src="/src/assets/arch_work/17.jpg">
            <img src="/src/assets/arch_work/18.jpg">
            <img src="/src/assets/arch_work/19.jpg">
            <img src="/src/assets/arch_work/20.jpg">
            <img src="/src/assets/arch_work/21.jpg">
            <img src="/src/assets/arch_work/22.jpg">
            <img src="/src/assets/arch_work/23.jpg">
            <img src="/src/assets/arch_work/24.jpg">
            <img src="/src/assets/arch_work/25.jpg">
            <img src="/src/assets/arch_work/26.jpg">
            <img src="/src/assets/arch_work/27.jpg">
            <img src="/src/assets/arch_work/28.jpg">
            <img src="/src/assets/arch_work/29.jpg">
            <img src="/src/assets/arch_work/30.jpg">
            <img src="/src/assets/arch_work/31.jpg">
            <img src="/src/assets/arch_work/32.jpg">
        </div>
        <div class="column">
            <img src="/src/assets/arch_work/33.jpg">
            <img src="/src/assets/arch_work/34.jpg">
            <img src="/src/assets/arch_work/35.jpg">
            <img src="/src/assets/arch_work/36.jpg">
            <img src="/src/assets/arch_work/37.jpg">
            <img src="/src/assets/arch_work/38.jpg">
            <img src="/src/assets/arch_work/39.jpg">
            <img src="/src/assets/arch_work/40.jpg">
            <img src="/src/assets/arch_work/41.jpg">
            <img src="/src/assets/arch_work/42.jpg">
            <img src="/src/assets/arch_work/43.jpg">
            <img src="/src/assets/arch_work/44.jpg">
            <img src="/src/assets/arch_work/45.jpg">
            <img src="/src/assets/arch_work/46.jpg">
            <img src="/src/assets/arch_work/47.jpg">
            <img src="/src/assets/arch_work/48.jpg">
        </div>
        <div class="column">
            <img src="/src/assets/arch_work/49.jpg">
            <img src="/src/assets/arch_work/50.jpg">
            <img src="/src/assets/arch_work/51.jpg">
            <img src="/src/assets/arch_work/52.jpg">
            <img src="/src/assets/arch_work/53.jpg">
            <img src="/src/assets/arch_work/54.jpg">
            <img src="/src/assets/arch_work/55.jpg">
            <img src="/src/assets/arch_work/56.jpg">
            <img src="/src/assets/arch_work/57.jpg">
            <img src="/src/assets/arch_work/58.jpg">
            <img src="/src/assets/arch_work/59.jpg">
            <img src="/src/assets/arch_work/60.jpg">
            <img src="/src/assets/arch_work/61.jpg">
            <img src="/src/assets/arch_work/62.jpg">
            <img src="/src/assets/arch_work/63.jpg">
            <img src="/src/assets/arch_work/64.jpg">
        </div>
    </div>
    <button @click="showMore"
        class="border rounded border-teal-500 px-1 cursor-pointer text-white hover:text-teal-500 dark:hover:text-teal-500 bg-teal-500 hover:bg-inherit mx-auto block mt-2.5">
        Show more
    </button>
</template>

<style>
.archwork.row {
    display: -ms-flexbox;
    /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap;
    /* IE10 */
    flex-wrap: wrap;
    padding: 0 4px;
    position: relative;
    height: 600px;
    overflow: hidden;
    background-color: white;
}

/* Create four equal columns that sits next to each other */
.archwork .column {
    -ms-flex: 25%;
    /* IE10 */
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
}

.archwork .column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
    cursor: pointer;
}

.archworkBg:before {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.5;
}

.archwork:after {
    content: "";
    display: block;
    position: absolute;
    height: 150px;
    width: 100%;
    bottom: 0;
    background: linear-gradient(transparent, white);
}

.archworkImgFull {
    position: absolute;
    left: 0;
    right: 0;
    width: 80% !important;
    margin: 0 auto;
    @apply border-4 border-teal-500;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
    .archwork .column {
        -ms-flex: 50%;
        flex: 50%;
        max-width: 50%;
    }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
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
        }
    }
}
</script>