<template>
	<view class="bgWhite">
		<button @click="handleNavigate">1.navigateTo</button>
		<view class="font">保留当前页面，跳转到应用内的某个页面</view>
		
		<button @click="handleRedirectTo">2.redirectTo</button>
		<view class="font">*关闭当前页面，跳转到应用内的某个页面</view>
		
		<button @click="handleReLaunch">3.reLaunch</button>
		<view class="font">关闭所有页面，打开到应用内的某个页面。</view>
		
		<button @click="switchTab">4.switchTab</button>
		<view class="font">跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。</view>
		
		<button @click="navigateBack">5.navigateBack</button>
		<view class="font">关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onUnload() {
			console.log('页面卸载了')
		},
		methods:{
			handleNavigate(){
				uni.navigateTo({
					url:'../isButton/isButton'
				})
			},
			handleRedirectTo(){
				uni.redirectTo({
					url:'../isButton/isButton'
				})
			},
			handleReLaunch(){
				uni.reLaunch({
					url:'../isButton/isButton'
				})
			},
			switchTab(){
				uni.switchTab({
					url:'../../index/index'
				})
			},
			navigateBack(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	.font{
		padding: 20upx;
	}
</style>
