<template>
	<div class="loading-box">
		<mt-spinner :color="color" :size="size" :type="type"></mt-spinner>
	</div>	
</template>

<script>
import Vue from 'vue'
import { Spinner } from 'mint-ui';
Vue.component(Spinner.name, Spinner);

export default {
	name:'loading',
	data(){
		return {
			color:'#26a2ff',
			size:38,
			type:'triple-bounce'
		}
	}
}
</script>