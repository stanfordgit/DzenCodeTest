<template>
  <div class="products">
    <div class="products__title title">
      <div class="title__value">
        Продукты / <span>{{ productsQuantity() }}</span>
      </div>
      <div class="title__filtre">
        <span>Тип: </span>
        <select name="selectType" v-model="selectedType">
          <option value="all">All</option>
          <option
            v-for="(productType, index) in formatingOption()"
            :value="productType"
            :key="index"
          >
            {{ productType }}
          </option>
        </select>
      </div>
    </div>
    <div class="products__list list">
      <div v-for="product in filterItem" :key="product.type" class="list__item item">
        <div class="item__is-free-indicator">
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
        <div class="item__guarantee guarantee">
          <div class="guarantee__start">
            <div class="from">с</div>
            <div class="guarantee__value">
              {{ guaranteeDate(product.guarantee.start) }}
            </div>
          </div>
          <div class="guarantee__end">
            <div class="from">по</div>
            <div class="guarantee__value">
              {{ guaranteeDate(product.guarantee.end) }}
            </div>
          </div>
        </div>
        <div class="item__state">
          <span v-if="product.isNew == 0">Б/У</span>
          <span v-else>Новый</span>
        </div>
        <div class="item__price price">
          <div class="price__usd">{{ `${parsePriceСurrency(product.price, 'USD')} $` }}</div>
          <div class="price__uah">{{ `${parsePriceСurrency(product.price, 'UAH')} UAH` }}</div>
        </div>
        <div class="item__date date">
          <div class="date__short">{{ formatingDate(product.date, 'short') }}</div>
          <div class="date__full">{{ formatingDate(product.date) }}</div>
        </div>
        <div class="item__name-order">
          <span>{{ getNameOrder(product.order) }}</span>
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
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Products',
  data() {
    return {
      selectedType: 'all'
    };
  },
  methods: {
    productsQuantity() {
      return this.getProducts.length;
    },
    guaranteeDate(value) {
      const parseDate = new Date(value);
      return `${('0' + parseDate.getDate()).slice(-2)}
      / ${('0' + (parseDate.getMonth() + 1)).slice(-2)}
      / ${parseDate.getFullYear()}`;
    },
    parsePriceСurrency(value, currency) {
      const result = value.filter((i) => i.symbol == currency).map((i) => i.value);
      return result.toString();
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
    getNameOrder(value) {
      const filter = this.getOrders.filter((i) => i.id == value).map((i) => i.title);
      return filter.toString();
    },
    formatingOption() {
      const arr = this.getProducts.map((i) => i.type);
      return [...new Set(arr)];
    }
  },
  computed: {
    filterItem() {
      if (this.selectedType == 'all') {
        return this.getProducts.map((i) => i);
      }
      return this.getProducts.filter((i) => i.type == this.selectedType);
    },
    ...mapGetters(['getOrders', 'getProducts'])
  }
};
</script>

<style lang="scss" scoped>
.products {
  &__title {
    display: flex;
    align-items: center;
    .title {
      &__value {
        font-size: 25px;
        line-height: 25px;
        font-weight: 600;
        span {
          font-size: 27px;
          font-weight: 600;
          line-height: 27px;
        }
      }
      &__filtre {
        margin-left: 20px;
        select {
          border-radius: 5px;
          margin-left: 5px;
          border: 1px solid $color-lightgray;
        }
      }
    }
  }
  &__list {
    gap: 20px;
    margin-top: 50px;
    min-width: 500px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    color: $color-darkgray;
    .list__item {
      padding: 10px 20px;
      display: flex;
      width: 1100px;
      align-items: center;
      border-radius: 5px;
      border: 1px solid $color-lightgray;
      font-weight: 300;
      background: white;
      .item {
        &__is-free-indicator {
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
        &__photo {
          display: flex;
          align-items: center;
          width: 30px;
          margin-left: 20px;
        }
        &__title {
          display: flex;
          flex-direction: column;
          margin-left: 20px;
          width: 15%;
          .title__name {
            line-height: 15px;
            font-size: 16px;
            span {
              border-bottom: 1px solid $color-gray;
            }
          }
          .title__serial {
            margin-top: 5px;
            color: $color-gray;
          }
        }
        &__is-free {
          padding: 0 1%;
          .free {
            color: $color-green;
          }
        }
        &__guarantee {
          display: flex;
          flex-direction: column;
          padding: 0 1%;
          .guarantee {
            &__start,
            &__end {
              display: flex;
              justify-content: space-between;
              .from {
                color: $color-gray;
                margin-right: 5px;
              }
            }
          }
        }
        &__state {
          padding: 0 1%;
          width: 8%;
        }
        &__price {
          width: 10%;
          line-height: 15px;
          .price__usd {
            color: $color-gray;
            font-size: 12px;
          }
          .price__uah {
            font-size: 14px;
          }
        }
        &__date {
          padding: 0 1%;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 15px;
          .date__short {
            color: $color-gray;
            font-size: 12px;
          }
          .date__full {
            font-size: 14px;
          }
        }
        &__name-order {
          padding: 0 1%;
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
}
</style>
