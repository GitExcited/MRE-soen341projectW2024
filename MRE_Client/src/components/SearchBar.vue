<template>
    <div class="d-flex">
      <select v-model="selectedSize" class="form-control">
        <option disabled value="">Select car size</option>
        <option v-for="size in sizes" :key="size">{{ size }}</option>
      </select>
  
      <select v-model="selectedMake" class="form-control">
        <option disabled value="">Select car Make</option>
        <option v-for="make in makes" :key="make">{{ make }}</option>
      </select>
  
      <select v-model="selectedFeature" class="form-control">
        <option disabled value="">Select car feature</option>
        <option v-for="feature in features" :key="feature">{{ feature }}</option>
      </select>
  
      <select v-model="selectedNeighbour" class="form-control">
        <option disabled value="">Select neighbour</option>
        <option v-for="neighbour in neighbours" :key="neighbour">{{ neighbour }}</option>
      </select>
      <select v-model="selectedYear" class="form-control">
      <option disabled value="">Select car year</option>
      <option v-for="year in years" :key="year">{{ year }}</option>
    </select>
    <select v-model="selectedColor" class="form-control">
      <option disabled value="">Select car color</option>
      <option v-for="color in colors" :key="color">{{ color }}</option>
    </select>
  
      <button class="btn btn-primary" @click="search">Search</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedSize: '',
        selectedMake: '',
        selectedFeature: '',
        selectedNeighbour: '',
        selectedYear: '',
        selectedColor: '',
        sizes: ['Small', 'Medium', 'Large'],
        makes: ['Sedan', 'SUV', 'Truck'],
        features: ['Air Conditioning', 'Bluetooth', 'Sunroof'],
        neighbours: ['Downtown Montreal', 'Plateau Mont-Royal', 'Notre-Dame-de-Grâce (NDG)',
        'Rosemont-La Petite-Patrie', 'Ville-Marie', 'Villeray-Saint-Michel-Parc-Extension'],
        years: Array.from({length: 30}, (_, i) => new Date().getFullYear() - i),
        colors: ['Red', 'Blue', 'Green', 'Black', 'White'],

      };
    },
    methods: {
      search() {
        const searchCriteria = {
          size: this.selectedSize,
          make: this.selectedMake,
          feature: this.selectedFeature,
          neighbour: this.selectedNeighbour,
          year: this.selectedYear,
          color: this.selectedColor,
        };
        console.log(searchCriteria); // log the emitted value
        this.$emit('search', searchCriteria);
      },
    },
  };
  </script>
  
  <style scoped>
  .d-flex > * {
    margin-right: 10px;
  }
  </style>