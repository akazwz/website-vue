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

      <el-table
        :data="books">
        <el-table-column prop="uuid" label="uuid"></el-table-column>
        <el-table-column prop="book_name" label="book_name"></el-table-column>
        <el-table-column prop="author" label="author"></el-table-column>
        <el-table-column prop="price" label="price"></el-table-column>
        <el-table-column prop="introduction" label="introduction"></el-table-column>

      </el-table>
    <p>{{ $t('home.home')}}</p>
    </el-form>
    <button @click="login">LOGIN</button>
    <button @click="logout">LOGOUT</button>
    <button @click="getBooks">GET_BOOKS</button>
    <el-switch
      v-model="isEn"
      active-text="en"
      inactive-text="zh"
      @change="changeLang(isEn)">
    </el-switch>
  </div>
</template>

<script>
import { createToken, getBooks } from '@/request/api'
import router from '@/router'
import i18n from '@/languages'

export default {
  name: 'Api',
  /* eslint-disable */
  data () {
    return {
      loginForm: {
        username: 'zhaowenzhuo',
        password: '123456'
      },
      books: [],
      isEn: i18n.global.locale === 'en'
    }
  },
  beforeMount () {
    this.getBooks()
  },
  methods: {
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
    logout () {
      localStorage.removeItem('token')
      router.push('/')
    },
    getBooks () {
      getBooks().then((res) => {
        this.books = res.data.data.list
      })
    },
    changeLang (isEn) {
      if (isEn) {
        i18n.global.locale='en'
      } else {
        i18n.global.locale='zh'
      }

    }
  }
}
</script>

<style scoped>

</style>
