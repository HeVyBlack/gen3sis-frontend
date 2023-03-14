<template>
  <div class="container p-5 text-center">
    <h1>No haz verificado tu info</h1>
    <h2>Por favor, verifica tu info</h2>
    <div class="row">
      <div class="col">
        <router-link
          :to="{ name: 'dash-verify-info' }"
          class="btn btn-dark text-light"
          >Aquí</router-link
        >
      </div>
    </div>
  </div>
</template>
