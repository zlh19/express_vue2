<template>
	<div id="date">
		<div class="buy-stock-date">
	        <i class="icon-page icon-prev"></i>
        	<!-- 日期列表 -->
	        <swiper :options="swiperOption" ref="mySwiper">
				<!-- 幻灯内容 -->
				<swiper-slide v-for="(items,index) in resData.dateListData">
				<div class="date-box">
				    <ul class="clearfix">
				        <li v-for="(item,index) in items">
				            <h4 class="date-week">{{item.weekDay}}</h4>
				            <div class="date-number"><em class="ft-ygm">{{item.date}}</em></div>
				            <p class="date-icon"><i :class="changeDateClass(item.icon)"></i></p>
				        </li>
				    </ul>
				</div>
			   	</swiper-slide>
			</swiper>
	        <i class="icon-page icon-next"></i>
	    </div>
	</div>
</template>
<script>
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	import axios from 'axios'
	export default{
		data(){
			var that=this;
			return {
				// 切换swiper
				swiperOption: {
					name: 'currentSwiper',
					autoplay:0,
					initialSlide:2,
					loop:false,
					pagination:'.swiper-pagination',
					onSlideChangeEnd(swiper){}
		        },
		        dateListIcon:['icon-ok','icon-warn','icon-pointer'],
		        resData:{
		        	dateListData:[]
		        }
				
			}
		},
		mounted(){
			this.$nextTick(()=>{
				
				// 渲染页面
				this.renderDateFun();
			})
		},
		methods:{
			renderDateFun(){
				var that=this;
				// 获取数据
				axios.get('/date.json')
				  	.then( (res) =>{
				  		var resData=res.data
				  		that.resData.dateListData=resData.dateListData
				  	})
				  	.catch( (error)=> {
				    	
				  	})
			},
			changeDateClass(iconNum) { 
				return this.dateListIcon[parseInt(iconNum)] 
			}
		},
		components:{
			swiper,
    		swiperSlide
		}

	}
</script>
<style lang="sass">
	@import 'date.scss';
</style>