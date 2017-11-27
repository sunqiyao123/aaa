<template>
  <div class="movie">
    <common-header></common-header>
    <movie-nav></movie-nav>
    <div class='list'>
      <movie-list v-for="obj in movieList" :title="obj.title" :year="obj.year" :avg = "obj.avg" :desc = "obj.desc"
      ></movie-list>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import MovieNav from "./MovieNav"
import MovieList from "./MovieList"
import Axios from "axios"
export default {
  name: 'HelloWorld',
  data () {
    return {
      movieList:[
        {
          title: "霸王别姬",
          year : 1994,
          avg  : 9.6,
          desc : [
            "同性",
            "爱情"
          ]
        },
        {
          title: "正义联盟",
          year : 2017,
          avg  : 8.5,
          desc : [
            "同性",
            "打片"
          ]
        },
        {
          title: "唯创网讯",
          year : 2012,
          avg  : 9.0,
          desc : [
            "教育",
            "IT"
          ]
        }
      ]
    }
  },
  mounted(){
    Axios.get(API_PROXY+"http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset=0")
      .then((res) => {
      console.log(res);
      });
  },
  components: {
    CommonHeader,
    CommonFooter,
    MovieNav,
    MovieList
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{
  margin-top: 2rem;
}
</style>
