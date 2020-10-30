<template>
  <div id="app">
    <Header />
    <serBar />
    <main msg="군인하길 잘했다."/>
    <div class="container"> <!-- class 추가 -->
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import serBar from './components/common/serBar';

export default {
  name: 'App',
  components: {
    Header,
    serBar,
    Footer
  }
}
</script>
//https://bootstrap-vue.org/docs/components/button-group
//https://imasoftwareengineer.tistory.com/42
//https://fyzh99.tistory.com/46?category=837734
//css 수정
<style>
html,body{padding:0; margin:0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1{color:#43b984;}
table{width:100%; border-collapse:collapse;}
.wrap{width:100%;}
.container{width:800px; margin:0 auto;}
a{text-decoration:none;}
.btn{padding:10px; background:#34445c; color:#fff;}
</style>