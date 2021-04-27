<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h6>{{ item }}</h6>
      <a href="https://baidu.com">baidu</a>
    </el-carousel-item>
  </el-carousel>
  <p>{{ $t('main.home') }}</p>
  <div style="height: 200px">
    div
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {},
  data () {
    return {
      carouselImages: this.getCarouseImages()
    }
  },
  methods: {
    getCarouseImages (): [] {
      return []
    }
  }

})
</script>

<style lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
