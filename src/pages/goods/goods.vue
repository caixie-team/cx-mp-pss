<template name="goods">
  <view>
    <view class="goods-top-bg">
      <view class="padding-lg flex align-center">
        <button class="cu-btn round" class="bg-green">
          <view class="cuIcon-barcode"><text class="padding-left">添加商品</text></view>
        </button>
      </view>
    </view>
    <view class="cu-bar bg-white solid-bottom margin-top">
      <view class="action text-title-color">
        商品列表
      </view>
    </view>
    <view class="cu-list menu padding-bottom-xxxl">
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
          <view class="cu-tag light padding"
            ><text class="cuIcon-more"></text
            >
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      basicsList: [
        {
          icon: "usefullfill",
          name: "开始"
        },
        {
          icon: "radioboxfill",
          name: "等待"
        },
        {
          icon: "roundclosefill",
          name: "错误"
        },
        {
          icon: "roundcheckfill",
          name: "完成"
        }
      ],
      basics: 0,
      numList: [
        {
          name: "开始"
        },
        {
          name: "等待"
        },
        {
          name: "错误"
        },
        {
          name: "完成"
        }
      ],
      num: 0,
      scroll: 0
    };
  },
  methods: {
    BasicsSteps() {
      this.basics =
        this.basics == this.basicsList.length - 1 ? 0 : this.basics + 1;
    },
    NumSteps() {
      this.num = this.num == this.numList.length - 1 ? 0 : this.num + 1;
    },
    ScrollSteps() {
      this.scroll = this.scroll == 9 ? 0 : this.scroll + 1;
    }
  }
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
