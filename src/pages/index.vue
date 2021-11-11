<template>
  <h3>测试功能：</h3>
  <ul>
    <li @click="testBtn('progressBar')">进度条测试</li>
    <li @click="testBtn('flop')">翻牌测试</li>
    <li @click="testBtn('testCancelToken')">取消重复请求</li>
  </ul>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const route = useRoute(); // 第一步 
    const router = useRouter(); // 第一步
    console.log(route, router)
    function testBtn(type) {
      let name = '';
      switch (type) {
        case "progressBar":
          name = 'progressBar';
          break;
        case "flop":
          name = 'flop';
          break;
        case "testCancelToken":
          name = 'testCancelToken';
          break;
      }
      router.push({
        name,
        query: {
          ...route.query
        }
      })
    }

    return {
      testBtn
    }
  }
}
</script>

<style lang="scss" >
h3 {
  padding: 20px;
  background-color: #fda;
}
ul {
  li {
    font-size: 18px;
    line-height: 28px;
  }
}
</style>
