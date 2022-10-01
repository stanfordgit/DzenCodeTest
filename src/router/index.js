import { createRouter, createWebHistory } from 'vue-router';
import navigation from './modules/navigation.router';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'notFoundPage',
    redirect: '/orders'
  },
  ...navigation
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | DzenCode`;
  }
  next();
});

export default router;
