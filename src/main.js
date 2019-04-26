import Vue from 'vue'
import App from './App'

import home from './pages/home/home.vue'
Vue.component('home',home)

import statistics from './pages/statistics/statistics.vue'
Vue.component('statistics',statistics)

import goods from './pages/goods/goods.vue'
Vue.component('goods',goods)

import my from './pages/my/my.vue'
Vue.component('my',my)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()