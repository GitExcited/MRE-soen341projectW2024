<template>
  <div class="confirmation-container">
    <h2>Thank you for submitting your details!</h2>
    <p>You have succesfuly checked out from your reservation.</p>
    <p>Your Reservation number is: {{ reservationNumber }}</p>
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
    // Assign the reservation number from the URL query parameter
    this.reservationNumber = this.$route.query.id || 'Unavailable';
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