<template>
  <div class="container" style="margin-top: 100px">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <h2 class="text-center" v-if="!loggedIn">Check In</h2>
        <h2 class="text-center" v-if="loggedIn">Welcome, {{ username }}!</h2>
        <router-link to="/home" v-if="loggedIn">Go to Home</router-link>

        <form @submit.prevent="checkInCustomer" v-if="!loggedIn">
          <p class="subtitle">Please provide the information used to make the booking</p>
          <div class="mb-3">
            <label for="bookingID" class="form-label"><b>Booking ID</b></label>
            <input
              v-model="bookingID"
              type="text"
              class="form-control"
              id="bookingID"
              required
            />
          </div>
          <!-- Driver's License -->
          <div class="mb-3">
            <label for="driverLicense" class="form-label"><b>Driver's License Code</b></label>
            <input
              v-model="driverLicense"
              type="text"
              class="form-control"
              id="driverLicense"
              required
            />
          </div>
          <!-- Credit Card -->
          <div class="mb-3">
            <label for="creditCard" class="form-label"
              ><b>Credit Card</b> (A automatic deposit of 500 dollars is neccesary for
              completion)</label
            >
            <input v-model="creditCard" type="text" class="form-control" id="creditCard" required />
          </div>

          <div class="mb-3">
            <label for="vehicleInspectionReport" class="form-label"
              ><b>Vehicle Inspection Report</b></label
            >
            <textarea
              v-model="vehicleInspectionReport"
              class="form-control"
              id="vehicleInspectionReport"
              rows="4"
              required
            ></textarea>
          </div>

          <div class="mb-3">
            <label for="signedFormImage" class="form-label"
              ><b>Upload Picture of Signed Form</b></label
            >
            <input
              type="file"
              id="signedFormImage"
              @change="handleFileUpload"
              accept="image/*"
              required
            />
          </div>

          <button type="submit" class="btn btn-primary flex">Check In</button>

          <p v-if="message" class="text-success">{{ message }}</p>
          <p v-if="error" class="text-danger">{{ error }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      bookingID: '',
      driverLicense: '',
      creditCard: '',
      vehicleInspectionReport: '',
      signedFormImage: null,
      message: '',
      loggedIn: false,
      error: ''
    }
  },
  methods: {
    async checkInCustomer() {
      try {
        const rentalDetails = {
          bookingID: this.bookingID,
          bookingConfirmationId: this.bookingConfirmation,
          driverLicense: this.driverLicense,
          creditCard: this.creditCard,
          vehicleInspectionReport: this.vehicleInspectionReport,
          signedFormImage: this.signedFormImage // Include the signed form image
        }
        await axios.post('http://localhost:3000/forms/checkin', rentalDetails)

        // deposit
        // await axios.post('http://localhost:3000/take-deposit', {
        //   creditCard: this.creditCard,
        //   amount: 500 // CAD
        // })

        // done
        this.message =
          'Check-in successful. You can now drive away with the rented car. Enjoy your trip!'
        this.error = ''
        this.loggedIn = true
      } catch (error) {
        console.error('Error checking in customer:', error)
        this.error = 'An error occurred during check-in. Please try again later.'
        this.message = ''
      }
    },
    handleFileUpload(event) {
      this.signedFormImage = event.target.files[0]
    }
  }
}
</script>
