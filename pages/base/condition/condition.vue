<template>
	<view class="bgWhite">
		<!-- #ifdef H5 -->
		<view>仅在h5中可见啦啦啦</view>
		<!-- #endif -->
		
		<!-- #ifdef MP-WEIXIN -->
		<view>仅在微信小程序中可见啦啦啦</view>
		<!-- #endif -->
		
		<!-- #ifdef APP-PLUS -->
		<view>仅在APP-PLUS中可见啦啦啦</view>
		<!-- #endif -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			// #ifdef H5
			console.log('在h5中打印啦啦啦')
			// #endif
			
			// #ifdef MP-WEIXIN
			console.log('在微信小程序中打印啦啦啦')
			// #endif
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	/* #ifdef H5*/
	view{
		color: red;
	}
	/* #endif */
	
	/* #ifdef MP-WEIXIN */
	view{
		color: green;
	}
	/* #endif */
</style>
