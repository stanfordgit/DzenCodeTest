<template>
  <div class="top-menu__search">
    <input type="search" id="site-search" placeholder="Поиск" />
  </div>
</template>

<script>
export default {
  name: 'TopMenuSearch'
};
</script>

<style lang="scss" scoped>
.top-menu__search {
  margin-left: 60px;
  input {
    padding: 3px 10px;
    width: 300px;
    border-radius: 5px;
    background: #f0f3f5;
  }
}
</style>
