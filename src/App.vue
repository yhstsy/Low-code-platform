<template>
  <div id="app">
    <head-view></head-view>
    <div class="content-box">
      <left-view></left-view>
      <center-view :mycurrComp="mycurrComp" @currComp="currComp"></center-view>
      <right-view
        @updateComp="updateComp"
        :mycurrComp="mycurrComp"
      ></right-view>
    </div>
  </div>
</template>

<script>
import headView from "./views/headView.vue";
import centerView from "./views/centerView.vue";
import leftView from "./views/leftView.vue";
import rightView from "./views/rightView.vue";
export default {
  name: "App",
  components: {
    headView,
    centerView,
    leftView,
    rightView,
  },
  data() {
    return {
      mycurrComp: null,
    };
  },
  methods: {
    currComp(comp) {
      this.mycurrComp = comp;
    },
    updateComp(comp){
      this.mycurrComp=comp
    }
  },
};
</script>

<style lang="less">
.content-box {
  display: flex;
  height: calc(100vh - 80px);
}
</style>
