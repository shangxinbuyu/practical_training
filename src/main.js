import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import VueRouter from "vue-router";
import 'element-ui/lib/theme-chalk/index.css';
import router from "@/router";


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
