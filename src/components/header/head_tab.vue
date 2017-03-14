<template>
  <div class="header-tab">
    <mt-navbar v-model="headTab" class="container">
      <mt-tab-item id="head-tab1" @click.native="toRouter(1)">头条</mt-tab-item>
      <mt-tab-item id="head-tab2" @click.native="toRouter(2)">社会</mt-tab-item>
      <mt-tab-item id="head-tab3" @click.native="toRouter(3)">科技</mt-tab-item>
      <mt-tab-item id="head-tab4" @click.native="toRouter(4)">娱乐</mt-tab-item>
      <mt-tab-item id="head-tab5" @click.native="toRouter(5)">国内</mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
  import { Navbar, TabItem } from 'mint-ui'
  import { mapState } from 'vuex'
  export default {
    name: 'headtab',
    components: {Navbar, TabItem},
    computed: {
      ...mapState(['headTab'])
    },
    methods: {
      toRouter(index){
        this.$store.commit('setHeadNav', index);
        switch (index) {
          case 1:
            this.$router.push({path: 'top'});
            break;
          case 2:
            this.$router.push({path: 'shehui'});
            break;
          case 3:
            this.$router.push({path: 'keji'});
            break;
          case 4:
            this.$router.push({path: 'yule'});
            break;
          case 5:
            this.$router.push({path: 'guonei'});
            break;
        }
      }
    }
  }
</script>

<style>
  .mint-tab-item {
    padding: 12px 0 !important;
  }

  .mint-tab-item-label {
    font-size: 16px !important;
  }

  a{
    text-decoration: none;
  }

  a:link{text-decoration:none;}
  a:visited{text-decoration:none;}
  a:hover{text-decoration:none;}
  a:active{text-decoration:none;}

</style>
