<template>
  <div>
    <div class="banner">
      <h1 class="banner-text">Renting Details</h1>
    </div>
    <div class="center-container">
      <form @submit.prevent="submitForm" class="form-container">
        <div class="input-group">
          <label class="label" for="startDate">Start Date:</label>
          <input type="text" id="startDate" v-model="cars.startDate" required>
        </div>
        <div class="input-group">
          <label class="label" for="endDate">End Date:</label>
          <input type="text" id="endDate" v-model="cars.endDate" required>
        </div>
        <div class="output-group">
          <label class="label" for="color">Color: </label>
          <output name="result" for="color">{{ cars.color }}</output>
        </div>
        <div class="output-group">
          <label class="label" for="price">Price:</label>
          <input type="number" id="price" v-model="cars.price" required>
        </div>
        <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cars: {
        startDate: '',
        endDate: '',
        make: '',
        model: '',
        color: '',
        year: null,
        mileage: null,
      },
    };
  },

  mounted() {
    axios.post('http://localhost:3000/form/vehicles?user_id=103210')
      .then(response => {
        console.log('API Response:', response.data);
        this.cars = response.data; // Assuming response.data is an array of car details
      })
      .catch(error => {
        console.error('Error fetching car details:', error);
      });
  },

  methods: {
    submitForm() {
      console.log('Form submitted with data:', this.cars[0]);
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