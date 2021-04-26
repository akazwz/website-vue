<template>
  <h1>This is an Api Page</h1>
  <div>
    <el-form>
      <el-form-item>
        <el-input placeholder="username" v-model="loginForm.username"/>
      </el-form-item>

      <el-form-item>
        <el-input placeholder="password" v-model="loginForm.password"/>
      </el-form-item>

    </el-form>
    <button @click="login">LOGIN</button>
  </div>
</template>

<script lang="ts">
import { createToken } from '@/request/api'
import { reactive, onMounted, defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'Login',
  components: {},
  'setup' () {
    const state = reactive({
      loginForm: {
        username: 'zhaowenzhuo',
        password: '123456'
      },
      books: []
    })

    onMounted(() => {
      console.log('123')
    })

    const login = () => {
      const data = {
        username: state.loginForm.username,
        password: state.loginForm.password
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
    }

    return {
      ...toRefs(state),
      login
    }
  }
})
</script>

<style scoped>

</style>
