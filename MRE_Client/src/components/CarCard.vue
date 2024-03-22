<template>
    <div class="col-md-4">
      <div class="card mb-3 ">
        <img :src="image" class="card-img-top car-image" alt="Car Image">
        <div class="card-body">
          <div class = "d-flex align-items-center">
          <h5 class="card-title ">{{ title }}</h5>
          <button :class="['btn', 'btn-sm', 'rounded-pill', isAvailable === 'Available' ? 'btn-success' : 'btn-danger']">
        {{ isAvailable === 'Available' ? 'Available' : 'Reserved' }}
        </button>
      </div>
          <p class="card-text">{{ description }}</p>
        <a @click="rentNow" class="btn btn-primary">Rent Now</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      color: {
      type: String,
      required: true,
      },
      vehicle_id: {
        type: String,
        required: true,
      },
      isAvailable: {
        type: String,
        required: true,
      },  
    },
    methods: {
    rentNow() {
      console.log('Rent Now clicked');
      this.$emit('rent-now', {
        image: this.image,
        title: this.title,
        description: this.description,
        color: this.color,
        vehicle_id: this.vehicle_id,
    });
  },
},


  };
  //Making the image width smaller
  </script>
  <style scoped>
  .car-image {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
  .rounded-pill {
  border-radius: 50px !important;
}
.card-title{
  margin-right: 30px;
}
  </style>