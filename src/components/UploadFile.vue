<template>
    <el-upload
      class="avatar-uploader"
      action=""
      :http-request="uploadFile"
      :before-upload="checkFile"
      :show-file-list="false"
    >
      <img v-if="imageUrl" :src="imageUrl" alt="avatar" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
</template>

<script lang="ts">
import { fileUpload } from '@/request/api.ts'
import { AxiosResponse } from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UploadFile',
  data () {
    return {
      imageUrl: ''
    }
  },
  methods: {
    checkFile (file: File) {
      const isJPG = file.type === 'image/jpeg'
      const isPng = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG && !isPng) {
        alert('image only')
      }
      if (!isLt2M) {
        alert('<2M')
      }
    },
    uploadFile (param: { file: File }) {
      const file = param.file
      const formData = new FormData()
      formData.set('file', file)
      fileUpload(formData).then((res) => {
        if (res.status !== 201) {
          alert('上传失败')
        }
        this.handleAvatarSuccess(res)
      }).catch((err) => {
        alert(err)
      })
    },
    handleAvatarSuccess (res: AxiosResponse) {
      this.imageUrl = 'http://47.96.24.50:8000/' + res.data.data.url
    }
  }
})
</script>

<style scoped>
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  width: 20%;
  height: 20%;
  min-width: 178px;
  min-height: 178px;
  overflow: hidden;
}
.avatar-uploader:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
