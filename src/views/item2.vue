<template>
  <div class="login-container">
    <form>
      <input type="text" placeholder="Username" v-model="username"/>
      <input type="password" placeholder="Password" v-model="password"/>
      <button id="btn" @click="submitLogin">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitLogin () {
      // Code to submit login credentials and handle response
    }
  }
}
</script>

<style>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  border-radius: 10px;
}

input[type="text"], input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

  #btn {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}
</style>
