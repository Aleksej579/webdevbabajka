<template>
    <div class="main container max-w-7xl mx-auto p-3 flex flex-col items-center md:flex-row justify-around ">
        <img class="header__logoTree w-40 h-auto z-10" src="/src/assets/tree.png" alt="WebDev">
        <aside class="gradient-border min-w-[280px] min-h-[300px]"></aside>
    </div>
</template>

<style>
.gradient-border {
    border: solid;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(60deg,
            #b16ec4,
            #5f97b9);

}
</style>