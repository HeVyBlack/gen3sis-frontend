<template>
  <div class="container p-5 text-center my-5">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="bg-container">
          <img
            src="../../assets/photo-1504384764586-bb4cdc1707b0.jpeg.jpg"
            alt="bg"
            class="img-fluid bg"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <h1 id="tittle" class="pt-5 pb-3">
          Ingenieria <font-awesome-icon icon="fa-solid fa-user-gear" />
          <p>¡Bienvenido Ingeniero!</p>
        </h1>
        <router-view class="p-sm-3 p-md-5" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#tittle {
  color: #d80e2c;
  background-color: #e6e6e6;
  border-radius: 5px !important;
}

#tittle p {
  color: black !important;
  margin-top: 0.6rem;
  font-size: 1.1rem;
  font-family: "Nunito", sans-serif;
}
</style>
