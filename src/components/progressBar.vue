<template>
  <div class="btn-container">
    <span class="btn" @click="btnHandler('start')">开始</span>
    <span class="btn" @click="btnHandler('stop')">停止</span>
    <span class="btn" @click="replay">重播</span>
  </div>

  <div class="progressBar">
    <div class="sliderBar" :class="[barStatus ? 'play' : 'pause']"></div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ProgressBar',
  setup() {

    let barStatus = ref(false)
    function btnHandler(type) {
      barStatus.value = (type === 'start');
    }

    function replay() {

    }

    return {
      barStatus,
      btnHandler,
      replay,
    }
  }
}
</script>
<style lang='scss' scoped>
.btn-container {
  display: flex;
  justify-content: space-between;
  .btn {
    display: inline-block;
    width: 150px;
    padding: 10px;
    background-color: #fda;
    text-align: center;
    border-radius: 15px;
  }
}

.progressBar {
  width: 90vw;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin: 0 auto;
  margin-top: 15px;
  overflow: hidden;
  .sliderBar {
    width: 100%;
    height: 100%;
    background-color: red;
    animation: play 3000ms linear;
  }
  /* 使animation动画启动 */
  .sliderBar.play {
    animation-play-state: running;
  }
  /* 使animation动画暂停 */
  .sliderBar.pause {
    animation-play-state: paused;
  }
}

@keyframes play {
  /* 通过transform来启用GPU加速，跳过重排重绘阶段 */
  0% {
    transform: translateX(-50%) scaleX(0); /* 用 scaleX 来代替 width */
  }

  to {
    transform: translateX(0) scaleX(1);
  }
}

@keyframes replay {
  0% {
    transform: translateX(-50%) scaleX(0);
  }

  to {
    transform: translateX(0) scaleX(1);
  }
}
</style>