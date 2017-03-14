<template>
<div class="icon-top" v-show="show" @click="scrollTop"></div>
</template>
<script>
    export default {
        replace: true,
        data() {
            return {
                show: false
            };
        },
        mounted() {
            window.onscroll = () => {
                if (document.body.scrollTop > 100) {
                    this.show = true;
                } else {
                    this.show = false;
                }
            }            
        },
        // 组件毁掉勾子
        beforeDestory() {
            window.onscroll = null ;
        },
        methods: {
            scrollTop() {
                document.body.scrollTop = 0;
                this.show = false;
            }
        }
    };
</script>
<style scoped>
    .icon-top {
        position: fixed;
        left: 10px;
        bottom: 80px;
        font-size: 50px;
        z-index: 9999;
        color: #5789c1;
        width:50px;
        height: 50px;
        background: url("../../assets/images/less.svg") no-repeat center;background-size: 60% 60%;
        background-color: #5789c1;
        border-radius: 50%;
    }
</style>