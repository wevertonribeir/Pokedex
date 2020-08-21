<template>
  <div id="app" class="main" :class="{aberto: ballStatus}">
    <Header />
      <router-view v-if="ballStatus" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { mapState } from "vuex";

export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState(["ballStatus"])
  },
  created(){
    if(window.localStorage.getItem('bollStatus')){
        this.$store.commit('setBallOpen');
    }else{
        this.$store.commit('setBallClosed');
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .main{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column
  }
  .content{
    flex: 1;
    padding-top: 140px;
    /*animation: surgir 1s forwards;*/
  }
  header.aberto, footer.aberto{
      transition: height 1s;
      height: 0% !important;
  }
  footer.aberto{
    position: fixed;
    bottom: 0;
  }
  header.aberto{
      position: fixed;
  }
  .main.aberto{
      position: relative;
      min-height: 101vh;
  }
  .container{
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 15px;
  }
  .results{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
  }

  .types{
        display: flex;
        justify-content: center;
    }
    .types span{
        border-radius: 3px;
        line-height: 18px;
        max-width: 110px;
        margin: 2px;
        text-transform: none;
        text-align: center;
        padding: 1px 4px 4px 4px;
    }

    img{
      max-width: 100%;
    }

  .background-color-bug {
    background: -webkit-linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
    background: -ms-linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
    background: -moz-linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
    background: -o-linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
    background: linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
    background-color: #729f3f;
    color: #fff;
}

.background-color-dragon {
    background: -webkit-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background: -ms-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background: -moz-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background: -o-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background-color: #53a4cf;
    color: #fff;
}

.background-color-fairy {
    background: -webkit-linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
    background: -ms-linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
    background: -moz-linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
    background: -o-linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
    background: linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
    background-color: #fdb9e9;
    color: #212121;
}


  .background-color-poison {
    background: -webkit-linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
    background: -ms-linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
    background: -moz-linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
    background: -o-linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
    background: linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
    background-color: #b97fc9;
    color: #fff;
}

.background-color-fire {
    background: -webkit-linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
    background: -ms-linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
    background: -moz-linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
    background: -o-linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
    background: linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
    background-color: #fd7d24;
    color: #fff;
}

.background-color-ghost {
    background: -webkit-linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
    background: -ms-linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
    background: -moz-linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
    background: -o-linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
    background: linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
    background-color: #7b62a3;
    color: #fff;
}

.background-color-ground {
    background: -webkit-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background: -ms-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background: -moz-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background: -o-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background-color: #f7de3f;
    color: #212121;
}

.background-color-normal {
    background: -webkit-linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
    background: -ms-linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
    background: -moz-linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
    background: -o-linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
    background: linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
    background-color: #a4acaf;
    color: #212121;
}

.background-color-psychic {
    background: -webkit-linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
    background: -ms-linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
    background: -moz-linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
    background: -o-linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
    background: linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
    background-color: #f366b9;
    color: #fff;
}

.background-color-steel {
    background: -webkit-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
    background: -ms-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
    background: -moz-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
    background: -o-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
    background: linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
    background-color: #9eb7b8;
    color: #212121;
}

.background-color-dark {
    background: -webkit-linear-gradient(180deg, #707070 50%, #707070 50%);
    background: -ms-linear-gradient(180deg, #707070 50%, #707070 50%);
    background: -moz-linear-gradient(180deg, #707070 50%, #707070 50%);
    background: -o-linear-gradient(180deg, #707070 50%, #707070 50%);
    background: linear-gradient(180deg, #707070 50%, #707070 50%);
    background-color: #707070;
    color: #fff;
}

.background-color-electric {
    background: -webkit-linear-gradient(180deg, #eed535 50%, #eed535 50%);
    background: -ms-linear-gradient(180deg, #eed535 50%, #eed535 50%);
    background: -moz-linear-gradient(180deg, #eed535 50%, #eed535 50%);
    background: -o-linear-gradient(180deg, #eed535 50%, #eed535 50%);
    background: linear-gradient(180deg, #eed535 50%, #eed535 50%);
    background-color: #eed535;
    color: #212121;
}

.background-color-fighting {
    background: -webkit-linear-gradient(180deg, #d56723 50%, #d56723 50%);
    background: -ms-linear-gradient(180deg, #d56723 50%, #d56723 50%);
    background: -moz-linear-gradient(180deg, #d56723 50%, #d56723 50%);
    background: -o-linear-gradient(180deg, #d56723 50%, #d56723 50%);
    background: linear-gradient(180deg, #d56723 50%, #d56723 50%);
    background-color: #d56723;
    color: #fff;
}

.background-color-flying {
    background: -webkit-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background: -ms-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background: -moz-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background: -o-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background-color: #3dc7ef;
    color: #212121;
}

.background-color-grass {
    background: -webkit-linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
    background: -ms-linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
    background: -moz-linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
    background: -o-linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
    background: linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
    background-color: #9bcc50;
    color: #212121;
}

.background-color-ice {
    background: -webkit-linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
    background: -ms-linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
    background: -moz-linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
    background: -o-linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
    background: linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
    background-color: #51c4e7;
    color: #212121;
}

.background-color-rock {
    background: -webkit-linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
    background: -ms-linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
    background: -moz-linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
    background: -o-linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
    background: linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
    background-color: #a38c21;
    color: #fff;
}

.background-color-water {
    background: -webkit-linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
    background: -ms-linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
    background: -moz-linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
    background: -o-linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
    background: linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
    background-color: #4592c4;
    color: #fff;
}
  
  

  @keyframes pulsar{
      0%{
          transform: scale(1);
          box-shadow: 4px 4px 0px rgba(0,0,0,.2);
      }
      50%{
          transform: scale(1.05);
          box-shadow: 5px 5px 4px rgba(0,0,0,.2);
      }
      100%{
          transform: scale(1);
          box-shadow: 4px 4px 0px rgba(0,0,0,.2);
      }
  }
  @keyframes click{
      from{
          transform: scale(1);
      }
      to{
          transform: scale(0.9);
      }
  }
  @keyframes surgir{
      from{
          transform: scale(0);
      }
      to{
          transform: scale(1);
      }
  }
</style>
