//项目入口

import Vue from 'vue';

//1.vue-router
import VueRouter from 'vue-router';
//2.安装路由
Vue.use(VueRouter)
//3.导入路由模块
import router from './router.js';

//按需导入mint-ui 组件并注册
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//导入MUI
import './lib/mui/css/mui.min.css'
//mui扩展的图标--购物车的
import './lib/mui/css/icons-extra.css'

//组件模板
import App from './App.vue';

var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router,//4.挂载路由实例
});