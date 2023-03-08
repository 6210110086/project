import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
// import firebase from 'firebase'

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  })

  // const router = createRouter({
  //   history: createWebHistory(),
  //   routes: [
  //     { path: '/signup', component: () => import('pages/Signup.vue') },
  //     { path: '/login', component: () => import('pages/Login.vue') }
  //   ]
  // })

  // const router = createRouter({
  //   history: createWebHistory(process.env.BASE_URL),
  //   routes
  // })

  // router.beforeEach((to, from, next) => {
  //   const authenticatedUser = firebase.auth().currentUser
  //   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  //   if (requiresAuth && !authenticatedUser) {
  //     alert('You are not authorized to access this area.')
  //     next('login')
  //   } else {
  //     next()
  //   }
  // })
  return Router
})
