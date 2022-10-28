<template>
  <div class="container p-5 text-center my-5">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="bg-container">
          <img
            src="../../assets/isotipo.png"
            alt="bg"
            class="img-fluid bg"
            width="400"
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
  background-color: #eed777;
}

#tittle p {
  margin-top: 0.6rem;
  font-size: 1.1rem;
  font-family: "Nunito", sans-serif;
}
</style>
