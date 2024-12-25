<template>
  
  <el-container style="height: 700px; border: 1px solid #eee">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
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

</style>