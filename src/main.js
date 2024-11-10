// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';  // Импорт маршрутов

const app = createApp(App);

app.use(createPinia()); // Подключаем Pinia для состояния
app.use(router); // Подключаем маршруты

app.mount('#app');
