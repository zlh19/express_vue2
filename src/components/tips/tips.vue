<template>
	<div id="dialogTips">
		<div class="dialog-tips" v-show="showTips">
			<div class="dialog-tips-main">
				 <div class="msg-text"><span>{{tipsContent}}</span></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		computed:{
			showTips(){
				return this.$store.state.isShowTips;
			},
			tipsContent(){
				return this.$store.state.tipsContent;
			}
		}
	}
</script>
<style lang="sass">
	@import 'tips.scss';
</style>