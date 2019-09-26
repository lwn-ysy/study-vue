<template>
    <div>
        <mt-swipe :auto="0">
            <mt-swipe-item v-for="item in imgsList" v-bind:key="item.id">
                <img v-bind:src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
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
}
</script>

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

<style lang='scss' scoped>
.mint-swipe{
    height: 200px;
    img{
        width: 100%;
        height: 100%;
    }
}
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

