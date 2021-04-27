<template>
	<view>
		<!-- <h1 class="animate__animated animate__fadeInLeft">An animated element</h1> -->

		<!-- <text class="iconfont icon-shouye1" style="font-size: 100rpx;color: red;"></text> -->
		<!-- 列表样式 -->
		<scroll-view scroll-x class="scroll-row border-bottom" scroll-with-animation style="height: 100rpx;"
			:scroll-into-view="scrollInto">
			<!-- <view  v-for="(item,index) in tabBars" :key="index" 
			 class="scroll-row-item p-5 py-1 font-md" :id="'tab'+index"
			:class="tabIndex===index?'font-lg':''">{{i}}</view> -->
			<view v-for="(item,index) in tabBars" :key="index" class="scroll-row-item p-5 py-1 font-md"
				:id="'tab'+index" :class="tabIndex===index?'text-main font-lg font-weight-bold':''"
				@click="changeTab(index)">
				{{item.name}}
			</view>
		</scroll-view>
		<swiper :duration="150" :current="tabIndex" @change="onChangeTab" :style="'height:'+scrollH+'px'">
			<swiper-item v-for="(item,index) in newsList" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px'" @scrolltolower="loadmore(index)">
				<template v-if="item.list.length>0">
				
					<block v-for="(item2,index2) in item.list" :key="index2">
						<!-- <text>{{item2.username}}</text> -->
						<common-list :item="item2" :index="index2" @follow="follow" @doSupport="doSupport">
						</common-list>
						<divider></divider>
					</block>
					<load-more :loadmore="item.loadmore"></load-more>
					</template>
					<!-- 无数据 -->
					<template v-else>
						<no-thing ></no-thing>
						<!-- <view class="flex-column align-center justify-center">
							<image src="../../static/demo/banner1.jpg" style="width:  300rpx;height: 300rpx;"></image>
						<text class="font-md">什么也没有</text>
						</view> -->
					</template>
				</scroll-view>

			</swiper-item>

		</swiper>


	</view>
</template>

<script>
	
import commonList from "@/components/common/common-list.vue";
import loadMore from '../../components/common/load-more.vue'
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
	export default {
		components: {
			commonList,loadMore
		}, //很重要
		data() {

			return {
				scrollH: 600,
				scrollInto: "",
				tabIndex: 0,
				tabBars: [{
						name: "关注"
					},
					{
						name: "推荐"
					},
					{
						name: "体育"
					},
					{
						name: "热点"
					},
					{
						name: "财经"
					}
				],
				newsList: []
			}
		},
		onNavigationBarSearchInputClicked(){
			console.log("编辑跳转")
			uni.navigateTo({
				url:'../search/search',
				
			})
		},
		onLoad() {

			let res = uni.getSystemInfo({
				success: res => {
					console.log(res.windowHeight)
					this.scrollH = res.windowHeight - uni.upx2px(100)
				}
			})
			this.getData()

			//根据选项获取数据statusBar
		},
		onNavigationBarButtonTap(){
			console.log("跳转")
			uni.navigateTo({
				url:'../add-input/add-input'
			})
		},
		methods: {
			onChangeTab(e) {
				console.log(e)
			},
			changeTab(index) {
				if (this.tabIndex === index) {
					return
				}
				this.tabIndex = index
				this.scrollInto = 'tab' + index


			},
			follow(e) {
				this.list[e].isFollow = true
				uni.showToast({
					title: '关注成功'
				})
				console.log(e)
			},
			getData() {
				var arr = []
				for (let i = 0; i < this.tabBars.length; i++) {
					//生成列表模版
					let obj = {
						loadmore: "上拉加载更多",
						list: [
						]
					}
					if(i<2){
						obj.list=demo
					}
					arr.push(obj)
				}
				console.log(arr)
				this.newsList = arr
			},

			doSupport(e) {
				console.log(e)
				//拿到当前对象
				//之前没有操作过

				let item = this.newsList[this.tabIndex].list[e.index]
				let msg = e.type === 'support' ? '顶' : '踩'

				if (item.support.type === '') {
					item.support.type = e.type
					item.support[e.type + '_count']++

				} else if (item.support.type === 'support' && e.type === 'unsupport') {
					//顶01
					item.support.support_count--;
					item.support.unsupport_count++;

				} else if (item.support.type === 'unsupport' && e.type === 'support') {
					item.support.support_count++;
					item.support.unsupport_count--;
				}
				item.support.type = e.type
				//之前顶

				uni.showToast({
					title: msg + '成功'
				})

				console.log(e)

			},
		    //上拉加载更多
				loadmore(index){
					
					let item=this.newsList[index]
					//判断是否处于可加载状态
					if(item.loadmore!=='上拉加载更多') return
					
					this.newsList[this.tabIndex].loadmore='加载中...'
					console.log("上拉加载更多 ")
					setTimeout(()=>{
						 item.list=[...item.list,...item.list]
						item.loadmore='上拉加载更多'
					} ,2000)
				}
          
		}
	}
</script>

<style lang="scss">



</style>
