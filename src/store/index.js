import { createStore } from 'vuex';

import orders from './modules/orders.store';
import products from './modules/products.store';

const store = createStore({
  modules: {
    orders,
    products
  }
});

export default store;
