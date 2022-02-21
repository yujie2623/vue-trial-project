import Vue from "vue"
import Router from "vue-router"
import Layout from "@/layout/index.vue"

Vue.use(Router)
const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: '/hospitalLeader',
    children: [{
      path: 'hospitalLeader',
      name: 'hospitalLeader',
      component: () => import('@/views/hospitalLeader/index'),
      meta: { title: '院领导看板', icon: 'hospitalLeader' }
    }]
  },
  {
    path: "/president",
    component: Layout,
    redirect: '/president',
    children: [{
        path: 'president',
        name: 'president',
        component: () => import('@/views/president/index'),
        meta: { title: '庭长看板', icon: 'president' }
    }]
  },
  {
    path: "/special",
    component: Layout,
    redirect: '/juveniles',
    meta: { title: '专题分析', icon: 'dashboard' },
    children: [
      {
        path: 'juveniles',
        name: 'juveniles',
        component: () => import('@/views/special/juveniles'),
        meta: { title: '未成年人犯罪分析', icon: 'test' }
      },
      {
        path: 'intellectual',
        name: 'intellectual',
        component: () => import('@/views/special/intellectual'),
        meta: { title: '知识产权侵权分析', icon: 'test' }
      },
      {
        path: 'drugCrimes',
        name: 'drugCrimes',
        component: () => import('@/views/special/drugCrimes'),
        meta: { title: '毒品犯罪分析', icon: 'test' }
      },
      {
        path: 'dutyCrimes',
        name: 'dutyCrimes',
        component: () => import('@/views/special/dutyCrimes'),
        meta: { title: '职务犯罪分析', icon: 'test' }
      },
      {
        path: 'environment',
        name: 'environment',
        component: () => import('@/views/special/environment'),
        meta: { title: '环境资源专题', icon: 'test' }
      }
    ]
  },
  {
    path: '/statistical',
    component: Layout,
    redirect: '/statistical/caseClosure',
    meta: { title: '统计报表', icon: 'statistical' },
    children: [
      {
        path: 'caseClosure',
        name: 'caseClosure',
        component: () => import('@/views/statistical/caseClosure'),
        meta: { title: '案件收结情况', icon: 'caseClosure' }
      },
      {
        path: 'qualityEffect',
        name: 'TablqualityEffecte1',
        component: () => import('@/views/statistical/qualityEffect'),
        meta: { title: '审判质效指标', icon: 'qualityEffect' }
      },
      {
        path: 'caseHandling',
        name: 'caseHandling',
        component: () => import('@/views/statistical/caseHandling'),
        meta: { title: '院庭长办案情况', icon: 'caseHandling' }
      },
      {
        path: 'caseAbnormal',
        name: 'caseAbnormal',
        component: () => import('@/views/statistical/caseAbnormal'),
        meta: { title: '异常案件统计', icon: 'table' }
      }
    ]
  },
  {
    path: '/supervision',
    component: Layout,
    redirect: '/supervision/caseQuality',
    meta: { title: '质效监督', icon: 'supervision' },
    children: [
      {
        path: 'caseQuality',
        name: 'caseQuality',
        component: () => import('@/views/supervision/caseQuality'),
        meta: { title: '办案质效监测', icon: 'caseQuality' }
      },
      {
        path: 'scheme',
        name: 'scheme',
        component: () => import('@/views/supervision/scheme'),
        meta: { title: '质效评估方案', icon: 'scheme' }
      }
    ]
  },
  {
    path: "/system",
    component: Layout,
    redirect: '/system',
    children: [{
      path: 'system',
      name: 'system',
      component: () => import('@/views/system/index'),
      meta: { title: '系统管理', icon: 'system' }
    }]
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
