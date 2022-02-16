
import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://curso-vuejs-61268-default-rtdb.europe-west1.firebasedatabase.app'
})


journalApi.interceptors.request.use( (config)=>{

    config.params = {
        auth: localStorage.getItem('idToken')
    }

    return config
} )

console.log( process.env.NODE_ENV ) // => TEST

export default journalApi