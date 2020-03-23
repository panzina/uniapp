<template>
	<view class="box">
		<view>下拉刷新，数据变</view>
		<view v-for="(item,index) in message" :key="index">{{item}}</view>
		<button @click="handleRefresh" class="btn">点击拉下刷新</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message:[],
				msg:['炸鸡','冰淇淋','甜甜圈','柠檬计'],
				msg2:['苹果','相机','简介','大幅度'],
				flag : true
			}
		},
		onLoad() {
			this.message = this.msg
			uni.setNavigationBarTitle({
				title:'下拉刷新'
			})
		},
		onPullDownRefresh() {
			this.flag = !this.flag
			setTimeout(()=>{
				uni.stopPullDownRefresh()
				if(this.flag){
					this.message = this.msg
				}else{
					this.message = this.msg2
				}
			},1000)
		},
		
		methods: {
			handleRefresh(){
				uni.startPullDownRefresh()
			}
		}
	}
</script>

<style lang="less">
	.box{
		padding: 20upx;
	}
	.btn{
		margin-top: 40upx;
	}
</style>
