<template>
  <div class="box">
  	<div class="head-back-div" v-if="head.isDetail"  @click="goBack()">
      <div class="head-back"></div> 
    </div>
    <div class="box-item" :class="{titleAlign:head.isDetail}">{{head.title}}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    name: 'head-title',
    data(){
      return {title:'听日头条'}
    },
    computed:{
    	...mapGetters(['head'])
    },
    methods:{
    	goBack(){
    		this.$store.commit('showHeadNav', false);
			this.$store.commit('setMainClass',true);
			this.$router.go(-1);
    	}
    }
  }
</script>

<style scoped>
.head-back-div{z-index:9999999;width:60px;height: 100%;}
.head-back{width: 24px;height: 100%;background: url("../../assets/images/goback_icon.png") no-repeat center;background-size: 60% 60%;}
.titleAlign{margin-left: -60px;}


</style>