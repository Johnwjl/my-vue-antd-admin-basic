<template>
  <div>
    发行展示
  </div>
  <!-- <exception-page home-route="/demo" :style="`min-height: ${minHeight}`" type="403" /> -->
</template>

<script>
// import ExceptionPage from '@/components/exception/ExceptionPage'
import {mapState} from 'vuex'
export default {
  name: 'publishView',
  // components: {ExceptionPage},
  components: {},
  computed: {
    ...mapState('setting', ['pageMinHeight']),
    minHeight() {
      return this.pageMinHeight ? this.pageMinHeight + 'px' : '100vh'
    }
  }
}
</script>

<style scoped lang="less">
</style>
