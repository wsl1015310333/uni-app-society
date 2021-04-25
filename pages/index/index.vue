<template>
	<view>
		<!-- <h1 class="animate__animated animate__fadeInLeft">An animated element</h1> -->

		<!-- <text class="iconfont icon-shouye1" style="font-size: 100rpx;color: red;"></text> -->
		<!-- 列表样式 -->
		
		<block v-for="(item,index) in list" :key="index">
		<common-list :item="item" :index="index"></common-list>
		
		</block>
	</view>
</template>

<script>
	import {commonList} from "../../components/common/common-list.vue";
	
	export default {
		components:{commonList},
		data() {
			
			return {
				
				list:[
					{
						username:"昵称",
						userpic:"../../static/demo10.jpg",
						newstime:"2019-10-20 下午04:30",
						ifFollow:false,
						title:"我是标题",
						titlepic:"../../static/demo/datapic/43.jpg",
							
						support:{
							type:"support",
							support_count:1,
							unsupport_count:2
						},
						comment_count:2,
						share_num:2
						
					},
					{
						username:"昵称2",
						userpic:"../../static/demo10.jpg",
						newstime:"2019-10-20 下午04:30",
						ifFollow:false,
						title:"我是标题",
						titlepic:"../../static/demo/datapic/42.jpg",
							
						support:{
							type:"support",
							support_count:1,
							unsupport_count:2
						},
						comment_count:2,
						share_num:2
						
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	
</style>
