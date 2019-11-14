<template>
  <v-layout column>
    <v-flex>
      <div class="white elevation-2">
        <v-toolbar flat dense dark class="cyan">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="px-3">
          <input type="email" name="email" placeholder="email" v-model="email" class="mb-3"/>
          <br/>
          <input type="password" name="password" placeholder="password" v-model="password" class="mb-3"/>
          <br>
          <div v-html="error"></div>
          <v-btn @click="register">
            Register
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import authenticationService from '../services/authenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  watch: {
    email (value) {
      console.log(value)
    }
  },

  methods: {
    async register () {
      try {
        await authenticationService.register({
          email: this.email,
          password: this.password
        })
        this.error = ''
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
