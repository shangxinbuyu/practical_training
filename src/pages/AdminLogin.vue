<template>
  <div id="app">
    <div class="formBox">
    <form action="" class="FORMF">
      <p><input type="text" name="" id="" class="kuang" placeholder="管理员账号"></p>
      <p><input type="password" name="" id="" class="kuang" placeholder="密码"></p>
      <div class="inbox">
        <nav class="box1">
          <input type="submit" value="登录" class="w">
        </nav>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.kuang {
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