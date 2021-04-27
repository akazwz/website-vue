import service from './axios'
import axios, { AxiosPromise } from 'axios'

export const createToken = (data: { username: string; password: string }): AxiosPromise => service({
  url: 'v1/token',
  method: 'post',
  data: data
})

export const getBooks = (): AxiosPromise => service({
  url: 'v1/books',
  method: 'get'
})

export const fileUpload = (formData: FormData): number => axios.create({
  baseURL: 'http://47.96.24.50:8000/',
  url: 'v1/file',
  method: 'post',
  timeout: 5000,
  data: formData
}).interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers = {
    'Content-Type': 'multipart/form-data',
    token: token
  }
  return config
}, error => {
  console.log(error)
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject()
})
