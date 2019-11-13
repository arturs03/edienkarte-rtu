<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email"/>
    <br/>
    <input type="password" name="password" placeholder="password" v-model="password"/>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import authenticationService from '../services/authenticationService'

export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },

  watch: {
    email (value) {
      console.log(value)
    }
  },

  methods: {
    async register () {
      const response = await authenticationService.register({
        email: this.email,
        password: this.password
      })

      console.log(response.data)
    }
  }
}
</script>
