// store/newsStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useNewsStore = defineStore('news', {
  state: () => ({
    news: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchNews() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get('URL_новостей');
        if (response.status === 200) {
          this.news = response.data.items || []; // Предположим, что новость приходит в поле `items`
        } else {
          this.error = 'Не удалось загрузить новости';
        }
      } catch (err) {
        this.error = `Ошибка при загрузке новостей: ${err.message}`;
      } finally {
        this.loading = false;
      }
    }
  }
});
