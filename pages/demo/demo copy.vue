<template>
	<view>
		<!-- <view id="view2" class="view-box animate__animated  "  hover-stay-time="2000"
		hover-class="view-box-hover animate__bounceIn">
			第一个view
		</view>
		<text> text\n</text>
		<view class="box">
			<text>100</text>
			<view>1</view>
			<view>2</view>
			<view>3</view>
		</view> -->
		<view class="box">
			<view class="box-item">1</view>
			<view class="box-item">2</view>
			<!-- <view class="box-item">3</view>
			<view class="box-item">4</view>
			<view class="box-item">5</view>
			<view class="box-item">6</view> -->
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.box{
		border: 1upx solid #333333;
		/* flex-wrap: wrap; */
		display: flex;
		height: 500upx;
		/* width: 100%; */
		
		border: 1upx solid #CCCCCC;
		justify-content: start;
		align-items: center;
	}
	.box-item{
		display: flex;
		justify-content: center;
        align-items: center;
		color: #FFFFFF; 
		height: 200upx;
		flex: 1;
		width: 200upx;
		line-height: 200upx;
		font-size: 30upx;
		font-weight: bold;
		//text-align: center;
		
	}
	.box-item:nth-of-type(odd){
		background: #007AFF;
	}
	.box-item:nth-of-type(even){
		background:#8A6DE9;
	}
	.box-item:first-of-type{
		flex-shrink: 0;//是否被压缩0不
	}
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
