<template>
  <v-container class="login-container">
    <v-row class="justify-center">
      <v-col cols="12" sm="8" md="4">
        <v-form>
          <v-text-field label="Username" v-model="username"/>
          <v-text-field label="Password" v-model="password" type="password"/>
          <v-btn color="primary" @click="submitLogin">Login</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
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

</style>