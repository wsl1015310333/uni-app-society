<template>
	<view>
<!-- 	<view class="box" :class="['bor','fs']">box</view>-->	
<!-- <view class="box" :class="[class1,class2]">box</view>
 --> 
 <!-- <view class="box" :class="[age>10?class1:'',class2]">box</view> -->
 <!-- <view class="box" :class="{'bor':isActive}">box</view> -->
 <!-- <view class="box" style="color:#333333;font-size: 20px;">box</view> -->
 <!-- <view class="box"  v-if="isshow">box</view> -->
 <!-- <button type="default" @tap="changeShow()">隐藏</button> -->
<!-- <view class="box"  v-if="(age>20)">{{age>30?'中年人':'年轻人'}}</view>
 
 <button type="default" @tap="changeAge()">changge}</button> -->
 
 <template v-if="isshow">
	 <view class="box" >显示</view>
 </template>
 <template v-else>
	 <view class="box" style="background: #3F536E;" >显示</view>
	 
 </template>
 <button type="default" @tap="changeShow()">隐藏</button>
 
 </view>
 
 
</template>

<script>
	export default {
		data() { 
			return {
				age:10,
				isshow:true
			}
		
		},
		methods: {
			
		changeShow:function(){
			this.isshow=!this.isshow
		},
		changeAge:function(){
			this.age+=11
		}
		}
	}
</script>

<style>
.box{
	background: #09BB07;
	color: #FFFFFF;
	width: 350upx;
	height: 350upx;
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
