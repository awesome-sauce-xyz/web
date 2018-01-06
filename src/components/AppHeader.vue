<template lang='pug'>
  .header
    router-link(to='/')
      h2.header-text 👌 Awesome Sauce
    nav
      router-link(to='/about') About
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>