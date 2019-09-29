<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" alt />
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">{{item.ell_price}}</span>
          <span class="old">{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>

    <mt-button type="danger" size="large" >加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodslist: [
        {
          id: 1,
          img_url: "../../images/0.png",
          title: "尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）",
          sell_price: 2195,
          market_price: 2499,
          stock_quantity: 60
        },
        {
          id: 2,
          img_url: "../../images/1.png",
          title: "尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）",
          sell_price: 2195,
          market_price: 2499,
          stock_quantity: 60
        },
        {
          id: 3,
          img_url: "../../images/2.png",
          title: "尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）",
          sell_price: 2195,
          market_price: 2499,
          stock_quantity: 60
        },
        {
          id: 4,
          img_url: "../../images/3.png",
          title: "尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）",
          sell_price: 2195,
          market_price: 2499,
          stock_quantity: 60
        },
        {
          id: 5,
          img_url: "../../images/4.png",
          title: "尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）",
          sell_price: 2195,
          market_price: 2499,
          stock_quantity: 60
        }
      ]
    };
  },
  methods: {
    goDetail(id) {
      this.$router.push({ name: "goodsinfo", params: { id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
