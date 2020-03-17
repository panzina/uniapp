<template>
	<view class="con">
		<view class="title">view的用法</view>
		
		<view hover-class="box-wrap-active" class="box-wrap">
			<view class="box" hover-class="box-active">点击我变色</view>
			冒泡导致父级一起变色
		</view>
		
		<view hover-class="box-wrap-active" class="box-wrap">
			<view class="box" hover-class="box-active" hover-stop-propagation>点击我变色</view>
			阻止冒泡
		</view>
		
		<view 
			hover-class="box-wrap-active" 
			:hover-start-time="2000" 
			class="box-wrap">按住后多久出现点击态，单位毫秒(2000)</view>
			
			<view
				hover-class="box-wrap-active" 
				:hover-end-time="2000" 
				class="box-wrap">手指松开后点击态保留时间，单位毫秒(2000)</view>
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
	}
	.box-wrap{
		width: 400upx;
		height: 400upx;
		background-color: #007AFF;
		margin-bottom: 20upx;
	}
	.box{
		width: 200upx;
		height: 200upx;
		background-color: #ff007f;
	}
	.box-active{
		background-color:#ffaa00;
	}
	.box-wrap-active{
		background-color: #4CD964;
	}
</style>
