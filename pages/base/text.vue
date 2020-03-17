<template>
	<view class="text">
		<view class="title">text组件的用法</view>
		<view class="firstList">
			<text selectable>文本长按可选</text>
		</view>
		<view>
			<text space="ensp">中文 字符空格一半大小</text>
		</view>
		<view>
			<text space="emsp">中文 字符空格大小</text>
		</view>
		<view>
			<text space="emsp" style="font-size: 28upx;">根据 字体设置的空格大小</text>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.text{
		padding: 20upx;
	}
	.title{
		text-align: center;
		border-bottom: 1px solid #C0C0C0;
		padding-bottom: 20upx;
	}
	.firstList{
		margin-top: 20upx;
	}
</style>
