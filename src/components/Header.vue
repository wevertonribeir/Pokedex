<template>
    <header :class="{aberto: $store.state.ballStatus}">
        <div class="middle">
            <div class="circle" @click="ballclick">

            </div>
        </div>
    </header>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Header",
    computed: mapState(['ballStatus']),
    methods: {
        ballclick(){
            this.$store.commit("toggleBall");
        }
    }
}
</script>

<style scoped>
    header{
        position: relative;
        background: #F1362F;
        width: 100%;
        height: 50%;
        z-index: 9;
    }
    .middle{
        position: absolute;
        bottom: -40px;
        left: 0;
        width: 100%;
        height: 80px;
        background: #353032;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px rgba(0,0,0,.2);
    }
    .middle .circle{
        position: relative;
        width: 200px;
        height: 200px;
        background: #353032;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .middle .circle::before{
        content: '';
        display: block;
        background: white;
        width: 130px;
        height: 130px;
        border-radius: 50%;
    }
    .middle .circle::after{
        position: absolute;
        content: '';
        display: block;
        border: solid 5px #353032;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        box-shadow: 4px 4px rgba(0,0,0,.2);
        cursor: pointer;
        animation: pulsar 1.5s infinite;
        animation-delay: 5s;
    }
    .middle .circle:active::after{
        animation: click 0s forwards;
    }
</style>