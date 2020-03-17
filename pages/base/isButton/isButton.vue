<template>
	<view class="con">
		<view class="title">按钮大小</view>
		<button>默认按钮</button>
		<button size="mini">小号按钮</button>
		<view class="title">按钮颜色</view>
		<button type="primary">微信小程序为绿色，App、H5、百度小程序、支付宝小程序为蓝色，头条小程序为红色，QQ小程序为浅蓝色</button>
		<button type="warn">红色按钮</button>
		<button type="default">白色色按钮</button>
		<button plain type="warn">按钮是否镂空，背景色透明</button>
		<button disabled>禁用</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.con{
	padding: 20upx;
	min-height: 100%;
	height: auto;
}
	.title{
		text-align: center;
		border-bottom: 1px solid #C0C0C0;
		padding-bottom: 20upx;
		margin-bottom: 20upx;
	}
</style>
