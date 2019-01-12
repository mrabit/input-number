<template>
  <div id="app">
    <!-- <div id="app"> -->
    <!-- <div class="input-container">
        <div class="input" @click="handleClickOpen">
          <span class="placeholder" v-show="!value">placeholder</span>
          <span class="gb" v-if="pos === -1"></span>
          <template v-for="(item,index) in value">
            <span :class="{gb:index===pos}" @click.stop="handleClickNum(index)">{{item}}</span>
          </template>
        </div>
      </div>
    </div>
    <van-number-keyboard
      :show="show"
      extra-key="."
      close-button-text="完成"
      @input="handleClick"
      @delete="handleCLickDelete"
    />-->
    <!-- <protocolPopup></protocolPopup> -->
    <div style="height: 500px;width: 100%;"></div>
    <custom-input v-model="inputMoney"></custom-input>
    {{inputMoney}}
    <button @click="inputMoney = '5555555'">点击</button>
    <!-- <keyboard></keyboard> -->
  </div>
</template>

<script>
// import keyboard from "./components/customInput/keyboard.vue";
import Vue from "vue";
export default {
  name: "app",
  data() {
    return {
      inputMoney: "1234"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition: all 250ms;
}
</style>
