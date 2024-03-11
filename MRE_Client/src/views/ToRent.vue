<template>
  <div>
    <div class="banner">
      <h1 class="banner-text">Renting Details</h1>
    </div>
    <div class="center-container">
      <form @submit.prevent="submitForm" class="form-container">
        <div class="col-md-4">
          <div class="card-body">
            <div class="input-group">
              <label class="label" for="startDate">Start Date:</label>
              <input type="text" id="startDate" v-model="startDate" required>
            </div>
            <div class="input-group">
              <label class="label" for="endDate">End Date:</label>
              <input type="text" id="endDate" v-model="endDate" required>
            </div>
            <div class="output-group">
              <label class="label" for="color">Color: </label>
              <output name="result" for="color">{{ selectedCar.color }}</output>
            </div>
          </div>
        </div>
        <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CarCard from '../components/CarCard.vue';

export default {
  data() {
    return {
      selectedCar: {
        image: '',
        title: '',
        description: '',
        color: '',
      },
      startDate: '',
      endDate: '',
    };
  },

  components: {
    CarCard,
  },

  mounted() {
    // Set default values if needed
    // this.startDate = '2024-03-01';
    // this.endDate = '2024-03-10';
  },

  methods: {

    // Handler for the event emitted by CarCard
    handleRentNow(carInfo) {
      this.selectedCar = { ...carInfo };
    },

    submitForm() {
      console.log('Form submitted with data:', {
        selectedCar: this.selectedCar,
        startDate: this.startDate,
        endDate: this.endDate,
      });
      
      this.$router.push({ path: '/confirmation' });
    },
  },
};
</script>

<style scoped>
  /* Your styling goes here */
</style>

  
  <style scoped>
  /* Your styling goes here */
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
  
  input[type="text"],
  input[type="number"],
  input[type="url"] {
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