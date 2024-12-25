<template>
  <el-main class="page">
    <el-table :data="voteInfo">
      <el-table-column label="选择" width="140">
        <input type="checkbox">
      </el-table-column>
      <el-table-column label="ID" prop="id" width="140">
      </el-table-column>
      <el-table-column label="日期" prop="publishTime" width="140">
      </el-table-column>
      <el-table-column label="投票" prop="title" width="120">
      </el-table-column>
      <el-table-column label="发起人" prop="publishBy" width="120">
      </el-table-column>
      <el-table-column label="状态" prop="state" width="120">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="text" @click="handleClick(scope.row)">编辑</el-button>
          <el-button size="small" type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    
    <el-dialog :visible.sync="dialogFormVisible" title="修改">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label="修改投票">
          <el-select v-model="form.region" :placeholder="row.state">
            <el-option label="投票中" value="投票中"></el-option>
            <el-option label="投票截至" value="投票截至"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogSelection(0)">取 消</el-button>
        <el-button type="primary" @click="dialogSelection(1)">确 定</el-button>
      </div>
    </el-dialog>
  </el-main>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";

export default {
  name: "InitiateVote",
  data() {
    return {
      // 投票列表
      voteInfo: [],
      // 控制表单是否弹出
      dialogFormVisible: false,
      // 表单收集的收集
      form: {},
      // 表单宽
      formLabelWidth: '120px',
      
      // 当前操作的
      row: {},
      
      
      
      
      url:'http://localhost:8080/InitiateVote'
    }
  },
  methods: {
    // 点击修改按钮
    handleClick(row) {
      this.dialogFormVisible = true
      this.row = row
    },
    // 退出表单
    dialogSelection(value) {
      this.dialogFormVisible = false
      if (value && this.row.state !== this.form.region && this.form.region !== undefined) {
        axios({
          method: "post",
          url: `${this.url}/change`,
          data: {
            id:this.row.id,
            state:this.form.region
          }
        }).then(
            response =>{
              if(response.data.code === 200){
                // alert("提交成功")
              }
            },
            error =>{
              alert(error.message)
            }
        )
      }
    }
  },
  mounted() {
    // this.form.region = this.row.state;
    axios({
      method: 'get',
      url: `${this.url}/list`,
    }).then(
        response => {
          this.voteInfo = response.data.data.map(item => {
            item.publishTime = dayjs(item.publishTime).format('YY-MM-DD HH:mm')
            return item
          })
          
        },
        error => {
          alert(error.message)
        }
    )
  }
}
</script>

<style scoped>

</style>