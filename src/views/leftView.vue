<template>
  <div class="wrapper">
    <div
      class="menuItem"
      :data-type="item.type"
      :data-name="item.name"
      draggable="true"
      @dragstart="dragStart"
      v-for="(item, index) in menus"
      :key="index"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import menus from "./menuList";
export default {
  data() {
    return {
      menus: menus,
    };
  },
  methods: {
    dragStart(e) {
        let info={
            name:e.target.getAttribute('data-name'),
            type:e.target.getAttribute('data-type')
        }
        e.dataTransfer.setData('info',JSON.stringify(info))
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 243px;
  padding: 8px;
  .menuItem {
    background: #eee;
    width: 100px;
    height: 100px;
    float: left;
    margin: 10px;
    text-align: center;
    line-height: 100px;
    cursor: pointer;
  }
}
</style>
