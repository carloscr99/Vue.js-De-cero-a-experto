
import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://curso-vuejs-61268-default-rtdb.europe-west1.firebasedatabase.app'
})

export default journalApi