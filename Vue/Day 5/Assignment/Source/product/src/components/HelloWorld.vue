<template>
<div>
  <ProductList v-bind:prd="products" />
</div>
</template>

<script>
import ProductList from './ProductList.vue'
export default {
  name: 'HelloWorld',
  data(){
    return{
      products:[{name:"Soap",price:25,quantity:35},
      {name:"Wafers",price:25,quantity:35},
      {name:"Soda",price:25,quantity:35}]
    }
  },
  components:{
    ProductList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
