# 仿今日头条 webapp
<br>
## 主要使用到

* vue.js 2.0 
* vue-router 
* vuex 
* vue-resource 
* vue第三方组件 饿了么 mint-ui 
* 聚合数据API，在开发环境使用 proxyTable进行代理转发
<br>
		由于聚合API的问题，每次只能获得一页数据(没分页)，
		也没时间自己再去搞个后台做数据，所以webapp中也做了一些妥协，
		比如为了性能去掉keep-alive等，以后再继续改进。。	
<br>

## 如何使用
* git clone https://github.com/MrYSeven/Vue-trtt-master.git
* npm install(还是建议使用cnpm,npm实在太慢了)
* npm run dev
		
