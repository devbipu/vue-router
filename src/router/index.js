import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import storeData from '../store.js'

const routes = [
    {
      path: '/',
      name: 'HomeRoute',
      component: HomeView,
      alias: '/home' //how the route name rather then redirect
    },
    //Use for redirect user for specfic route
    // {
    //   path: '/home',   
    //   redirect: '/'
    // },
    {
      path: '/protected',
      name: 'Dashboard',
      components: {
        default: () => import('../views/Dashboard.vue'),
        LeftSideBar: () => import('../components/LeftSideBar.vue')
      },
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
      query: {
        login: true
      }
    },
    {
      path: '/invoice',
      name: 'Invoice',
      component: () => import('../views/Invoice.vue')
    },
    {
      path: '/details/:slug',
      name: 'DestinationDetails',
      component: () => import('../views/DestinationDetails.vue'),
      props: route => ({...route.params , slug: route.params.slug}),
      beforeEnter(to, from){
        const exists = storeData.destinations.find(
          destination => destination.id == parseInt(to.params.id)
        )
        if(!exists){
          return {
            name: 'NotFound',
            params: {pathMatch: to.path.split('/').slice(1)},
            query: to.query,
            hash: to.hash,
          }
        }
      },
      children: [
        {
          path: ':exprienceSlug',
          name: 'experience.show',
          component: () => import('../views/PlaceDetails.vue'),
          props: route => ({...route.params}),
        },
      ]
    },
    {
      path: '/about-dev',
      name: 'AboutDev',
      component: () => import('../views/aboutdev.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: "NotFound",
      component: () => import('../views/NotFound.vue'),
    }
  ]


const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  beforeEach(to, from){
    const routeExist = storeData.destinations.find(
      destination => destination.id == to.params.id
    )
    if(!routeExist) return {name: 'NotFound'};
  },
  scrollBehavior (to, from, savedPosition){
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({top: 0, scrollBehavior: 'smooth'}),  0.8)
    })
  }
})


//Navigation gard for routs

router.beforeEach((to, from) => {
  if(to.meta.requireAuth && !window.username){
    console.log("Checking")
    return {name: 'Login'}
  }
})



export default router
