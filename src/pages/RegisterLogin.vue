<template>
  <div id="app">
    <h2>注册</h2>
    <div class="formBox">
      <p><input class="inputBox" placeholder="请输入用户账号" required type="text"></p>
      <p><input v-model="pwd1" class="inputBox" placeholder="密码" type="password"></p>
      <p><input v-model="pwd2" class="inputBox" placeholder="请再次输入密码" type="password"></p>
      <div class="inbox">
        <nav class="box1">
          <button @click="login">注册</button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pwd1: '',
      pwd2: ''
    }
  },
  methods: {
    
    login() {
      if (this.pwd1 === this.pwd2) {
        // 密码一致，可以进行下一步操作
        console.log('密码一致');
        
        // 这里可以添加其他逻辑，例如发送请求到服务器进行注册等
      } else {
        // 密码不一致，提示用户
        return alert('两次输入的密码不一致，请重新输入');
      }
    }
    
    
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
}

.inputBox {
  margin-top: 15px;
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
  margin-top: 20px;
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