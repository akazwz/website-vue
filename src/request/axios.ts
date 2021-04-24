import axios from 'axios'

axios.defaults.withCredentials = true

const service = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config
  }, error => {
    console.log(error)
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject()
  }
)

export default service
