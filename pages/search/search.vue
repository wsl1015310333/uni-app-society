
<template>
	<view>
		<template v-if="searchList.length===0">
		<view class="py-2 font-md px-2">搜索历史</view>
		<view class="flex flex-wrap">
			<view class="border rounded font mx-2 my-1 px-2 "
			
			 hover-class ="bg-light" v-for="(item,index) in list" :key="index"
			 @click="clickSearchHistory(item)"
			 >{{item}} </view>
		</view>
		</template>
		<template
		v-else
		>
		<!-- 搜索数据列表 -->
		<block v-for="(item,index) in searchList" :key>
			<common-list :item="item" :index="index" >
			</common-list>
		</block>
		</template>
	</view>
</template>

<script>
	const demo=[{
									username: "昵称",
									userpic: "../../static/demo10.jpg",
									newstime: "2019-10-20 下午04:30",
									ifFollow: false,
									title: "我是标题",
									titlepic: "../../static/demo/datapic/43.jpg",
	
									support: {
										type: "support",
										support_count: 1,
										unsupport_count: 2
									},
									comment_count: 2,
									share_num: 2
	
								},
								{
									username: "昵称2",
									userpic: "../../static/demo10.jpg",
									newstime: "2019-10-20 下午04:30",
									isFollow: false,
									title: "我是标题",
									titlepic: "",
	
									support: {
										type: "unsupport",
										support_count: 1,
										unsupport_count: 2
									},
									comment_count: 2,
									share_num: 2
	
								},
								{
									username: "昵称2",
									userpic: "../../static/demo10.jpg",
									newstime: "2019-10-20 下午04:30",
									isFollow: false,
									title: "我是标题",
									titlepic: "",
	
									support: {
										type: "", //未操作 
										support_count: 1,
										unsupport_count: 2
									},
									comment_count: 2,
									share_num: 2
	
								}];
import commonList from "@/components/common/common-list.vue"; 
	export default {
		components:{commonList},
		data() {
			return {
				searchList:[],
				searchText:"",
				list:['uni-app第二季商城累','uni-app仿微信','实战教程','系列教程'],
				search:[]
			}
		},
		onNavigationBarSearchInputChanged(e) {
			
			this.searchText=e.text
		},
		onNavigationBarButtonTap(e) {
			console.log(e)
			if(e.index===0){
				this.searchEvent()
			}
		e.index===0
		},
		methods: {
			clickSearchHistory(text){
				 this.searchText=text 
				 this.searchEvent()
			},
			searchEvent(){
				 uni.hideKeyboard()
				 //
				 uni.showLoading({
				 	title:'加载中',
					mask:false
				 })
				 setTimeout(()=>{
					 uni.hideLoading()
					 this.searchList= demo 
				 },2000)
			}
		}
	}
</script>

<style>

</style>
