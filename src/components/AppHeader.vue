<template>
  <div class="header">
    <router-link to="/"><h2 class="header-text">Awesome Sauce</h2></router-link>
    <nav>
      <div><router-link to="/about">About</router-link></div>
    </nav>
  </div>
</template>

<script>

</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>