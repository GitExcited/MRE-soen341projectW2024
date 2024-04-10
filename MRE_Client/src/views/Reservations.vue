<template>
    <div class="table-container">
      <table v-if="reservations.length > 0">
        <thead>
          <tr>
            <th>Rental ID</th>
            <th>Vehicle ID</th>
            <th>User ID</th>
            <th>Rental Start Date</th>
            <th>Rental End Date</th>
            <th>Total Cost</th>
            <th>Status</th>
            <th>Actions</th> <!-- Column for actions -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="reservation in reservations" :key="reservation.rental_id">
            <td>{{ reservation.rental_id }}</td>
            <td>{{ reservation.vehicle_id }}</td>
            <td>{{ reservation.user_id }}</td>
            <td>{{ new Date(reservation.rental_start_date).toLocaleDateString() }}</td>
            <td>{{ new Date(reservation.rental_end_date).toLocaleDateString() }}</td>
            <td>{{ reservation.total_cost }}</td>
            <td>{{ reservation.status }}</td>
            <td>
              <!-- View/Modify Button -->
              <button class="action-button" @click="viewModifyReservation(reservation.rental_id)">View/Modify</button>
              <router-link v-if="isReservationDate(reservation)" :to="{ name: 'Checkin', params: { rental_id: reservation.rental_id } }" class="action-button">Checkin</router-link>
              <router-link v-else-if="isAfterReservationDate(reservation)" :to="{ name: 'Checkout', params: { rental_id: reservation.rental_id } }" class="action-button">Checkout</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-if="reservations.length === 0">No reservations found.</p>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>

  <script>
  import axios from 'axios';
  
  export default {
    name: 'ReservationsTable',
    data() {
      return {
        reservations: [],
        error: null,
      };
    },
    methods: {
      isReservationDate(reservation) {
    const currentDate = new Date();
    const reservationDate = new Date(reservation.rental_start_date);
    currentDate.setHours(0, 0, 0, 0);
    reservationDate.setHours(0, 0, 0, 0);
        console.log("Today date is"+ currentDate);
        console.log("Reservation date is"+ reservationDate);
    return (currentDate.getTime() >= reservationDate.getTime() && reservation.status == 'reserved');
  },
  isAfterReservationDate(reservation) {
    const currentDate = new Date().toLocaleDateString();
    const reservationDate =  new Date(reservation.rental_start_date).toLocaleDateString();

    return (currentDate >= reservationDate && reservation.status === 'checked in');
  },
      async fetchReservations() {
        try {
            const auth = 'authTokenMRE=' + sessionStorage.getItem('token') + '; path=/; max-age=3600';
            document.cookie = auth;
            const response = await axios.get('http://localhost:3000/forms/getallreservations', {
                withCredentials: true
            });
            
            this.reservations = response.data;
        } catch (error) {
          this.error = 'Failed to fetch reservations: ' + (error.response ? error.response.data.message : error.message);
        }
      },
      viewModifyReservation(rental_id) {
        this.$router.push({ path: `/reservations/${rental_id}` });
      }
    },
    mounted() {
      this.fetchReservations();
    },
  }
  </script>
  
  <style>
  .table-container {
    margin-top: 100px; /* Adjust as needed to push the table down */
  }
  
  table {
    width: 100%; /* Ensure table uses full container width */
    border-collapse: collapse; /* Remove space between borders */
  }
  
  th, td {
    border: 1px solid #ddd; /* Add a light border to table cells */
    text-align: left; /* Align text to the left */
    padding: 8px; /* Add some padding for content */
  }
  
  /* Add zebra striping to table rows */
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  /* Common style for buttons */
.action-button {
  display: inline-block;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  margin-right: 10px;
}

.action-button:not(:last-child) {
  margin-right: 10px;
}

.action-button:hover {
  background-color: #0056b3;
}
  
  /* Style for error message */
  .error {
    color: red;
    margin-top: 20px; /* Ensure it's visibly spaced from other elements */
  }
  </style>
  
  