<template>
    <div class="checkout-form">
      <div class="banner">
        <h2 class="banner-text">Enter Your Card Details</h2>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" v-model="cardNumber" required>
        </div>
        <div class="form-group">
          <label for="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" v-model="expiryDate" required>
        </div>
        <div class="form-group">
          <label for="cvv">CVV:</label>
          <input type="text" id="cvv" v-model="cvv" required>
        </div>
        <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cardNumber: '',
        expiryDate: '',
        cvv: ''
      };
    },
    methods: {
      handleSubmit() {
        // Here you can implement logic for submitting card details
        console.log('Card details submitted:', {
          cardNumber: this.cardNumber,
          expiryDate: this.expiryDate,
          cvv: this.cvv
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .checkout-form {
    max-width: 400px;
  margin: 90px auto 20px; /* Increased margin-top */
  padding: 40px 20px 20px; /* Added more padding at the top */
  border: 1px solid #ccc;
  border-radius: 10px;
  }
  
  .banner {
    padding: 10%;
    text-align: center;
    margin-bottom: 20px; /* Adjust as needed */
  }
  
  .banner-text {
    color: #333; /* Adjust text color as needed */
    margin: 0;
    font-size: 26px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .submit-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  </style>
  