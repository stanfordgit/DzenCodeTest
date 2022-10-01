<template>
  <div class="top-menu__logo">
    <router-link to="/"><img src="@/assets/brand.jpg" alt="brand" /></router-link>
  </div>
</template>

<script>
export default {
  name: 'TopMenuLogo'
};
</script>

<style lang="scss" scoped>
.top-menu__logo {
  img {
    height: 60px;
    max-width: none;
  }
}
</style>
