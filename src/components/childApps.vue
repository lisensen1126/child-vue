<template>
  <div class="childApps">
    <el-row>
      <el-button @click="toChildReact">change qiankun state</el-button>
      <el-button @click="toChildReact">跳转到/child-react</el-button>
      <el-button @click="dialogVisible=!dialogVisible">测试弹窗bug</el-button>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        :modal-append-to-body='true'
        :append-to-body='false'
        width="30%">
        <span>这是一段信息</span>
      </el-dialog>
    </el-row>
    <el-row ref='containerRef'>
      这里手动加载子应用
    </el-row>
    <p>蓝色</p>
  </div>
</template>

<script>
// import { loadMicroApp } from 'qiankun';
export default {
  data () {
    return {
      microApp:null,
      dialogVisible:false,
    }
  },
  components: {},
  computed: {},
  created () {},
  mounted () {
    // 手动在vue的页面中引入react子应用
    // this.microApp = loadMicroApp({
    //   name: 'child-react',
    //   entry: 'http://localhost:3002/',
    //   container: this.$refs.containerRef.$el,
    //   props: { str: '传给child-react的参数' },
    // });
    // console.log('手动加载子应用',this.microApp);
    // setTimeout(() => {
    //   console.log('5s之后销毁react子应用');
    //   this.microApp.unmount();
    // }, 5000);
  },
  watch: {},
  methods: {
    toChildReact(){
      console.log('跳转');
      this.$router.push('/child-react')
    },
  }
}
</script>

<style scoped >
.childApps{
  background-color: #eee;
  flex: 1;
}
.childApps >>> .el-dialog__body{
  color: red;
}
</style>
