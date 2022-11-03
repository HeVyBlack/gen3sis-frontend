<template>
  <div class="mb-3">
    {{ ticketToSearch }}
    <h4><strong>Buscar Tickets</strong></h4>
    <label for="cod_ing" class="form-label">Códgio de ingeniero</label>
    <div
      id="emailHelp"
      class="form-text error"
      v-for="error in v$.cod_eng.$errors"
      :key="error.$uid"
    >
      {{ error.$message }}*
    </div>
    <input
      type="number"
      class="form-control"
      id="cod_ing"
      placeholder="Ingresa el código ingeniero"
      v-model="ticketToSearch.cod_eng"
    />
  </div>
  <div class="mb-3">
    <label for="cod_part" class="form-label">Código de partner</label>
    <div
      id="emailHelp"
      class="form-text error"
      v-for="error in v$.cod_part.$errors"
      :key="error.$uid"
    >
      {{ error.$message }}*
    </div>
    <input
      type="number"
      class="form-control"
      id="cod_part"
      placeholder="Ingresa el código partner"
      v-model="ticketToSearch.cod_part"
    />
  </div>
  <div class="mb-3">
    <label for="ticket_num" class="form-label">Número de Ticket</label>
    <div
      id="emailHelp"
      class="form-text error"
      v-for="error in v$.num_ticket.$errors"
      :key="error.$uid"
    >
      {{ error.$message }}*
    </div>
    <input
      type="number"
      class="form-control"
      id="ticket_num"
      placeholder="Ingresa el número de Ticket"
      v-model="ticketToSearch.num_ticket"
    />
  </div>
  <div class="mb-3">
    <label for="init_date" class="form-label">Fecha Inicio</label>
    <input
      type="date"
      class="form-control"
      id="init_date"
      placeholder="Ingresa la fecha de inicio"
      v-model="ticketToSearch.init_date"
    />
  </div>
  <div class="mb-3">
    <label for="fin_date" class="form-label">Fecha Finalización</label>
    <input
      type="date"
      class="form-control"
      id="fin_date"
      placeholder="Ingresa la fecha de finalización"
      v-model="ticketToSearch.fin_date"
    />
  </div>
  <div class="mb-3">
    <label for="hours" class="form-label">Horas</label>
    <input
      type="number"
      class="form-control"
      id="hours"
      placeholder="Ingresa las horas"
      v-model="ticketToSearch.hours"
    />
  </div>
  <div class="mb-3">
    <label class="form-label">Estado</label>
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="ticketToSearch.state"
    >
      <option :value="null" selected>Selecciona el estado</option>
      <option :value="false">Aún activo</option>
      <option :value="true">Inactivo</option>
    </select>
  </div>
  <label class="btn btn-dark" @click="submitTicket">Buscar</label>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { helpers, maxLength, minLength } from "@vuelidate/validators";
import { useModalStore } from "../../../stores/ui/modal";
import { useAlertStore } from "../../../stores/ui/alert";

const ticketToSearch = ref({
  cod_eng: null,
  cod_part: null,
  init_date: null,
  fin_date: null,
  hours: null,
  state: null,
  num_ticket: null,
});

const modalStore = useModalStore();
const alertStore = useAlertStore();

const rules = {
  cod_eng: {
    minLength: helpers.withMessage(
      "El código de ingeniero no puede ser menor a 10 digítos",
      minLength(10)
    ),
    maxLength: helpers.withMessage(
      "El código de ingeniero no puede ser mayor a 10 digítos",
      maxLength(10)
    ),
  },
  cod_part: {
    minLength: helpers.withMessage(
      "El código de partner no puede ser menor a 10 digítos",
      minLength(10)
    ),
    maxLength: helpers.withMessage(
      "El código de partner no puede ser mayor a 10 digítos",
      maxLength(10)
    ),
  },
  hours: {
    maxLength: helpers.withMessage(
      "La hora no puede ser mayor a 6 dígitos",
      maxLength(6)
    ),
  },
  num_ticket: {
    minLength: helpers.withMessage(
      "El número de ticket no puede tener menos de 3 dígitos",
      minLength(3)
    ),
    maxLength: helpers.withMessage(
      "El número de ticket no puede tener más de 3 dígitos",
      maxLength(3)
    ),
  },
};

const v$ = useVuelidate(rules, ticketToSearch);

let url = "/staff/get-tickets?";

const submitTicket = async () => {
  alertStore.resetAlert();
  const result = await v$.value.$validate();
  if (result) {
    await getTicket();
  }
};

const getTicket = async () => {
  for (const i in ticketToSearch.value) {
    if (
      ticketToSearch.value[i] ||
      typeof ticketToSearch.value[i] == "boolean"
    ) {
      url = url + `${i}=${ticketToSearch.value[i]}&`;
    }
  }
  axios.get(url).then((res) => {
    console.log(res.data);
  });
  console.log(url);
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
