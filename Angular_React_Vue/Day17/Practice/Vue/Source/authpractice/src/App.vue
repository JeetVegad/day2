<script>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/protected">Protected</RouterLink>
      </nav>
  

  <RouterView />
  </div>
</template>

<style>

</style>
