<template lang="">
  <div>
   Num1:<input type="number" v-model="num1">
   Num2:<input type="number" v-model="num2" >
   <br>
       <p class="mt-3" >Result :{{res}}</p>
        
   <button @click="Add" class="text-white rounded mt-3 p-1 mx-2 bg-success">Addition</button>
   <button @click="Sub" class="text-white rounded mt-3 p-1 mx-2 bg-success">Substraction</button>
   <button @click="Mul" class="text-white rounded mt-3 p-1 mx-2 bg-success">Multiplication</button>


  
  </div>
</template>
<script>
export default {
  data() {
    return {
      num1:'',
      num2:'',
      res:''
    }
  },
  methods: {
  
    Add:function () {
          this.res=this.num1 + this.num2;
    },
     Sub:function () {
          this.res=this.num1 - this.num2;
    },
     Mul:function () {
          this.res=this.num1 * this.num2;
    }
  },
}
</script>
<style scoped>
@import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>