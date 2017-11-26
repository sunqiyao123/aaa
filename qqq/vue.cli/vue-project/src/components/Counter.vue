<template>
  <div>
    <!--<h1>计数器: {{$store.state.count}}</h1>-->
    <h1>计数器:{{count1}}</h1>
    <!--<h1>计数器:{{count2}}</h1>-->
    <!--<h1>计数器:{{count}}</h1>-->
    <button @click="$store.commit('add',10)">加1</button>
    <button @click="reduce">减1</button>
    <!--<button @click="$store.commit('reduce',10)">减1</button>-->
<button @click="addAction">+</button>
<button @click="reduceAction">-</button>
<button @click="dis">dispatch</button>
  </div>

</template>
<script>
import store from '@/vuex/store'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default{
  data(){
    return {};
  },
  store,
//  computed: {
//    count1(){
//        return this.$store.state.count;
//    }
//  },
//  computed:mapState({
//      count2:state=>state.count
//  })
//  computed: mapState(['count']),
  computed: {
    ...mapState(['count1']),
  ...mapGetters(['count1'])
},
//  methods:mapMutations(['add', 'reduce']),
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction']),
    dis(){
       this.$store.dispatch("addAction",10)
    }
  }
}





</script>
<style scoped>

</style>
