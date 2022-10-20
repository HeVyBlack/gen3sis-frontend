<template>
  <div class="container p-5 text-center my-5">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="bg-container">
          <img
            src="../../assets/engineer.bg1.jpg"
            alt="bg"
            class="img-fluid bg"
            width="400"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <h1 id="tittle" class="p-5">
          Ingenieria <font-awesome-icon icon="fa-solid fa-user-gear" />
        </h1>
        <router-view class="p-5" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#tittle {
  background-color: #eed777;
}
</style>
