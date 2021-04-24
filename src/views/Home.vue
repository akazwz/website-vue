<template>
  <div class="home">
    <p>{{ $t('home.test') }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
  }
})
export default class Home extends Vue {}
</script>
