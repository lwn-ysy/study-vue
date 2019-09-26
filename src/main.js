//项目入口

import Vue from 'vue';

//按需导入mint-ui 组件并注册
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//导入MUI
import './lib/mui/css/mui.min.css'

//组件模板
import App from './App.vue';


var vm = new Vue({
    el: '#app',
    render: c => c(App)
});