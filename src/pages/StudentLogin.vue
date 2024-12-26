<template>
  <div id="app">
    <div class="formBox">
    <form action="" class="FORMF">
      <p><input type="text" name="" id="" class="kuang" placeholder="账号/学号"></p>
      <p><input type="password" name="" id="" class="kuang" placeholder="密码"></p>
      <a href="" class="kuang">找回密码</a>
      <div class="inbox">
        <nav class="box1">
          <input type="submit" value="登录" class="w">&nbsp;&nbsp;
         <input type="button" value="注册" class="w2" @click="clickseach">
        </nav>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  methods:{
   clickseach() {
    // 执行一些逻辑后...
    this.$router.push({ path: '/registerlogin' });
  }
}

}
</script>

<style scoped>
.kuang {
  text-decoration: none;
  color: rgb(115, 137, 156);
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