import input from "./input.vue";
import keyboard from "./keyboard.vue";

var install = function install(Vue) {
  let opt = {
    show: false, // 显示模拟键盘
    val: "", // 模拟input的value值
    pos: null // 模拟input的光标位置
  };
  let vmKeyboard;
  let $inputContainer;
  // 自定义input组件
  Vue.component("custom-input", {
    render(h) {
      console.log(this);
      return h(input, {
        props: {
          ...opt
        },
        on: {
          handleClickOpen: function(index = opt.val.length) {
            // 当前窗口高度
            let winHeight = window.innerHeight;
            // 当前模拟input高度
            let inputHeight = $inputContainer.$el.offsetHeight;
            // 当前模拟input距离顶部高度
            let inputTop = $inputContainer.$el.offsetTop;
            // 当前模拟键盘高度
            let keyboardHeight = vmKeyboard.$el.offsetHeight;
            // 当前模拟input距离底部高度
            let inputBottom = winHeight - inputHeight - inputTop;
            inputBottom = inputBottom < 0 ? inputBottom * -1 : inputBottom;
            // 当前模拟input距离底部高度小于当前模拟键盘高度,需要滚动
            if (inputBottom < keyboardHeight) {
              $inputContainer.$parent.$el.style.transition = "all 0.3s";
              $inputContainer.$parent.$el.style.transform = `translate3d(0px, -${keyboardHeight}px, 0px)`;
            }
            opt.show = true;
            opt.pos = index - 1;
          }
        },
        ref: "input"
      });
    },
    props: {
      value: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: "placeholder"
      }
    },
    watch: {
      value(val) {
        // 外部赋值,更新当前value,并且光标放置末尾
        if (opt.val !== val) {
          opt.val = val;
          // 当前光标已展示, 赋值新光标位置
          if (opt.show) {
            opt.pos = opt.val.length - 1;
          }
        }
      }
    },
    created() {
      $inputContainer = this;
      // 赋值默认值
      opt.val = this.value;
      // 实例化自定义键盘
      vmKeyboard = new (Vue.extend(keyboard))({
        el: document.createElement("div")
      });
      document.body.appendChild(vmKeyboard.$el); // 添加到dom
      // 自定义键盘点击事件
      vmKeyboard.$on("handleClick", val => {
        let isDot = val === ".";
        // 已存在小数点
        if (opt.val.indexOf(".") >= 0 && isDot) {
          return false;
        }
        let temp = opt.val.split("");
        // 当前光标位置+1位插入值
        temp.splice(opt.pos + 1, 0, val);
        let newValue = temp.join("");

        // 判断新值大于预定值,不执行赋值操作
        if (parseFloat(newValue) > parseFloat("9999999999.99")) {
          return false;
        }
        // 不满足当前正则(禁止直接输入小数点,小数点后保留两位),不执行赋值操作
        if (!/^(([1-9]{1}\d*)|(0{1}))(\.\d{0,2})?$/.test(newValue)) {
          return false;
        }
        // 赋值,当前光标位置+1
        opt.val = newValue;
        opt.pos++;
        // 当前this为自定义input而非自定义键盘
        // v-model实现
        this.$emit("input", opt.val);
      });
      // 自定义键盘点击删除事件
      vmKeyboard.$on("handleClickDelete", _ => {
        // 当前光标位置为-1(首位), 不进行任何删除操作
        if (opt.pos < 0) return false;
        let temp = opt.val.split("");
        temp.splice(opt.pos, 1);
        // 赋值,当前光标位置-1
        opt.val = temp.join("");
        opt.pos--;
        // 当前this为自定义input而非自定义键盘
        // v-model实现
        this.$emit("input", opt.val);
      });
      // 自定义键盘点击完成事件
      vmKeyboard.$on("close", _ => {
        this.$emit("close", opt.val);
        $inputContainer.$parent.$el.style.transform = "";
        opt.show = false;
        opt.pos = null;
      });
      Object.assign(vmKeyboard, {
        value: opt
      });
    }
  });
};

export default {
  install: install
};
