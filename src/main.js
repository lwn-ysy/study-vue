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


//导入vuex转态管理器
import Vuex from 'vuex';
Vue.use(Vuex);

//调用localStorage的购物车信息
var car = JSON.parse(localStorage.getItem('car') || '[]');

var store = new Vuex.Store({
    state: {
        //分析，将购物车的商品数据，用一个数组保存起来，
        //暂时设计成[id:商品id，count:要购买的数量，price:商品的单价，selected:falses是否被选中]
        car: car
    },
    mutations: {
        //添加购物车数据--GoodsInfo组件里
        addToCard(state, carGoodList) {
            //分析：如果之前就有数据，直接修改car.count即可
            //如果没有，直接push整个carGoodList到car数组
            var flag = false;
            state.car.some(item => {
                if (item.id == carGoodList.id) {
                    item.count += parseInt(carGoodList.count);
                    flag = true;//标记已成功找到
                    return true;//跳出循坏
                }
            });
            if (!flag) {
                state.car.push(carGoodList);
            };

            //当更新car之后，把car数组存储到本地的local storage
            localStorage.setItem('car',JSON.stringify(this.state.car));
        },
        //修改购物车数据--ShopcarContainer组件里
        updateGoodsInfo(state,carGoodList){
            state.car.some(item => {
                if (item.id == carGoodList.id) {
                    item.count = parseInt(carGoodList.count);
                    return true;//跳出循坏
                }
            });
            localStorage.setItem('car',JSON.stringify(this.state.car));
        },
        //删除购物车数据--ShopcarContainer组件里
        removeFormCar(state,id){
            state.car.some((item,index)=> {
                if (item.id == id) {
                    this.state.car.splice(index,1)
                    return true;//跳出循坏
                }
            });
            localStorage.setItem('car',JSON.stringify(this.state.car));
        }
    },
    //相当于 计算属性 ， 也相当于filters
    getters: {
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            });
            return c;
        }
    }
});

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
    router: router,//4.挂载路由实例
    store: store//挂载store状态 管理器
});