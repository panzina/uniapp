<template>
	<view>
		<button @click="isAxios">发送</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:'发送请求'
			})
		},
		methods: {
			getData(){
				uni.request({
					url:'http://localhost/diandianphp/public/admin/school/querySchoolList',
					data:{},
					method:'GET',
					 header:{
					      ContentType: 'application/json'
					    },
					success:(res) => {
						console.log(res)
					}
				})
			},
			isAxios(){
				this.axios.request({
					url:'/diandianphp/public/admin/school/querySchoolList',
					method:'get',
					param:{}
				}).then(function({data}){
					console.log(data)
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style>

</style>
