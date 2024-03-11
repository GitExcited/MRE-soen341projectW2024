<template>
    <div class="container" style="margin-top:100px;">
      <div class="row">
        <div class="col text-center">
          <h1>Welcome to Our Car Rental Service</h1>
          <p class="lead">We provide a variety of cars for rent. Choose the one that suits your needs and book it now!</p>
        </div>
      </div>
      <div class="row mt-4">

        <!-- ? If you want to create car cards, use this :   -->
        <CarCard
        v-for="car in cars"
        :key="car.vehicle_id"
        :image="car.image_link"
        :title="car.model"
        :color="car.color"
        :description="`Make: ${car.make}, Color: ${car.color}, ID: ${car.vehicle_id}`"
        @rent-now="handleRentNow"
        />


        <!-- Repeat the above div for more car models -->
      </div>
    </div>
  </template>

<script>
import CarCard from '../components/CarCard.vue';
import axios from 'axios';

export default {
  components: {
    CarCard,
  },
  data() {
    return {
      cars: [],
    };
  },
  methods: {
  handleRentNow(carDetails) {
    console.log('Rent Now handled:', carDetails);
    // Navigate to the 'ToRent' page with car details
    this.$router.push({ name: 'torent', params: { 
      carId: carDetails.vehicle_id, 
      carColor: carDetails.color } });
  },
},


  mounted() {
    axios.post('http://localhost:3000/form/vehicles?user_id=103210')
      .then(response => {
        this.cars = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>