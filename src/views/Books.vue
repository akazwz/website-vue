<template>
  <el-table
    :data="books">
    <el-table-column prop="uuid" label="uuid"></el-table-column>
    <el-table-column prop="book_name" label="book_name"></el-table-column>
    <el-table-column prop="author" label="author"></el-table-column>
    <el-table-column prop="price" label="price"></el-table-column>
    <el-table-column prop="introduction" label="introduction"></el-table-column>
  </el-table>
  <button @click="getAllBooks">GET BOOKS</button>
</template>

<script lang="ts">
import { getBooks } from '@/request/api'
import { reactive, onMounted, defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'Books',
  components: {},
  'setup' () {
    const state = reactive({
      books: []
    })

    onMounted(() => {
      getAllBooks()
    })

    const getAllBooks = () => {
      getBooks().then((res) => {
        state.books = res.data.data.list
      })
    }

    return {
      ...toRefs(state),
      getAllBooks
    }
  }
})
</script>
<style scoped>

</style>
