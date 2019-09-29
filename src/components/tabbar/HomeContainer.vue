<template>
    <div>
        <!-- 轮播图 -->
        <swiper :imgsList='imgsList'></swiper>

        <!-- 图标入口 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newlist">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul>

    </div>
</template>

<script>
//！！！后续添加服务端请求数据库---3
import swiper from '../subcomments/lubotu.vue'
export default {
    data(){
        return {
            imgsList:[
                {url:'../../images/0.jpg',id:1},
                {url:'../../images/1.jpg',id:2},
                {url:'../../images/2.jpg',id:3},
                {url:'../../images/3.jpg',id:4}
            ]
        }
    },
    components:{
        swiper
    }
}
/* 使用vue-resource
    1.main.js导入并安装vue-resoure

    2.created(){
        this.getImgs()
    }

    3.methods:{
        getImgs(){
            this.$http.get(path).then(result => {
                this.imgsList  = result.body.message
            })
        }
    }
 */
</script>



<style lang='scss' scoped>

.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
    img{
        width: 60px;
    }
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 13px;
    line-height: 13px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}
</style>

