import axios from "axios"

const apiBurgaoHot = axios.create({
    baseURL: "http://localhost:3001/"
})

apiBurgaoHot.interceptors.request.use( async config => {
    const userData = localStorage.getItem("@BurgaoHot:userData")
    const token = userData && JSON.parse(userData).token
    config.headers.Authorization = `Bearer ${token}`

    return config
})

export default apiBurgaoHot