<template>
    <div>
        <table class="table">
          <caption></caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Quantity</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="item in prd" :key="item.name">
            <td></td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>{{item.quantity}}</td>
        </tr>
    </tbody>
  </table>
    </div>
</template>
<script>
export default {
    props:{
        prd:[]
    }
}
</script>
<style scoped>
@import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>