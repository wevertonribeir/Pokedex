<template>
    <li>
        <div class="range" :style="`width:${range}%;`"></div>
        <slot></slot>
        <span>{{base}}</span>
    </li>
</template>

<script>
export default {
    name: "stats",
    props: ["base"],
    computed: {
        range(){
            return this.base * 100 / 255;
        }
    }
}
</script>

<style scoped>
    li{
        border: solid 1px rgba(0,0,0,.1);
        height: 30px;
        position: relative;
        margin: 5px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 5px;
        overflow: hidden;
    }
    li .range{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: #30a7d7;
        z-index: -1;
        animation: showRange 1s forwards;
    }
    span{
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
    }

    @keyframes showRange{
        from{
            transform: translate3d(-100%, 0, 0);
        }
        to{
            transform: translate3d(0, 0, 0);
        }
    }
</style>