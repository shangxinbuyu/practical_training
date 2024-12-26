<template>
  <div id="app">

    <h2>注册</h2>
    <div class="formBox">
      <form action="" class="FORMF">
        <p><input type="text" class="kuang0" placeholder="请输入用户账号" required></p>
        <p><input type="password" class="kuang1" placeholder="密码" v-model="pwd1"></p>
        <p><input type="password" class="kuang2" placeholder="请再次输入密码" v-model="pwd2"></p>
        <div class="inbox">
          <nav class="box1">
            <input type="button" value="注册" class="w" @click="login">
          </nav>
        </div>
      </form>
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

.kuang0,
.kuang1,
.kuang2 {
  width: 350px;
  height: 35px;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.tatle {
  text-align: center;
  color: rgb(0, 136, 255);
  margin-top: 40px;
  margin-left: 100px;
  font-weight: 800;
}

.inbox {
  width: 350px;
  height: 35px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.w,
.w2 {
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