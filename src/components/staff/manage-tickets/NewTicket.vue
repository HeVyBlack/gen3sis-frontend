<template>
  <div class="mb-3">
    <h4><strong>Nuevo Ticket</strong></h4>
    <label for="cod_eng" class="form-label">Código de ingeniero</label>
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
      id="cod_eng"
      placeholder="Ingresa el código ingeniero"
      v-model="newTicket.cod_eng"
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
      v-model="newTicket.cod_part"
    />
  </div>
  <div class="mb-3">
    <label for="init_date" class="form-label">Fecha Inicio</label>
    <div
      id="emailHelp"
      class="form-text error"
      v-for="error in v$.init_date.$errors"
      :key="error.$uid"
    >
      {{ error.$message }}*
    </div>
    <input
      type="date"
      class="form-control"
      id="init_date"
      placeholder="Ingresa la fecha de inicio"
      v-model="newTicket.init_date"
    />
  </div>
  <div class="mb-3">
    <label for="fin_date" class="form-label">Fecha Finalización</label>
    <div
      id="emailHelp"
      class="form-text error"
      v-for="error in v$.fin_date.$errors"
      :key="error.$uid"
    >
      {{ error.$message }}*
    </div>
    <input
      type="date"
      class="form-control"
      id="fin_date"
      placeholder="Ingresa la fecha de finalización"
      v-model="newTicket.fin_date"
    />
  </div>
  <div class="mb-3">
    <label for="hours" class="form-label">Horas</label>
    <div
      id="emailHelp"
      class="form-text error"
      v-for="error in v$.hours.$errors"
      :key="error.$uid"
    >
      {{ error.$message }}*
    </div>
    <input
      type="number"
      class="form-control"
      id="hours"
      placeholder="Ingresa las horas"
      v-model="newTicket.hours"
    />
  </div>
  <div class="mb-3">
    <label class="form-label">Estado</label>
    <div
      id="emailHelp"
      class="form-text error"
      v-for="error in v$.state.$errors"
      :key="error.$uid"
    >
      {{ error.$message }}*
    </div>
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="newTicket.state"
    >
      <option :value="null" selected>Selecciona el estado</option>
      <option :value="false">Aún activo</option>
      <option :value="true">Inactivo</option>
    </select>
  </div>
  <div class="mb-3">
    <label for="desc" class="form-label">Desc</label>
    <div
      id="emailHelp"
      class="form-text error"
      v-for="error in v$.desc.$errors"
      :key="error.$uid"
    >
      {{ error.$message }}*
    </div>
    <input
      type="textarea"
      class="form-control"
      id="desc"
      placeholder="Ingresa la descripción"
      v-model="newTicket.desc"
    />
  </div>

  <label class="btn btn-dark" @click="submitTicket">Enviar</label>
  <va-modal v-model="showModal" hide-default-actions
    ><va-card-title> Seguro? </va-card-title>
    <va-card-content>
      Estás a punto de crear un nuevo ticket.
      <h6><strong>Tiene esta información:</strong></h6>
      <div class="container p-2 m-2">
        <div class="row">
          <div class="col">
            <ul class="list-group">
              <li class="list-group-item">
                <strong>Email de ingeniero: </strong> {{ newTicket.cod_eng }}
              </li>
              <li class="list-group-item">
                <strong>Email de partner: </strong> {{ newTicket.cod_part }}
              </li>
              <li class="list-group-item">
                <strong>Fecha inicialización: </strong>
                {{ newTicket.init_date }}
              </li>
              <li class="list-group-item">
                <strong>Fecha de finalización: </strong>
                {{ newTicket.fin_date }}
              </li>
              <li class="list-group-item">
                <strong>Horas: </strong> {{ newTicket.hours }}
              </li>
              <li class="list-group-item">
                <strong>Estado: </strong> {{ newTicket.state }}
              </li>
              <li class="list-group-item">
                <strong>Descripción: </strong> {{ newTicket.desc }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      ¿Quieres continuar?
    </va-card-content>
    <label class="btn btn-light mx-3" @click="showModal = !showModal">No</label>
    <label class="btn btn-success mx-3" @click="postTicket">Si</label>
  </va-modal>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, helpers, maxLength, minLength } from "@vuelidate/validators";
import { useModalStore } from "../../../stores/ui/modal";
import { useAlertStore } from "../../../stores/ui/alert";

const newTicket = ref({
  cod_eng: null,
  cod_part: null,
  init_date: null,
  fin_date: null,
  hours: null,
  state: null,
  desc: null,
});

const modalStore = useModalStore();
const alertStore = useAlertStore();

const rules = {
  cod_eng: {
    required: helpers.withMessage(
      "El código de ingeniero es necesario",
      required
    ),
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
    required: helpers.withMessage(
      "El código de partner es necesario",
      required
    ),
    minLength: helpers.withMessage(
      "El código de partner no puede ser menor a 10 digítos",
      minLength(10)
    ),
    maxLength: helpers.withMessage(
      "El código de partner no puede ser mayor a 10 digítos",
      maxLength(10)
    ),
  },
  init_date: {
    required: helpers.withMessage("La fecha es requerida", required),
  },
  fin_date: {
    required: helpers.withMessage("La fecha es requerida", required),
  },
  hours: {
    required: helpers.withMessage("La(s) horas son requerida", required),
    maxLength: helpers.withMessage(
      "La hora no puede ser mayor a 6 dígitos",
      maxLength(6)
    ),
  },
  state: {
    required: helpers.withMessage("El estado es requerido", required),
  },
  desc: {
    maxLength: helpers.withMessage(
      "La descripción debe ser menor a 80 carácteres es requerida",
      maxLength(80)
    ),
  },
};

const v$ = useVuelidate(rules, newTicket);

const submitTicket = async () => {
  alertStore.resetAlert();
  const result = await v$.value.$validate();
  if (result) {
    showModal.value = !showModal.value;
  }
};

const postTicket = async () => {
  modalStore.setType("wait_offcanvas");
  await axios
    .post("staff/set-ticket", newTicket.value)
    .then((res) => {
      if (res.data && res.data.success_msg && res.data.num_ticket) {
        modalStore.resetModal();
        alertStore.setAlert("alert-success", [
          `${res.data.success_msg} || Número de ticket: ${res.data.num_ticket}`,
        ]);
        showModal.value = !showModal.value;
      }
    })
    .catch((err) => {
      modalStore.resetModal();
      showModal.value = !showModal.value;
      // If there's any error
      if (err.response.data) {
        // If there's an error_msg, set it as an alert
        alertStore.setAlert("alert-danger", err.response.data);
      } else alertStore.setAlert("alert-danger", ["Hubo un error"]); // Else, just put an alert saying, there's an error
    });
};

const showModal = ref(false);
</script>

<style scoped>
.error {
  color: red;
}
</style>
