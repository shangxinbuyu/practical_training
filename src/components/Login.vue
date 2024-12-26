<template>
  <div id="app" class="login">
    <div class="formBox">
      <form action="" class="FORMF">
        <br>
        <router-link id="title" to="StudentLogin">学生登录</router-link>
        <router-link id="title" to="AdminLogin">管理员登录</router-link>
        <div>
          <router-view></router-view>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
}
</script>

<style scoped>
.login {
  position: relative;
  padding: 40vh;
  background-image: linear-gradient(125deg, #ff0000, #4562e0, #da6262, #ffbb00);
  background-size: 250%;
  animation: bgmove 10s infinite;
}

@keyframes bgmove {
  0% {
    background-position: 0% 50%;
  }
  
  50% {
    background-position: 100% 50%;
  }
  
  100% {
    background-position: 0% 50%;
  }
}



.formBox {
  width: 460px;
  height: 350px;
  background-color: rgba(0, 0, 0, 0);
  background-color: aliceblue;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.6;
}

#title {
  text-decoration: none;
  text-align: center;
  color: black;
  margin-top: 40px;
  margin-left: 100px;
  font-weight: 800;
}

#title.router-link-active {
  color: aquamarine;
  
}

.inbox {
  width: 350px;
  height: 35px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.w, .w2 {
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