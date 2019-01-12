import Vue from "vue";
import App from "./App.vue";
// import Vant from "vant";
import "vant/lib/index.css";
import customInput from "./components/customInput";

// import ProtocolPopup from "./components/ProtocolPopup";
// Vue.use(Vant);
Vue.use(customInput);
// Vue.use(ProtocolPopup);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
