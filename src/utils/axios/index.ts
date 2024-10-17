import axios, { AxiosError } from 'axios'

const BASE_URL = process.env.ROAD_BASE_URL

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 100000
})

export default instance