
const apiKey = '9qqmiL41CXNUeEBFJZHS6Oj7XYnjNed5'

// https://api.giphy.com/v1/gifs/random?api_key=9qqmiL41CXNUeEBFJZHS6Oj7XYnjNed5


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
.then(resp => resp.json())
.then(({data}) =>{

        const { url } = data.images.original

       const img = document.createElement('img')

       img.src = url

       document.body.append(img)

})

