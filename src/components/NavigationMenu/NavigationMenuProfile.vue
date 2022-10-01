<template>
  <div class="navigation-menu__profile">
    <a href="#"> <img src="@/assets/profile.jpg" alt="profile photo" /></a>
  </div>
</template>

<script>
export default {
  name: 'NavigationMenuProfile'
};
</script>

<style lang="scss" scoped>
.navigation-menu__profile {
  margin-bottom: 40px;
  height: 125px;
  width: 125px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
}
</style>
