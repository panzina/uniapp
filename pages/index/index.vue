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
	}
	.line{
		padding-bottom: 20upx;
	}
</style>
