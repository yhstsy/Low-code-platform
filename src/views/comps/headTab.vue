<template>
  <div class="wrapper">
    <div
      class="tabItem"
      @click="checkTab(index)"
      :class="{ active: checkIndex === index }"
      v-for="(item, index) in tabList"
      :key="index"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props:{
    checkIndex:{
        type:[String,Number]
    }
  },
  data() {
    return {
      tabList: ["样式", "数据"],
      checkIndex:this.checkIndex,
    };
  },
  methods:{
    checkTab(index){
        this.checkIndex=index;
        this.$emit('checkTabChange',this.checkIndex)
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #eee;
  .tabItem {
    padding: 15px;
    cursor: pointer;
  }
  .active {
    border-bottom: 2px solid #5794f5;
  }
}
</style>
