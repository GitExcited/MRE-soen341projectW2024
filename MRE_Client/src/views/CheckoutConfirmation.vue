<template>
  <div class="confirmation-container">
    <h2>Thank you for submitting your details!</h2>
    <p>Your Reservation number is: {{ reservationNumber }}</p>
    <!-- You can add more content here if needed -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      reservationNumber: ""
    };
  },
  mounted() {
    // Generate a random reservation number when the component is mounted
    this.generateReservationNumber();
  },
  methods: {
    generateRandomNumber(length) {
      let result = "";
      for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10); // Random number from 0 to 9
      }
      return result;
    },
    generateReservationNumber() {
      // Generate a random reservation number consisting of only numbers
      this.reservationNumber = this.generateRandomNumber(8);
    }
  }
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