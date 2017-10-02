
import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
// import {setWechatTitleFun} from '../public/js/model'

// 实例化VueRouter
Vue.use(VueRouter);

class Meta{
    title:string;
    isLogin:number;
}

class Route{
    path: string;
    name?: string;
    meta?: Meta;
    redirect?:string;
    component?:()=>void
}
// 路由表
const routes:Route[] = [{ //首页
    path: '/',
    name: '/',
    meta: {
        title: '首页',
        isLogin:0
    },
    redirect: '/loginEnter'
},{
    path: '/login',
    name: 'login',
    meta: {
        title: '登录',
        isLogin:0
    },
    component:()=>{
        // import('../vue/login/login.vue')
        require('../vue/login/login.vue')
    }
},{
    path: '/help',
    name: 'help',
    meta: {
        title: '帮助',
        isLogin:1
    },
    component:()=>{
        require('../vue/help/help.vue')
    }
},{
    path: '/buyStock',
    name: 'buyStock',
    meta: {
        title: '首页',
        isLogin:1
    },
    component:()=>{
        require('../vue/buyStock/buyStock.vue')
    }
}, {
    path: '/buyRecord',
    name: 'buyRecord',
    meta: {
        title: '列表页',
        isLogin:1
    },
    component:()=>{
        require('../vue/buyRecord/buyRecord.vue')
    }
}, {
    path: '/buyDay',
    name: 'buyDay',
    meta: {
        title: '选择页面',
        isLogin:1
    },
    component:()=>{
        require('../vue/buyDay/buyDay.vue')
    }
}, {
    path: '*',
    redirect: '/buyStock'
}]




var router = new VueRouter({
    routes:[]
// 当hashbang的值为true时，所有的路径都会被格式化已#!开头，
//     hashbang: true,
//     history: false,
//     saveScrollPosition: true,
//     transitionOnLoad: true
})

// router.beforeEach((to, from, next) => {
//     setWechatTitleFun(to.meta.title);
//     if(to.meta.isLogin==1){
//         var fundAccount=getCookie('zlhIsLogin');
//         if(!fundAccount){
//            next('/login')
//         }else{
//            next();
//         }
//     }else{
//         next();
//     }
// })



export default {
    router
}
