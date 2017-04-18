import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
    state: {
        // 用户信息
        userInfor:{
            userAccount:''
        },
        // 弹出层tips
        isShowTips:false,
        tipsContent:'',
        // 倒计时
        countDownDisabled:true,
        countDownIsTap:false,
        // 弹出层dialog
        isShowDialog:false

    },
    mutations: {
        // 弹出层tips
        mSetShowTips(state,status){
            state.isShowTips = status;
        },
        mSetShowTipsContent(state,status){
            state.tipsContent = status;
        },
        // 倒计时
        mCountDownDisabled(state,status){
            state.countDownDisabled=status
        },
        mCountDownIsTap(state,status){
            state.countDownIsTap=status
        },
        // 弹出层dialog
        mShowDialog(state,status){
            state.isShowDialog=status
        }

    },
    actions:{
        // 弹出层tips
        aSetShowTips(context,status){
            if(!context.state.isShowTips){
                setTimeout(()=>{
                   context.commit('mSetShowTips',false);
                },2000)
            }
            context.commit('mSetShowTips',status);
        },
        aSetShowTipsContent(context,status){
            context.commit('mSetShowTipsContent',status);
        },
        // 倒计时
        aCountDownDisabled(context,status){
            context.commit('mCountDownDisabled',status)
        },
        aCountDownIsTap(context,status){
            context.commit('mCountDownIsTap',status)
        },
        // 弹出层dialog
        aShowDialog(context,status){
            context.commit('mShowDialog',status)
        }

    }

})


export{
   store 
}