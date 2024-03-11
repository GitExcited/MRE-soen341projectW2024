<template>
    <div class="container " style="margin-top: 100px;">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <h2 class="text-center" v-if="!loggedIn">Login</h2>
          <h2 class="text-center" v-if="loggedIn">Welcome! {{ username }}</h2>
          <router-link to="/home" v-if="loggedIn">Go to Home</router-link>
  
          <!-- SUBMIT METHOD -->
          <form @submit="handleSubmit" v-if="!loggedIn"> 
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input v-model="username" type="text" class="form-control" id="username" aria-describedby="usernameHelp">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input v-model="password" type="password" class="form-control" id="password">
            </div>
  
            <button type="submit" class="btn btn-primary flex">Log in</button>
            <!-- Success Message -->
            <p v-if="loggedIn">{{ message }}</p>
            <p v-if="error" class="text-danger">{{ error }}</p>
          </form>
          <br>
          <p v-if="!loggedIn">Don't have an account? Sign up instead.</p>
          <router-link to="/signup" v-if="!loggedIn">Sign Up</router-link>
        </div>
      </div>
    </div>
    </template>
  
  
  <!--! ******************** AXIOS STUFF ******************** -->
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        message: 'Go get a car!',
        loggedIn: false,
        error: '',
      };
    },
    methods: {
      async handleSubmit(e) {
        console.log(e);
        e.preventDefault();
        console.log('Form submitted!');
        this.message="Successful log in!";
        
        axios.post('http://localhost:3000/auth/login', {}, {params: {
          username: this.username,
          email: this.email,
          password: this.password
        }})
        .then(response => {
          console.log(response);
          this.loggedIn = true;
          this.error = '';
          this.message = 'Account creation successful!';
  
          // Save the token
          sessionStorage.setItem("token", response.data.token);
  
        })
        .catch(error => {
          console.log(error)
          this.error = "Login failed. " + error.response.data.message;
          this.message = 'Login failed.';
        });
      }
    }
  }
  </script>
  
  