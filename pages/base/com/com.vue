<template>
	<view class="bgWhite">
		<view>自定义组件,生命周期和vue的一样</view>
		<view>created,beforecreate,mounted,beforemount,destoryed之类的</view>
		<to-do></to-do>
	</view>
</template>

<script>
	import toDo from '../../../components/toDo.vue';
	export default {
		components:{
			toDo
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
