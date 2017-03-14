<template>
	<div class="detail-div">
		<iframe id="myiframe" :width="iframeWidth" :height="iframeHeight" :src="iframeSrc"  frameborder="0"></iframe>
	</div>
</template>

<script>
import scrollTop from './scrollTop.vue'
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
				return this.iframeSrc;
			}
		},
		mounted(){
			this.setIframe();			
		},
		created(){
			this.fetchData();
		},
		methods:{
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
			fetchData(){
				this.iframeSrc=this.$route.params.url;			
			}
		},
		activated(){
			this.setIframe();
			this.$store.commit('showHeadNav', true);
			this.$store.commit('setMainClass',false);
			this.fetchData();
		},
		deactivated(){
			this.$store.commit('showHeadNav', false);
			this.$store.commit('setMainClass',true);			
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