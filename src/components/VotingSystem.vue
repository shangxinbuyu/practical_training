<template>
  <el-container class="container">
    <el-header class="header" style="height: 80px;">
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


import Main from "@/components/Main";
import Nav from "@/components/Nav.vue";

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
  /*height: 1200px;*/
  border: 1px solid #eee;
}

.header {
  line-height: 80px;
  text-align: left;
  font-size: 25px;
  background-color: #09d9ed;
  border-radius: 8px;
  
}

</style>