<template>
  <view>
    <home v-if="PageCur == 'home'"></home>
	<statistics v-if="PageCur == 'statistics'"></statistics>
	<goods v-if="PageCur == 'goods'"></goods>
	<my v-if="PageCur == 'my'"></my>

    <!-- <components v-if="PageCur == 'component'"></components>
    <plugin v-if="PageCur == 'plugin'"></plugin> -->

    <view class="cu-bar tabbar bg-white shadow foot">
      <view class="action" :class="PageCur=='home'?'text-green':'text-black'" @click="NavChange" data-cur="home">
        <view class="cuIcon-home" ></view> 首页
      </view>
      <view class="action" :class="PageCur=='statistics'?'text-green':'text-black'" @click="NavChange" data-cur="statistics">
        <view class="cuIcon-rank"></view> 统计
      </view>
      <view class="action text-gray add-action">
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

    <!-- <view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-green':'text-gray'">元素</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='component'?'text-green':'text-gray'">组件</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plugin">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='plugin'?'text-green':'text-gray'">扩展</view>
			</view>
		</view> -->
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
    }
  }
};
</script>

<style>
</style>
