<template>
    <div>
      <Header />
      <section class="main">
        <!-- <div class="gif-container">
          <img src="/src/assets/conv6.gif" width="1000" height="600" alt="Main Animation" />
        </div> -->
      </section>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  
  export default {
    components: {
      Header,
      Footer
    }
  };
  </script>
  
  <style>
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #0c0e14;
    color: #fff;
  }
  
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 150px);
    background-image: url('/src/assets/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }
  
  .gif-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 900px;
    height: 600px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(157, 20, 207, 0.8), 0 0 20px rgba(255, 0, 255, 0.5);
    overflow: hidden;
  }
  
  .gif-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  </style>
  