<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'


</script>

<template>
  <div class="login">
    <h1 class="header">Welcome Here</h1>
    <form id="input">
      YourName: <input type="text" id="name"> <br>
      YourEmail: <input type="mail" id="mail"> <br>
      PassWord: <input type="password" id="password">
    </form>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}


#input {
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


.header {
  margin: 40px 40px 40px 40px;
  text-align: center;
}
</style>
