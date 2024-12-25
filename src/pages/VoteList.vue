<template>
  <el-main class="page">
    <el-table :data="voteInfo">
      <el-table-column  label="选择" width="140">
        <input type="checkbox">
      </el-table-column>
      <el-table-column  label="日期" prop="date" width="140">
      </el-table-column>
      <el-table-column label="投票" prop="title" width="120">
      </el-table-column>
      <el-table-column label="发起人" prop="sponsor">
      </el-table-column>
      <el-table-column label="操作">
        <el-button type="primary">修改</el-button>
        <el-button type="danger">删除</el-button>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
export default {
  name: "VoteList",
  data() {
    return {
      voteInfo: [
        {
          date: '2016-05-02',
          title: '王小虎',
          sponsor: '赵六'
        }, {
          date: '2016-05-04',
          title: '王小虎',
          sponsor: '王五'
        }, {
          date: '2016-05-01',
          title: '王小虎',
          sponsor: '李四'
        }, {
          date: '2016-05-03',
          title: '王小虎',
          sponsor: '张三'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>