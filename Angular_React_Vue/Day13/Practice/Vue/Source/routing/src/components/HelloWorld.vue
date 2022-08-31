<template>
    <div>
      <h1>HelloWorld Component!!!</h1>
      <h3>user {{$route.params.id}}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
