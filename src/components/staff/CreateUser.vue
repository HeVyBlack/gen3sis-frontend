<template>
  <div class="container">
    <div class="row">
      <div class="col"><strong>Ingeniero:</strong> <CreateEng /></div>
      <div class="col"><strong>Partner:</strong> <CreatePart /></div>
    </div>
  </div>
</template>

<script setup>
import CreateEng from "./create-user/CreateEng.vue";
import CreatePart from "./create-user/CreatePart.vue";
</script>

<style scoped></style>
