
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Todo.vue') },
      { path: '/card', component: () => import('pages/Card.vue') },
      { path: '/timeline', component: () => import('pages/Timeline.vue') },
      { path: '/tab', component: () => import('pages/Tab.vue') },
      { path: '/help', component: () => import('pages/Help.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
