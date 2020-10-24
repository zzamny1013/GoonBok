import Vue from 'vue'
import App from '../App.vue'
import router from '../routes'; //설정 라우터 호출
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = true;
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App)
  ,router               //뷰에 설정
}).$mount('#app')
