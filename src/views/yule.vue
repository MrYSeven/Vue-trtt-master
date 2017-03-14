<template>
<div>
	<list-tab :tabType="type"></list-tab>
</div>
	
</template>

<script>
import listTab from '../components/body/list'

export default {
	name:'yuleTab',

	data(){
		return {
			type:"yule"
		}
	},
	methods:{
		
	},

	components:{listTab}
}
</script>