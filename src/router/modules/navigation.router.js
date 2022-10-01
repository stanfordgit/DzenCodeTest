import Orders from '@/views/Orders';
import Products from '@/views/Products';

export default [
  {
    path: '/orders',
    component: Orders,
    name: 'orders',
    meta: { title: 'Orders' }
  },
  {
    path: '/products',
    component: Products,
    name: 'products',
    meta: { title: 'Products' }
  }
];
