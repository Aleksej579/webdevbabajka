<template>
    <section class="roadmap">
        <h2>ROADMAP</h2>
        <Roadmap />
    </section>

    <section>
        <h2>PATTERNS</h2>
        <Patterns />
    </section>

    <section>
        <Codepen />
    </section>
</template>

<script>
import Roadmap from "../components/Roadmap.vue";
import Patterns from "../components/Patterns.vue";
import Codepen from "../components/Codepen.vue";

export default {
    components: {
        Roadmap,
        Patterns,
        Codepen,
    },
}
</script>