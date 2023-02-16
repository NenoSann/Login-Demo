<script setup>
import { computed } from '@vue/reactivity';
import { reactive, ref } from 'vue';
let userName = ref('');
let userEmail = ref('');
let userPhone = ref('');

const info = computed(() => {
  return {
    "userName": userName.value,
    "userEmail": userEmail.value,
    "userPhone": userPhone.value,
  }
})


const throttle = (func, delay) => {
  let timer = null;
  if (timer) {
    return
  }
  timer = setTimeout(() => {
    func();
    timer = null;
  }, delay)
};

var xhr = new XMLHttpRequest();

function submit() {

  xhr.open('POST', 'http://localhost:3000');
  xhr.setRequestHeader("Content-Type", "application/json");
  console.log('Sending POST');
  xhr.onload = () => console.log(xhr.status);
  xhr.send(JSON.stringify(info.value));
}

</script>

<template>
  <div class="login">
    <h1 class="title">Welcome</h1>
    <div class="form">
      <div class="tab">
        <label for="uerName">YourName:</label>
        <input v-model="userName" type="text" class="text-input">
      </div>
      <div class="tab">
        <label for="userEmail">YourEmail:</label>
        <input v-model="userEmail" type="text" class="text-input">
      </div>
      <div class="tab">
        <label for="uerPhone">YourPhone:</label>
        <input v-model="userPhone" type="text" class="text-input">
      </div>
    </div>
    <button class="submit-button" @click="throttle(submit, 600)">
      Sign Up
    </button>
  </div>
  <h2>
    {{ userName }}
</h2>
</template>

<style scoped lang="scss">
.form {
  width: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tab {
  margin: 10px;
  white-space: nowrap;
  width: min-content;
}

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min-content;
  margin: auto;
  padding: 20px;
  box-shadow: 0px 0px 14px -2px rgba(17, 22, 23, 0.77);
}

.text-input {
  border-radius: 3px;
  border: 2px solid #e9ecef;
  background-color: #e9ecef;
}

.text-input {
  margin-left: 10px;
}

.submit-button {
  padding: 10px 40px;
  margin-top: 10px;
  border-radius: 20px;
  color: #f1f3f5;
  background-color: #1c7ed6;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: #1864ab;
  }

  &:active {
    transform: scale(1.1);
  }

  transition: .3s all ease-in-out;
}
</style>
