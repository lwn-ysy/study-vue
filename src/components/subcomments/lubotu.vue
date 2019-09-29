<template>
<div>
    <mt-swipe :auto="4000">
        <!-- 将来，谁谁使用轮播图组件，谁为我们传递imgsList -->
        <!-- 此时，轮播图应该是 父组件给子组件传递值 -->
        <mt-swipe-item v-for="item in imgsList" v-bind:key="item.id">
            <img v-bind:src="item.url" alt="">
        </mt-swipe-item>
    </mt-swipe>
</div>
</template>

<script>
export default {
    props:["imgsList"]
};
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    img{
        width: 100%;
    }
}
</style>