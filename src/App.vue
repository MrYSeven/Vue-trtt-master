/*
 这里不使用keep-alive控件来缓存router-view，一个是因为api只能获得一页数，
 需要非缓存刷新，另一个主要是缓存起来后比较卡，后面再优化
*/

<template>
  <div id="app">
    <my-head></my-head>
    <div :class="{'main':head.mainClass,'main-detail':!head.mainClass}">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import myHead from './components/header/head.vue'
  import {mapGetters} from 'vuex'
  export default {
    name: 'app',
    computed:{
      ...mapGetters(['head'])  //映射vuex中的getters，获得state.head，如果进入到detail页，head.mainClass为false
    },
    methods:{
      
    },
    components: {myHead} //将组件加载
  }
</script>
