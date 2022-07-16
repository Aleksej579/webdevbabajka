<template>
    <div class="container max-w-7xl mx-auto px-3 min-h-screen">
        <section class="mb-12">
            <h2>MY WORKS Web</h2>
            <WebWork />
        </section>

        <section class="mb-12">
            <h2>MY WORKS Architect</h2>
            <ArchWork />
        </section>

        <section class="mb-12">
            <h2>Animation Css/Js 3D</h2>
            <Box3d />
        </section>

        <section class="mb-12">
            <h2>Easy 3D in Spline</h2>
            <iframe src='https://my.spline.design/untitled-55b7c49f1197bb312d49227ea43769e6/' frameborder='0'
                width='100%' height='100%'></iframe>
        </section>
        <!-- <Form /> -->
    </div>
</template>

<script>
import WebWork from "../components/WebWork.vue";
import ArchWork from "../components/ArchWork.vue";
import Box3d from "../components/Box3d.vue";
// import Form from "../components/Form.vue";

export default {
    components: {
        WebWork,
        ArchWork,
        Box3d,
        // Form,
    },
}
</script>