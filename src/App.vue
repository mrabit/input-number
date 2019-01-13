<template>
  <div id="app">
    <div style="height: 350px;width: 100%;"></div>
    <custom-input v-if="showInput" v-model="inputMoney"></custom-input>
    <div>
      {{inputMoney}}
      <button @click="inputMoney = '55555555'">赋值</button>
      <button @click="showInput = !showInput">显隐</button>
    </div>
    <custom-input v-if="showInput2" v-model="inputMoney2"></custom-input>
    <div>
      {{inputMoney2}}
      <button @click="inputMoney2 = '55555555'">赋值</button>
      <button @click="showInput2 = !showInput2">显隐</button>
    </div>
  </div>
</template>

<script>
// import keyboard from "./components/customInput/keyboard.vue";
import Vue from "vue";
export default {
  name: "app",
  data() {
    return {
      inputMoney: "1234",
      inputMoney2: "1234",
      showInput: true,
      showInput2: true
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
