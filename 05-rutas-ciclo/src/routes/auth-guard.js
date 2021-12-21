

const isAuthenticatedGuard = async (to, from, next ) =>{

    return new Promise( () =>{

        const random = Math.random() * 100

        if(random > 50){
            console.log("está authenticado")
            next()
        }else{
            console.log(`bloqueado por no estar authenticado ${random}`)
            next({name: 'pokemon-home'})
        }

    })

    console.log({to, from, next})
}


export default isAuthenticatedGuard