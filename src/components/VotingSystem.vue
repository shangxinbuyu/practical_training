<template>
  <el-container class="container">
    <el-header class="header" style="height: 120px;">
      <h1>投票系统</h1>
    </el-header>
    <el-container>
      <el-aside width="300px">
        <Nav/>
      </el-aside>
      <el-main>
        <Main/>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import Nav from "@/components/Nav.vue";
import Main from "@/components/Main.vue";

export default {
  name: "VotingSystem",
  components: {
    Main,
    Nav
  }
}
</script>

<style scoped>
.container {
  height: 700px;
  border: 1px solid #eee;
}

.header {
  line-height: 30px;
  text-align: center;
  font-size: 25px;
  background-color: #dddddd
}

</style>