<template>
  <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
    <h1>{{$t('description')}}</h1>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'Demo',
    i18n: require('./i18n'),
    data() {
      return {
      }
    },
    computed: {
      ...mapState('setting', ['pageMinHeight']),
      desc() {
        return this.$t('description')
      }
    }
  }
</script>

<style scoped lang="less">
  @import "index";
  .new-page {
      display: flex;
      justify-content: center;
      align-items: center;
  }
</style>