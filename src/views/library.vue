<template>
    <div class="main container max-w-7xl mx-auto p-3 min-h-screen">
        <h2 class="text-2xl text-center">3D</h2>
        <section class="box3d_wrp flex flex-wrap justify-around gap-8">
            <article id="box3d1" ref="box3d1" @click="box3dRotate1">
                <div class="side-center"><span>NATURE-1</span></div>
                <div class="side-left"><span>NATURE-2</span></div>
                <div class="side-back"><span>NATURE-3</span></div>
                <div class="side-right"><span>NATURE-4</span></div>
            </article>
            <article id="box3d2" ref="box3d2" @click="box3dRotate2">
                <div class="side-center"><span>HOME-1</span></div>
                <div class="side-left"><span>HOME-2</span></div>
                <div class="side-back"><span>HOME-3</span></div>
                <div class="side-right"><span>HOME-4</span></div>
            </article>
            <article id="box3d3" ref="box3d3" @click="box3dRotate3">
                <div class="side-center"><span>SCULPTURE-1</span></div>
                <div class="side-left"><span>SCULPTURE-2</span></div>
                <div class="side-back"><span>SCULPTURE-3</span></div>
                <div class="side-right"><span>SCULPTURE-4</span></div>
            </article>
            <article id="box3d4" ref="box3d4" @click="box3dRotate4">
                <div class="side-center"><span>ART-1</span></div>
                <div class="side-left"><span>ART-2</span></div>
                <div class="side-back"><span>ART-3</span></div>
                <div class="side-right"><span>ART-4</span></div>
            </article>
            <article id="box3d5" ref="box3d5" @click="box3dRotate5">
                <div class="side-center"><span>WEAPON-1</span></div>
                <div class="side-left"><span>WEAPON-2</span></div>
                <div class="side-back"><span>WEAPON-3</span></div>
                <div class="side-right"><span>WEAPON-4</span></div>
            </article>
        </section>

        <!-- <section>
            <div id="scene">
                <div data-depth="0.2" class="w-5 h-5 p-5 bg-slate-300 border"></div>
                <div data-depth="0.6" class="w-5 h-5 p-5 bg-slate-600 border"></div>
            </div>
        </section> -->
    </div>
</template>

<script>
// import Parallax from 'parallax-js'
export default {
    data() {
        return {
            box3d: {
                degValue1: 90,
                degValue2: 90,
                degValue3: 90,
                degValue4: 90,
                degValue5: 90,
            }
        };
    },
    methods: {
        box3dRotate1() {
            this.$refs.box3d1.style.transform = `rotateY(${this.box3d.degValue1}deg)`;
            this.box3d.degValue1 += 90;
        },
        box3dRotate2() {
            this.$refs.box3d2.style.transform = `rotateY(${this.box3d.degValue2}deg)`;
            this.box3d.degValue2 += 90;
        },
        box3dRotate3() {
            this.$refs.box3d3.style.transform = `rotateY(${this.box3d.degValue3}deg)`;
            this.box3d.degValue3 += 90;
        },
        box3dRotate4() {
            this.$refs.box3d4.style.transform = `rotateY(${this.box3d.degValue4}deg)`;
            this.box3d.degValue4 += 90;
        },
        box3dRotate5() {
            this.$refs.box3d5.style.transform = `rotateY(${this.box3d.degValue5}deg)`;
            this.box3d.degValue5 += 90;
        },
    },
    // mounted() {
    //     var scene = document.getElementById('scene');
    //     var parallaxInstance = new Parallax(scene);
    // }
}
</script>

<style>
.box3d_wrp {
    position: relative;
    margin: 0 auto;
}

.box3d_wrp article {
    height: 500px;
    width: 200px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transform-origin: 100px 0 -100px;
    transition: 1.5s ease;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    @apply cursor-move;
}

.box3d_wrp span {
    @apply bg-slate-800/75 text-teal-500 cursor-pointer;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 10%;
}

.box3d_wrp span:hover {
    border: 3px solid tomato;
}

.side-center,
.side-left,
.side-back,
.side-right {
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.side-center {
    left: 0px;
}

.side-left {
    left: -100%;
    transform: rotateY(-90deg);
    transform-origin: 100% 0;
}

.side-back {
    left: -200%;
    transform: rotateY(180deg);
    transform-origin: 300px 0 -100px;
}

.side-right {
    left: 100%;
    transform: rotateY(90deg);
    transform-origin: 0 0;
}

/* 1 */
#box3d1 .side-center {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/nature_1.jpg") no-repeat;
}

#box3d1 .side-left {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/nature_2.jpg") no-repeat;
}

#box3d1 .side-back {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/nature_3.jpg") no-repeat;
}

#box3d1 .side-right {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/nature_4.jpg") no-repeat;
}

/* 2 */
#box3d2 .side-center {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/home_1.jpg") no-repeat;
}

#box3d2 .side-left {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/home_2.jpg") no-repeat;
}

#box3d2 .side-back {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/home_3.jpg") no-repeat;
}

#box3d2 .side-right {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/home_4.jpg") no-repeat;
}

/* 3 */
#box3d3 .side-center {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/sculpture_1.jpg") no-repeat;
}

#box3d3 .side-left {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/sculpture_2.jpg") no-repeat;
}

#box3d3 .side-back {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/sculpture_3.jpg") no-repeat;
}

#box3d3 .side-right {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/sculpture_4.jpg") no-repeat;
}

/* 4 */
#box3d4 .side-center {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/art_1.jpg") no-repeat;
}

#box3d4 .side-left {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/art_2.jpg") no-repeat;
}

#box3d4 .side-back {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/art_3.jpg") no-repeat;
}

#box3d4 .side-right {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/art_4.jpg") no-repeat;
}

/* 5 */
#box3d5 .side-center {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/weapon_1.jpg") no-repeat;
}

#box3d5 .side-left {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/weapon_2.jpg") no-repeat;
}

#box3d5 .side-back {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/weapon_3.jpg") no-repeat;
}

#box3d5 .side-right {
    background: url("/src/assets/bg2.png") repeat,
        url("/src/assets/box3dimg/weapon_4.jpg") no-repeat;
}
</style>