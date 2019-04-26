<template name="my">
  <scroll-view scroll-y class="scrollPage">
    <view class="my-top-bg">
      <image src="/static/logo2.png" class="png" mode="widthFix"></image>
      <text class="text-xl text-white">铜仁武陵山优品茶店</text>
      <view class="margin-top-sm">
        <text class="text-gray text-black" style="font-weight:600;">龙建林</text>
      </view>
    </view>
    <view class="cu-list menu card-menu sm-border">
      <view class="cu-item arrow my-item-bg">
        <navigator
          class="content"
          url="../../my/salerecord/index"
          hover-class="none"
        >
          <text class="cuIcon-order text-blue"></text>
          <text class="text-black">售出记录</text>
        </navigator>
      </view>
      <view class="cu-item arrow my-item-bg">
        <navigator
          class="content"
          url="../../my/salerecord/index"
          hover-class="none"
        >
          <text class="cuIcon-friend text-blue"></text>
          <text class="text-black">店员管理</text>
        </navigator>
      </view>
      <view class="cu-item arrow my-item-bg">
        <navigator
          class="content"
          url="../../my/salerecord/index"
          hover-class="none"
        >
          <text class="cuIcon-shop text-orange"></text>
          <text class="text-black">切换店铺</text>
        </navigator>
      </view>
      <view class="cu-item arrow my-item-bg">
        <button class="cu-btn content" open-type="feedback">
          <text class="cuIcon-writefill text-green"></text>
          <text class="text-black">意见反馈</text>
        </button>
      </view>
    </view>
  </scroll-view>
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
.page {
  padding-bottom: 100rpx;
}
.my-top-bg {
  background-image: url(https://cdn.nlark.com/yuque/0/2019/png/280373/1552908032971-assets/web-upload/e795fee4-c6cd-4951-b7d8-134aa9cd7c6b.png);
  background-size: cover;
  height: 550rpx;
  display: flex;
  justify-content: left;
  padding-top: 80rpx;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  align-items: center;
  color: #000;
  /* font-weight: 300; */
  /* text-shadow: 0 0 3px rgba(0, 0, 0, 0.3); */
}

.my-top-bg image {
  width: 160rpx;
  height: 160rpx;
}
.my-top-bg text {
  opacity: 0.8;
  padding-top: 30rpx;
}

.my-item-bg {
  background-color: #F2F2F2 !important;
}
</style>
