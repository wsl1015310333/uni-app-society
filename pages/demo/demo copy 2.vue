<template>
	<view>
<!-- 	<view class="box" :class="['bor','fs']">box</view>-->	
<!-- <view class="box" :class="[class1,class2]">box</view>
 --> 
 <!-- <view class="box" :class="[age>10?class1:'',class2]">box</view> -->
 <!-- <view class="box" :class="{'bor':isActive}">box</view> -->
 <!-- <view class="box" style="color:#333333;font-size: 20px;">box</view> -->
 <view class="box" :style="{'color':Color,'font-size': size+'px'}">box</view>
 
 </view>
</template>

<script>
	export default {
		data() { 
			return {
				class1:"bor",
				class2:"fs",
			age:11,
			sex:"女",
			isActive:false,
			Color:"#333333",
			size:50
			}
		
		},
		methods: {
		
		}
	}
</script>

<style>
.box{
	background: #09BB07;
	color: #FFFFFF;
	width: 350upx;
	height: 350upx;
	border-radius: 100%;
	display: flex;
     justify-content: center;
	 align-items: center;
}
.bor{
	border: 10upx solid #007AFF;
}
.fs{
	font-size: 80upx;
}
</style>
