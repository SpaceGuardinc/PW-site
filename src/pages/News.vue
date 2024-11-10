<template>
  <div class="rss-feed">
    <ul v-if="items.length">
      <li v-for="(item, index) in items" :key="index" class="news-item">
        <a :href="item.link" target="_blank" class="news-title">{{ sanitizeTitle(item.title) }}</a>
        <p v-html="sanitizeDescription(item.description)" class="news-description"></p>
        <div class="media-content">
          <!-- Вставка изображений и видео -->
          <img v-if="item.media && item.media.type === 'image'" :src="item.media.url" alt="News Image" class="media-image"/>
          <video v-if="item.media && item.media.type === 'video'" controls class="media-video">
            <source :src="item.media.url" type="video/mp4" />
          </video>
        </div>
        <small class="news-date">{{ item.pubDate }}</small>
      </li>
    </ul>
    <p v-else class="loading-text">Загружаем новости...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';

export default {
  name: 'RssFeed',
  setup() {
    const items = ref([]);

    const fetchRssFeed = async () => {
      try {
        // Загружаем RSS данные через прокси
        const response = await axios.get('/rsshub/telegram/channel/PW_Nova');
        const xmlData = response.data;

        // Парсим XML в объект
        const parser = new XMLParser();
        const jsonObj = parser.parse(xmlData);

        // Получаем новости из parsed RSS
        items.value = jsonObj.rss.channel.item.map(item => ({
          ...item,
          media: item['media:content'] ? { url: item['media:content'].url, type: item['media:content'].$.type } : null
        }));
      } catch (error) {
        console.error('Ошибка при загрузке RSS:', error);
      }
    };

    // Функция для удаления спецсимволов, таких как 🖼 и прочее
    const sanitizeTitle = (title) => {
      return title.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}]/gu, '');  // Удаляет эмодзи и спецсимволы
    };

    const sanitizeDescription = (description) => {
      return description.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}]/gu, '');  // Удаляет эмодзи и спецсимволы
    };

    onMounted(() => {
      fetchRssFeed();
    });

    return {
      items,
      sanitizeTitle,
      sanitizeDescription
    };
  }
};
</script>

<style scoped>
.rss-feed {
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 1000px; /* Увеличиваем максимальную ширину контейнера */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loading-text {
  font-size: 1.2em;
  color: #ff9800;
  text-align: center;
}

.news-item {
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 900px; /* Увеличиваем ширину каждого элемента */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.news-title {
  font-size: 1.4em;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.news-title:hover {
  color: #1e88e5;
}

.news-description {
  font-size: 1em;
  color: #555;
  margin-bottom: 10px;
  text-align: center;
}

.news-date {
  font-size: 0.9em;
  color: #777;
  text-align: center;
  margin-top: 10px;
}

.media-content {
  text-align: center;
  margin: 15px 0;
  width: 100%;
}

.media-image {
  max-width: 90%; /* Уменьшаем максимальную ширину изображения */
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto; /* Центрируем изображение */
}

.media-video {
  width: 100%; /* Видео адаптируется к ширине контейнера */
  max-width: 900px; /* Ограничиваем максимальную ширину видео */
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto; /* Центрируем видео */
}

@media (max-width: 600px) {
  .rss-feed {
    padding: 15px;
  }

  .news-title {
    font-size: 1.2em;
  }

  .news-description {
    font-size: 0.9em;
  }

  .media-image, .media-video {
    max-width: 100%;
  } 
}
</style>
