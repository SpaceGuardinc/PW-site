<template>
  <header class="header">
    <div class="header-content">
      <!-- Лого -->
      <div class="logo">
        <img src="/src/assets/logo2.png" alt="Logo" />
      </div>

      <!-- Навигационное меню по центру -->
      <nav class="nav-menu">
        <a href="#home">Домой</a>
        <a href="#champions">Герои</a>
        <a href="#news">Новости</a>
        <a href="#community">Сообщество</a>
        <button class="download-button" @click="downloadLauncher">Скачать лаунчер</button>
      </nav>

      <!-- Действия (вход и регистрация) справа -->
      <div class="header-actions">
        <button class="login-btn">Войти</button>
        <button class="signup-btn">Зарегистрироваться</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    downloadLauncher() {
      const link = document.createElement('a');
      link.href = '/src/assets/launcher.exe';
      link.download = 'launcher.exe';
      link.click();
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #1a1d2a;
  padding: 10px 0;
  border-bottom: 2px solid #333;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.logo img {
  height: 50px;
}

.nav-menu {
  flex: 2;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-menu a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;
}

.nav-menu a:hover {
  color: #ff9d23;
}

.header-actions {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.download-button,
.login-btn,
.signup-btn {
  background-color: #1a1d2a;
  color: #fff;
  padding: 2px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(35, 6, 142, 0.3);
  transition: background-color 0.3s ease;
}

.download-button:hover,
.login-btn:hover,
.signup-btn:hover {
  background-color: #4a00b3;
}
</style>
