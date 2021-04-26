<template>
  <h1>This is an Api Page</h1>
  <div>
    <el-form
      :model="loginForm"
      ref="loginForm">
      <el-form-item prop="username">
        <el-input placeholder="username" v-model="loginForm.username">
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input placeholder="password" v-model="loginForm.password">
        </el-input>
      </el-form-item>

    </el-form>
    <button @click="login">LOGIN</button>
    <button @click="getBooks">GET_BOOKS</button>
  </div>
</template>

<script>
import { createToken, getBooks } from '@/request/api'

export default {
  name: 'Api',
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data () {
    return {
      loginForm: {
        username: 'zhaowenzhuo',
        password: '123456'
      }
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    login () {
      const data = {
        username: this.loginForm.username,
        password: this.loginForm.password
      }
      createToken(data).then((res) => {
        if (res.status !== 201) {
          alert('Login Failed')
        }
        if (res.data.code === 2000) {
          localStorage.setItem('token', res.data.data.token)
          alert(res.data.msg)
        }
      }).catch((err) => {
        if (err.response.status !== 400) {
          alert('UNKNOWN ERROR')
        }
        if (err.response.data.code === 4003) {
          alert(err.response.data.msg)
        }
      })
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getBooks () {
      getBooks()
    }
  }
}
</script>

<style scoped>

</style>
