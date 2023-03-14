<template>
  <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
    <fieldset :disabled="disabled" class="border border-white p-3">
      <legend>Agregar Reporte</legend>
      <div class="container">
        <p class="text-danger">(*) son campos obligatorios</p>
        <ul>
          <va-alert
            v-for="(msg, index) in aux.msg"
            :key="index"
            color="danger"
            class="mb-4"
          >
            {{ msg }}
          </va-alert>
          <li>
            <label for="num_ticket"
              >Ingresa el numero de ticket
              <strong class="text-danger">*</strong></label
            >
            <input
              type="number"
              name="num_ticket"
              id="num_tikcet"
              required
              max="9999"
              min="0"
              v-model="form.num_ticket"
            />
          </li>
          <li>
            <label for="client"
              >Ingresa el nombre del cliente
              <strong class="text-danger">*</strong></label
            >
            <input
              type="text"
              minlength="3"
              maxlength="50"
              id="client"
              name="client"
              required
              v-model="form.client"
            />
          </li>
          <li>
            <label for="date"
              >Ingresa la fecha <strong class="text-danger">*</strong></label
            >
            <input
              type="date"
              name="date"
              id="date"
              :min="date"
              :value="date"
              disabled
            />
          </li>
          <li>
            <label for="target"
              >Ingresa los objetivos/alcances
              <strong class="text-danger">*</strong></label
            >
            <textarea
              name="target"
              id="target"
              v-model="form.target"
              minlength="10"
              maxlength="250"
              cols="35"
              rows="3"
              placeholder="Objetivos/Alcances"
              required
            />
          </li>
          <li>
            <label for="time"
              >Ingresa el tiempo empleado (horas)
              <strong class="text-danger">*</strong></label
            >
            <input
              type="number"
              name="time"
              id="time"
              min="1"
              max="999"
              v-model.number="form.time"
              required
            />
          </li>
          <li>
            <label for="activities"
              >Ingresa las actividades realizadas
              <strong class="text-danger">*</strong></label
            >
            <textarea
              cols="35"
              rows="3"
              name="activities"
              id="activities"
              minlength="3"
              maxlength="350"
              placeholder="Actividades Realizadas"
              required
              v-model="form.activities"
            />
          </li>
          <li>
            <label for="addi_find"
              >Ingresa los hallazgos adicionales
              <strong class="text-danger">*</strong></label
            >
            <textarea
              cols="35"
              rows="3"
              placeholder="Hallazgos Adicionales"
              name="addi_find"
              id="addi_find"
              minlength="3"
              maxlength="500"
              required
              v-model="form.addi_find"
            />
          </li>
          <li>
            <label for="link_record"
              >Ingresa el link de la grabacion
              <strong class="text-danger">*</strong></label
            >
            <input
              type="url"
              name="link_record"
              id="link_record"
              pattern="https://.*"
              required
              v-model="form.link_record"
            />
          </li>
          <li>
            <label for="rel_case"
              >Resolucion del caso <strong class="text-danger">*</strong></label
            >
            <textarea
              cols="35"
              rows="3"
              placeholder="Resolucion"
              name="rel_case"
              id="rel_case"
              minlength="3"
              maxlength="500"
              required
              v-model="form.rel_case"
            />
          </li>
          <li>
            <label for="case_state"
              >Ingrea el estado del caso
              <strong class="text-danger">*</strong></label
            >
            <select
              name="case_state"
              id="case_state"
              v-model="form.case_state"
              required
            >
              <option :value="false">En espera</option>
              <option :value="true">Cerrado</option>
            </select>
          </li>
          <li>
            <label for="files"
              >Ingrea los archivos <strong class="text-danger">*</strong></label
            >
            <input
              type="file"
              name="files"
              id="files"
              accept="image/jpeg, image/jpg, .jpeg, .jpg, video/mp4, .mp4"
              multiple
              required
              @change="handleChangeFile"
            />
          </li>
        </ul>
        <button type="submit" class="btn btn-success">Enviar</button>
      </div>
    </fieldset>
  </form>
</template>

<script setup>
import { useAuthStore } from "../../../stores/auth";
import axios from "axios";
import moment from "moment";
import { ref } from "vue";
import router from "../../../router";

const authStore = useAuthStore();

const date = moment().format("YYYY-MM-DD");

const form = ref({
  num_ticket: null,
  client: null,
  date: date,
  target: null,
  time: null,
  activities: null,
  addi_find: null,
  link_record: null,
  rel_case: null,
  case_state: null,
});

const aux = ref({
  files: null,
  msg: [],
});

const disabled = ref(false);

const handleSubmit = async () => {
  aux.value.msg = [];
  if (confirm("Estas a punto de guardar un reporte, estas seguro?")) {
    disabled.value = !disabled.value;

    const newForm = JSON.stringify({ ...form.value });

    const postForm = new FormData();

    postForm.append("data", newForm);

    for (let i = 0; i < aux.value.files.length; i++) {
      postForm.append("file", aux.value.files[i]);
    }

    try {
      const res = await axios.post("/eng/add-report", postForm);
      alert(res.data);
      await authStore.refreshSate();
      router.push({ name: "get-tickets" });
      disabled.value = !disabled.value;
    } catch (e) {
      if (Array.isArray(e.response.data)) {
        aux.value.msg = e.response.data;
      } else aux.value.msg.push(e.response.data);
      disabled.value = !disabled.value;
    }
  }
};

const handleChangeFile = (e) => {
  const files = e.target.files || e.dataTransfer.files;

  if (files.length > 10) {
    document.getElementById("files").value = "";

    alert("Solo puedes subir 10 archivos");

    return;
  }

  aux.value.files = files;
};
</script>

<style scoped>
label {
  margin-left: 1rem;
  margin-right: 1rem;
}
li {
  margin-bottom: 1rem;
}
</style>
