<template name="home">
  <view>
    <view class="top-bg">
      <view class="padding-xs flex align-center">
        <view class="flex-sub text-center">
          <view class="text-xl padding">
            <text class="text-black">采撷进销存</text>
          </view>
        </view>
      </view>
      <view class="margin-top-sm padding-left">
        <text class="text-sm">总收益</text>
      </view>
      <view class="cu-list menu">
        <view class="cu-item">
          <view class="content padding-top-xs">
            <text class="text-black text-price text-xxxl text-bold"
              >302304.89</text
            >
          </view>
          <view class="action">
            <view class="cu-avatar-group">
              <view
                class="cu-avatar radius-lg xsm"
                style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"
              ></view>
              <view
                class="cu-avatar radius-lg xsm"
                style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"
              ></view>
              <view
                class="cu-avatar radius-lg xsm"
                style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"
              ></view>
            </view>
          </view>
          <view class="action">
            <button
              class="cu-btn radius-lg bg-green"
              style="width: 72upx;height: 72upx;font-size: 1em;"
            >
              <text class="cuIcon-friendadd text-xl"></text>
            </button>
          </view>
        </view>
      </view>
      <view class="padding flex">
        <view class="flex flex-sub flex-direction">
          <view class="text-sm text-custom">今天</view>
          <view class="margin-top-sm text-title-color text-price">3823.99</view>
        </view>
        <view class="flex flex-sub flex-direction">
          <view class="text-sm text-custom">本周</view>
          <view class="margin-top-sm text-title-color text-price"
            >33121.00</view
          >
        </view>
        <view class="flex flex-sub flex-direction">
          <view class="text-sm text-custom">本月</view>
          <view class="margin-top-sm text-title-color text-price"
            >993242.00</view
          >
        </view>
      </view>
    </view>

    <view class="cu-bar bg-white solid-bottom margin-top">
      <view class="action text-title-color">
        今天
      </view>
    </view>
    <view class="cu-list menu">
      <view class="cu-item" v-for="item of 10">
        <view class="content padding-tb-sm">
          <view class="text-time text-sm">2019/04/09</view>
          <view class="text-title-color text-lg padding-top-xs">
            小目标还没有实现！</view
          >
        </view>
        <view class="action">
          <view class="cu-tag bg-green light padding"
            ><text class="cuIcon-add padding-right-xs"></text
            ><text class="text-price">884.90</text>
          </view>
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
  methods: {
      
  }
};
</script>

<style>
page {
  padding-bottom: 100upx;
}

.top-bg {
  background-image: url(https://data.caixie.top/topbg-full.png);
  background-size: cover;
  height: 482rpx;
  display: flex;
  justify-content: left;
  padding-top: 40rpx;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  /* align-items: center; */
  color: #000;
  /* font-weight: 300; */
  /* text-shadow: 0 0 3px rgba(0, 0, 0, 0.3); */
}

.top-bg .cu-list.menu > .cu-item {
  background-color: rgba(0, 0, 0, 0) !important;
}

.top-bg text {
  opacity: 0.8;
}

.text-time {
  color: #6930ff;
}

.text-title-color {
  color: #333333;
}
</style>
