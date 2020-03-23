<template>
	<view class="box">
		<view class="list" v-for="(item,index) in msg" :key="index">{{item}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message:[],
				msg:['炸鸡','冰淇淋','甜甜圈','柠檬计','炸鸡','冰淇淋','甜甜圈','柠檬计','炸鸡'],
				msg2:['苹果','相机','简介','大幅度'],
				flag : true
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:'下拉刷新'
			})
		},
		onReachBottom(){
			uni.showLoading({
				title:'加载中'
			})
			console.log('到底了')
			setTimeout(()=>{
				this.msg = [...this.msg, ...this.msg2]
				uni.hideLoading()
			},1000)
		},
		methods: {
		}
	}
</script>

<style lang="less">
	.box{
		padding: 20upx;
	}
	.list{
		height: 200upx;
		line-height: 200upx;
		border: 1upx solid #C0C0C0;
	}
</style>
