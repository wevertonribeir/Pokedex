<template>
  <footer :class="{aberto: ballStatus}">
  </footer>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Footer",
    computed: mapState(["ballStatus"])
}
</script>

<style scoped>
    footer{
        background: white;
        width: 100%;
        height: 50%;
        overflow: hidden;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        border-top: solid 2px #353032;
    }
    footer::before{
        content: '';
        display: block;
        position: relative;
        width: 200px;
        height: 200px;
        background: #353032;
        border-radius: 50%;
        top: -100px;
        box-shadow: 4px 4px rgba(0,0,0,.2), inset 15px 0px rgba(0,0,0,.2);
    }
</style>