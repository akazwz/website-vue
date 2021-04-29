<template>
  <h1>This is an Register Page</h1>
  <div>
    <el-form>
      <el-form-item>
        <el-input placeholder="username" v-model="registerForm.username"/>
      </el-form-item>

      <el-form-item>
        <el-input placeholder="password" v-model="registerForm.password"/>
      </el-form-item>

      <el-form-item>
          <upload-file/>
      </el-form-item>

    </el-form>
    <button @click="register">LOGIN</button>
  </div>
</template>

<script lang="ts">
import { createToken } from '@/request/api'
import { reactive, onMounted, defineComponent, toRefs } from 'vue'
import UploadFile from '@/components/UploadFile.vue'

export default defineComponent({
  name: 'Register',
  components: { UploadFile },
  'setup' () {
    const state = reactive({
      registerForm: {
        username: 'zhaowenzhuo',
        password: '123456'
      },
      books: []
    })

    onMounted(() => {
      console.log('123')
    })

    const register = () => {
      const data = {
        username: state.registerForm.username,
        password: state.registerForm.password
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
      register
    }
  }
})
</script>

<style scoped>

</style>
