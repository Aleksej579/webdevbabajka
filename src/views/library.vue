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

        <section>
            <figure class="card w-max m-auto">
                <figcaption class="w-max">
                    <svg xmlns="http://www.w3.org/2000/svg" width="633" height="1158" viewBox="0 0 633 1158"
                        fill="none">
                        <rect x="312" y="35" width="286" height="132" stroke="#1E293B" stroke-width="8" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M316 31H30V171H316V31ZM241.295 55.4343C233.807 61.6011 230.41 72.1682 232.795 88.8007C236.968 86.7395 240.809 85.6268 244.309 85.5385C249.565 85.4058 253.769 87.6167 256.401 91.4986C258.836 95.0914 259.615 99.6369 259.515 103.972C259.414 108.391 258.394 113.118 256.679 117.551C253.365 126.12 246.787 135.139 237.263 137.591C228.928 139.737 220.345 136.463 212.217 127.585C207.839 130.957 203.671 133.484 199.776 135.096C195.408 136.905 191.023 137.708 186.974 136.849C182.723 135.947 179.441 133.335 177.359 129.558C175.367 125.944 174.537 121.414 174.537 116.408H175.634L174.931 115.604L193.301 99.5596C191.592 94.2017 186.93 90.626 181.349 89.4553C175.258 88.1777 169.136 89.9752 165.652 94.7619L165.657 94.8657L165.668 95.0357C165.708 95.6243 165.77 96.2789 165.845 97.0811L165.85 97.1373C165.902 97.6908 165.96 98.3143 166.022 99.0338C166.312 102.389 166.603 106.99 166.123 111.765C165.647 116.51 164.373 121.82 161.23 126.35C157.976 131.037 152.977 134.507 145.882 135.806L145.522 133.839L143.998 134.485C141.692 129.045 138.223 124.179 134.353 120.478C130.435 116.731 126.387 114.439 123.037 113.689C119.857 112.978 117.675 113.665 116.108 115.397C114.274 117.423 112.441 121.79 112.464 130.216L111.473 130.219L104.896 136.319C82.5325 112.208 76.7366 82.2148 83.938 50.2043L93.6941 52.3991C88.1675 76.9653 91.0322 99.5067 103.698 118.695C104.713 114.622 106.365 111.259 108.694 108.686C113.219 103.686 119.393 102.627 125.22 103.931C130.876 105.196 136.486 108.681 141.264 113.251C144.406 116.255 147.31 119.843 149.741 123.839C151.136 122.932 152.189 121.837 153.015 120.648C154.818 118.05 155.786 114.618 156.174 110.765C156.558 106.942 156.335 103.09 156.059 99.894C156.033 99.5915 156.005 99.2838 155.977 98.9763L155.907 98.2202L155.905 98.1991C155.819 97.2758 155.738 96.3966 155.691 95.7122C155.653 95.1438 155.621 94.4906 155.644 93.8792C155.656 93.5731 155.685 93.1544 155.773 92.6966C155.787 92.6255 155.805 92.5382 155.828 92.4375C155.854 92.3251 155.888 92.196 155.932 92.0543L155.683 91.925C161.399 80.9153 173.327 77.5551 183.402 79.6683C193.531 81.7929 203.107 89.7103 203.943 102.459L202.957 102.523L203.888 103.59L184.786 120.274C185.064 122.245 185.551 123.704 186.117 124.731C186.914 126.178 187.87 126.816 189.049 127.066C190.43 127.359 192.668 127.216 195.951 125.857C199.197 124.513 203.123 122.118 207.654 118.447L208.403 119.372L214.923 114.892C223.656 127.603 230.562 128.99 234.77 127.907C239.711 126.635 244.525 121.255 247.353 113.944C248.708 110.438 249.447 106.854 249.518 103.742C249.591 100.547 248.958 98.3403 248.123 97.1099C247.485 96.1686 246.562 95.4848 244.561 95.5353C242.227 95.5942 238.441 96.7034 232.899 100.224L232.348 99.3554L225.031 101.132C219.306 77.5591 221.447 58.8253 234.938 47.715L241.295 55.4343ZM164.814 96.0611C165.026 95.6872 165.253 95.3281 165.493 94.984C165.402 95.2793 165.236 95.6972 164.938 96.144L164.814 96.0611Z"
                            fill="#1E293B" />
                        <path d="M377.936 132.344C377.936 137.61 380.24 137.61 385.835 135.965" stroke="#1E293B"
                            stroke-width="10" />
                        <line x1="378.182" y1="91.2068" x2="378.182" y2="132.674" stroke="#1E293B" stroke-width="10" />
                        <path d="M385.685 54.3474C425.838 65.2077 428.471 123.459 384.7 135.964" stroke="#1E293B"
                            stroke-width="10" />
                        <path d="M427.484 91.5356C436.369 74.4226 465.001 80.0172 466.317 100.092" stroke="#1E293B"
                            stroke-width="10" />
                        <path d="M444.759 113.558L467.963 97.1306" stroke="#1E293B" stroke-width="10" />
                        <path d="M446.571 110.624C439.989 138.268 487.38 137.61 481.904 104.408" stroke="#1E293B"
                            stroke-width="10" />
                        <path d="M482.114 105.687C480.469 97.4597 501.531 98.447 498.569 107.333" stroke="#1E293B"
                            stroke-width="10" />
                        <path d="M499.228 106.016C491 119.18 506.139 139.585 512.063 134.977" stroke="#1E293B"
                            stroke-width="10" />
                        <path d="M509.43 135.635C525.216 135.635 545.96 77.7136 518.645 45.7908" stroke="#1E293B"
                            stroke-width="10" />
                        <path
                            d="M326.5 280.774L390.112 244.047L453.724 280.774V354.226L390.112 390.953L326.5 354.226V280.774Z"
                            stroke="#1E293B" stroke-width="20" />
                        <path
                            d="M63.3878 436.274L127 399.547L190.612 436.274V509.726L127 546.453L63.3878 509.726V436.274Z"
                            stroke="#1E293B" stroke-width="20" />
                        <path
                            d="M440.388 593.274L504 556.547L567.612 593.274V666.726L504 703.453L440.388 666.726V593.274Z"
                            stroke="#1E293B" stroke-width="20" />
                        <circle cx="242" cy="334" r="24" stroke="#1E293B" stroke-width="12" />
                        <circle cx="60" cy="676" r="24" stroke="#1E293B" stroke-width="12" />
                        <circle cx="572" cy="793" r="24" stroke="#1E293B" stroke-width="12" />
                        <circle cx="127" cy="867" r="24" stroke="#1E293B" stroke-width="12" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M395.485 555.485L395 555H396V393H384V550L310 624V1043H322V628.971L395.485 555.485Z"
                            fill="#1E293B" />
                        <line x1="602" y1="942" x2="30" y2="942" stroke="#1E293B" stroke-width="18" />
                        <line x1="602" y1="163" x2="30" y2="163" stroke="#1E293B" stroke-width="18" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M502 790H547V796H504.485L418 882.485L418 933H412L412 880L502 790Z" fill="#1E293B" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M219.243 761.757L219 762L219 939H213V870H155V864H213L213 764L128 679H86V673H130L130.243 672.757L219.243 761.757Z"
                            fill="#1E293B" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M238 553L238 364H244L244 550.515L293.243 599.757L293 600L293 939H287L287 602L238 553Z"
                            fill="#1E293B" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M498 703V750L384 864L384 968L430 1014V1043H442V1008H440.971L396 963.029L396 868.971L508.971 756H510V703H498Z"
                            fill="#1E293B" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M133 547L133 594L247 708L247 972L248 973L202 1019V1052H190V1014H191L190.515 1013.51L235 969.029L235 712.971L122.029 600H121L121 547H133Z"
                            fill="#1E293B" />
                        <rect x="289" y="1043" width="55" height="85" fill="#1E293B" />
                        <rect x="409" y="1043" width="55" height="85" fill="#1E293B" />
                        <rect x="169" y="1043" width="55" height="85" fill="#1E293B" />
                        <line x1="30.5" y1="-2.18557e-08" x2="30.5" y2="317" stroke="#1E293B" />
                        <line x1="30.5" y1="793" x2="30.5" y2="1158" stroke="#1E293B" />
                        <line x1="602.5" y1="-2.18557e-08" x2="602.5" y2="473" stroke="#1E293B" />
                        <line x1="602.5" y1="880" x2="602.5" y2="1158" stroke="#1E293B" />
                        <line x1="-4.37114e-08" y1="1127.5" x2="633" y2="1127.5" stroke="#1E293B" />
                        <line x1="4.50752e-08" y1="30.5" x2="633" y2="30.5001" stroke="#1E293B" />
                    </svg>
                </figcaption>
            </figure>
        </section>

        <section>
            <iframe src='https://my.spline.design/untitled-55b7c49f1197bb312d49227ea43769e6/' frameborder='0'
                width='100%' height='100%'></iframe>
        </section>

    </div>
</template>

<script>

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
}
</script>

<style>
section {
    margin-bottom: 50px;
}

.box3d_wrp {
    position: relative;
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

/* logo */
.card svg {
    width: 200px;
    height: auto;
}

.card {
    @apply text-slate-400 p-5;
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