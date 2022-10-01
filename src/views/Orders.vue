<template>
  <div class="orders">
    <PopUp :opened="isPopUp" :items="selectedOrderDelete" @closePopUp="closePopUp" />
    <div class="orders__title title">
      <div class="title__button-add"><span>+</span></div>
      <div class="title__value">
        Приходы / <span>{{ orderQuantity() }}</span>
      </div>
    </div>
    <template v-if="!isBlock">
      <div class="orders__list list">
        <div
          v-for="order in getOrders"
          :key="order.id"
          class="list__item item"
          @click="selectOrder(order)"
        >
          <div class="item__title">
            <span>{{ order.title }}</span>
          </div>
          <div class="item__button-view">
            <svg viewBox="0 0 25 25">
              <path
                d="M21.876 3.905H6.257a1.561 1.561 0 1 0 0 3.124h15.619a1.561 1.561 0 1 0 0 -3.124zm-18.743 1.562a1.562 1.562 0 0 0 -0.461 -1.102 1.562 1.562 0 0 0 -2.203 0 1.562 1.562 0 0 0 -0.461 1.102 1.329 1.329 0 0 0 0 0.305 1.408 1.408 0 0 0 0.086 0.297 1.813 1.813 0 0 0 0.148 0.266 1.428 1.428 0 0 0 0.195 0.242 1.382 1.382 0 0 0 0.234 0.188 1.272 1.272 0 0 0 0.266 0.148 1.289 1.289 0 0 0 0.328 0.117 1.369 1.369 0 0 0 0.305 0 1.562 1.562 0 0 0 1.102 -0.453 1.428 1.428 0 0 0 0.195 -0.242 1.813 1.813 0 0 0 0.148 -0.266 1.45 1.45 0 0 0 0.117 -0.297 1.329 1.329 0 0 0 0 -0.305zm0 7.029a1.335 1.335 0 0 0 0 -0.305 1.265 1.265 0 0 0 -0.117 -0.289 1.561 1.561 0 0 0 -0.148 -0.273 1.125 1.125 0 0 0 -0.195 -0.234 1.562 1.562 0 0 0 -2.203 0A1.562 1.562 0 0 0 0.009 12.496a1.733 1.733 0 0 0 0.117 0.602 1.748 1.748 0 0 0 0.141 0.266 1.499 1.499 0 0 0 0.203 0.234 1.14 1.14 0 0 0 0.234 0.195 1.267 1.267 0 0 0 0.266 0.148 1.328 1.328 0 0 0 0.297 0.086c0.1 0.022 0.203 0.033 0.305 0.031a1.333 1.333 0 0 0 0.305 0 1.268 1.268 0 0 0 0.289 -0.086 1.304 1.304 0 0 0 0.273 -0.148 1.14 1.14 0 0 0 0.234 -0.195 1.14 1.14 0 0 0 0.195 -0.234 1.256 1.256 0 0 0 0.148 -0.266 1.321 1.321 0 0 0 0.117 -0.328 1.292 1.292 0 0 0 0 -0.305zm0 7.029a1.341 1.341 0 0 0 0 -0.305 1.329 1.329 0 0 0 -0.117 -0.297 1.813 1.813 0 0 0 -0.148 -0.266 1.14 1.14 0 0 0 -0.195 -0.234 1.562 1.562 0 0 0 -2.203 0 1.14 1.14 0 0 0 -0.195 0.234 1.813 1.813 0 0 0 -0.148 0.266 1.28 1.28 0 0 0 -0.086 0.297 1.342 1.342 0 0 0 -0.032 0.304 1.562 1.562 0 0 0 0.461 1.102 1.14 1.14 0 0 0 0.234 0.195 1.267 1.267 0 0 0 0.266 0.148 1.328 1.328 0 0 0 0.297 0.086c0.1 0.022 0.203 0.033 0.305 0.031a1.333 1.333 0 0 0 0.305 0 1.268 1.268 0 0 0 0.289 -0.086 1.304 1.304 0 0 0 0.273 -0.148 1.14 1.14 0 0 0 0.234 -0.195 1.14 1.14 0 0 0 0.195 -0.234 1.25 1.25 0 0 0 0.148 -0.266 1.326 1.326 0 0 0 0.117 -0.328 1.292 1.292 0 0 0 0 -0.305zm20.305 -8.591H6.257a1.561 1.561 0 1 0 0 3.124h17.181a1.561 1.561 0 1 0 0 -3.124zm-7.029 7.029H6.256a1.561 1.561 0 1 0 0 3.124h10.153a1.561 1.561 0 1 0 0 -3.124z"
                data-original="#000000"
              />
            </svg>
          </div>
          <div class="item__count count">
            <span class="count__value">{{ getCountProduct(order.id) }}</span>
            <span class="count__title">Продукта</span>
          </div>
          <div class="item__date date">
            <div class="date__short">{{ formatingDate(order.date, 'short') }}</div>
            <div class="date__full">{{ formatingDate(order.date) }}</div>
          </div>
          <div class="item__price price">
            <div class="price__usd">{{ `${parsePriceСurrency(order.id, 'USD')} $` }}</div>
            <div class="price__uah">
              {{ `${parsePriceСurrency(order.id, 'UAH')} UAH` }}
            </div>
          </div>
          <div @click="openPopUp(order)" class="item__button-delete">
            <svg>
              <path
                d="M9.989 1.657A0.667 0.667 0 0 0 9.333 2.333V2.667H5.667a0.667 0.667 0 0 0 -0.676 0.667H4a0.667 0.667 0 1 0 0 1.333h12a0.667 0.667 0 1 0 0 -1.333h-0.991A0.667 0.667 0 0 0 14.333 2.667H10.667v-0.333a0.667 0.667 0 0 0 -0.677 -0.676zM4 6l1.195 10.156A1.331 1.331 0 0 0 6.518 17.333h6.964a1.332 1.332 0 0 0 1.323 -1.177L16 6H4z"
              />
            </svg>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="orders__short short">
        <div class="short__list list">
          <div
            v-for="order in getOrders"
            :key="order.id"
            @click="selectOrder(order)"
            class="list__item item"
          >
            <div class="item__button-view">
              <svg viewBox="0 0 25 25">
                <path
                  d="M21.876 3.905H6.257a1.561 1.561 0 1 0 0 3.124h15.619a1.561 1.561 0 1 0 0 -3.124zm-18.743 1.562a1.562 1.562 0 0 0 -0.461 -1.102 1.562 1.562 0 0 0 -2.203 0 1.562 1.562 0 0 0 -0.461 1.102 1.329 1.329 0 0 0 0 0.305 1.408 1.408 0 0 0 0.086 0.297 1.813 1.813 0 0 0 0.148 0.266 1.428 1.428 0 0 0 0.195 0.242 1.382 1.382 0 0 0 0.234 0.188 1.272 1.272 0 0 0 0.266 0.148 1.289 1.289 0 0 0 0.328 0.117 1.369 1.369 0 0 0 0.305 0 1.562 1.562 0 0 0 1.102 -0.453 1.428 1.428 0 0 0 0.195 -0.242 1.813 1.813 0 0 0 0.148 -0.266 1.45 1.45 0 0 0 0.117 -0.297 1.329 1.329 0 0 0 0 -0.305zm0 7.029a1.335 1.335 0 0 0 0 -0.305 1.265 1.265 0 0 0 -0.117 -0.289 1.561 1.561 0 0 0 -0.148 -0.273 1.125 1.125 0 0 0 -0.195 -0.234 1.562 1.562 0 0 0 -2.203 0A1.562 1.562 0 0 0 0.009 12.496a1.733 1.733 0 0 0 0.117 0.602 1.748 1.748 0 0 0 0.141 0.266 1.499 1.499 0 0 0 0.203 0.234 1.14 1.14 0 0 0 0.234 0.195 1.267 1.267 0 0 0 0.266 0.148 1.328 1.328 0 0 0 0.297 0.086c0.1 0.022 0.203 0.033 0.305 0.031a1.333 1.333 0 0 0 0.305 0 1.268 1.268 0 0 0 0.289 -0.086 1.304 1.304 0 0 0 0.273 -0.148 1.14 1.14 0 0 0 0.234 -0.195 1.14 1.14 0 0 0 0.195 -0.234 1.256 1.256 0 0 0 0.148 -0.266 1.321 1.321 0 0 0 0.117 -0.328 1.292 1.292 0 0 0 0 -0.305zm0 7.029a1.341 1.341 0 0 0 0 -0.305 1.329 1.329 0 0 0 -0.117 -0.297 1.813 1.813 0 0 0 -0.148 -0.266 1.14 1.14 0 0 0 -0.195 -0.234 1.562 1.562 0 0 0 -2.203 0 1.14 1.14 0 0 0 -0.195 0.234 1.813 1.813 0 0 0 -0.148 0.266 1.28 1.28 0 0 0 -0.086 0.297 1.342 1.342 0 0 0 -0.032 0.304 1.562 1.562 0 0 0 0.461 1.102 1.14 1.14 0 0 0 0.234 0.195 1.267 1.267 0 0 0 0.266 0.148 1.328 1.328 0 0 0 0.297 0.086c0.1 0.022 0.203 0.033 0.305 0.031a1.333 1.333 0 0 0 0.305 0 1.268 1.268 0 0 0 0.289 -0.086 1.304 1.304 0 0 0 0.273 -0.148 1.14 1.14 0 0 0 0.234 -0.195 1.14 1.14 0 0 0 0.195 -0.234 1.25 1.25 0 0 0 0.148 -0.266 1.326 1.326 0 0 0 0.117 -0.328 1.292 1.292 0 0 0 0 -0.305zm20.305 -8.591H6.257a1.561 1.561 0 1 0 0 3.124h17.181a1.561 1.561 0 1 0 0 -3.124zm-7.029 7.029H6.256a1.561 1.561 0 1 0 0 3.124h10.153a1.561 1.561 0 1 0 0 -3.124z"
                  data-original="#000000"
                />
              </svg>
            </div>
            <div class="item__count count">
              <span class="count__value">{{ getCountProduct(order.id) }}</span>
              <span class="count__title">Продукта</span>
            </div>
            <div class="item__date date">
              <div class="date__short">{{ formatingDate(order.date, 'short') }}</div>
              <div class="date__full">{{ formatingDate(order.date) }}</div>
            </div>
          </div>
        </div>
        <div class="short__block block">
          <div class="block__content content">
            <div @click="closeBlock()" class="content__close">
              <svg viewBox="0 0 30 30">
                <path
                  d="M7 4a.995.995 0 0 0-.707.293l-2 2a.999.999 0 0 0 0 1.414L11.586 15l-7.293 7.293a.999.999 0 0 0 0 1.414l2 2a.999.999 0 0 0 1.414 0L15 18.414l7.293 7.293a.999.999 0 0 0 1.414 0l2-2a.999.999 0 0 0 0-1.414L18.414 15l7.293-7.293a.999.999 0 0 0 0-1.414l-2-2a.999.999 0 0 0-1.414 0L15 11.586 7.707 4.293A.996.996 0 0 0 7 4z"
                />
              </svg>
            </div>
            <div class="content__title">{{ selectedOrder.title }}</div>
            <div class="content__button-add">
              <span class="plus">+</span>
              <div class="text">Добавить продукт</div>
            </div>
            <div class="content__list list">
              <div
                v-for="product in selectProducts(selectedOrder)"
                :key="product.id"
                class="list__item item"
              >
                <div class="item__circle">
                  <div :class="{ free: product.isFree }"></div>
                </div>
                <div class="item__photo">
                  <img :src="product.photo" alt="photo" />
                </div>
                <div class="item__title title">
                  <div class="title__name">
                    <span>{{ product.title }}</span>
                  </div>
                  <div class="title__serial">{{ product.serialNumber }}</div>
                </div>
                <div class="item__is-free">
                  <span v-if="product.isFree" class="free">Свободен</span>
                  <span v-else>В ремонте</span>
                </div>
                <div class="item__button-delete">
                  <svg>
                    <path
                      d="M9.989 1.657A0.667 0.667 0 0 0 9.333 2.333V2.667H5.667a0.667 0.667 0 0 0 -0.676 0.667H4a0.667 0.667 0 1 0 0 1.333h12a0.667 0.667 0 1 0 0 -1.333h-0.991A0.667 0.667 0 0 0 14.333 2.667H10.667v-0.333a0.667 0.667 0 0 0 -0.677 -0.676zM4 6l1.195 10.156A1.331 1.331 0 0 0 6.518 17.333h6.964a1.332 1.332 0 0 0 1.323 -1.177L16 6H4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import PopUp from '@/components/PopUp.vue';

import { mapGetters } from 'vuex';
export default {
  name: 'Orders',
  data() {
    return {
      isPopUp: false,
      isBlock: false,
      selectedOrderDelete: null,
      selectedOrder: null,
      selectedProducts: null
    };
  },
  components: {
    PopUp
  },
  methods: {
    orderQuantity() {
      return this.getOrders.length;
    },
    formatingDate(value, option) {
      const months = [
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек'
      ];
      const parseDate = new Date(value);
      if (option == 'short') {
        return `${('0' + (parseDate.getMonth() + 1)).slice(-2)} / ${parseDate.getFullYear()}`;
      } else {
        return `${('0' + parseDate.getDate()).slice(-2)}
          / ${months[parseDate.getMonth()]} / ${parseDate.getFullYear()}`;
      }
    },
    getCountProduct(value) {
      const result = this.getProducts.filter((i) => i.order == value);
      return result.length;
    },
    parsePriceСurrency(value, currency) {
      const index = currency == 'UAH' ? 1 : 0;
      const itemProduct = this.getProducts.filter((i) => i.order == value).map((i) => i.price);
      const priceProduct = itemProduct
        .filter((i) => i[index].symbol == currency)
        .map((i) => i[index].value);

      if (priceProduct.length) {
        return priceProduct.reduce((x, y) => x + y);
      } else {
        return priceProduct.toString() != '' ? priceProduct.toString() : '0';
      }
    },
    closePopUp() {
      this.isPopUp = false;
    },
    openPopUp(value) {
      this.isPopUp = true;
      this.selectedOrderDelete = this.getProducts.filter((i) => i.order == value.id).map((i) => i);
    },
    closeBlock() {
      this.isBlock = false;
    },
    openBlock() {
      this.isBlock = true;
    },
    selectOrder(value) {
      this.openBlock();
      this.selectedOrder = value;
    },
    selectProducts(value) {
      const result = this.getProducts.filter((i) => i.order == value.id);
      return result;
    }
  },
  computed: {
    ...mapGetters(['getOrders', 'getProducts'])
  }
};
</script>

<style lang="scss" scoped>
.orders {
  &__title {
    display: flex;
    margin-bottom: 50px;
    align-items: center;
    .title {
      &__button-add {
        display: flex;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        border: 3px solid #739f4b;
        background: $color-green;

        span {
          font-size: 20px;
          line-height: 20px;

          color: white;
          margin: auto;
        }
      }
      &__value {
        margin-left: 15px;
        font-size: 25px;
        line-height: 25px;
        font-weight: 600;

        span {
          font-size: 27px;
          font-weight: 600;
          line-height: 27px;
        }
      }
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 400px;
    overflow: scroll;
    color: $color-darkgray;
    .list__item {
      padding: 10px 20px;
      display: flex;
      width: 700px;
      align-items: center;
      border-radius: 5px;
      border: 1px solid $color-lightgray;
      background: white;
      font-weight: 300;
      cursor: pointer;
      .item {
        &__title {
          font-size: 16px;
          line-height: 16px;
          width: 35%;
          span {
            border-bottom: 1px solid $color-gray;
          }
        }
        &__button-view {
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 35px;
          min-height: 35px;
          border-radius: 50%;
          border: 1px solid $color-lightgray;
          background: white;
          svg {
            height: 18px;
          }
        }
        &__count {
          display: flex;
          flex-direction: column;
          margin-left: 15px;
          line-height: 15px;
          .count__value {
            font-size: 16px;
          }
          .count__title {
            font-size: 14px;
            color: $color-gray;
          }
        }
        &__date {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 15px;
          width: 25%;
          .date__short {
            color: $color-gray;
            font-size: 12px;
          }
          .date__full {
            font-size: 14px;
          }
        }
        &__price {
          line-height: 15px;
          width: 25%;
          .price__usd {
            color: $color-gray;
            font-size: 12px;
          }
          .price__uah {
            font-size: 14px;
          }
        }
        &__button-delete {
          margin-left: auto;
          svg {
            fill: $color-darkgray;
            width: 20px;
            height: 20px;
            cursor: pointer;
            &:hover {
              fill: firebrick;
            }
          }
        }
      }
    }
  }
  &__short {
    display: flex;
    gap: 30px;
    .short__list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      min-width: 350px;
      .list__item {
        width: 100%;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        border-radius: 5px;
        border: 1px solid $color-lightgray;
        background: white;
        font-weight: 300;
        cursor: pointer;
        .item__button-view {
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 35px;
          min-height: 35px;
          border-radius: 50%;
          border: 1px solid $color-lightgray;
          background: white;
          svg {
            height: 18px;
          }
        }
        .item__count {
          display: flex;
          flex-direction: column;
          margin-left: 15px;
          line-height: 15px;
          .count__value {
            font-size: 16px;
          }
          .count__title {
            font-size: 14px;
            color: $color-gray;
          }
        }
        .item__date {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 15px;
          margin-left: 25px;
          .date__short {
            color: $color-gray;
            font-size: 12px;
          }
          .date__full {
            font-size: 14px;
          }
        }
      }
    }
    .short__block {
      min-width: 500px;
      .block__content {
        background: white;
        position: relative;
        border: 1px solid $color-lightgray;
        border-radius: 5px;
        .content__close {
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
        .content__title {
          padding: 20px 20px 0;
          font-weight: 600;
          font-size: 18px;
        }
        .content__button-add {
          display: flex;
          margin: 10px 20px;
          color: $color-green;
          .plus {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            font-size: 16px;
            color: white;
            background: $color-green;
          }
          .text {
            margin-left: 12px;
          }
        }
        .content__list {
          .list__item {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 10px 25px;
            border-top: 1px solid $color-lightgray;
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
              margin-left: 20px;
            }
            .item__title {
              display: flex;
              flex-direction: column;
              margin-left: 20px;
              width: 30%;
              .title__name {
                font-size: 16px;
                line-height: 12px;
                span {
                  line-height: 20px;
                  border-bottom: 1px solid $color-gray;
                }
              }
              .title__serial {
                margin-top: 2px;
                color: $color-gray;
              }
            }
            .item__is-free {
              margin-left: auto;
              .free {
                color: $color-green;
              }
            }
            .item__button-delete {
              margin-left: auto;
              svg {
                fill: $color-darkgray;
                width: 20px;
                height: 20px;
                cursor: pointer;
                &:hover {
                  fill: firebrick;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
