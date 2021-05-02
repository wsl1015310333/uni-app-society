<template>
	<view> 
<uni-nav-bar left-icon="arrowleft"  title="所有人可见" border=false @clickLeft="goBack" >
	<view class="flex align-center justify-center">
		所有人可见<text class="iconfont icon-shezhi"></text>
		
	</view>
	<!-- 文本域 -->
</uni-nav-bar>
	<textarea v-model="content" placeholder="说一句话吧" class="py-1 px-2 uni-textarea"></textarea>
<!-- 多图上传 -->
<upload-image :show="show" ref="uploadImage" :list="imageList" @change="changeImage"></upload-image>
<view class="flex flex-bottom bg-white" style="height: 85rpx;">
	<view class="iconfont icon-dianzan footer-btn animated " hover-class="jello"></view>
	<view class="iconfont icon-shuaxin footer-btn animated " hover-class="jello"></view>
	<view class="iconfont icon-fabu footer-btn animated "@click="iconClickEvent('uploadImage')"  hover-class="jello"></view>
	
	<view class=" flex bg-main text-white ml-auto align-center mr-2 justify-center rounded animated" 
	  hover-class="jello"
	style="width: 140rpx;height: 60rpx;" >发送</view>
</view>
</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	import uploadImage from '@/components/common/upload_img.vue'
	export default {
		components:{ uniNavBar,uploadImage},
		data() {
			return {
				content:"",
				imageList:[],
				showBack:false
			}
		},
		computed:{
			show(){
				return this.imageList.length>0
			}
		},
		onLoad() {
			uni.getStorage({
				key:'add-input',
			   success:(res)=>{
					   console.log('==0='+JSON.stringify(res))
					   
				   if(res.data){
					   let result=JSON.parse(res.data)
					   console.log(result)
					   this.content=result.data.content
					   this.imageList=result.data.imageList
					   console.log('==3='+this.imageList)
					   
				   }
			   }
			})
		}
		,
		onBackPress() {
			
			if((this.content!==''||this.imageList.length>0)&&!this.showBack){
			
				
				uni.showModal({ 
					content:'是否要保存为草稿?',
					showCancel:true,
					cancelText:'不保存',
					confirmText:'保存',
					success:res=>{
						
						if(res.confirm){
						this.store()
						}else{//点击取消 清除缓存
							uni.removeStorage({
								key:'add-input'
							})
						}
						uni.navigateBack({
							delta:1
						})																						
					}
					
				});
				this.showBack=true
				
			return true
						
			}
			
		},
		methods: {
			//底部图片
			iconClickEvent(e){
			 	switch(e){
					case 'uploadImage': 
					this.$refs.uploadImage.chooseImage()
					break;
					
				}
			},
			//返回上一夜
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			changeImage(e){
				
				this.imageList=e
			},
			store(){
				let data={
					content:this.content,
					imageList:this.imageList
				}
				uni.setStorage({
					key:'add-input',
					data:JSON.stringify({
						data
					})
				})
			}
		}
	}
</script>

<style>
.footer-btn{
	width: 86rpx;
	height: 86rpx;
	display: flex;
	justify-content: center;
	align-content: center;
	font-size: 50rpx;
}
</style>
