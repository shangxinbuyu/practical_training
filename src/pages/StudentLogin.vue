<template>
  <div id="app">
    <div class="formBox">
      <p><input v-model="username" class="inputBox" placeholder="账号/学号" type="text"></p>
      <p><input v-model="password" class="inputBox" placeholder="密码" type="password"></p>
      <a class="inputBox" href="">找回密码</a>
      <div class="inbox">
        <nav class="box1">
          <button type="button" @click="studentLogin">登录</button>
          <button type="button" @click="register">注册</button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StudentLogin",
  data() {
    return {
      username: "",
      password: '',
      
      url: 'http://localhost:8080/user'
    }
  },
  methods: {
    register() {
      // 执行一些逻辑后...
      // this.$router.push({name: 'RegisterLogin'});
    },
    studentLogin() {
      console.log("dl")
      axios({
        method: "POST",
        url: `${this.url}/login`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          username: this.username,
          password: this.password
        }
      }).then(
          response => {
            const data = response.data;
            console.log(data)
            if (data.code === 200) {
              document.cookie = "token=" + data.data.token;
              this.$router.push({name: 'VotingSystem'})
            }
          }
      )
    }
  }
}
</script>

<style scoped>
* {
  margin-bottom: 20px;
}

.inputBox {
  padding-left: 10px;
  margin-top: 30px;
  text-decoration: none;
  color: rgb(115, 137, 156);
  width: 350px;
  height: 35px;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.inbox {
  width: 350px;
  height: 35px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}


button {
  width: 160px;
  height: 40px;
  border-radius: 15px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.box1 {
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
</style>