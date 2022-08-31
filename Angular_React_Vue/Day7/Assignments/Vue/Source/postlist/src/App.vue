<template>
  <div>
    <div className="container">
      <div className="row">
      <div className="col">
  <HelloWorld @postnotify="postsevent($event)"/>
      </div>
      <div className="col">
        <h1><a href="#" className="text-decoration-none text-dark" @click="display">Total post liked : {{totalpost}}</a></h1>

         <table className="table mt-5" v-if="isShown">
        <caption></caption>
        <thead>
          <tr>
          <th>Post No.</th>
          <th>Post Description</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="post in likedarray" :key="post.pname">
        <td>{{post.pname}}</td>
        <td>{{post.pdisc}}</td>
        <td>{{post.date}}</td>
    </tr>
        </tbody>
         </table>
      </div>
      </div>
    </div>
 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      likedarray:[],
      isShown:Boolean
    }
  },
  computed:{
    totalpost:function (){
      return this.likedarray.length;
    }
  },
  methods: {
    postsevent(likedarray)
    {
      this.likedarray =likedarray;
    },
    display(){
    this.isShown = ! this.isShown;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
