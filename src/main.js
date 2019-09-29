//项目入口
import Vue from 'vue';

//1.vue-router
import VueRouter from 'vue-router';
//2.安装路由
Vue.use(VueRouter)
//3.导入路由模块
import router from './router.js';


/* //导入vue-resource
import VueResource from 'vue-source';
//安装
Vue.use(VueResource);
//设置请求的根路径
Vue.http.options.root = 'http://localhost:3000';
//全局设置post时候表单数据格式组织形式：application-x-www-form-urlencoded
Vue.http.options.emulateJSON = true;
 */

 
//按需导入mint-ui 组件并注册
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);


//导入MUI
import './lib/mui/css/mui.min.css';
//mui扩展的图标--购物车的
import './lib/mui/css/icons-extra.css';


//导入vue-preview图片缩略图插件
import Vuepreivew from 'vue-preview';
Vue.use(Vuepreivew);


//组件模板
//render渲染模板
import App from './App.vue';



var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router:router,//4.挂载路由实例
});