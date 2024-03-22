<template>
    <div class="d-flex">
      <select v-model="selectedMake" class="form-control">
        <option disabled value="">Make</option>
        <option v-for="make in makes" :key="make">{{ make }}</option>
      </select>

      <select v-model="selectedModel" class="form-control">
        <option disabled value="">Model</option>
        <option v-for="model in models" :key="model">{{ model }}</option>
      </select>
  
      <select v-model="selectedBranch" class="form-control">
        <option disabled value="">Branch</option>
        <option v-for="branch in branches" :key="branch">{{ branch }}</option>
      </select>
      <select v-model="selectedYear" class="form-control">
      <option disabled value="">Select car year</option>
      <option v-for="year in years" :key="year">{{ year }}</option>
    </select>
    <select v-model="selectedColor" class="form-control">
      <option disabled value="">Select car color</option>
      <option v-for="color in colors" :key="color">{{ color }}</option>
    </select>  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedModel: '',
        selectedMake: '',
        selectedBranch: '',
        selectedYear: '',
        selectedColor: '',
        //! Update this data with the correct values
        models: ['Small', 'Medium', 'Large'],
        makes: ['Sedan', 'SUV', 'Truck'],
        branches: ['Downtown Montreal', 'Plateau Mont-Royal', 'Notre-Dame-de-Grâce (NDG)',
        'Rosemont-La Petite-Patrie', 'Ville-Marie', 'Villeray-Saint-Michel-Parc-Extension'],
        years: Array.from({length: 30}, (_, i) => new Date().getFullYear() - i),
        colors: ['Red', 'Blue', 'Green', 'Black', 'White'],

      };
    },
    watch: {
    selectedModel() {
      this.search();
    },
    selectedMake() {
      this.search();
    },
    selectedBranch() {
      this.search();
    },
    selectedYear() {
      this.search();
    },
    selectedColor() {
      this.search();
    },
  },
    methods: {
      search() {
        const searchCriteria = {
          model: this.selectedModel,
          make: this.selectedMake,
          branch: this.selectedBranch,
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