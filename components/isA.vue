<template>
	<view>
		这是a组件
		<button @click="changeBValue">点击修改b组件的值</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			changeBValue(){
				uni.$emit('updateNum',10)
			}
		}
	}
</script>

<style lang="scss">
view{
		padding: 20upx;
	}
</style>
