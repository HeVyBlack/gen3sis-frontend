<template>
  <div class="mb-3">
    <h4><strong>Buscar Tickets</strong></h4>
    <label for="cod_ing" class="form-label">Email de ingeniero</label>

    <input
      type="text"
      class="form-control"
      id="cod_ing"
      placeholder="Ingresa el código ingeniero"
      v-model="ticketToSearch.cod_ing"
    />
  </div>
  <div class="mb-3">
    <label for="cod_part" class="form-label">Email de partner</label>
    <input
      type="text"
      class="form-control"
      id="cod_part"
      placeholder="Ingresa el código partner"
      v-model="ticketToSearch.cod_part"
    />
  </div>
  <div class="mb-3">
    <label for="ticket_num" class="form-label">Número de Ticket</label>
    <input
      type="number"
      class="form-control"
      id="ticket_num"
      placeholder="Ingresa el número de Ticket"
      v-model="ticketToSearch.ticket_num"
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
</template>

<script setup>
import { ref } from "vue";

const ticketToSearch = ref({
  cod_ing: null,
  cod_part: null,
  ticket_num: null,
  init_date: null,
  fin_date: null,
  hours: null,
  state: null,
});
</script>

<style scoped></style>
