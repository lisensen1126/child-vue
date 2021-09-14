<template>
  <div class="layoutApp">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {},
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {

  }
}
</script>

<style scoped>
.layoutApp{
    width: 220px;
    height: 100vh;
}
.layoutApp >>> ul{
    height: 100%;
}
</style>
