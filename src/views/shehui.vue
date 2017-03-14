<template>
<div>
	<list-tab :tabType="type"></list-tab>
</div>
	
</template>

<script>
import listTab from '../components/body/list'

export default {
	name:'shehuiTab',

	data(){
		return {
			type:"shehui"
		}
	},
	methods:{
		
	},

	components:{listTab}
}
</script>