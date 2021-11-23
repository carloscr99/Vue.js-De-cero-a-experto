

import giphyApi from './bases/11-axios'


const getImage = async() => {

    try {
        
      const {data} = await giphyApi.get('/random')
      const { url } = data.data.images.original

      const img = document.createElement('img')

      img.src = url
  
      document.body.append(img)
  

    } catch (error) {
        console.log("Error en la peticion", erro)
    }

}


getImage()