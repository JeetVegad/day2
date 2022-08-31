<template >
    <div class="ms-4">
    <h1>Area Of Rectangle :</h1>
Enter Hight: <input class="form-control" type="number"  v-model="num1"><br>
Enter Width: <input class="mt-2 form-control" type="number" v-model="num2">
<br>
<button @click="cal" class="bg-success mt-3 p-1 rounded text-white">Calculate</button>
<br>
<div class="mt-2">
Result : The area of rectangle is <h4><strong>{{res}}</strong></h4>

</div>
</div>
</template>
<script>
export default {
    data(){
      return{
        num1:0,
        num2:0,
        res:0
      }
    },
    methods:{
      cal:function (){
        this.res = this.num1*this.num2;
      }
    }
}
</script>
<style scoped>
  @import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>