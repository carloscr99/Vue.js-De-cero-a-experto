
import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyAVqds0QK-oltynSaPPXzoEt7qHTKZSh2c'
    }
})

//console.log( process.env.NODE_ENV ) // => TEST

export default authApi