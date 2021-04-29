import service from './axios'
import { AxiosPromise } from 'axios'

export const createToken = (data: { username: string; password: string }): AxiosPromise => service({
  url: 'v1/token',
  method: 'post',
  data: data
})

export const getBooks = (): AxiosPromise => service({
  url: 'v1/books',
  method: 'get'
})

export const fileUpload = (formData: FormData): AxiosPromise => service({
  url: 'v1/file',
  method: 'post',
  data: formData
})
