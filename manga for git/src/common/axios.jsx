import axios from "axios"

const $mainApi = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL
})

const $authApi = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL
})

const authInterceptor = config => {
    const access = localStorage.getItem('access')
    config.headers.authorization = `Bearer ${access}`
    return config
}

$authApi.interceptors.request.use(authInterceptor)
export { $mainApi, $authApi }