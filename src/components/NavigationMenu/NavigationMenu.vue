<template>
  <div class="navigation-menu">
    <NavigationMenuProfile />
    <NavigationMenuOption />
  </div>
</template>

<script>
import NavigationMenuProfile from './NavigationMenuProfile.vue';
import NavigationMenuOption from './NavigationMenuOption.vue';
export default {
  name: 'NavigationMenu',
  components: { NavigationMenuProfile, NavigationMenuOption }
};
</script>

<style lang="scss" scoped>
.navigation-menu {
  padding: 50px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 200px;
  z-index: 9;
  background: white;
  -webkit-box-shadow: 0px -4px 20px 3px rgba(179, 179, 179, 1);
  -moz-box-shadow: 0px -4px 20px 3px rgba(179, 179, 179, 1);
  box-shadow: 0px -4px 20px 3px rgba(179, 179, 179, 1);
  ul {
    li {
      text-transform: uppercase;
    }
  }
  // -webkit-box-shadow: 0px -4px 37px 3px rgba(179, 179, 179, 1);
  // -moz-box-shadow: 0px -4px 37px 3px rgba(179, 179, 179, 1);
  // box-shadow: 0px -4px 37px 3px rgba(179, 179, 179, 1);
}
</style>
