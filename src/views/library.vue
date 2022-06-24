<template>
    <div class="main container max-w-7xl mx-auto p-3">
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
    line-height: 500px;
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
</style>