<template>
    <div class="reservation-modify">
      <h2>Modify Reservation</h2>
      <form @submit.prevent="updateReservation">
        <div class="form-group">
          <label for="rentalStart">Rental Start Date:</label>
          <input type="date" id="rentalStart" v-model="reservation.rental_start_date" required>
        </div>
        <div class="form-group">
          <label for="rentalEnd">Rental End Date:</label>
          <input type="date" id="rentalEnd" v-model="reservation.rental_end_date" required>
        </div>
        <button type="submit">Update Reservation</button>
      </form>
      <button @click="cancelReservation">Cancel Reservation</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ReservationModify',
    data() {
      return {
        reservation: {
          rental_id: null,
          rental_start_date: '',
          rental_end_date: '',
          // Include other fields as needed
        },
      };
    },
    methods: {
      async fetchReservation() {
        try {
          const urlSplit = this.$route.path.split('/');
          const rentalId = urlSplit[urlSplit.length - 1];
          const response = await axios.get(`http://localhost:3000/forms/getreservation?rental_id=${rentalId}`);
          this.reservation = response.data;
        } catch (error) {
          alert('Failed to fetch reservation details');
          // Handle error appropriately
        }
      },
      async updateReservation() {
        try {
          await axios.put(`http://localhost:3000/reservations/${this.reservation.rental_id}`, {
            rental_start_date: this.reservation.rental_start_date,
            rental_end_date: this.reservation.rental_end_date,
            // Include other fields as necessary
          });
          alert('Reservation updated successfully');
          // Redirect or update UI as needed
        } catch (error) {
          alert('Failed to update reservation');
          // Handle error appropriately
        }
      },
      async cancelReservation() {
        try {
          await axios.delete(`http://localhost:3000/reservations/${this.reservation.rental_id}`);
          alert('Reservation cancelled successfully');
          // Redirect or update UI as needed
        } catch (error) {
          alert('Failed to cancel reservation');
          // Handle error appropriately
        }
      }
    },
    mounted() {
      this.fetchReservation();
    },
  }
  </script>
  
  <style>
  .reservation-modify {
    margin-top: 100px; /* Adjust as needed to push the form down */
    text-align: center;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  button {
    margin-top: 1rem;
  }
  </style>
  