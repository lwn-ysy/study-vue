/*评论子组件模板  */

<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容（最多吐槽120子）" maxlength="120"></textarea>

        <mt-button type="primary" size="large" @click="show">发表评论</mt-button>
        
        <div class="cmt-list"  >
            <div class="cmt-item" v-for="(item,index) in comments" :key="index">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time}}
                </div>
                <div class="cmt-body">
                    {{item.content === 'underfined' ? "此用户很懒" : item.content}}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="show">加载更多</mt-button>
    </div>
</template>

<script>
//！！！后续添加服务端请求数据库---4
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            comments:[
                {
                    user_name:"匿名用户1",
                    add_time:"2012-12-12 12:12",
                    content:"我来讨论一下"
                },
                {
                    user_name:"匿名用户2",
                    add_time:"2012-12-12 12:12",
                    content:"我来讨论一下"
                },
                {
                    user_name:"匿名用户3",
                    add_time:"2012-12-12 12:12",
                    content:"我来讨论一下"
                },
            ],
            //pageIndex:1 //默认展示第一数据
        }
    },
    props:["id"],//接收父组件的值
    methods:{
        show(){
            Toast({
                message:'功能暂未开放',
                duration:3000
            });
        }
    }
    
}
</script>

<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin: 5px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>