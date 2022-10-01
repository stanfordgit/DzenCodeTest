<template>
  <div class="pop-up" v-if="opened">
    <div class="pop-up__content content">
      <button type="button" @click="$emit('closePopUp')" class="content__close">
        <svg viewBox="0 0 30 30">
          <path
            d="M7 4a.995.995 0 0 0-.707.293l-2 2a.999.999 0 0 0 0 1.414L11.586 15l-7.293 7.293a.999.999 0 0 0 0 1.414l2 2a.999.999 0 0 0 1.414 0L15 18.414l7.293 7.293a.999.999 0 0 0 1.414 0l2-2a.999.999 0 0 0 0-1.414L18.414 15l7.293-7.293a.999.999 0 0 0 0-1.414l-2-2a.999.999 0 0 0-1.414 0L15 11.586 7.707 4.293A.996.996 0 0 0 7 4z"
          />
        </svg>
      </button>
      <div class="content__title">Вы уверены что хотите удалить этот приход?</div>
      <div v-for="item in items" :key="item.id" class="content__item item">
        <div class="item__circle">
          <div :class="{ free: item.isFree }"></div>
        </div>
        <div class="item__photo">
          <img :src="item.photo" alt="photo" />
        </div>
        <div class="item__title title">
          <span class="title__name">{{ item.title }}</span>
          <span class="title__serial">{{ item.serialNumber }}</span>
        </div>
      </div>
      <div class="content__button button">
        <button type="button" @click="$emit('closePopUp')" class="button__cancel">
          <span>Отменить</span>
        </button>
        <button type="button" @click="$emit('closePopUp')" class="button__delete">
          <span>Удалить</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    opened: {
      type: Boolean,
      required: true
    },
    items: {
      type: Array
    }
  },
  emits: ['closePopUp']
};
</script>

<style lang="scss" scoped>
.pop-up {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 20;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  .pop-up__content {
    background-color: white;
    border: 1px solid #888;
    position: relative;
    width: 500px;
    .content {
      &__close {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        right: -10px;
        top: -10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid $color-lightgray;
        background: white;
        svg {
          width: 20px;
          height: 20px;
        }
      }
      &__title {
        padding: 20px;
        font-weight: 600;
        border-bottom: 1px solid $color-lightgray;
      }
      &__item {
        display: flex;
        height: 100%;
        align-items: center;
        border-bottom: 1px solid $color-lightgray;
        margin: 0 10px;
        padding: 20px 10px;
        .item__circle {
          div {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: $color-gray;
            &.free {
              background: $color-green;
            }
          }
        }
        .item__photo {
          display: flex;
          align-items: center;
          width: 30px;
          height: 30px;
          margin-left: 20px;
        }
        .item__title {
          display: flex;
          flex-direction: column;
          line-height: 10px;
          margin-left: 20px;
          .title__name {
            line-height: 16px;
            font-size: 16px;
            border-bottom: 1px solid $color-gray;
          }
          .title__serial {
            font-size: 14px;
            line-height: 14px;
            margin-top: 5px;
            border-bottom: 1px solid $color-gray;
            width: max-content;
            color: $color-gray;
          }
        }
      }
      &__button {
        display: flex;
        align-items: center;
        padding-right: 20px;
        justify-content: flex-end;
        height: 80px;
        gap: 30px;
        font-size: 14px;
        background: $color-green;
        .button__cancel {
          display: flex;
          justify-content: center;
          background: transparent;
          color: white;
          cursor: pointer;
        }
        .button__delete {
          width: 130px;
          padding: 10px;
          display: flex;
          justify-content: center;
          border-radius: 20px;
          background: white;
          color: red;
          cursor: pointer;
        }
        span {
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
