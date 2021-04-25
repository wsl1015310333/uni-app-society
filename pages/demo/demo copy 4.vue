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
<!-- <view class="font" v-for="(val,index) in list1" :key="index">{{list1[index]}}+{{index}}</view>
 --> 
 <!-- <view class="font" v-for="(val,index) in list2" :key="index">{{val.name}}+{{index}}</view> -->
 <!-- <view class="font" v-for="(val,index) in list2" :key="index">{{val.name}}+{{index}}</view> -->
<!-- <view class="font" v-for="(val1,index1) in list3" :key="index">
<view>{{val1.name}}</view>
<view v-for="(val2,index2) in val1.list" :key="index2">{{val2}}</view>
 </view> -->
 
<!-- </view> -->
<!-- <view v-for="(val2,index2) in objlist" :key="index2">{{index2}}-{{val2}}</view>
  </view> -->
  <block v-for="(val2,index2) in objlist" :key="index2">
	  <view >{{index2}}-{{val2}}</view>
	  
  </block>
  </view>
</template>

<script>
	export default {
		data() { 
			return {
				list1:["篮球","足球","排球"],
					list2:[{name:"篮球",id:"laqiu"},
					{name:"足球",id:"zhuqiu"},
					{name:"paiqiu",id:"paiqiu"},
					],
					list3:[
						{
							name:"广东",
					list:["广州","深圳"]
						},
					{
						name:"四川",
						list:["四川1","四川2"]
						
						}
					
					],
					objlist:{
						name1:"篮球",
						name2:"足球",
						name4:"羽毛球"
						
					}
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
