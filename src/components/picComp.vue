<template>
  <img class="wrapper" :style="setStyle" :src="picUrl" />
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    width: {
      type: [String, Number],
    },
    height: {
      type: [String, Number],
    },
    data: {
      type: String,
      // {url:'fj01.png'}
    },
  },
  data() {
    return {
      dataString: JSON.parse(this.data).filename,
    };
  },
  computed: {
    picUrl() {
      return require("../assets/" + this.dataString);
    },
    setStyle() {
      return {
        width: this.width + "px",
        height: this.height + "px",
      };
    },
  },
};
</script>

<style scoped></style>
