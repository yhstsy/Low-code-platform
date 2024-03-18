<template>
  <div class="wrapper">
    <headTab
      :checkIndex="checkIndex"
      @checkTabChange="checkTabChange"
    ></headTab>
    <div v-if="mycurrComp">
      <!-- 样式 -->
      <div v-if="checkIndex === 0">
        <div
          class="styleItem"
          v-for="(item, index) in mycurrComp.attribute"
          :key="index"
        >
          <span class="label">{{ item.name }}</span>
          <!-- type：input -->
          <input
            class="inputStyle"
            v-if="item.type === 'input'"
            @blur="updateComp"
            type="text"
            v-model="item.value"
          />
          <!-- type：color -->
          <input
            class="inputStyle"
            v-if="item.type === 'color'"
            @change="updateComp"
            type="color"
            v-model="item.value"
          />
        </div>
      </div>
      <!-- 数据 -->
      <div v-if="checkIndex === 1">
        <textarea @change="updateComp" class="dataBox" v-model="dataStr" />
      </div>
    </div>
    <div style="padding: 15px" v-else>当前没有正在编辑的组件</div>
  </div>
</template>

<script>
import headTab from "./comps/headTab";
import getComponent from "../templates/index";
import { mountedComponent } from "@/utils";
export default {
  data() {
    return {
      checkIndex: 0,
      dataStr: "",
    };
  },
  props: {
    mycurrComp: {
      type: Object,
    },
  },
  components: {
    headTab,
  },
  methods: {
    checkTabChange(index) {
      this.checkIndex = index;
    },
    // 更新组件
    updateComp() {
      // 1. 获取组件数据
      let component = getComponent(
        this.mycurrComp.info,
        this.mycurrComp.attribute,
        this.dataStr
      );
      // 2. 设置组件的位置
      component.position = this.mycurrComp.position;
      // 3. 重新挂载组件
      mountedComponent(component);
      this.$emit('updateComp',component)
    },
  },
  watch: {
    mycurrComp(val) {
      this.dataStr = JSON.stringify(val.data);
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 350px;
  .styleItem {
    display: flex;
    margin: 10px;
    .label {
      display: inline-block;
      width: 80px;
    }
    .inputStyle {
      flex: 1 0;
    }
  }
  .dataBox {
    min-height: 300px;
    margin: 15px;
    width: 90%;
  }
}
</style>
