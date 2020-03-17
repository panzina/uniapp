<template>
	<view class="con">
		<view class="title">原图434*434px</view>
		<view>iamge组件默认宽度 300px、高度 225px</view>
		<image src="../../../static/a.jpg"></image>
		
		<view class="title">不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素</view>
		<image src="../../../static/a.jpg" mode="aspectFill"></image>
		
		<view class="title">保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。</view>
		<image src="../../../static/a.jpg" mode="aspectFit"></image>
		
		<view class="title">保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。</view>
		<image src="../../../static/a.jpg" mode="aspectFill"></image>
		
		<view class="title">宽度不变，高度自动变化，保持原图宽高比不变。</view>
		<image src="../../../static/a.jpg" mode="widthFix"></image>
		
		<view class="title">不缩放图片，只显示图片的顶部区域</view>
		<image src="../../../static/a.jpg" mode="top"></image>
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
	font-size: 30upx;
}
	.title{
		text-align: center;
		border-bottom: 1px solid #C0C0C0;
		padding-bottom: 20upx;
		margin-bottom: 20upx;
	}
</style>
