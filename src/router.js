import VueRouter from  'vue-router';

//导入路由组件模板
import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import NewList from './components/newlist/NewsList.vue';
import NewInfo from './components/newlist/NewsInfo.vue';
import PhotoList from './components/Photos/PhotoList.vue';

var router = new VueRouter({
    routes:[        
        {path:'/home',component:HomeContainer},
        {path:'/',redirect:'/home'},
        {path:'/members',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newlist',component:NewList},
        {path:'/home/newsinfo/:id',component:NewInfo},
        {path:'/home/photolist',component:PhotoList},
    ],
    //路由模块提供了一个点击类给我们 router-link-active，而MUI插件刚好有一个高亮类mui-active
    linkActiveClass:'mui-active',
});
export default router;