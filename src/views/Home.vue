<template>
  <p>{{ $t('home.home') }}</p>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
  }
})
export default class Home extends Vue {}
</script>
