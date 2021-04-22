<template>
	<view>
		<view class="view-box animate__animated  "  hover-stay-time="2000"
		hover-class="view-box-hover animate__bounceIn">
			第一个view
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
	.view-box{
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
</style>
