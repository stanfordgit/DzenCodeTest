export default {
  state: {
    orders: [
      {
        id: 1,
        title: 'Order Big Name Test',
        date: '2017-06-29 12:09:33',
        description: 'desc'
      },
      {
        id: 2,
        title: 'Order Test',
        date: '2017-06-29 12:09:33',
        description: 'desc'
      }
    ]
  },
  getters: {
    getOrders(state) {
      return state.orders;
    }
  },
  mutations: {},
  actions: {}
};
