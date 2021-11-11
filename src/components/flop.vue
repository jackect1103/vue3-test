<template>
  <div class="bg">
    <div class="container">
      <div class="roll-card-wrapper" id="container">
        <div class="roll-card-container" v-for="item in pictureArr" :key="item.id">
          <div class="roll-card-box">
            <!-- 正面 奖品图片-->
            <div class="card-face card-front">
              <img :src="item.src" />
            </div>
            <!-- 反面  -->
            <div class="card-face card-back">
              <img :src="card_background_pic" />
            </div>
          </div>
        </div>
      </div>

      <div class="roll-card-playBtn-wrap">
        <div id="roll-card-playBtn" @click="playBtn">
          <p>开始游戏</p>
          <p>（消耗1希币）</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { pictureArr as arr, card_background_pic as cardPic } from '@/contants/pictureConst.js';
import gatherEffect from '@/feature/gatherEffect.js';


export default {
  name: 'RollCard',
  setup() {
    console.log('*********************', arr)
    
    let pictureArr = reactive(arr);
    let card_background_pic = ref(cardPic);

    function playBtn() {
      gatherEffect()
    }

    return {
      pictureArr,
      card_background_pic,
      playBtn
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg {
  background: url("http://fandow.oss-cdn.mu-ke.com/club/activity/20211106/20211106044607_92231.jpg")
    no-repeat center 0px;
  background-size: cover;
}
.container {
  display: inline-block;
  width: 100%;
  margin-top: 245px;
  padding-bottom: 50px;

  .roll-card-wrapper {
    width: 100%;
    height: 340px;
    margin: 25px 0 39.7px;
    padding: 0 23px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    .roll-card-container,
    .roll-card-box {
      width: 100px;
      height: 150px;
      margin: 12px;
      margin-left: 0;
      border-radius: 10px;
      position: relative;
      transform: perspective(1000px);
      transform-style: preserve-3d;

      &:nth-child(3n) {
        margin-right: 0px;
      }
    }

    .roll-card-container {
      .card-front {
        transform: rotateY(0deg);
      }
      .card-back {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        cursor: pointer;
        backface-visibility: hidden;

        transform: rotateY(180deg);
      }

      .card-front,
      .card-back {
        position: absolute;
        top: 0;
        left: 0;
        backface-visibility: hidden;

        transition: 0.6s;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .roll-card-box {
      margin: 0;
    }
  }

  /* 开始按钮 */
  .roll-card-playBtn-wrap {
    width: 100%;
    display: flex;
    /* Safari */
    justify-content: center;
    #roll-card-playBtn {
      width: 202.5px;
      border-radius: 15px;
      display: flex;
      /* Safari */
      flex-direction: column;
      align-items: center;
      color: #fff;
      border: none;
      background: url("http://fandow.oss-cdn.mu-ke.com/club/goods/detail/20211105/20211105130922_32617.png")
        no-repeat center 0px;
      background-position: center 0px;
      background-size: cover;
      padding-top: 6.1px;
      padding-bottom: 10.1px;
      box-sizing: border-box;
      p {
        margin: 0px;
        &:nth-child(1) {
          font-size: 22px;
        }

        &:nth-child(2) {
          font-size: 12px;
        }
      }
    }
  }
}

@keyframes flipAnimation {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(-180deg);
  }
}

@keyframes flipAnimationReverse {
  from {
    transform: rotateY(-180deg);
  }

  to {
    transform: rotateY(0deg);
  }
}
</style>
