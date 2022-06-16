<template>
    <div class="main container max-w-7xl mx-auto pb-8">
        <div class="glitch" data-text="GLITCH">GLITCH</div>
        <div class="box3d_wrp">
            <div id="box3d">
                <div id="box3d_c"><span class="s1">NATURE</span></div>
                <div id="box3d_l"><span class="s1">SCULPTURE</span></div>
                <div id="box3d_t"><span class="s1">ART</span></div>
                <div id="box3d_r"><span class="s1">WEAPON</span></div>
            </div>
            <div id="but_box3d_1" @click="rot_box_nature_1">Click 1</div>
            <div id="but_box3d_2" @click="rot_box_nature_2">Click 2</div>
            <div id="but_box3d_3" @click="rot_box_nature_3">Click 3</div>
            <div id="but_box3d_4" @click="rot_box_nature_4">Click 4</div>
        </div>

        <div class="wrapper_2 elementanm">
            <div class="grid_lib-wrap">
                <div class="grid_lib anim"></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        rot_box_nature_1() {
            but_box3d_1.onclick = function () {
                document.querySelector('#box3d').style.transform = 'rotateY(90deg)';
                document.querySelector('#but_box3d_1').style.display = "none";
                document.querySelector('#but_box3d_2').style.display = "block";
            };
        },
        rot_box_nature_2() {
            but_box3d_2.onclick = function () {
                document.querySelector('#box3d').style.transform = 'rotateY(180deg)';
                document.querySelector('#but_box3d_2').style.display = "none";
                document.querySelector('#but_box3d_3').style.display = "block";
            };
        },
        rot_box_nature_3() {
            but_box3d_3.onclick = function () {
                document.querySelector('#box3d').style.transform = 'rotateY(270deg)';
                document.querySelector('#but_box3d_3').style.display = "none";
                document.querySelector('#but_box3d_4').style.display = "block";
            };
        },
        rot_box_nature_4() {
            but_box3d_4.onclick = function () {
                document.querySelector('#box3d').style.transform = 'rotateY(360deg)';
                document.querySelector('#but_box3d_4').style.display = "none";
                document.querySelector('#but_box3d_1').style.display = "block";
            };
        },
    },
}

</script>

<style>
.glitch {
    color: white;
    font-size: 100px;
    margin: 0 auto;
    width: 400px;
    font-family: sans-serif;
}

.glitch {
    position: relative;
}

.glitch:after {
    animation: glitch-animation 2s infinite linear alternate-reverse;
    background: #0f172a;
    clip: rect(0, 900px, 0, 0);
    color: white;
    content: attr(data-text);
    left: 2px;
    overflow: hidden;
    position: absolute;
    text-shadow: -1px 0 red;
    top: 0;
}

.glitch:before {
    animation: glitch-animation-2 3s infinite linear alternate-reverse;
    background: #0f172a;
    clip: rect(0, 900px, 0, 0);
    color: white;
    content: attr(data-text);
    left: -2px;
    overflow: hidden;
    position: absolute;
    text-shadow: 1px 0 blue;
    top: 0;
}

@keyframes glitch-animation {
    0% {
        clip: rect(42px, 9999px, 44px, 0);
    }

    5% {
        clip: rect(12px, 9999px, 59px, 0);
    }

    10% {
        clip: rect(48px, 9999px, 29px, 0);
    }

    15.0% {
        clip: rect(42px, 9999px, 73px, 0);
    }

    20% {
        clip: rect(63px, 9999px, 27px, 0);
    }

    25% {
        clip: rect(34px, 9999px, 55px, 0);
    }

    30.0% {
        clip: rect(86px, 9999px, 73px, 0);
    }

    35% {
        clip: rect(20px, 9999px, 20px, 0);
    }

    40% {
        clip: rect(26px, 9999px, 60px, 0);
    }

    45% {
        clip: rect(25px, 9999px, 66px, 0);
    }

    50% {
        clip: rect(57px, 9999px, 98px, 0);
    }

    55.0% {
        clip: rect(5px, 9999px, 46px, 0);
    }

    60.0% {
        clip: rect(82px, 9999px, 31px, 0);
    }

    65% {
        clip: rect(54px, 9999px, 27px, 0);
    }

    70% {
        clip: rect(28px, 9999px, 99px, 0);
    }

    75% {
        clip: rect(45px, 9999px, 69px, 0);
    }

    80% {
        clip: rect(23px, 9999px, 85px, 0);
    }

    85.0% {
        clip: rect(54px, 9999px, 84px, 0);
    }

    90% {
        clip: rect(45px, 9999px, 47px, 0);
    }

    95% {
        clip: rect(37px, 9999px, 20px, 0);
    }

    100% {
        clip: rect(4px, 9999px, 91px, 0);
    }
}

@keyframes glitch-animation-2 {
    0% {
        clip: rect(65px, 9999px, 100px, 0);
    }

    5% {
        clip: rect(52px, 9999px, 74px, 0);
    }

    10% {
        clip: rect(79px, 9999px, 85px, 0);
    }

    15.0% {
        clip: rect(75px, 9999px, 5px, 0);
    }

    20% {
        clip: rect(67px, 9999px, 61px, 0);
    }

    25% {
        clip: rect(14px, 9999px, 79px, 0);
    }

    30.0% {
        clip: rect(1px, 9999px, 66px, 0);
    }

    35% {
        clip: rect(86px, 9999px, 30px, 0);
    }

    40% {
        clip: rect(23px, 9999px, 98px, 0);
    }

    45% {
        clip: rect(85px, 9999px, 72px, 0);
    }

    50% {
        clip: rect(71px, 9999px, 75px, 0);
    }

    55.0% {
        clip: rect(2px, 9999px, 48px, 0);
    }

    60.0% {
        clip: rect(30px, 9999px, 16px, 0);
    }

    65% {
        clip: rect(59px, 9999px, 50px, 0);
    }

    70% {
        clip: rect(41px, 9999px, 62px, 0);
    }

    75% {
        clip: rect(2px, 9999px, 82px, 0);
    }

    80% {
        clip: rect(47px, 9999px, 73px, 0);
    }

    85.0% {
        clip: rect(3px, 9999px, 27px, 0);
    }

    90% {
        clip: rect(26px, 9999px, 55px, 0);
    }

    95% {
        clip: rect(42px, 9999px, 97px, 0);
    }

    100% {
        clip: rect(38px, 9999px, 49px, 0);
    }
}

.box3d_wrp {
    height: 500px;
    width: 100%;
    position: relative;
    margin: 0 auto;
}

#box3d {
    height: 500px;
    width: 200px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transform-origin: 100px 0 -100px;
    transition: 1.5s ease;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
}

#box3d_c,
#box3d_l,
#box3d_t,
#box3d_r {
    height: 500px;
    width: 200px;
    position: absolute;
    top: 0px;
    float: left;
    text-align: center;
    line-height: 750px;
}

#box3d_c {
    left: 0px;
    background: url("/src/assets/bg2.png") repeat, url("/src/assets/slide/imgCube_1.jpg") no-repeat;
}

#box3d_l {
    left: -200px;
    background: url("/src/assets/bg2.png") repeat, url("/src/assets/slide/imgCube_2.jpg") no-repeat;
    transform: rotateY(-90deg);
    transform-origin: 100% 0;
}

#box3d_t {
    left: -400px;
    background: url("/src/assets/bg2.png") repeat, url("/src/assets/slide/imgCube_3.jpg") no-repeat;
    transform: rotateY(180deg);
    transform-origin: 300px 0 -100px;
}

#box3d_r {
    left: 200px;
    background: url("/src/assets/bg2.png") repeat, url("/src/assets/slide/imgCube_4.jpg") no-repeat;
    transform: rotateY(90deg);
    transform-origin: 0 0;
}

#but_box3d_1,
#but_box3d_2,
#but_box3d_3,
#but_box3d_4 {
    height: 500px;
    width: 200px;
    position: absolute;
    top: 0px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    cursor: pointer;
}

#but_box3d_1 {
    display: block;
}

#but_box3d_2,
#but_box3d_3,
#but_box3d_4 {
    display: none;
}

.s1 {
    color: #f90;
    background: rgba(0, 0, 0, 0.45);
    font-size: 16px;
    font-weight: bold;
    padding: 10px 10%;
}

/* 3d greed */
.wrapper_2 {
    height: 500px;
    perspective: 1000px;
    transform-style: preserve-3d;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    overflow: hidden;
    width: max-content;
    border-radius: 50%;
}

.grid_lib-wrap {
    position: relative;
    transform: rotateX(70deg) scale3d(4, 4, 1) translateZ(-750px) translateY(-500px) translateX(-50px);
}

.grid_lib {
    height: 500px;
    width: 500px;
    color: white;
    background-color: transparent;
    background-image: radial-gradient(transparent, #121212 50%),
        linear-gradient(rgba(129, 243, 255, 0.4) 1px, transparent 1px),
        linear-gradient(90deg, rgba(129, 243, 255, 0.4) 1px, transparent 1px),
        linear-gradient(rgba(129, 243, 255, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(129, 243, 255, 0.2) 1px, transparent 1px);
    background-size: 500px 500px, 125px 125px, 125px 125px, 31.25px 31.25px, 31.25px 31.25px;
    background-position: 0 0, -1px -1px, -1px -1px, 0px 0px, 0px 0px;
    background-repeat: no-repeat, repeat, repeat, repeat, repeat;
}

.anim {
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 10s;
    animation-name: anim;
}

@-webkit-keyframes anim {
    0% {
        -webkit-transform: rotateZ(0deg);
    }

    100% {
        -webkit-transform: rotateZ(-360deg);
    }
}
</style>