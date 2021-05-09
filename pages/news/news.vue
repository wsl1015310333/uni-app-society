<template>
	<view>
		<!-- 界面....... -->
	<!-- 	<uni-nav-bar :border="false" :fixed="true" :statusBar="true"   >
			<view class="flex align-center justify-center w-100">
				<view class="font-lg text-main mx-1">关注</view>
				<view class="font-md text-light-muted mx-1">话题 </view>
			</view>
		</uni-nav-bar> -->
		
		<uni-nav-bar>
		<view>标题栏</view>
		<view slot="left">left</view>
		<view slot="right">right</view>
		</uni-nav-bar>
		
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	export default {
		comments:{
		uniNavBar	
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script 

<style>

</style>
