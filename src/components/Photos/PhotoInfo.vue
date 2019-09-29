<template>
    <div class="photo-list">
        <!-- 图片缩略图 -->
        <template>
            <vue-preview :slides="slide1" ></vue-preview>
        </template>

        <!-- 评论 -->
        <comt></comt>
    </div>

</template>

<script>
import comments from '../subcomments/comments.vue';

export default {
    data(){
        return {
            slide1:[
                {
                    src: '../../images/0.jpg',
                    msrc: '../../images/0.png',
                    alt: 'picture1',
                    title: 'Image Caption 1',
                    w: 1920,
                    h:1080
                },
                {
                    src: '../../images/1.jpg',
                    msrc: '../../images/1.png',
                    alt: 'picture1',
                    title: 'Image Caption 1',
                    w: 1920,
                    h:1080
                },
                {
                    src: '../../images/2.jpg',
                    msrc: '../../images/2.png',
                    alt: 'picture1',
                    title: 'Image Caption 1',
                    w: 1920,
                    h:1080
                },
                {
                    src: '../../images/3.jpg',
                    msrc: '../../images/3.png',
                    alt: 'picture1',
                    title: 'Image Caption 1',
                    w: 1920,
                    h:1080
                },
                {
                    src: '../../images/4.jpg',
                    msrc: '../../images/4.png',
                    alt: 'picture1',
                    title: 'Image Caption 1',
                    w: 1920,
                    h:1080
                },
            ]
        }
    },
    components:{
        "comt":comments
    }
}
</script>

<style lang='scss'>

.photo-list .my-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    figure{
        padding: 10px;
        text-align: center;
        margin: 10px 0 0 0;
        width: 50%;
        a{
            display: block;
            img{
                width: 100%;
                vertical-align: middle;
                box-shadow: 0 0 9px goldenrod;
            }
        }
    }
}
</style>