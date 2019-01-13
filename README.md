# custom-input

> 基于[Vant-NumberKeyboard](https://youzan.github.io/vant/#/zh-CN/number-keyboard)的自定义数字输入框

## 效果预览

![image](https://ws2.sinaimg.cn/large/8fa21aabgy1fz5chddbzpg207s0dytrf.gif)

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

|    属性     | 说明                                      |       类型     |   默认值 |
| :---------: | ----------------------------------------- | :------------: | :------: |
|    value    | 当前输入的值                              |     String     |    无    |
| placeholder | 自定义 input 框占位符                     |     String     |    无    |
|  transform  | 是否判断自定义 input 位置被自定义键盘覆盖 |    Boolean     |  false   |
|     max     | 自定义 input 最大值设置                   | String, Number |   true   |
|   toFixed   | 小数点后保留位数                          |     Number     |  false   |

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
