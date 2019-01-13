<template>
  <div id="app">
    <div style="height: 340px;width: 100%;"></div>
    <custom-input
      v-if="showInput"
      v-model="inputMoney"
      placeholder="最大值888.88,保留三位小数"
      max="888.88"
      :toFixed="3"
    ></custom-input>
    <div>
      {{inputMoney}}
      <button @click="inputMoney = '55555555'">赋值</button>
      <button @click="showInput = !showInput">显隐</button>
    </div>
    <custom-input
      v-if="showInput2"
      v-model="inputMoney2"
      placeholder="最大值99999.99,保留两位小数(默认)"
      max="99999.99"
    ></custom-input>
    <div>
      {{inputMoney2}}
      <button @click="inputMoney2 = '55555555'">赋值</button>
      <button @click="showInput2 = !showInput2">显隐</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "app",
  data() {
    return {
      inputMoney: "",
      inputMoney2: "",
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
