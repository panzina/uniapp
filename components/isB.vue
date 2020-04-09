<template>
	<view>
		这是b组件的数据：{{num}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:0
			};
		},
		created() {
			uni.$on('updateNum',num => {
				this.num += num
			})
		},
		// destroyed() {
		// 	uni.$off('updateNum')
		// }
	}
</script>

<style lang="scss">
		view{
			padding: 20upx;
		}
</style>
