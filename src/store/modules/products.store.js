export default {
  state: {
    products: [
      {
        id: 1,
        serialNumber: 'AAMSP',
        isNew: 1,
        isFree: 1,
        photo: require('@/assets/product1.jpg'),
        title: 'Monitor super pro',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
          start: '2017-06-29 12:09:33',
          end: '2017-06-29 12:09:33'
        },
        price: [
          { value: 100, symbol: 'USD', isDefault: 0 },
          { value: 10000, symbol: 'UAH', isDefault: 1 }
        ],
        order: 1,
        date: '2017-06-29 12:09:33'
      },
      {
        id: 2,
        serialNumber: 'PPISP',
        isNew: 0,
        isFree: 0,
        photo: require('@/assets/product2.jpg'),
        title: 'iPhone pro',
        type: 'Phone',
        specification: 'Specification 1',
        guarantee: {
          start: '2017-06-29 12:09:33',
          end: '2017-06-29 12:09:33'
        },
        price: [
          { value: 150, symbol: 'USD', isDefault: 0 },
          { value: 1500, symbol: 'UAH', isDefault: 1 }
        ],
        order: 1,
        date: '2017-06-29 12:09:33'
      },
      {
        id: 3,
        serialNumber: 'PPSSP',
        isNew: 1,
        isFree: 1,
        photo: require('@/assets/product3.jpg'),
        title: 'Samsung S',
        type: 'Phone',
        specification: 'Specification 1',
        guarantee: {
          start: '2017-06-29 12:09:33',
          end: '2017-06-29 12:09:33'
        },
        price: [
          { value: 175, symbol: 'USD', isDefault: 0 },
          { value: 1750, symbol: 'UAH', isDefault: 1 }
        ],
        order: 2,
        date: '2017-06-29 12:09:33'
      }
    ]
  },
  getters: {
    getProducts(state) {
      return state.products;
    }
  },
  mutations: {},
  actions: {}
};
