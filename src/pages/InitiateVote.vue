<template>
  <el-main class="page">
    <el-row>
      <el-input v-model="likeInput" placeholder="请输入内容"></el-input>
      <el-button plain @click="like">搜索</el-button>
      
      <el-button @click="createVote">创建投票</el-button>
    
    </el-row>
    <el-table :data="voteInfo">
      <el-table-column label="选择" width="140">
        <input type="checkbox">
      </el-table-column>
      <el-table-column label="ID" prop="id" width="140">
      </el-table-column>
      <el-table-column label="日期" prop="publishTime" width="140">
      </el-table-column>
      <el-table-column label="投票项目" prop="title" width="120">
      </el-table-column>
      <el-table-column label="发起人" prop="publishBy" width="120">
      </el-table-column>
      <el-table-column label="状态" prop="state" width="120">
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button size="small" type="text" @click="edit(scope.row)">编辑</el-button>
          <el-button size="small" type="text" @click="deleteById(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    
    <el-dialog :visible.sync="changeDialogFormVisible" title="修改">
      <el-form :model="changeForm">
        <el-form-item :label-width="formLabelWidth" label="修改投票状态">
          <el-select v-model="changeForm.state" :placeholder="row.state">
            <el-option label="投票中" value="投票中"></el-option>
            <el-option label="投票截至" value="投票截至"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="修改投票项目">
          <el-input v-model="changeForm.title" placeholder="请输入内容" style="width: 218px"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogSelection(0)">取 消</el-button>
        <el-button type="primary" @click="dialogSelection(1)">确 定</el-button>
      </div>
    </el-dialog>
    
    <el-dialog :visible.sync="createDialogFormVisible" title="创建投票">
      <el-form :model="changeForm">
        <el-form-item :label-width="formLabelWidth" label="投票项目">
          <el-input placeholder="请输入投票项目" v-model="createVoteForm.title"></el-input>
        </el-form-item>
      </el-form>
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
      changeDialogFormVisible: false,
      createDialogFormVisible: false,
      // 表单收集的收集
      changeForm: {
        state: '',
        title: ''
      },
      createVoteForm: {},
      // 表单宽度
      formLabelWidth: '120px',
      // 当前操作的
      row: {},
      // url
      url: 'http://localhost:8080/InitiateVote',
      likeInput: ''
    }
  },
  methods: {
    createVote() {
      this.createDialogFormVisible = true;
    },
    // 点击修改按钮
    edit(row) {
      this.changeDialogFormVisible = true
      this.row = row
      this.changeForm.state = row.state
      this.changeForm.title = row.title
    },
    // 退出表单
    dialogSelection(value) {
      this.changeDialogFormVisible = false
      if (!value) {
        return
      }
      
      if (this.row.title === this.changeForm.title && this.row.state === this.changeForm.state) {
        return;
      }
      
      console.log("发送请求")
      axios({
        method: 'POST',
        url: `${this.url}/change`,
        data: {
          id: this.row.id,
          state: this.changeForm.state || this.row.state,
          title: this.changeForm.title || this.row.title
        }
      }).then(
          response => {
            if (response.data.code === 200) {
              this.getVoteInfo()
            }
          },
          error => {
            alert(error.message)
          }
      )
    },
    getVoteInfo() {
      axios({
        method: 'GET',
        url: `${this.url}/list`,
      }).then(
          response => {
            this.format(response.data.data)
          },
          error => {
            alert(error.message)
          }
      )
    },
    like() {
      if (this.likeInput.length < 1) {
        this.getVoteInfo()
        return
      }
      axios({
        method: 'GET',
        url: `${this.url}/like`,
        params: {
          like: this.likeInput
        }
      }).then(
          response => {
            this.format(response.data.data)
          },
          error => {
            alert(error.message)
          }
      )
    },
    format(data) {
      this.voteInfo = data.map(item => {
        item.publishTime = dayjs(item.publishTime).format('YY-MM-DD HH:mm')
        return item
      })
    },
    deleteById(id) {
      axios({
        method: 'GET',
        url: `${this.url}/delete`,
        params: {
          id
        }
      }).then(
          () => {
            this.getVoteInfo()
          },
          error => {
            alert(error.message)
          }
      )
    }
  },
  mounted() {
    this.getVoteInfo()
  }
}
</script>

<style scoped>

.el-input {
  width: 200px;
}
</style>