<template>
  <div class="wrapper">
    <h3>我们一起学前端</h3>
    <div class="btn-box">
      <div class="btn active">预览</div>
      <div class="btn">保存</div>
      <div class="btn">发布</div>
    </div>
  </div>
</template>

<script></script>

<style lang="less" scoped>
.wrapper {
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 15px;
  .btn-box{
    display: flex;
    width: 200px;
    justify-content: space-around;
    .btn{
        background: white;
        color: #333;
        font-size: 13px;
        padding: 2px 10px;
        border-radius: 4px;
        cursor: pointer;
        &.active{
            color: white;
            background: #5794f5;
        }
    }
  }
}
</style>
