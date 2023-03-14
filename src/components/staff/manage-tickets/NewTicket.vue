<template>
  <form
    action="post"
    enctype="application/x-www-form-urlencoded"
    @submit.prevent="handleSubmit"
  >
    <fieldset :disabled="disabled">
      <legend>Crear Ticket</legend>
      <ul>
        <li>
          <h5>Ingresa los ingenieros</h5>
          <ul>
            <li v-for="(eng, index) in newTicket.engs" :key="eng" class="my-3">
              <label :for="`eng_${index}`" class="mx-3"
                ><strong>Ingeniero #{{ index }}</strong></label
              >
              <input
                required
                type="text"
                :name="`eng_${index}`"
                :id="`eng_${index}`"
                placeholder="Email o Codigo"
                :value="engs[index]"
                @input="($event) => handleInput($event, index)"
              />
            </li>
            <div class="container m-3 p-2">
              <button
                class="btn btn-success mx-2"
                @click="addEng()"
                type="button"
              >
                Agregar
              </button>
              <button
                type="button"
                class="btn btn-danger mx-2"
                @click="removeEng"
              >
                Quitar
              </button>
            </div>
          </ul>
        </li>
        <li class="mb-3">
          <label for="part" class="mx-3"
            ><strong>Codigo/Email Partner</strong></label
          >
          <input
            type="text"
            name="part"
            id="part"
            required
            v-model.number="newTicket.part"
          />
        </li>
        <li class="mb-3">
          <label for="make_date" class="mx-3"
            ><strong>Fecha de creacion del ticket</strong></label
          >
          <input
            id="make_date"
            name="make_date"
            type="date"
            required
            :max="newTicket.close_date ?? ''"
            v-model="newTicket.make_date"
          />
        </li>
        <li class="mb-3">
          <label for="close_date" class="mx-3"
            ><strong>Fecha de cierre</strong></label
          >
          <input
            type="date"
            name="close_date"
            id="close_date"
            required
            :min="newTicket.make_date ?? ''"
            v-model="newTicket.close_date"
          />
        </li>
        <li class="mb-3">
          <label for="service_type" class="mx-3"
            ><strong>Tipo de servicio</strong></label
          >
          <select
            name="sevice_type"
            id="sevice_type"
            required
            v-model="newTicket.service_type"
          >
            <option value="">Selecciona el tipo de servicio</option>
            <option value="Bolsa de Horas">Bolsa de Horas</option>
            <option value="Horas por Demanda">Horas por Demanda</option>
            <option value="Contrato">Contrato</option>
            <option value="Proyecto">Proyecto</option>
          </select>
        </li>
        <li class="mb-3">
          <label for="state" class="mx-3"
            ><strong>Selecciona el estado</strong></label
          >
          <select name="state" id="state" required v-model="newTicket.state">
            <option value="">Elige el estado</option>
            <option :value="false">Abierto</option>
            <option :value="true">Cerrado</option>
          </select>
        </li>
        <li class="mb-3">
          <label for="desc" class="mx-3"
            ><strong>Ingresa la descripcion</strong></label
          >
          <ul>
            <li>
              <textarea
                name="desc"
                id="desc"
                required
                minlength="10"
                maxlength="550"
                v-model="newTicket.desc"
              ></textarea>
            </li>
          </ul>
        </li>
      </ul>
      <button type="submit" class="btn btn-dark">Crear</button>
    </fieldset>
  </form>
</template>

<script setup>
import { useToast } from "vuestic-ui";
import axios from "axios";
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useStaffStore } from "../../../stores/staff";

const newTicket = ref({
  engs: [""],
  part: null,
  make_date: null,
  close_date: null,
  service_type: null,
  state: null,
  desc: null,
});

const { init } = useToast();

const staffStore = useStaffStore();

const { ticket } = storeToRefs(staffStore);

let engs = [""];

const disabled = ref(false);

onMounted(() => {
  if (ticket.value.eng.length > 0 && ticket.value.part) {
    const aux = ticket.value.eng.map((e) => e.id_code);
    newTicket.value.engs = [...aux];
    engs = [...aux];
    newTicket.value.cod_part = ticket.value.part.id_code;
    staffStore.$reset();
  }
});

function handleInput(e, index) {
  engs[index] = e.target.value;
}

function addEng() {
  engs.push("");
  newTicket.value.engs.push("");
}

function removeEng() {
  if (engs.length > 1 && newTicket.value.engs.length > 1) {
    engs.pop();
    newTicket.value.engs.pop();
  } else return;
}

async function handleSubmit() {
  disabled.value = !disabled.value;
  try {
    newTicket.value.engs = [...engs];
    const res = await axios.post("/staff/set-ticket", newTicket.value);
    if (Array.isArray(res.data)) {
      res.data.forEach((e) => init({ message: e, color: "success" }));
    } else init({ message: res.data, color: "success" });
  } catch (e) {
    if (Array.isArray(e.response.data)) {
      e.response.data.forEach((e) => init({ message: e, color: "danger" }));
    } else init({ message: e.response.data, color: "danger" });
  }
  disabled.value = !disabled.value;
}
</script>

<style scoped></style>
