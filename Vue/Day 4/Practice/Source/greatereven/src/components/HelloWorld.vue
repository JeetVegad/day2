<template>
  <div class="ms-4">
    <h1>Greater number from two numbers :</h1>
     Num1:<input class="mb-3 form-control" type="number" v-model="num1">
      Num2:<input class="form-control" type="number" v-model="num2" >
        <h3 class="mt-3">Result :</h3>
      <div v-if="num1>num2">
          <p><strong>{{num1}}</strong> is Greater than <strong>{{num2}}</strong></p>
      </div>
       <div v-if="num1<num2">
          <p><strong>{{num2}}</strong> is Greater than <strong>{{num1}}</strong></p>
      </div>
  </div>
</template>
<script>
export default {
    data(){
      return{
        num1:0,
        num2:0
      }
    }

}
</script>
<style scoped>
@import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>