<template>
	<view>
		<!-- <h1 class="animate__animated animate__fadeInLeft">An animated element</h1> -->

		<!-- <text class="iconfont icon-shouye1" style="font-size: 100rpx;color: red;"></text> -->
		<!-- 列表样式 -->
		<scroll-view scroll-x class="scroll-row border-bottom" 
		scroll-with-animation
		:scroll-into-view="scrollInto">
			<!-- <view  v-for="(item,index) in tabBars" :key="index" 
			 class="scroll-row-item p-5 py-1 font-md" :id="'tab'+index"
			:class="tabIndex===index?'font-lg':''">{{i}}</view> -->
			<view v-for="(item,index) in tabBars" :key="index"  class="scroll-row-item p-5 py-1 font-md"
			:id="'tab'+index"  :class="tabIndex===index?'text-main font-lg font-weight-bold':''"
			@click="changeTab(index)"
			>
				{{item.name}}
			</view>
		</scroll-view>
		<swiper :duration="150" :current="tabIndex">
			<swiper-item v-for="(item,index) in tabBars":key="index">
				<view class="swiper-item">{{item.name}}</view>
			</swiper-item>
			
		</swiper>
		
		<!-- <block v-for="(item,index) in list" :key="index">
		<common-list :item="item" :index="index" @follow="follow" @doSupport="doSupport"></common-list>
		<divider></divider> mm
		</block> -->
	</view>
</template>

<script>
	import {commonList} from "../../components/common/common-list.vue";
	
	export default {
		components:{commonList},//很重要
		data() {
			
			return {
				scrollInto:"",
				tabIndex:0,
				tabBars:[{
					name:"关注"
				},
				{
					name:"推荐"
				},
				{
					name:"体育"
				},
				{
					name:"热点"
				},
				{
					name:"财经"
				}
				],
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
						isFollow:false,
						title:"我是标题",
						titlepic:"",
							
						support:{
							type:"unsupport",
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
						isFollow:false,
						title:"我是标题",
						titlepic:"",
							
						support:{
							type:"",//未操作 
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
	changeTab(index){
		if(this.tabIndex===index){
			return
		}
		this.tabIndex=index
		this.scrollInto='tab'+index
		
		
	},
    follow(e){
	this.list[e].isFollow=true
	uni.showToast({
		title:'关注成功'
	})
	console.log(e)
    },
	doSupport(e){ 
		//拿到当前对象
		//之前没有操作过
		let item=this.list[e.index]
		let msg=e.type==='support'?'顶':'踩'
		
		if(item.support.type===''){
			item.support.type=e.type
			item.support[e.type+'_count']++
			
		}else if(item.support.type==='support'&&e.type==='unsupport'){
			 //顶01
			 item.support.support_count--;
			 item.support.unsupport_count++;
			
		}else if(item.support.type==='unsupport'&&e.type==='support'){
			item.support.support_count++;
			item.support.unsupport_count--;
		}
		item.support.type=e.type
		//之前顶
		
		uni.showToast({
			title:msg+'成功'
		})
	
		console.log(e)
		
	}
	
		}
	}
</script>

<style lang="scss">
	
		
	
</style>
