<template>
  <el-aside style="background-color: rgb(238, 241, 246)" width="300px">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template v-slot:title><i class="el-icon-message"></i>导航一</template>
        <router-link to="/InitiateVote">
          <el-menu-item index="1-1" class="item">发起投票</el-menu-item>
        </router-link>
        <router-link to="/VoteList">
          <el-menu-item index="1-2" class="item">投票列表</el-menu-item>
        </router-link>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Nav",
  
}
</script>

<style scoped>
.item {
  
  font-size: 20px
}
</style>