<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './pages/Home.vue';  // Обновите путь
import News from './pages/News.vue';  // Обновите путь

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
/* Стили для App.vue */
</style>
