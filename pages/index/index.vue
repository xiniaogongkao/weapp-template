<template>
	<view class="container">
		<view class="intro">通用模板</view>
		<text class="intro">详见：</text>
    <u-button type="primary">按钮</u-button>
	</view>
</template>

<script>
  import { getData } from '../../api/index.js'
	export default {
		data() {
			return {
				href: ''
			}
		},
    created() {
      getData({ name: 'litaolin' }).then(res => {
        console.log(2222)
      })
    },
		methods: {
      
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 32rpx;
		line-height: 64rpx;
	}
</style>
