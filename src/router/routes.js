
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
      { path: 'Consonant', component: () => import('pages/Consonant.vue') },
      // { path: 'game1', component: () => import('pages/game1.vue') },
      { path: 'D', component: () => import('pages/D.vue') },
      { path: 'vowel_k', component: () => import('pages/vowel_k.vue') },
      // { path: 'game', component: () => import('game1/game.vue') },
      { path: 'game', component: () => import('pages/game1.vue') },
      { path: 'vowel_t', component: () => import('pages/vowel_t.vue') },
      { path: 'vowel_b', component: () => import('pages/vowel_b.vue') },
      { path: 'vowel_u', component: () => import('pages/vowel_u.vue') },
      { path: 'vowel_6', component: () => import('pages/vowel_6.vue') },
      { path: 'vowel_^', component: () => import('pages/vowel_^.vue') }
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
