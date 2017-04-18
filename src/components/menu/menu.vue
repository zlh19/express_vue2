<template>
	<div id="menu">
		<div class="menu-title">
	        <i class="icon-user" v-tap="{methods:dialogShow}"></i>
	        <span v-tap="{methods:linkIndexFun}" :class="[this.$route.name=='buyStock'?'current':'','tit-link']">首页</span>
	        <span v-tap="{methods:linkListFun}" :class="[this.$route.name=='buyRecord'?'current':'','tit-link']">列表页</span>
	        <i class="icon-help" v-tap="{methods:linkHelpFun}"></i>
	    </div>
	    <!-- 弹出层 -->
	    <nv-DialogLogin></nv-DialogLogin>
	</div>
</template>
<script>
	import nvDialogLogin from '../../components/dialogLogin/dialogLogin.vue'

	export default{
		methods:{
			// 跳转页面
			linkIndexFun(){
				this.$router.push('/buyStock');
			},
			linkListFun(){
				this.$router.push('/buyRecord');
			},
			linkHelpFun(){
				this.$router.push('/help');
			},
			dialogShow(){
				// 另一种组件通信方式
				this.$root.$emit('isShowDialogLogin',true)
			}
		},
		components:{
			nvDialogLogin
		}
	}
	
</script>
<style lang="sass">
	@import 'menu.scss';
</style>