<template>
  <div class="col-md-4">
    <div class="card mb-3 ">
      <img :src="image" class="card-img-top car-image" alt="Car Image">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
        <a href="torent" class="btn btn-primary">Rent Now</a>
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
</style>