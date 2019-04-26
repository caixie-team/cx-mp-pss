<template>
  <view>
    <home v-if="PageCur == 'home'"></home>
	  <statistics v-if="PageCur == 'statistics'"></statistics>
	  <goods v-if="PageCur == 'goods'"></goods>
	  <my v-if="PageCur == 'my'"></my>

    <view class="cu-bar tabbar bg-white shadow foot">
      <view class="action" :class="PageCur=='home'?'text-green':'text-black'" @click="NavChange" data-cur="home">
        <view class="cuIcon-home" ></view> 首页
      </view>
      <view class="action" :class="PageCur=='statistics'?'text-green':'text-black'" @click="NavChange" data-cur="statistics">
        <view class="cuIcon-rank"></view> 统计
      </view>
      <view class="action text-gray add-action" @click="scanBarCode">
        <button class="cu-btn cuIcon-barcode bg-green shadow"></button>
        扫条码
      </view>
      <view class="action" :class="PageCur=='goods'?'text-green':'text-black'" @click="NavChange" data-cur="goods">
        <view class="cuIcon-copy"></view> 商品管理
      </view>
      <view class="action" :class="PageCur=='my'?'text-green':'text-black'" @click="NavChange" data-cur="my">
        <view class="cuIcon-my"></view> 我的
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      PageCur: "home"
    };
  },
  methods: {
    NavChange: function(e) {
      this.PageCur = e.currentTarget.dataset.cur;
    },
    scanBarCode(){
       wx.scanCode({
          success: res => {
            // wx.navigateTo({
            //   url: `/pages/goods/purchase/purchase?barCode=${res.result}`
            // })

            // const url = `/pages/goods/purchase/purchase?barCode=${res.result}`;
            // that.findByShopIdAndBarCode(res.result,url)
          }
        });
    }
  }
};
</script>

<style>
</style>
