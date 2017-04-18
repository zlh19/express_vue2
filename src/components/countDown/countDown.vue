<template>
	<div id="countDown">
		<button class="code-btn" :disabled="disabledButton" v-tap="{methods:codeBtnClickFun}" >{{countDownText}}</button>
	</div>
</template>
<script>
	export default{
		props:['btnText','btnTimer'],
		data(){
			return{
		        countDownText:'获取验证码',
		        countDownTime:59
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.countDownText=this.btnText || this.countDownText;
				this.countDownTime=this.btnTimer || this.countDownTime ;
			})
		},
		computed:{
			disabledButton(){
				return this.$store.state.countDownDisabled
			}
		},
		methods:{
			// 倒计时点击事件
			codeBtnClickFun(){
				var countDownTime=this.countDownTime
				this.$store.dispatch('aCountDownIsTap',true)
				this.smsCodeCount(countDownTime);
			},
			smsCodeCount(count){
				if( count == 0 ){
	                this.countDownText="获取验证码";
	                this.$store.dispatch('aCountDownIsTap',false)
					this.$store.dispatch('aCountDownDisabled',false)
	            } else {
					this.$store.dispatch('aCountDownDisabled',true)
	            	this.countDownText= count-- + "s后重发";
	                this.timer=setTimeout(()=>{
	                    this.smsCodeCount(count)
	                },1000)
	            }
			}
		}
	}
	
</script>
<style lang="sass">
	@import 'countDown.scss';
</style>