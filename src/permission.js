import router from "./router"
import store from "./store"
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/get-page-title'

//获取白名单
import whiteList from "@/whiteList.js"

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    document.title = getPageTitle(to.meta.title)
    const hasToken = getToken()

    if (hasToken) {
        if (to.path == "/login") {
            //    如果有token了，还去输入login，让他跳到/
            next({ path: "/" })
            NProgress.done()
        } else {
            const hasGetUserInfo = store.getters.name
            if (hasGetUserInfo) {
                next()
            } else {
                try {
                    await store.dispatch("user/getInfo")
                    next()
                } catch (error) {
                    await store.dispatch('user/resetToken')
                    Message.error(error || '获取用户信息错误')
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

router.afterEach(()=>{
    NProgress.done()
})