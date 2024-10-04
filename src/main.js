import { createApp } from 'vue';
import { createPinia } from 'pinia'; // Импортируем Pinia
import './style.css';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia(); // Создаём экземпляр Pinia

app.use(pinia); // Подключаем Pinia к приложению
app.mount('#app');
