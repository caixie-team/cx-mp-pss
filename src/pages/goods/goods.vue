<template name="goods">
  <view>
    <view class="goods-top-bg">
      <view class="padding-lg flex align-center">
        <button class="cu-btn round bg-green">
          <view class="cuIcon-barcode"
            ><text class="padding-left">添加商品</text></view
          >
        </button>
      </view>
    </view>
    <view class="cu-bar bg-white solid-bottom">
      <view class="action text-title-color">
        商品列表
      </view>
    </view>
    <view class="cu-list menu">
      <view class="cu-item" v-for="item of 10">
        <view class="content padding-tb-sm">
          <view class="text-title-color text-lg padding-top-xs">
            小目标还没有实现！</view
          >
          <view class="text-title-color text-sm">进价: ￥33.00</view>
          <view class="text-title-color text-sm">售价: ￥55.00</view>
          <view class="text-time text-sm">库存: 99</view>
        </view>
        <view class="action">
          <button class="cu-btn round">
            <view class="cuIcon-more"></view>
          </button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.goods-top-bg {
  background-image: url(https://data.caixie.top/topbg.png);
  background-size: cover;
  height: 382rpx;
  display: flex;
  justify-content: left;
  padding-top: 140rpx;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  align-items: center;
  color: #000;
  /* font-weight: 300; */
  /* text-shadow: 0 0 3px rgba(0, 0, 0, 0.3); */
}
</style>
