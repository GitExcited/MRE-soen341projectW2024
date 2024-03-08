<template>
  <div class="container " style="margin-top: 100px;">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <h2 class="text-center">Login</h2>
        <!-- SUBMIT METHOD -->
        <form @submit="handleSubmit"> 
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <!-- Success Message -->
          <p v-if="message">{{ message }}</p>
        </form>
      </div>
    </div>
  </div>
  </template>




