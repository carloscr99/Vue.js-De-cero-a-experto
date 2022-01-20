import uploadImage from '@/modules/daybook/helpers/uploadImage'
import axios from 'axios'
import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name: 'dh7vxoobp',
    api_key: '436457129673236',
    api_secret: 't2fr-uj36m12UhnlNZnA1NLcTiQ'

})

describe('Pruebas en el uploadImage', () =>{

    test('debe de cargar un archivo y retornar el url', async( done ) =>{
        
        const { data } = await axios.get('https://res.cloudinary.com/dh7vxoobp/image/upload/v1642525487/curso-vue/vhfm0guq5di9rgpxseky.png', {
            responseType: 'arraybuffer'
        })

        const file = new File([data], 'foto.png')

        const url = await uploadImage(file)

        expect(typeof url).toBe('string')

        // Tomar el ID de la imagen subida

        console.log(url)
        const segments  = url.split('/')
        const imageId = segments[ segments.length - 1 ].replace('.png', '')

        console.log({imageId})

        cloudinary.v2.api.delete_resources( imageId, {}, () =>{

            done()

        })

    })

})