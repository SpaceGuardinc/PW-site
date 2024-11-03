<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-menu">
        <a href="#about">О нас</a>
        <a href="#support">Поддержка</a>
        <a href="#privacy">Политика конфиденциальности</a>
        <a href="#terms">Условия обслуживания</a>
      </div>
      <div class="social-icons">
        <a href="https://discord.gg/F5UCRsD7QJ" class="icon discord-icon" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://vk.com/pw_nova" class="icon vk-icon" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://t.me/PW_Nova" class="icon tg-icon" target="_blank" rel="noopener noreferrer"></a>
      </div>
      <p class="footer-text">© 2024 Prime World Nova, Inc. Все права защищены.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1a1d2a;
  padding: 40px 20px;
  border-top: 2px solid #333;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-menu a {
  color: #ccc;
  text-decoration: none;
  margin: 0 10px;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-menu a:hover {
  color: #ff9d23;
}

.social-icons {
  margin: 20px 0;
}

.icon {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-size: cover;
}

.discord-icon { background-image: url('src/assets/ds_icon_256.png'); }
.vk-icon { background-image: url('src/assets/vk_icon_256.png'); }
.tg-icon { background-image: url('src/assets/tg_icon_256.png'); }

.footer-text {
  color: #777;
  font-size: 12px;
  margin-top: 20px;
}
</style>
