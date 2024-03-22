<template>
    <div class="d-flex">
      <select v-model="selectedMake" class ="form-control">
      <option disabled value="">Make</option>
      <option v-for="make in Object.keys(makesAndModels)" :key="make">{{ make }}</option>
      </select>

      <select v-model="selectedModel" class ="form-control">
        <option disabled value="">Model</option>
        <option v-for="model in makesAndModels[selectedMake]" :key="model">{{ model }}</option>
      </select>

      <select v-model="selectedBranch" class="form-control">
        <option disabled value="">Branch</option>
        <option v-for="branch in branches" :key="branch">{{ branch }}</option>
      </select>
      <select v-model="selectedYear" class="form-control">
      <option disabled value="">Year</option>
      <option v-for="year in years" :key="year">{{ year }}</option>
    </select>
    <select v-model="selectedColor" class="form-control">
      <option disabled value="">Color</option>
      <option v-for="color in colors" :key="color">{{ color }}</option>
    </select>  
    <button class="btn btn-secondary" @click="clearSearch">Clear</button>

    </div>

  </template>
  
  <script>
import makesAndModels from '../../public/makesAndModels.json';


  export default {
    data() {
      return {
        selectedModel: '',
        selectedMake: '',
        selectedBranch: '',
        selectedYear: '',
        selectedColor: '',
        //! Update this data with the correct values
        makesAndModels: makesAndModels,
        branches: ['Downtown Montreal', 'Plateau Mont-Royal', 'Notre-Dame-de-Grâce (NDG)',
        'Rosemont-La Petite-Patrie', 'Ville-Marie', 'Villeray-Saint-Michel-Parc-Extension'],
        years: Array.from({length: 30}, (_, i) => new Date().getFullYear() - i),
        colors: ['Black', 'White', 'Silver', 'Blue', 'Red', 'Gray', 'Brown', 'Green', 'Beige', 'Gold'],
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
      clearSearch() {
        this.selectedModel = '';
        this.selectedMake = '';
        this.selectedBranch = '';
        this.selectedYear = '';
        this.selectedColor = '';
        this.search(); // emit the search event with the cleared search criteria
      },
    },
  };
  </script>
  
  <style scoped>
  .d-flex > * {
    margin-right: 10px;
  }
  </style>