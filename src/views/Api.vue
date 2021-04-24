<template>
  <h1>This is an Api Page</h1>
  <div>
    <button @click="login">LOGIN</button>
    <button @click="getBooks">GET_BOOKS</button>
  </div>
</template>

<script>
import { createToken, getBooks } from '../request/api'

export default {
  name: 'Api',
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data () {
    return {
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    login () {
      const data = {
        username: 'zhaowenzhuo',
        password: '123456'
      }
      createToken(data)
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
