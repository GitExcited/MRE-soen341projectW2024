<template>
    <div class="container" style="margin-top:100px;">
      <div class="row">
        <div class="col text-center">
          <h1>Welcome to Our Car Rental Service</h1>
          <p class="lead">We provide a variety of cars for rent. Choose the one that suits your needs and book it now!</p>
        </div>
      </div>
      <div class ="row mt-4">
        <SearchBar @search ="updateSearchCriteria"/>
      </div>
      <div class="row mt-4">

        <!-- ? Each card only is created if the searchCriteria matches the cars properties -->
        <CarCard
        v-for="car in filteredCars" 
        :key="car.vehicle_id"
        :image="car.image_link"
        :title="`${car.model} ${car.year}`"
        :color="car.color"
        :description="`Make: ${car.make}, Color: ${car.color}, ID: ${car.vehicle_id}`"
        :vehicle_id="car.vehicle_id"
        :isAvailable="car.status"
        :searchCriteria="searchCriteria"
        @rent-now="handleRentNow"
        />


        <!-- Repeat the above div for more car models -->
      </div>
    </div>
  </template>

<script>
import CarCard from '@/components/CarCard.vue';
import SearchBar from '../components/SearchBar.vue';

import axios from 'axios';

export default {
  components: {
    CarCard,
    SearchBar,
  },
  computed: {
    //This is how we filter cars based on the searchCriteria
    //The filters are:
    //1.Color
    //2.Model
    //3.Make
    filteredCars() {
      //First we check if a search criteria is set otherwise return all cars
      if (!this.searchCriteria) {
        return this.cars;
      }
      //We filter the cars based on the search criteria, if one of the criterias is empty, we ignore it
      return this.cars.filter(
        car => 
      (this.searchCriteria.color === '' || car.color == this.searchCriteria.color) &&
      (this.searchCriteria.model === '' || car.model == this.searchCriteria.model) &&
      (this.searchCriteria.make === '' || car.make == this.searchCriteria.make) &&
      (this.searchCriteria.year === '' || car.year == this.searchCriteria.year) &&
      (this.searchCriteria.branch === '' || car.branch == this.searchCriteria.branch) 
        );
      },
  },
  data() {
    return {
      cars: [],
      searchCriteria:null
    };
  },
  methods: {
  handleRentNow(carDetails) {
    console.log('Rent Now handled:', carDetails);
    // Navigate to the 'ToRent' page with car details
    this.$router.push({ name: 'torent', state: {
      carDetails
    }});
  },
  //This updates the cars that will be searched by the car Card
  updateSearchCriteria(searchCriteria) {
    this.searchCriteria = searchCriteria;
  }, 
  fetchCars() {
    axios.get('http://localhost:3000/forms/vehicles?user_id=103210')
      .then(response => {
        this.cars = response.data;
      })
      .catch(error => {
        console.error(error);
      });
    },

  },
  watch: {
    searchCriteria() {
      this.fetchCars();
    },
  },
  mounted() {
    this.fetchCars();
  },
};
</script>