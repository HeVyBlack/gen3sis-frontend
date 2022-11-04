<template>
  <div>
    <div class="row p-3 m-2">
      <div class="col">
        <CreateTicket />
      </div>
    </div>

    <div class="row">
      <div class="col"><ByEmail /></div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-6"><ByPartner /></div>
      <div class="col-md-12 col-lg-6"><ByEngineer /></div>
    </div>
  </div>
</template>

<script setup>
import ByPartner from "./search-users/ByPartner.vue";
import ByEngineer from "./search-users/ByEngineer.vue";
import ByEmail from "./search-users/ByEmail.vue";
import CreateTicket from "./search-users/CreateTicket.vue";
</script>

<style lang="scss" scoped>
.list__item + .list__item {
  margin-top: 20px;
}
</style>
