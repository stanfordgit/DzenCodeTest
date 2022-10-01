<template>
  <div class="top-menu">
    <TopMenuLogoVue />
    <TopMenuSearch />
    <TopMenuDateTime />
  </div>
</template>

<script>
import TopMenuLogoVue from './TopMenuLogo.vue';
import TopMenuSearch from './TopMenuSearch.vue';
import TopMenuDateTime from './TopMenuDateTime.vue';

export default {
  name: 'TopMenu',
  components: {
    TopMenuLogoVue,
    TopMenuSearch,
    TopMenuDateTime
  }
};
</script>

<style lang="scss" scoped>
.top-menu {
  height: 60px;
  width: 100%;
  padding: 0 130px;
  display: flex;
  z-index: 10;
  position: relative;
  align-items: center;
  background: white;
  -webkit-box-shadow: 0px -4px 20px 3px rgba(179, 179, 179, 1);
  -moz-box-shadow: 0px -4px 20px 3px rgba(179, 179, 179, 1);
  box-shadow: 0px -4px 20px 3px rgba(179, 179, 179, 1);
}
</style>
