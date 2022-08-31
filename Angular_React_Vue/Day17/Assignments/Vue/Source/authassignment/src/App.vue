<script >
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/user">User</RouterLink>
        <RouterLink to="/admin">Admin</RouterLink>

      </nav>
   

  <RouterView />
  </div>
</template>

<style>

</style>
