<template>
  <div class="navigation-menu__option">
    <ul id="menu">
      <li><router-link to="/orders">Приходы</router-link></li>
      <li class="disabled">Группы</li>
      <li><router-link to="/products">Продукты</router-link></li>
      <li class="disabled">Пользователи</li>
      <li class="disabled">Настройки</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavigationMenuOption'
};
</script>

<style lang="scss" scoped>
.navigation-menu__option {
  ul {
    li {
      margin-bottom: 15px;
      text-align: center;
      text-transform: uppercase;
      cursor: pointer;

      &.disabled {
        pointer-events: none;
        opacity: 0.6;
      }
      a {
        &,
        &:active {
          text-decoration: none;
          color: #2c3e50;
        }
        &:hover {
          color: $color-green;
        }
        &.router-link-active,
        &.router-link-exact-active {
          border-bottom: 2px solid $color-green;
        }
      }
    }
  }
}
</style>
