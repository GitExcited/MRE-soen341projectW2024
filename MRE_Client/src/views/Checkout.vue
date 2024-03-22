<template>
    <div class="checkout-form">
      <!-- Reservation number displayed at the top -->
      <div class="reservation-number" v-if="reservationNumber">
        <p>Reservation Number: {{ reservationNumber }}</p>
      </div>
      <div class="banner">
        <h2 class="banner-text">Enter Your Card Details</h2>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="cardNumber">Card Number:</label>
          <input type="number" id="cardNumber" v-model="cardNumber" required>
        </div>
        <div class="form-group">
          <label for="expiryDate">Expiry Date:</label>
          <!-- Date Picker Component -->
          <input type="date" id="expiryDate" v-model="expiryDate" required>
          <!-- End of Date Picker Component -->
        </div>
        <div class="form-group">
          <label for="cvv">CVV:</label>
          <input type="number" id="cvv" v-model="cvv" required maxlength="3" @input="limitCVV">
        </div>
        <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reservationNumber: '', // Add reservationNumber data property
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
      },
      limitCVV() {
        // Ensure CVV input does not exceed 3 digits
        if (this.cvv && this.cvv.toString().length > 3) {
          this.cvv = parseInt(this.cvv.toString().slice(0, 3));
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .checkout-form {
    max-width: 400px;
    margin: 90px auto 20px; /* Increased margin-top */
    padding: 0px 20px 20px; /* Added more padding at the top */
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  
  .reservation-number {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .banner {
    padding: 10%;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .banner-text {
    color: #333;
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
  
  input[type="date"],
  input[type="number"],
  input[type="text"] {
    width: calc(100%); /* Shorten text boxes */
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
  