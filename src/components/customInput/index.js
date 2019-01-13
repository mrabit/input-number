import input from "./input.vue";

var install = function install(Vue) {
  Vue.component("custom-input", input);
};

export default {
  install: install
};
