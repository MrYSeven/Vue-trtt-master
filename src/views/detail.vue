<template>
	<div class="detail-div">
		<iframe id="myiframe" :width="iframeWidth" :height="iframeHeight" :src="iframeSrc"  frameborder="0"></iframe>
	</div>
</template>

<script>
import scrollTop from '../components/body/scrollTop'
	export default {
		name:'detail',
		data(){
			return {
				iframeSrc:'',
				iframeWidth:'100%',
				iframeHeight:'800px'
			}
		},
		computed:{
			getSrc:function(){
				return this.iframeSrc;   //iframe的链接url
			}
		},
		mounted(){
			// 当组件被挂载到实例后执行
			this.setIframe();
			this.$store.commit('showHeadNav', true);
			this.$store.commit('setMainClass',false);
			this.fetchData();		
		},
		created(){
			// 组件被创建的勾子，先于mounted执行
			// this.fetchData();
		},
		methods:{
			// 设置iframe的宽高
			setIframe:function(){
				let height = document.documentElement.clientHeight;
				let width = document.documentElement.clientWidth;
				this.iframeWidth = width;
				this.iframeHeight =height;

				document.documentElement.scrollTop = 0;
				document.body.scrollTop = 0;
				/*let myIframe=document.getElementById("myiframe");
				myIframe.height = height;
				myIframe.width = width;*/
			},
			// 设置iframe的url,url由router的传值params获得
			fetchData(){
				this.iframeSrc=this.$route.params.url;			
			}
		},
		//  router勾子，离开该页面时执行
		beforeRouteLeave (to, from, next) {
		  	this.$store.commit('showHeadNav', false);
			this.$store.commit('setMainClass',true);
		  	next();
		    // 导航离开该组件的对应路由时调用
		    // 可以访问组件实例 `this`
		},
		// keep-alive组件使用时的触发周期勾子
		activated(){
			
		},
		deactivated(){
						
		},
		watch: {
		    // 如果路由有变化，会再次执行该方法
		  	 //'$route':'fetchData'
		}
	}
</script>

<style scoped>
 .detail-div{
 	overflow: hidden;
 	border:0px;
 }
</style>