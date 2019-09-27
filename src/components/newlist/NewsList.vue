<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
                    <!-- 通过v-bind:to 传参 -->
                    <!-- 路由设置path: /home/newsinfo/:id -->
                    <!-- 跳转到落地页，通过this.$route.params.id 接收参数 -->
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>{{item.add_time}}</span>
                                <span>{{item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>


<script>
//！！！后续添加服务端请求数据库---2
export default {
    data(){
        return {
            newList:[
                {
                    "id":1,
                    "title":"这是标题",
                    "add_time":"2012-12-12 12:12",
                    "zhaiyao":"这是zhaiyao",
                    "click":12,
                    "img_url":"../../images/menu1.png"
                },
                {
                    "id":2,
                    "title":"这是标题",
                    "add_time":"2012-12-12 12:12",
                    "zhaiyao":"这是zhaiyao",
                    "click":12,
                    "img_url":"../../images/menu1.png"
                },
                {
                    "id":3,
                    "title":"这是标题",
                    "add_time":"2012-12-12 12:12",
                    "zhaiyao":"这是zhaiyao",
                    "click":12,
                    "img_url":"../../images/menu1.png"
                },
                {
                    "id":4,
                    "title":"这是标题",
                    "add_time":"2012-12-12 12:12",
                    "zhaiyao":"这是zhaiyao",
                    "click":12,
                    "img_url":"../../images/menu1.png"
                },
                {
                    "id":5,
                    "title":"这是标题",
                    "add_time":"2012-12-12 12:12",
                    "zhaiyao":"这是zhaiyao",
                    "click":12,
                    "img_url":"../../images/menu1.png"
                },
                {
                    "id":6,
                    "title":"这是标题",
                    "add_time":"2012-12-12 12:12",
                    "zhaiyao":"这是zhaiyao",
                    "click":12,
                    "img_url":"../../images/menu1.png"
                },
                {
                    "id":7,
                    "title":"这是标题",
                    "add_time":"2012-12-12 12:12",
                    "zhaiyao":"这是zhaiyao",
                    "click":12,
                    "img_url":"../../images/menu1.png"
                },
                {
                    "id":8,
                    "title":"这是标题",
                    "add_time":"2012-12-12 12:12",
                    "zhaiyao":"这是zhaiyao",
                    "click":12,
                    "img_url":"../../images/menu1.png"
                },
                {
                    "id":9,
                    "title":"这是标题",
                    "add_time":"2012-12-12 12:12",
                    "zhaiyao":"这是zhaiyao",
                    "click":12,
                    "img_url":"../../images/menu1.png"
                },
                {
                    "id":10,
                    "title":"这是标题",
                    "add_time":"2012-12-12 12:12",
                    "zhaiyao":"这是zhaiyao",
                    "click":12,
                    "img_url":"../../images/menu1.png"
                },
                {
                    "id":11,
                    "title":"这是标题",
                    "add_time":"2012-12-12 12:12",
                    "zhaiyao":"这是zhaiyao",
                    "click":12,
                    "img_url":"../../images/menu1.png"
                },
                {
                    "id":12,
                    "title":"这是标题",
                    "add_time":"2012-12-12 12:12",
                    "zhaiyao":"这是zhaiyao",
                    "click":12,
                    "img_url":"../../images/menu1.png"
                },
                {
                    "id":13,
                    "title":"这是标题",
                    "add_time":"2012-12-12 12:12",
                    "zhaiyao":"这是zhaiyao",
                    "click":12,
                    "img_url":"../../images/menu1.png"
                },
                {
                    "id":14,
                    "title":"这是标题",
                    "add_time":"2012-12-12 12:12",
                    "zhaiyao":"这是zhaiyao",
                    "click":12,
                    "img_url":"../../images/menu1.png"
                },
                {
                    "id":15,
                    "title":"这是标题",
                    "add_time":"2012-12-12 12:12",
                    "zhaiyao":"这是zhaiyao",
                    "click":12,
                    "img_url":"../../images/menu1.png"
                },
            ]
        }
    }
    /* created(){
        this.getNewList(); 
    },
    methods:{
        getNewList(){
            this.$http.get('http://localhost:3000/data.json').then((result) =>{
                this.newList = result;
            })
        }
    } */
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{font-size: 14px;}
        .mui-ellipsis{
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            color: #226aff;
        }
    }
}
</style>