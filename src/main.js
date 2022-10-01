import { createApp } from 'vue';
import App from './App.vue';

/*v-component*/
import UI from './components/UI/plugins';
import '@/assets/styles/main.scss';

import router from '@/router';
import store from '@/store';

const app = createApp(App);
app.use(UI);
app.use(router);
app.use(store);
app.mount('#app');
