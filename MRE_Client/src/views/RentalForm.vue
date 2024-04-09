<template>
  <div>
    <div class="banner">
      <h1 class="banner-text">List Your Vehicle for Rent</h1>
    </div>
    <div class="center-container">
      <form @submit.prevent="submitForm" class="form-container">
        <div class="input-group">
          <label class="label" for="imageURL">Image URL:</label>
          <input type="url" id="imageURL" v-model="car.imageURL" required>
          <!-- While car is loading, the loading text appears and the button is disabled and changes color-->
          <button type="button" @click.prevent="analyzeCar(car.imageURL)" :disabled="loadingAI"
           :class="{ 'loading-button': loadingAI, 'submit-button': !loadingAI }">
            {{ loadingAI ? 'Analyzing...' : 'Analyze Car' }} 
          </button>
        </div>

        <div class="input-group">
          <label class="label" for="make">Make:</label>
          <input type="text" id="make" v-model="car.make" required>
        </div>
        <div class="input-group">
          <label class="label" for="model">Model:</label>
          <input type="text" id="model" v-model="car.model" required>
        </div>
        <div class="input-group">
          <label class="label" for="color">Color:</label>
          <input type="text" id="color" v-model="car.color" required>
        </div>
        <div class="input-group">
          <label class="label" for="year">Year:</label>
          <input type="number" id="year" v-model="car.year" required>
        </div>
        <div class="input-group">
          <label class="label" for="mileage">Mileage (km):</label>
          <input type="number" id="mileage" v-model="car.mileage" required>
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
      loadingAI: false,
      car: {
        make: '',
        model: '',
        color: '',
        year: null,
        mileage: null,
        imageURL: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted with data:', this.car);
      this.$router.push({path: '/confirmation'});
    },
    async analyzeCar(car_url){
       // Show user that the AI is loading
        this.loadingAI = true;
        const response = await axios.post(`http://localhost:3000/forms/caranalysis?car_url=${car_url}`, {
            });
          // Assuming the response is a single string make_model_year like this: 
          // const response = { data: 'Volks_jetta_2002' };
          //console.log(response.data.message[0])
          const [make, model, year] = response.data.message[0].split('_');
          this.car.make = make;
          this.car.model = model;
          this.car.year = year;
          this.loading = false;
    }
  }
};
</script>

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

.loading-button {
  background-color: green;
  color: white;  /* You might want to change the text color so it's visible on the green background */
}
</style>
