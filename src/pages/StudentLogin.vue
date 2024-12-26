<template>
  <div id="app">
    <div class="formBox">
      <p><input id="" class="inputBox" name="" placeholder="账号/学号" type="text"></p>
      <p><input id="" class="inputBox" name="" placeholder="密码" type="password"></p>
      <a class="inputBox" href="">找回密码</a>
      <div class="inbox">
        <nav class="box1">
          <button @click="login">登录</button>
          <button @click="register">注册</button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentLogin",
  computed: {},
  methods: {
    register() {
      // 执行一些逻辑后...
      this.$router.push({name: 'RegisterLogin'});
    },
    login() {
      this.$router.push({name: 'VotingSystem'})
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