import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from "@/router";
import {
  Aside,
  Button,
  Container,
  Dialog,
  Form,
  FormItem,
  Header,
  Input,
  Main,
  Menu,
  MenuItem,
  Option,
  Select,
  Table,
  TableColumn
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Form);
Vue.use(Dialog);
Vue.use(Main);
Vue.use(Header);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Option);


Vue.config.productionTip = false

Vue.use(VueRouter);
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
