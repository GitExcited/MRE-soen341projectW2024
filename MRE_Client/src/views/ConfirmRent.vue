<template>
    <div class="confirmation-container">
      <h2>Thank you for choosing this vehicle for rent!</h2>
      <p>You have successfully rented this car. The owner would be contacting you soon!</p>
      <!-- You can add more content here if needed -->
    </div>
  </template>
  
  <script>
  export default {
    // You can add component options here if needed
  };
  </script>
  
  <style scoped>
  .confirmation-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 100px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .confirmation-container h2 {
    margin-bottom: 20px;
    color: #1e4168;
  }
  
  .confirmation-container p {
    font-size: 18px;
    color: #333;
  }
  </style>