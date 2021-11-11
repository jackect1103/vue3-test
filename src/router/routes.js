const routes = [
  {
    name: '/',
    path: '/',
    component: () => import("@/pages/index")
  },
  {
    name: 'progressBar',
    path: '/progressBar',
    component: () => import("@/components/progressBar")
  },
  {
    name: 'flop',
    path: '/flop',
    component: () => import("@/components/flop")
  },
  {
    name: 'testCancelToken',
    path: '/testCancelToken',
    component: () => import("@/components/testCancelToken")
  },
]

export default routes;
