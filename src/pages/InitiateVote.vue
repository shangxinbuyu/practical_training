<template>
  <el-main class="page">
    <el-table :data="voteInfo">
      <el-table-column label="选择" width="140">
        <input type="checkbox">
      </el-table-column>
      <el-table-column label="日期" prop="date" width="140">
      </el-table-column>
      <el-table-column label="投票" prop="title" width="120">
      </el-table-column>
      <el-table-column label="发起人" prop="sponsor" width="120">
      </el-table-column>
      <el-table-column label="状态" prop="state" width="120">
      </el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" @click="dialogFormVisible = true">修改</el-button>
        <el-button type="danger">删除</el-button>
      </el-table-column>
    </el-table>
    
    <el-dialog :visible.sync="dialogFormVisible" title="修改">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label="修改状态">
          <el-select v-model="form.region" placeholder="选择状态">
            <el-option label="投票中" value="shanghai"></el-option>
            <el-option label="投票截至" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-main>
</template>

<script>
export default {
  name: "InitiateVote",
  data() {
    return {
      voteInfo: [
        {
          date: '2016-05-02',
          title: '王小虎',
          sponsor: '赵六',
          state:'投票中'
        }, {
          date: '2016-05-04',
          title: '王小虎',
          sponsor: '王五',
          state:'投票中'
        }, {
          date: '2016-05-01',
          title: '王小虎',
          sponsor: '李四',
          state:'投票中'
        }, {
          date: '2016-05-03',
          title: '王小虎',
          sponsor: '张三',
          state:'投票中'
        }
      ],
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  }
}
</script>

<style scoped>

</style>