<template>
  <NumberKeyboard
    class="custim-key-board"
    ref="key-board"
    :style="{bottom: value.show?0:keyBoardHeight}"
    :show="value.show"
    theme="custom"
    extra-key="."
    close-button-text="完成"
    :hide-on-click-outside="false"
    @close="$emit('close')"
    @input="$emit('handleClick', $event)"
    @delete="$emit('handleClickDelete')"
  />
</template>
<script>
import { NumberKeyboard } from "vant";
export default {
  data() {
    return {
      // 默认键盘位置
      keyBoardHeight: "-1000px"
    };
  },
  components: { NumberKeyboard },
  props: {
    value: {
      type: Object,
      default: _ => ({
        val: "",
        pos: null,
        show: false
      })
    }
  },
  methods: {
    getKeyBoardHeight() {
      this.keyBoardHeight = `-${
        this.$refs["key-board"]
          ? this.$refs["key-board"].$el.offsetHeight
          : 1000
      }px`;
    },
    async EventListener(e) {
      try {
        await this.isParent(e.target, [
          ...document.querySelectorAll(".input-container")
        ]);
      } catch (e) {
        this.$emit("close");
      }
    },
    isParent(obj, parentObj) {
      // debugger;
      return new Promise((resolve, reject) => {
        // 是否找到对应自定义input
        let flag = false;
        for (let i in parentObj) {
          (function(obj) {
            while (
              obj != undefined &&
              obj != null &&
              obj.tagName.toUpperCase() != "BODY" &&
              !flag
            ) {
              if (obj == parentObj[i]) {
                flag = true;
              }
              obj = obj.parentNode;
            }
          })(obj);
        }
        flag ? resolve() : reject();
      });
    }
  },
  watch: {
    "value.show": {
      deep: true,
      handler(val) {
        document.body[(val ? "add" : "remove") + "EventListener"](
          "touchstart",
          this.EventListener
        );
      }
    }
  },
  mounted() {
    this.$nextTick(_ => {
      this.getKeyBoardHeight();
    });
  }
};
</script>
<style>
.custim-key-board {
  bottom: -1000px;
  display: block !important;
}
</style>
