import request from './axios'

class login {
  username : string | undefined
  password : string | undefined
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createToken = (login : login) => request({
  url: 'v1/token',
  method: 'post',
  responseType: 'json',
  data: login
})
