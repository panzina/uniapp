<template>
	<view class="box">
		<view>1.点击上传图片 2.点击图片预览图片 3.可删除</view>
		<view class="upload-img">
			<block v-for="(item,index) in imgArr" :key="index" >
				<view class="upload-img-file">
					<image
						class="img"
						mode="widthFix"
						@click="previewImage(index)"
						:src="item"></image>
					<view class="deleteImg" @click="deleteImg(index)">x</view>
				</view>
			</block>
			<view @click="chooseImage" class="upload-img-add">
				<text>+</text>
			</view>
		</view>
	</view>
</template>

<script>
	import common from '../../../plugins/pocky-request/config.js'
	export default {
		data() {
			return {
				imgArr:[]
			};
		},
		methods:{
			chooseImage(){
				uni.chooseImage({
					count:1,//最多可以选择的图片张数，默认9。但是无论怎么写都是1张
					sizeType:['original ','compressed'],//original 原图，compressed 压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: (res) => {
						const chooseImg = res.tempFilePaths
						this.imgArr = [...this.imgArr,...chooseImg]
						// uni.uploadFile({
						// 	url: common.config.baseURL+'/api/user/public/uploadImage',
						// 	filePath: chooseImg[0],
						// 	name: 'image',
						// 	method: 'post',
						// 	async: false,
						// 	formData: {//HTTP 请求中其他额外的 form data
						// 		type: 'shop',
						// 	},
						// 	success: (uploadFileRes) => {
						// 		var uploadFiles = JSON.parse(uploadFileRes.data);
						// 		if (uploadFiles.code==1) {
						// 			this_.formData.image.push(common.config.baseURL +'/'+ uploadFiles.data.url)
						// 			this_.submitData.car_img.push(uploadFiles.data.url)
						// 		}else{
						// 			uni.showToast({
						// 				icon:'none',
						// 				title: uploadFiles.msg
						// 			});
						// 		}
						// 	},
						// 	fail: function (err) {
						// 		console.log(err)
						// 	}
						// })
					},
				})
			},
			previewImage(index){
				uni.previewImage({
					current:index,
					urls:this.imgArr,
					loop:true,
				})
			},
			deleteImg(index){
				this.imgArr.splice(index,1)
			}
		}
	}
</script>

<style lang="scss">
	.box{
		background-color: #FFFFFF;
		height: 100%;
		.btn{
			margin-top: 50upx;
		}
		.icon{
			width: 100%;
		}
	}
	.upload-img{
		padding: 20upx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		.upload-img-file{
			width: 216upx;
			height: 216upx;
			margin: 10upx;
			position: relative;
			.img{
				width: 100%;
				height: 100%;
			}
			.deleteImg{
				position: absolute;
				right: 0;
				top: 0;
				width: 40upx;
				height: 40upx;
				background-color: #ff0000;
				color: #FFFFFF;
				text-align: center;
				line-height: 40upx;
			}
		}
		.upload-img-add{
			width: 214upx;
			height: 214upx;
			border: 2upx solid #D9D9D9;
			margin: 10upx;
			display: flex;
			align-items: center;
			justify-content: center;
			text{
				font-size: 120upx;
				color:#D9D9D9;
			}
		}
	}
	
</style>
