<template>
  <div class="container p-5 text-center main my-5">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="bg-container">
          <img
            src="../../assets/partner.bg1.jpg"
            alt="bg"
            class="img-fluid bg"
            width="400"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <h1 id="tittle" class="p-5">
          Partner <font-awesome-icon icon="fa-solid fa-user-tie" />
        </h1>
        <router-view class="p-5" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#tittle {
  background-color: #1fcfcc;
}
</style>
