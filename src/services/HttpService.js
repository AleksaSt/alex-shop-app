 
import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api/'

export class HttpService{
    
    constructor(){
        axios.defaults.baseURL = BASE_URL
        axios.defaults.headers.accept = "application/json"
        this.axios = axios
    }

    setHeaders(headers) {
        Object.assign(axios.defaults.headers.common, headers)
    }

    parseUrl(url){
        if(typeof url === 'string' && url.includes(BASE_URL)){
            return url.substr(BASE_URL.length)
        }
        return url
    }
}