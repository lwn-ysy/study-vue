<template>
<div class="shopcar-container">

    <div class="goods-list" v-for="item in $store.state.car" :key="item.id">

        <!-- 商品列表区域 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">

                    <mt-switch ></mt-switch>
                    <img src="../../images/menu1.png" alt="">
                    <div class="info">
                        <h1>id:{{item.id}}---这个titlt暂时没数据</h1>
                        <p>
                            <span class="price">￥2199</span>
                            <numbox v-bind:cellCount='item.count' :goodsId='item.id'></numbox>
                            <a href="#" @click.prevent="remove(item.id)">删除</a>
                        </p>

                    </div>
				</div>
			</div>
		</div>
    </div>

        <!-- 商品结算区域 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品 <span class="red">0</span> 件，总价<span class="red">￥0</span></p>
                    </div>
                    <mt-button type='danger'>去结算</mt-button>
				</div>
			</div>
		</div>

</div>

    
</template>

<script>
import numbox from '../subcomments/shopcar_numbox.vue'

export default {
    components:{
        numbox:numbox
    },
    methods:{
        remove(id){
            this.$store.commit('removeFormCar',id);
        }
    }
}
</script>

<style lang='scss' scoped>
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
    .goods-list{
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        img{
            width: 60px;
            height: 60px;
        }
        h1{
            font-size: 13px;
        }

        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p,h1{
                padding: 5px 0;
                margin: 0;
            }
            .price{color: red;font-weight:bold}
        }

    }
    .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red{
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
    }
}
</style>
