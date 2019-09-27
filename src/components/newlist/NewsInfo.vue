<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{newsinfo.title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间{{newsinfo.add_time}}</span>
            <span>点击：{{newsinfo.click}}</span>
        </p>
        <hr>
        <!-- 内容区 -->
        <div class="content" v-html="newsinfo.content"></div>

        <!-- 评论子组件区域 -->
        <!-- 传递id值给子组件comments -->
        <commentbox v-bind:id='this.id'></commentbox>
    </div>
</template>

<script>
//！！！后续添加服务端请求数据库---1

//子组件模板
import comments from '../subcomments/comments.vue'

export default {
    data(){
        return {
            id:this.$route.params.id,//将URL传递的id值，挂载到data上，方便引用
            newsinfo:{
                title:'这是标题',
                add_time:'2012-12-12 12:12',
                click:12,
                content:"<p>这是html格式v-html渲染的</p><p>内容</p>"
            }
        }
    },
    components:{//注册子组件
        //注册评论组件
        'commentbox':comments
    }
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
}
</style>