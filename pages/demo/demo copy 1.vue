<template>
	<view>
		<view  :class="classname">
			<view>{{username}}</view>
			<view>{{userinfo.username}}</view>
			<!-- <view>{{username}}</view> -->
		
		</view>
		<button type="default" @tap="changgeUsername('嘻嘻')">修改名字</button>
		<button type="default" @tap="changgeClass()">修改样式</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				classname:"box",
			username:"哈哈哈",
			userinfo:{
				username:"111"
			}
			}
		},
		methods: {
		changgeUsername:function(name){
			this.userinfo.username=name
		},
			changgeClass:function(){
				this.classname="box2"
			}
		}
	}
</script>

<style>
.box{
	border: 1up solid#333333;
	height: 200upx;
	width: 100%;
	display: flex;
	align-items: center;
}
.box2{
	border: 1up solid#333333;
	height: 500upx;
	width: 100%;
	display: flex;
}
/* .box>view{
	background: #007AFF;
	color: #FFFFFF;
	font-weight: bold;
	font-size: 40upx;
	flex: 1;
	height: 500upx;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1upx solid #FFFFFF;
} */
/* 	.view-box{
		width: 200upx;
		height: 200upx;
		color: #ffffff;
		//background-color: #09BB07;
		background: #007AFF;
		margin: 100upx;
		
	}
.view-box-hover{
	background: red;
}

#view2,text{//并列 id为view2，所有text标签
	background-color: yellow;
}
.box{
	width: 300upx;
	height: 300upx;
	color: #ffffff;
	//background-color: #09BB07;
	background: #007AFF;
	margin: 100upx;
	padding: 50upx;
}
.box view{//id里面的view标签
	font-size: 40upx;
} */
/* .box>view:nth-child(1){
background: #09BB07;}
.box>view:nth-child(2){
	font-size: 40upx;
	background: red;
}
.box>view:nth-child(3){
	font-size: 40upx;
	background: pink;
} */
/* .box>view:nth-of-type(1){
background: #09BB07;
}
.box>view:nth-of-type(2){
	font-size: 40upx;
	background: red;
}
.box>view:nth-of-type(3){
	font-size: 40upx;
	background: pink;
} */

/* .box>view:first-child{//如果第一个不是view就不生效 
	font-size: 40upx;
	background: blue;
}
.box>view:last-child{
	font-size: 40upx;
	background: red;
} */

/* .box>view:first-of-type{
	font-size: 40upx;
	background: red;
} 
.box>view:last-of-type{
	font-size: 40upx;
	background: red;
} */

/* .box>view:nth-of-type(2n-1){
	font-size: 40upx;
	background: red;
} */


</style>
