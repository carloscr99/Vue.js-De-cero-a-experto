
const miPromesa = () =>{
    return new Promise((resolve, reject) =>{

        setTimeout(()=>{
         //   resolve('Tiempo de valor en la promesa')
         reject('Error en promesa')
        }, 2000)
    })
}

const medirTiempoAsync = async()=>{

    try {
        console.log("inicio")

        //Se almacena el resultado de la ejecución exitosa
        const respuesta = await miPromesa()

        console.log(respuesta)

        console.log("fin")

    return "Fin de tiempo async"

    } catch (error) {
        return 'catch error'
    }

    

   // throw 'Error medirTiempoAsync'
    
}


medirTiempoAsync()
.then(valor => console.log(valor))
//.catch(console.log)
