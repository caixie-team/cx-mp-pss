<template name="statistics">
  <view>
    <image
      src="https://cdn.nlark.com/yuque/0/2019/png/280373/1552908032971-assets/web-upload/e795fee4-c6cd-4951-b7d8-134aa9cd7c6b.png"
      mode="widthFix"
      class="png"
      style="width:100%;height:486rpx"
    ></image>
    <!-- 今日 -->
    <view class="grid col-2 solid-bottom">
      <view class="padding-sm">
        <view class="padding radius text-center">
          <view class="text-xl text-bold text-price">{{ todayTotal }}</view>
          <view class="margin-top-sm text-sm">今日销售额</view>
        </view>
      </view>
      <view class="padding-sm">
        <view class="padding radius text-center">
          <view class="text-xl text-bold text-price  text-green">{{
            todayProfit
          }}</view>
          <view class="margin-top-sm text-green text-sm">今日利润</view>
        </view>
      </view>
    </view>

    <!-- 本周 -->
    <view class="grid col-2 solid-bottom">
      <view class="padding-sm">
        <view class="padding radius text-center">
          <view class="text-xl text-bold text-price">{{ weekTotal }}</view>
          <view class="margin-top-sm text-sm">本周销售额</view>
        </view>
      </view>
      <view class="padding-sm">
        <view class="padding radius text-center light">
          <view class="text-xl text-bold text-green text-price">{{ weekProfit }}</view>
          <view class="margin-top-sm text-green text-sm">本周利润</view>
        </view>
      </view>
    </view>

    <!-- 本月 -->
    <view class="grid col-2 solid-bottom">
      <view class="padding-sm">
        <view class="padding radius text-center">
          <view class="text-xl text-bold text-price">{{ monthTotal }}</view>
          <view class="margin-top-sm text-sm">本月销售额</view>
        </view>
      </view>
      <view class="padding-sm">
        <view class="padding radius text-center">
          <view class="text-xl text-bold text-green text-price">{{
            monthProfit
          }}</view>
          <view class="margin-top-sm text-green text-sm">本月利润</view>
        </view>
      </view>
    </view>

    <!-- 本年 -->
    <view class="grid col-2">
      <view class="padding-sm">
        <view class="padding radius text-center">
          <view class="text-xl text-bold text-price">{{ yearTotal }}</view>
          <view class="margin-top-sm text-sm">本年销售额</view>
        </view>
      </view>
      <view class="padding-sm">
        <view class="padding radius text-center">
          <view class="text-xl text-bold text-green text-price">{{
            yearProfit
          }}</view>
          <view class="margin-top-sm text-green text-sm">本年利润</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      todayTotal: "234.00",
      todayProfit: "234.00",
      weekTotal: "12301.00",
      weekProfit: "312340.00",
      monthTotal: "3323340.00",
      monthProfit: "3323450.00",
      yearTotal: "33234520.00",
      yearProfit: "33234520.00"
    };
  },
  methods: {}
};
</script>

<style>
</style>
