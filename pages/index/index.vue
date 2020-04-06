<template>
	<view class="index">
		 <navigator url="../base/text" hover-class="navigator-hover" class="line">
					<button type="default">text的用法</button>
			</navigator>
			<navigator url="../base/isView/isView" hover-class="navigator-hover" class="line">
					<button type="default">view的用法</button>
			</navigator>
			<navigator url="../base/isButton/isButton" hover-class="navigator-hover" class="line">
					<button type="default">button的用法</button>
			</navigator>
			<navigator url="../base/isImage/isImage" hover-class="none" class="line">
					<button type="default">Image的用法</button>
			</navigator>
			<navigator url="../base/refresh/refresh" hover-class="none" class="line">
					<button type="default">下拉刷新用法</button>
			</navigator>
			<navigator url="../base/reachBottom/reachBottom" hover-class="none" class="line">
					<button type="default">上拉加载</button>
			</navigator>
			<navigator url="../base/request/request" hover-class="none" class="line">
					<button type="default">发送请求</button>
			</navigator>
			<navigator url="../base/uploadImage/uploadImage" hover-class="none" class="line">
					<button type="default">图片上传与预览</button>
			</navigator>
			<navigator url="../base/condition/condition" hover-class="none" class="line">
					<button type="default">条件编译</button>
			</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.index{
		padding: 20upx;
		background-color: #FFFFFF;
	}
	.line{
		padding-bottom: 20upx;
	}
</style>
