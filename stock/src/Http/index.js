import axios from 'axios'
// axios.defaults.baseURL = ''

const devMode = process.env.NODE_ENV === 'development'


class Http {
    constructor() {
        this.instance = null
        this.access_token = ''
        this.refresh_token = ''
        this.baseUrl = 'http://project-api.gongwlin.cn'
    }

    setToken() {
        this.access_token = localStorage.getItem('token') || ''
        this.refresh_token = localStorage.getItem('refresh_token') || ''
    }
    get(options) {
        const { url, params, headers } = options
        const baseUrl = options.baseUrl || this.baseUrl

        let newParmas = Object.assign({}, params)
        this.setToken()
        newParmas.token = this.access_token
        const paramsString = _jsonToQueryString(newParmas)
        const api = `${baseUrl}${url}${paramsString}`
        const fetchConfig = {
            mode: 'no-cors'
        }
        if (!!headers) {
            fetchConfig.headers = headers
        }
       
        return axios
            .get(api, fetchConfig)
            .then(res =>  res.data )
            .catch(error => {
                if(error.response) {
                    console.log(error.response)
                    return error.response
                } else {
                    console.log(error)
                    return {code: -999, data: '请检查网络', message: '请检查网络'}
                }
            })
    }

    post(options) {
        const { url, headers = {},params } = options
        const baseUrl = options.baseUrl || this.baseUrl
        let paramsString = ''
        this.setToken()
        paramsString = '?token=' + this.access_token
        const api = `${baseUrl}${url}${paramsString}`
        const postOpts = {
            url: api,
            method: 'POST',
            mode: 'no-cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                ...headers
            },
            data: params
        }

        return axios(postOpts)
            .then(res => res.data)
            .catch(error => {
                if (error.response) {
                    console.log(error.response)
                    return error.response
                } else {
                    console.log(error)
                    return { code: -999, data: '请检查网络', message: '请检查网络' }
                }
            })
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Http()
        }
        return this.instance
    }
}

const http = Http.getInstance()
export default http

function _jsonToQueryString(json) {
    return (
        '?' +
        Object.keys(json)
            .map(function (key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
            })
            .join('&')
    )
}
