const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Mode.vue') },
      { path: 'Home', component: () => import('pages/Home.vue') },
      { path: 'about', component: () => import('pages/about.vue') },
      { path: 'ข', component: () => import('pages/AboutMe.vue') },
      { path: 'E', component: () => import('pages/E.vue') },
      { path: 'ก', component: () => import('pages/Kai.vue') },
      { path: 'Consonant', component: () => import('pages/Consonant.vue') },
      { path: 'D', component: () => import('pages/D.vue') },
      { path: 'vowel_k', component: () => import('pages/vowel_k.vue') },
      { path: 'vowel_t', component: () => import('pages/vowel_t.vue') },
      { path: 'vowel_b', component: () => import('pages/vowel_b.vue') },
      { path: 'vowel_u', component: () => import('pages/vowel_u.vue') },
      { path: 'vowel_6', component: () => import('pages/vowel_6.vue') },
      { path: 'vowel_^', component: () => import('pages/vowel_^.vue') },
      { path: 'vowel', component: () => import('pages/vowel.vue') },
      { path: 'vowel_7', component: () => import('pages/vowel_7.vue') },
      { path: 'vowel_n', component: () => import('pages/vowel_n.vue') },
      { path: 'vowel_g', component: () => import('pages/vowel_g.vue') },
      { path: 'vowel_c', component: () => import('pages/vowel_c.vue') },
      { path: 'vowel_gv', component: () => import('pages/vowel_gv.vue') },
      { path: 'vowel_f', component: () => import('pages/vowel_f.vue') },
      { path: 'vowel_v', component: () => import('pages/vowel_v.vue') },
      { path: 'เอะ', component: () => import('pages/vowel_gt.vue') },
      { path: 'โอะ', component: () => import('pages/vowel_ft.vue') },
      { path: 'เอาะ', component: () => import('pages/vowel_gkt.vue') },
      { path: 'แอะ', component: () => import('pages/vowel_ct.vue') },
      { path: 'ไอ', component: () => import('pages/vowel_w.vue') },
      { path: 'ModeCon', component: () => import('pages/ModeConsonant.vue') },
      { path: 'Modevowel', component: () => import('pages/Modevowel.vue') },
      { path: '4', component: () => import('pages/4.vue') },
      { path: '5', component: () => import('pages/5.vue') },
      { path: 'ฃ', component: () => import('pages/quack.vue') },
      { path: 'ช', component: () => import('pages/=.vue') },
      { path: 'ซ', component: () => import('pages/sauzo.vue') },
      { path: 'ขา', component: () => import('pages/Mix_Qa.vue') },
      { path: 'แกะ', component: () => import('pages/Mix_cdt.vue') },
      { path: 'เกาะ', component: () => import('pages/Mix_gvkt.vue') },
      { path: 'ถู', component: () => import('pages/Mix_56.vue') },
      { path: 'ModeCon2', component: () => import('pages/ModeCon2.vue') }
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
