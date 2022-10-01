<template>
  <TopMenu />
  <div class="main">
    <NavigationMenu />

    <router-view v-slot="{ Component }" class="view">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import TopMenu from '@/components/TopMenu/TopMenu';
import NavigationMenu from '@/components/NavigationMenu/NavigationMenu';
export default {
  name: 'App',
  data() {
    return {};
  },
  components: { TopMenu, NavigationMenu }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  overflow: scroll;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .view {
    width: 100%;
    overflow: scroll;
    padding: 70px 120px;
  }
}
</style>
