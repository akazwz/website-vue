<template>
  <h1>This is an Api Page</h1>
  <div>
    <form action="">
      <label> username:
        <input type="text" accept="text/strings" placeholder="username">
      </label>
      <label> password:
        <input type="password" accept="text/strings" placeholder="password">
      </label>
      <button @click="login">LOGIN</button>
    </form>
  </div>
</template>

<script>
import { createToken } from '../request/api'

export default {
  name: 'Api',
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    login () {
      const login = {
        username: 'zhaowenzhuo',
        password: '123456'
      }
      createToken(login).then(res => {
        alert(res)
      }).catch(res => {
        alert('error' + res)
      })
    }
  }
}
</script>

<style scoped>

</style>
