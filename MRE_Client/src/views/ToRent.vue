<template>
  <div>
    <div class="banner pb-4">
      <h1 class="banner-text">Renting Details</h1>
    </div>
    <div class="d-flex justify-content-center">
      <div class="card mb-3">
        <img :src="selectedCar.image" class="card-img-top car-image" alt="Car Image" />
        <div class="card-body">
          <h5 class="card-title">{{ selectedCar.title }}</h5>
          <p class="card-text">{{ selectedCar.description }}</p>
          <p><strong>Availability:</strong> {{ selectedCar.availability }}</p>
          <!-- Display car availability -->
          <p><strong>Price:</strong> $100 /day</p>
          <!-- Display car price -->
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <form @submit.prevent="submitForm" class="form-container">
        <div class="col-md-4 w-100">
          <div class="card-body">
            <div class="input-group">
              <label class="label" for="startDate">Start Date:&nbsp;&nbsp;</label>
              <input type="date" id="startDate" v-model="startDate" required />
            </div>
            <div class="input-group">
              <label class="label" for="endDate">End Date:&nbsp;&nbsp;</label>
              <input type="date" id="endDate" v-model="endDate" required />
            </div>
            <div class="input-group">
              <label class="label" for="creditCardNumber">Credit Card Number:&nbsp;&nbsp;</label>
              <input type="text" id="creditCardNumber" v-model="creditCardNumber" required />
            </div>
            <div class="input-group">
              <label class="label" for="cvv">CVV:&nbsp;&nbsp;</label>
              <input type="text" id="cvv" v-model="cvv" required />
            </div>
            <div class="input-group">
              <label class="label" for="expirationDate">Expiration Date:&nbsp;&nbsp;</label>
              <input
                type="text"
                id="expirationDate"
                v-model="expirationDate"
                placeholder="MM/YYYY"
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>
  </div>
  <div v-if="this.error" class="alert alert-danger mt-3" role="alert">
    {{ error }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      selectedCar: {
        image: '',
        title: '',
        description: '',
        color: '',
        availability: '',
        price: 0
      },
      startDate: '',
      endDate: '',
      creditCardNumber: '',
      cvv: '',
      expirationDate: '',
      error: null
    }
  },

  mounted() {
    let carDetails
    if (window.history.state && window.history.state.carDetails) {
      carDetails = window.history.state.carDetails
    }
    this.selectedCar = { ...carDetails }
  },

  methods: {
    handleRentNow(carInfo) {
      this.selectedCar = { ...carInfo }
    },
    validateFutureDateMMYYYY(input) {
      const regex = /^(0[1-9]|1[0-2])\/\d{4}$/;
      if (!regex.test(input)) return false;

      const currentDate = new Date();
      const inputDate = new Date(input.split('/')[1], input.split('/')[0] - 1);

      return inputDate > currentDate;
    },

    async submitForm() {
      const auth = 'authTokenMRE=' + sessionStorage.getItem('token') + '; path=/; max-age=3600'
      document.cookie = auth
      if (!sessionStorage.getItem('token')) {
        this.error = 'You must be logged in to make a reservation.'
        return // Stop form submission if user is not logged in
      }
      if (!/^\d{16}$/.test(this.creditCardNumber)) {
        this.error = 'Credit card number must be composed of 16 digits.'
        return // Stop form submission if credit card number is invalid
      }

      if (!/^\d{3}$/.test(this.cvv)) {
        this.error = 'CVV must be composed of exactly three digits.'
        return // Stop form submission if CVV is invalid
      }

      if (!this.validateFutureDateMMYYYY(this.expirationDate)) {
        this.error = 'Expiration date must be in the future and in the format MM/YYYY.'
        return // Stop form submission if expiration date is invalid
      }

      // Send the selected car, dates, and credit card details to the server
      await axios
        .post(
          'http://localhost:3000/forms/reservation',
          {
            vehicle_id: this.selectedCar.vehicle_id,
            start_date: this.startDate,
            end_date: this.endDate,
            credit_card_number: this.creditCardNumber,
            cvv: this.cvv,
            expiration_date: this.expirationDate
          },
          {
            withCredentials: true
          }
        )
        .then((response) => {
          console.log(response)
          this.$router.push({ path: '/confirmrent' })
        })
        .catch((err) => {
          console.error(err)
          this.error = err.response.data.message;
        })
    }
  }
}
</script>

<style scoped>
.car-image {
  height: 300px;
  width: 100%;
  object-fit: cover;
}
</style>

<style scoped>
.banner {
  background-color: #1e4168; /* Dark blue background */
  color: white;
  padding: 7%;
  text-align: center;
}

.banner-text {
  margin: 0;
  font-size: 24px;
}

.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px); /* Adjusted to account for banner height */
}

.form-container {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f5f9; /* Light blue background */
}

.input-group {
  margin-bottom: 15px;
}

.label {
  color: #1e4168; /* Dark blue for labels */
  font-weight: bold;
}

input[type='text'],
input[type='number'],
input[type='url'] {
  width: calc(100% - 20px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #1e4168; /* Dark blue button */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #003366; /* Darker blue on hover */
}
</style>
