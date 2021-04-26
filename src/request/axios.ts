import axios from 'axios'

const service = axios.create({
  baseURL: 'http://47.96.24.50:8000/',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    config.headers = {
      'Content-Type': 'application/json',
      token: token
    }
    return config
  }, error => {
    console.log(error)
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject()
  }
)

export default service
