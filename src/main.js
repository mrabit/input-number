import Vue from "vue";
import App from "./App.vue";
import "vant/lib/index.css";
import customInput from "./components/customInput";

Vue.use(customInput);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
