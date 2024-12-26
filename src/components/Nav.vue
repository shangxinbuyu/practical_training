<template>
  <el-aside style="background-color: rgb(238, 241, 246)" width="300px">
    <el-menu :default-openeds="['1', '3']">
      <router-link :to="{name: 'InitiateVote'}">
        <el-menu-item class="item" index="1-1">发起投票</el-menu-item>
      </router-link>
      <router-link :to="{name: 'VoteList'}">
        <el-menu-item class="item" index="1-2">投票列表</el-menu-item>
      </router-link>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Nav",
  
}
</script>

<style scoped>


</style>