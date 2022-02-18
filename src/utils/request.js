import axios from "axios"
import { Message, MessageBox } from "element-ui"
import {getToken} from "@/utils/auth"
import store from "@/store"

// 创建一个axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
    if (store.getters.token) {
        config.headers['token'] = getToken() //设置token
    }
    return config
},
    error => {
        return Promise.reject(error)
    })

// 响应拦截器
service.interceptors.response.use(response => {
    const res = response.data
    if (res.code !== 20000) {
        Message({
            message: res.message || "Error",
            type:'error',
            duration:5*1000
        })
    }


    if (res.code === 50008 ||res.code === 50012 ||res.code === 50014){
        if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
            // 重新登录
            MessageBox.confirm('您已经注销，您可以取消停留在本页，或再次登录，确认注销', {
              confirmButtonText: '重新登录',
              cancelButtonText: '关闭',
              type: 'warning'
            }).then(() => {
              store.dispatch('user/resetToken').then(() => {
                location.reload()
              })
            })
          }
          return Promise.reject(new Error(res.message || 'Error'))
    }else{
        return res
    }
},error => {
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
    return Promise.reject(error)
})


export default service