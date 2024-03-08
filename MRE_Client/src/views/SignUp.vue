<template>
  <div class="container " style="margin-top: 100px;">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <h2 class="text-center" v-if="!loggedIn">Login</h2>
        <h2 class="text-center" v-if="loggedIn">Welcome! {{ email }}</h2>

        <!-- SUBMIT METHOD -->
        <form @submit="handleSubmit" v-if="!loggedIn"> 
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <!-- Success Message -->
          <p v-if="loggedIn">{{ message }}</p>
        </form>
      </div>
    </div>
  </div>
  </template>


<!--! ******************** AXIOS STUFF ******************** -->
<script>
// import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      message: 'Go get a car!',
      loggedIn: false,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log('Form submitted!');
      this.message="Successful log in!";
      this.loggedIn = true;
      //This is the axios setup, dont use yet, there is nothing to request yet
      // axios.post('', {
      //   email: this.email,
      //   password: this.password
      // })
      // .then(response => {
      //   this.message = 'Login successful!';
      // })
      // .catch(error => {
      //   this.message = 'Login failed.';
      // });
    }
  }
}
</script>

