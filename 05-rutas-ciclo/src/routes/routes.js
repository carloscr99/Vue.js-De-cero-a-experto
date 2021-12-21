import {createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard'


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
      beforeEnter: [ isAuthenticatedGuard ],
      component: () => import( /* webpackChunkName: "dbzLayoyt" */ '@/modules/dbz/layouts/DragonBallLayout'),
      children: [
        { 
          path: 'characters',
          name: 'dbz-characters', 
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

  // guard global - Sicrono

// router.beforeEach( (to, from, next) =>{
//   console.log({to, from, next})

//   const random = Math.random() * 100

//   if(random > 50){
//     console.log("Autenticado")
//     // El next nos redirige a la página que queremos visitar
//     next()
//   } else {
//     console.log(`${random}: Bloqueado por el beforeEach Guard`)
//     //Nos redirige a una página por defecto
//     next({name: 'pokemon-home'})
//   }

// }) 

  // guard global - Asicrono

// const canAccess = () =>{
//   return new Promise(resolve =>{

//     const random = Math.random() * 100

//     if(random > 50){
//       console.log("Autenticado - canAccess")

//       resolve(true)
//     } else {
//       console.log(`${random}: Bloqueado por el beforeEach Guard - canAcess`)
//       resolve(false)
//     }

//   })
// }

// router.beforeEach( async (to, from, next)=>{

//   const authorized = await canAccess()

//   authorized ? next() : next({name: 'pokemon-home'})

// })


  export default router


