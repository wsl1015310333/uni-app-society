<template>
	<view class="p-2">
		
		<view class="flex justify-between align-center">
			
					<view class="flex align-center">
						<!-- 头像 -->
						<image :src="item.userpic" class="rounded-circle mr-2" style="width: 65rpx;height: 65rpx;" lazy-load></image>
						<!-- 昵称发布时间 -->
						<view style="padding: 10rpx;">
							<view class="font" style="line-height: 1.5;">{{item.username}}</view>
							<text class="text-light-muted font-sm" >{{item.newstime}}</text>
						</view>
					</view>
					<view class="flex align-center justify-center rounded bg-main text-white"
						style="width:  90rpx;height: 50rpx;">
						关注</view>
			
				</view>
				<!-- 标题 -->
				<view class="font-md my-1">
					{{item.title}}
			
				</view>
				<!-- 图片 -->
				<view>
					<image class="rounded w-100" :src="item.titlepic" style="height: 350rpx;border-radius:5rpx;">
					</image>
			
				</view>
				<!-- 图标按钮 -->
				<view class="flex align-center">
			
					<view class="flex align-center justify-center flex-1">
						<text class="iconfont icon-dianzan mr-2" ></text>
						<text>{{item.support.support_count}}</text>
					</view>
					<view  class="flex align-center justify-center flex-1" >
						<text class="iconfont icon-fabu mr-2"></text>
						<text>{{item.support.unsupport_count}}</text>
					</view>
					<view  class="flex align-center justify-center flex-1" >
						<text class=" iconfont icon-pinglun mr-2"></text>
						<text>{{item.comment_count}}</text>
					</view>
					<view  class="flex align-center justify-center flex-1 mr-2">
						<text class="iconfont icon-fenxiang mr-2"></text>
						<text>{{item.share_num}}</text>
					</view>
				</view>
	</view>
</template>

<script>
	export default{
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style>
</style>
