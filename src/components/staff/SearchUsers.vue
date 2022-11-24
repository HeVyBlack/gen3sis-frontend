<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="container">
          <CreateTicket />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col"><ByEmail /></div>
    </div>
    <div class="row">
      <div class="col p-3"><ByPartner /></div>
    </div>
    <div class="row">
      <div class="col p-3"><ByEngineer /></div>
    </div>
  </div>
</template>

<script setup>
import ByPartner from "./search-users/ByPartner.vue";
import ByEngineer from "./search-users/ByEngineer.vue";
import ByEmail from "./search-users/ByEmail.vue";
import CreateTicket from "./search-users/CreateTicket.vue";

import { ref } from "vue";
import { watchEffect } from "vue";
import { storeToRefs } from "pinia";
import { useStaffStore } from "../../stores/staff";

import { useToast } from "vuestic-ui";

const staffStore = useStaffStore();
const { ticket } = storeToRefs(staffStore);

const aux = ref({ eng: null, part: null });

const { init } = useToast();

watchEffect(() => {
  if (ticket.value.eng) {
    if (ticket.value.eng != aux.value.eng) {
      aux.value.eng = ticket.value.eng;
      init("Ingeniero agregado");
    }
  }
  if (ticket.value.part) {
    if (ticket.value.part != aux.value.part) {
      aux.value.part = ticket.value.part;
      init("Partner agregado");
    }
  }
  if (ticket.value.part && ticket.value.eng) {
    init({ message: "Ticket listo para crear", color: "success" });
  }
});
</script>

<style lang="scss" scoped>
.list__item + .list__item {
  margin-top: 20px;
}
</style>
