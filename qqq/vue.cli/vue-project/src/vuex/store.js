import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
};

const mutations = {
  add(state,num){
    state.count+=num;
  },
  reduce(state){
    state.count--;
  }
};//同步
const getters = {
  count1(state){
    return state.count += 100;
  }
};
const actions = {
  addAction({commit},num){
    commit('add',10,num);
  },
  reduceAction({commit}){
    commit('reduce');
  }
};//异步

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

