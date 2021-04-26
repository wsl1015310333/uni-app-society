<template>
	<view class="p-2">

		<view class="flex justify-between align-center">

			<view class="flex align-center">
				<!-- 头像 -->
				<image :src="item.userpic" @click="openSpace" class="rounded-circle mr-2"
					style="width: 65rpx;height: 65rpx;" lazy-load></image>
				<!-- 昵称发布时间 -->
				<view style="padding: 10rpx;">
					<view class="font" style="line-height: 1.5;">{{item.username}}</view>
					<text class="text-light-muted font-sm">{{item.newstime}}</text>
				</view>
			</view>
			<view @click="follow" v-if="!item.isFollow"
				class="flex align-center justify-center rounded bg-main text-white animated faster" hover-class="jello"
				style="width:  90rpx;height: 50rpx;">
				关注</view>

		</view>
		<!-- 标题 -->
		<view @click="openDetail" class="font-md my-1">
			{{item.title}}

		</view>
		<!-- 图片 -->
		<view>
			<image @click="openDetail" v-if="item.titlepic" class="rounded w-100" :src="item.titlepic"
				style="height: 350rpx;border-radius:5rpx;">
			</image>

		</view>
		<!-- 图标按钮 -->
		<view class="flex align-center">
<!--  顶-->
			<view @click="doSupport('support')" class="flex align-center justify-center flex-1 animated faster" 
				hover-class="jello text-main" :class="item.support.type=='support'?'support-active':''">
				<text class="iconfont icon-dianzan mr-2"></text>
				<text>{{item.support.support_count>0 ?item.support.support_count:'顶'}}</text>
			</view>
			<!-- 踩  -->
			<view @click="doSupport('unsupport')" class="flex align-center justify-center flex-1 animated faster"
				hover-class="jello text-main" :class="item.support.type==='unsupport'?'support-active':''">
				<text class="iconfont icon-fabu mr-2"></text>
				<text>{{item.support.unsupport_count>0?item.support.unsupport_count:'踩'}}</text>
			</view>
			<view @click="openDetail" class="flex align-center justify-center flex-1 animated faster"
				hover-class="jello text-main">
				<text class=" iconfont icon-pinglun mr-2"></text>
				<text>{{item.comment_count}}</text> 
			</view>
			<view @click="openDetail" class="flex align-center justify-center flex-1 mr-2 animated faster"
				hover-class="jello text-main" >
				<text class="iconfont icon-fenxiang mr-2"></text>
				<text>{{item.share_num}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},

		methods: {
			openSpace() {
				console.log("打开个人空间")
			},
			openDetail() {
				console.log("关注")
			},
			follow() {
				//通知父组件
				console.log("进入个人详情页")

				this.$emit('follow', this.index)
			},

			doSupport(type) { 
				console.log("so")
				
				this.$emit('doSupport',{
					type:type,
					index:this.index,
					})
			}



		}
	}
</script>

<style>
	.support-active{
	color:#FF4A6A	 
	}
</style>
