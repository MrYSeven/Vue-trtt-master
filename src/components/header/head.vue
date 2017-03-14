<template>
  <div class="header">
    <head-title></head-title>
    <head-tab v-if="!head.isDetail"></head-tab>
  </div>
</template>

<script>
  import headTitle from './head_title';
  import headTab from './head_tab'
  import { mapGetters } from 'vuex'
  export default {
    name: 'tHead',  
    computed:{
      ...mapGetters(['head'])
    },
    components: {headTitle, headTab}
  }
</script>