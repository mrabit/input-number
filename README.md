# custom-input

> 基于[Vant-NumberKeyboard](https://youzan.github.io/vant/#/zh-CN/number-keyboard)的自定义数字输入框 + 数字键盘

## 问题产生背景

1. 移动端项目中需要用到数字输入框，html 自带的 input 标签设置[type=number]会默认调用系统输入法的数字键盘，可这样的话，minlength、maxlength 等属性就失效了，还无法禁止部分特殊字符的输入
2. 利用 input 自带的 change 或者 input 事件在 js 进行判断，会导致 input 内造成闪动效果，光标会默认跑到尾部（可控制光标，兼容性不是很好）
3. IOS 可利用 keypress 进行输入前的判断，Android 却不支持该事件，迫于无奈只能手动实现数字输入框 input

## 效果预览

[![image](https://ws2.sinaimg.cn/large/8fa21aabgy1fz5chddbzpg207s0dytrf.gif)](https://ws2.sinaimg.cn/large/8fa21aabgy1fz5chddbzpg207s0dytrf.gif)

## 模拟光标实现原理

[![image](https://wx2.sinaimg.cn/large/8fa21aabgy1fz5dkhkkl6g20fr05le81.gif)](https://wx2.sinaimg.cn/large/8fa21aabgy1fz5dkhkkl6g20fr05le81.gif)

```css
.cursor {
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
@keyframes blink {
  0%,
  100% {
    background: transparent;
  }
  50% {
    background: rgb(0, 53, 237);
  }
}
```

## use 使用

在 main.js 中引入组件

```javascript
import customInput from "./components/customInput";
Vue.use(customInput);
```

接下来，你就可以在页面中使用 custom-input 了

```html
<template>
  <custom-input
    v-model="inputMoney"
    placeholder="最大值888.88,保留三位小数"
    max="888.88"
    :toFixed="3"
  ></custom-input>
</template>
<script>
  export default {
    data() {
      return {
        inputMoney: ""
      };
    }
  };
</script>
```

|    属性     | 说明                                      |       类型     |     默认值    |
| :---------: | ----------------------------------------- | :------------: | :-----------: |
|    value    | 当前输入的值                              |     String     |       -       |
| placeholder | 自定义 input 框占位符                     |     String     |  placeholder  |
|  transform  | 是否判断自定义 input 位置被自定义键盘覆盖 |    Boolean     |     true      |
|     max     | 自定义 input 最大值设置                   | String, Number | 9999999999.99 |
|   toFixed   | 小数点后保留位数                          |     Number     |       2       |

|      事件      | 说明               | 返回值 |
| :------------: | ------------------ | :----: |
| onKeyboardOpen | 自定义键盘展开事件 |  data  |
|     close      | 自定义键盘关闭事件 |  data  |
|     input      | 当前输入值改变时间 |  data  |

### 文件目录

```
.
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
└── src
    ├── App.vue // demo
    ├── components
    │   └── customInput // 自定义数字输入框组件
    │       ├── index.js
    │       ├── input.vue
    │       └── keyboard.vue
    └── main.js
```
