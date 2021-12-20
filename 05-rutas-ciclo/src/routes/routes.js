import {createRouter, createWebHashHistory } from 'vue-router'



const routes = [
    { 
      path: '/', 
      redirect: '/pokemon' 
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: () => import( /* webpackChunkName: "pokemonLayoyt" */ '@/modules/pokemon/layouts/PokemonLayout'),
      children: [
        { 
          path: 'home',
          name: 'pokemon-home', 
          component: () => import( /* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage')
      },
      { 
          path: 'about',
          name: 'pokemon-about',
          component: () => import( /* webpackChunkName: "AboutPage" */ '../modules/pokemon/pages/AboutPage')
      },
      { 
          path: 'pokemonId/:id', 
          name: 'pokemon-id', 
          component: () => import( /* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/PokemonPage'), 
          props: ( route ) =>{
            const id = Number(route.params.id)
            return isNaN( id ) ? { id: 1 } : { id }
          }
       },
       {
        path: '', 
        redirect: { name: 'pokemon-about' }
       }

      ]

    }, 
    //DBZ Layout
    {
      path: '/dbz',
      name: 'dbz',
      component: () => import( /* webpackChunkName: "dbzLayoyt" */ '@/modules/dbz/layouts/DragonBallLayout'),
      children: [
        { 
          path: 'home',
          name: 'dbz-home', 
          component: () => import( /* webpackChunkName: "Characters" */ '../modules/dbz/pages/Characters')
      },
      { 
          path: 'about',
          name: 'dbz-about',
          component: () => import( /* webpackChunkName: "AboutPage" */ '../modules/dbz/pages/About')
      },
       {
        path: '', 
        redirect: { name: 'dbz-home' }
       }

      ]

    }, 

    /*
    
    layout: path: /dbz
            path: 'characters'
            name: 'dbz-characters'

            path: 'about'
            name: 'dbz-about'
    
    */

   
     
    { path: '/:pathMatch(.*)*', 
      component: () => import( /* webpackChunkName: "ListPage" */ '../modules/shared/pages/NoPageFound')  },
  ]


  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  export default router


