<template>
  <div id="app">
    <div class="formBox">
      <p><input id="" class="inputBox" name="" placeholder="管理员账号" type="text"></p>
      <p><input id="" class="inputBox" name="" placeholder="密码" type="password"></p>
      <div class="inbox">
        <nav class="box1">
          <input class="w" type="submit" value="登录">
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminLogin",
  
}
</script>

<style scoped>

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

.w {
  margin-top: 85px;
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