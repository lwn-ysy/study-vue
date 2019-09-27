<template>
    <div>
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in cates" :key="item.id">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>

        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <li v-for="item in imagesList" :key="item.id">
            <img v-lazy="item.img_url">
            <div class="info">
                <h1 class="info-title">{{item.title}}</h1>
                <div class="info-body">{{item.zhaiyao}}</div>
            </div>
            </li>
        </ul>

    </div>
</template>

<script>
//1.导入mui的js文件
import mui from '../../lib/mui/js/mui.min.js';

export default {
    data(){
        return {
            cates:[
                {
                    id:0,
                    title:"全部"   
                },
                {
                    id:1,
                    title:"全部"   
                },
                {
                    id:2,
                    title:"全部"   
                },
                {
                    id:3,
                    title:"全部"   
                },
                {
                    id:4,
                    title:"全部"   
                },
                {
                    id:5,
                    title:"全部"   
                }
            ],
            imagesList:[
                {
                    id:0,
                    title:'图片标题',
                    img_url:'../../images/0.jpg',
                    zhaiyao:'这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要'
                },
                {
                    id:1,
                    title:'图片标题',
                    img_url:'../../images/1.jpg',
                    zhaiyao:'这是摘要'
                },
                {
                    id:2,
                    title:'图片标题',
                    img_url:'../../images/2.jpg',
                    zhaiyao:'这是摘要'
                },
                {
                    id:3,
                    title:'图片标题',
                    img_url:'../../images/3.jpg',
                    zhaiyao:'这是摘要'
                },
                {
                    id:4,
                    title:'图片标题',
                    img_url:'../../images/4.jpg',
                    zhaiyao:'这是摘要'
                },
                {
                    id:5,
                    title:'图片标题',
                    img_url:'../../images/5.jpg',
                    zhaiyao:'这是摘要'
                },
                {
                    id:6,
                    title:'图片标题',
                    img_url:'../../images/0.jpg',
                    zhaiyao:'这是摘要'
                },
                {
                    id:7,
                    title:'图片标题',
                    img_url:'../../images/1.jpg',
                    zhaiyao:'这是摘要'
                },
                {
                    id:8,
                    title:'图片标题',
                    img_url:'../../images/2.jpg',
                    zhaiyao:'这是摘要'
                },
                {
                    id:9,
                    title:'图片标题',
                    img_url:'../../images/3.jpg',
                    zhaiyao:'这是摘要'
                },
                {
                    id:10,
                    title:'图片标题',
                    img_url:'../../images/4.jpg',
                    zhaiyao:'这是摘要'
                },
                {
                    id:11,
                    title:'图片标题',
                    img_url:'../../images/5.jpg',
                    zhaiyao:'这是摘要'
                }
            ]
        }
    },
    mounted(){
        //当组件已经渲染到DOM树后，再初始化配置 
        //2.初始化滑动控件
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
    
}
</script>

<style lang="scss" scoped>
*{
    touch-action: pan-y;
}
.photo-list{
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li{
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999;
        position: relative;
        img{
            width: 100%;
            vertical-align: middle;/* 解决下面突出的灰色 原因是图片和文字是基线对齐的*/
        }

        img[lazy=loading] {/* 懒加载图片 */
        width: 40px;
        height: 300px;
        margin: auto;
        }

        .info{
            width: 100%;
            color: white;
            text-align: left;
            position: absolute;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);
            .info-title{
                font-size: 14px;
            }
            .info-body{
                font-size: 13px;

            }
        }
    }
}

</style>