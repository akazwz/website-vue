import service from './axios'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createToken = (data: { username: string; password: string }) => service({
  url: 'v1/token',
  method: 'post',
  data: data
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getBooks = () => service({
  url: 'v1/books',
  method: 'get'
})
