<template>
<div>
	<list-tab :tabType="type"></list-tab>
</div>
	
</template>

<script>
import listTab from '../components/body/list'

export default {
	name:'topTab',
	data(){
		return {
			type:"top"  //将新闻类型传到组件 listTab中以获取对应的新闻数据
		}
	},
	methods:{
		
	},
	components:{listTab}
}
</script>

