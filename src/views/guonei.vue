<template>
<div>
	<list-tab :tabType="type"></list-tab>
</div>
	
</template>

<script>
import listTab from '../components/body/list'

export default {
	name:'guoneiTab',

	data(){
		return {
			type:"guonei"
		}
	},
	methods:{
		
	},

	components:{listTab}
}
</script>