<template>
  <div class="input-container">
    <div class="input" @click="$emit('handleClickOpen')" ref="input">
      <span class="placeholder" v-show="!val" ref="placeholder">{{placeholder}}</span>
      <span class="gb" v-show="pos === -1"></span>
      <template v-for="(item,index) in val">
        <span :class="{gb:index===pos}" @click.stop="$emit('handleClickOpen', index)">{{item}}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "custom-input",
  props: {
    val: {
      type: String,
      default: ""
    },
    pos: {
      type: Number,
      default: null
    },
    show: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "placeholder"
    }
  }
};
</script>
<style lang="less" scoped>
.input-container {
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  overflow: hidden;
  // position: relative;
  // border-bottom: initial;
  // &::after {
  //   content: " ";
  //   position: absolute;
  //   pointer-events: none;
  //   -webkit-box-sizing: border-box;
  //   box-sizing: border-box;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   -webkit-transform: scaleY(0.5);
  //   transform: scaleY(0.5);
  //   border-bottom: 1px solid #eee;
  // }
  .input {
    width: 100%;
    padding-left: 8px;
    line-height: 35px;
    height: 35px;
    font-size: 30px;
    font-family: DINAlternate-Bold;
    font-weight: bold;
    flex: auto;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    .placeholder {
      position: absolute;
      left: 8px;
      color: #bccad8;
      font-size: 18px;
      font-weight: initial;
    }
    span {
      display: block;
    }
    .gb {
      position: relative;
      height: 35px;
      &::after {
        content: "";
        animation: blink 1s infinite steps(1, start);
        position: absolute;
        width: 2px;
        height: 30px;
        right: 0;
        top: 2.5px;
        background: rgb(0, 53, 237);
        border-radius: 2px;
      }
    }
  }
}
@keyframes blink {
  0%,
  100% {
    background: transparent;
  }
  50% {
    background: rgb(0, 53, 237);
  }
}
</style>