
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // {},
      { path: 'Home', component: () => import('pages/Home.vue') },
      { path: '', component: () => import('pages/Mode.vue') },
      { path: 'aboutme', component: () => import('pages/AboutMe.vue') },
      { path: 'E', component: () => import('pages/E.vue') },
      { path: 'Kai', component: () => import('pages/kai.vue') },
      { path: 'Consonant', component: () => import('pages/Consonant.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
