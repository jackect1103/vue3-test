<template>
  <div>测试axios -- 取消重复请求</div>
  <div>查看控制台Netword</div>
  <div>改变请求速度</div>
</template>

<script>
import flopApi from '@/api/flopApi';

export default {
  name: 'TestCancelToken',
  setup() {
    flopApi.rollCardActivity()
    setTimeout(() => {
      flopApi.rollCardActivity()
    }, 500)
    setTimeout(() => {
      flopApi.rollCardActivity()
    }, 700)
  }
}
</script>
<style lang='' scoped>
</style>