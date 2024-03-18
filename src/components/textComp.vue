<template>
  <div class="wrapper" :style="setStyle">
    <span>{{ data }}</span>
  </div>
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
    color:{
        type:[String]
    },
    fontSize:{
        type:[String,Number]
    },
    data:{
        type:String
    },
  },
  data(){
    return {

    };
  },
  computed:{
    setStyle(){
        return {
            width:this.width+'px',
            height:this.height+'px',
            fontSize:this.fontSize+'px',
            color:this.color
        }
    }
  }
};
</script>

<style scoped>
</style>
