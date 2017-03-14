<template>
<div>
	<ul
	  v-infinite-scroll="loadMore"
	  infinite-scroll-disabled="loading"
	  infinite-scroll-distance="10"
	  infinite-scroll-immediate-check="isCheck">
	  <li v-for="item in list" @click="toRouter(item.url)">
	  	<div class="list-box">
	  		<div class="list-box-main">
	  			<p class="list-box-title">{{item.title}}</p>
	  			<p class="list-box-label">{{item.author_name}} &nbsp;&nbsp; {{item.date}}</p>
	  		</div>
	  		<div class="list-box-pic">
	  		<img  width="120" height="70" v-lazy="item.thumbnail_pic_s"  />
	  		</div>
	  	</div>
	  </li>
	</ul>
	<load-tip></load-tip>
	<scroll-top></scroll-top>
</div>
	
</template>

<script>
import { InfiniteScroll,Cell,Lazyloadl,Toast } from 'mint-ui'
import loadTip from './loading.vue'
import utils from '../../utils/common.js'
import scrollTop from './scrollTop'

export default {
	name:'listTab',
	props:{
		tabType:{
			type:String,
			required: true
		}
	},
	data(){
		return {
			isCheck:true,  // 是否自动检查当加载list页面时item未充满页面自动执行loadMore方法以获得api数据
			loading:false, // 是否要执行loadMore
			list:[]		   // 遍历循环的数组
		}
	},
	methods:{
		loadMore() {
			this.loading = true;
			let postData =utils(this.$store.state.postData[this.tabType]); //获取vuex中的对应新闻类型data进行传值
			this.$http.get("/api?"+postData,{}).then((res) => {			
				let data = res.body.result.data;
				if(!this.loading){
					return;
				}
				this.list = data.reduce( function(coll,item){
				    coll.push( item );
				    return coll;
				}, this.list );
				//this.list =this.list.concat(data.result.data);
				this.loading = false;
				//console.log(data);
			},(res1) => {
				this.loading=false;
				console.log('获取api数据出错');
				Toast('获取api数据出错');
			})
		},
		// 路由跳转方法
		toRouter(str){	
			 this.loading = false;		
			 // 使用params传参到detail页面
			 this.$router.push({name:'detail',params:{url:str}});
		}
		
	},
	components:{loadTip,scrollTop}
}
</script>

<style scoped>
.list-box{
	display: flex;justify-content: space-between;height: 80px;
}
.list-box > div:nth-child(1){
	flex-basis: 65%;
}
.list-box > div:nth-child(2){
	flex-basis: 30%;
}
.list-box-main{
	display: flex;flex-direction:column;justify-content: space-between;font-size: 16px;
}
.list-box-title{font-size:16px;color:#333;overflow:hidden; text-overflow:ellipsis;display:-webkit-box; -webkit-box-orient:vertical;
-webkit-line-clamp:2; }
.list-box-label{
	font-size:12px;color:#a1a1a1;
}

.list-box-pic{
	display: flex;justify-content: flex-end;
}
</style>

