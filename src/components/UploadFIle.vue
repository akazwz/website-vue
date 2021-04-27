<template>
  <el-upload :http-request="uploadFile" :auto-upload="true">
    上传文件
  </el-upload>
</template>

<script lang="ts">
import { fileUpload } from '@/request/api.ts'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'UploadFIle',
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    uploadFile (file: File) {
      const formData = new FormData()
      formData.set('file', file)
      fileUpload(formData)
    }
  }
})
</script>

<style scoped>

</style>
