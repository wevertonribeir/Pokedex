import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ballStatus: null
  },
  mutations: {
    toggleBall(state){
      if(!state.ballStatus){
        state.ballStatus = true;
        window.localStorage.setItem('bollStatus', true);
      }else{
        state.ballStatus = false;
        window.localStorage.removeItem('bollStatus');
      }
    },
    setBallOpen(state){
      state.ballStatus = true;
      window.localStorage.setItem('bollStatus', true);
    },
    setBallClosed(state){
      state.ballStatus = false;
      window.localStorage.removeItem('bollStatus');
    }
  },
  actions: {
  },
  modules: {
  }
})
