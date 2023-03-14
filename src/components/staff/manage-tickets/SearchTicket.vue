<template>
  <div>
    <div>
      <div class="mb-3">
        <h4><strong>Buscar Tickets</strong></h4>
        <label for="cod_ing" class="form-label">Código de ingeniero</label>
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
    </div>
    <template v-if="tickets">
      <va-list class="my-4">
        <va-list-label> tickets </va-list-label>

        <va-list-item
          class="list__item item"
          v-for="(ticket, index) in tickets"
          :key="index"
        >
          <va-list-item-section>
            <va-list-item-label>
              Ticket número: {{ ticket.num_ticket }}
            </va-list-item-label>

            <va-list-item-label caption>
              {{ "Para el partner número: " + ticket.cod_part }}
            </va-list-item-label>
            <va-list-item-label caption>
              {{ "Con el ingeniero número: " + ticket.cod_eng }}
            </va-list-item-label>
          </va-list-item-section>

          <va-list-item-section icon>
            <va-icon
              name="edit"
              color="success"
              class="mx-2"
              @click="editTicket(ticket)"
            />
            <va-icon
              name="remove_red_eye"
              color="background-tertiary"
              @click="initModal(ticket)"
            />
          </va-list-item-section>
        </va-list-item>
      </va-list>
      <template v-if="Object.keys(navOptions).length > 0">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li
              class="page-item"
              @click="changePage(navOptions.prevPage)"
              v-if="navOptions.hasPrevPage"
            >
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item" v-if="navOptions.page">
              <a class="page-link">{{ navOptions.page }}</a>
            </li>
            <li
              class="page-item"
              @click="changePage(navOptions.nextPage)"
              v-if="navOptions.hasNextPage"
            >
              <a class="page-link">Next</a>
            </li>
          </ul>
        </nav>
      </template>
    </template>
    <template>
      <va-modal v-model="showModal" no-padding :hide-default-actions="true">
        <va-card-title> información de ticket </va-card-title>
        <va-card-content>
          <div class="row">
            <div class="col">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Ingenieros:
                  <ul>
                    <li v-for="(eng, index) in ticket.engs" :key="eng">
                      {{ index }}, {{ eng }}
                    </li>
                  </ul>
                </li>
                <li class="list-group-item">Partner: {{ ticket.part }}</li>
                <li class="list-group-item">
                  Fecha de Creación: {{ ticket.make_date }}
                </li>
                <li class="list-group-item">
                  Fecha de Cierre: {{ ticket.close_date }}
                </li>
                <li class="list-group-item">Tiempo: {{ ticket.time || 0 }}</li>
                <li class="list-group-item">
                  Estado: {{ ticket.state === false ? "Abierto" : "Cerrado" }}
                </li>
                <li class="list-group-item">Descripción: {{ ticket.desc }}</li>
                <li class="list-group-item">
                  Número de ticket: {{ ticket.num_ticket }}
                </li>
                <p class="my-2">Reportes</p>
                <va-tree-view :nodes="ticket.reports">
                  <template #content="rep">
                    <button class="btn btn-default" @click="reportTicket(rep)">
                      {{ rep.date }}
                    </button>
                  </template>
                </va-tree-view>
              </ul>
            </div>
          </div>
        </va-card-content>
        <va-card-actions>
          <va-button @click="showModal = !showModal" color="primary"
            >Cerrar</va-button
          >
        </va-card-actions>
      </va-modal>
      <va-modal v-model="showEditModal" no-padding :hide-default-actions="true">
        <va-card-title>
          Editar ticket número: {{ ticketToEdit.num_ticket }}</va-card-title
        >
        <va-card-content>
          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label for="init_date" class="form-label">Fecha Inicio</label>
                <div
                  id="emailHelp"
                  class="form-text error"
                  v-for="error in e$.init_date.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}*
                </div>
                <input
                  type="date"
                  class="form-control"
                  id="init_date"
                  placeholder="Ingresa la fecha de inicio"
                  v-model="ticketToEdit.init_date"
                />
              </div>
              <div class="mb-3">
                <label for="fin_date" class="form-label"
                  >Fecha Finalización</label
                >
                <div
                  id="emailHelp"
                  class="form-text error"
                  v-for="error in e$.fin_date.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}*
                </div>
                <input
                  type="date"
                  class="form-control"
                  id="fin_date"
                  placeholder="Ingresa la fecha de finalización"
                  v-model="ticketToEdit.fin_date"
                />
              </div>
              <div class="mb-3">
                <label for="hours" class="form-label">Horas</label>
                <div
                  id="emailHelp"
                  class="form-text error"
                  v-for="error in e$.hours.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}*
                </div>
                <input
                  type="number"
                  class="form-control"
                  id="hours"
                  placeholder="Ingresa las horas"
                  v-model="ticketToEdit.hours"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Estado</label>
                <div
                  id="emailHelp"
                  class="form-text error"
                  v-for="error in e$.state.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}*
                </div>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="ticketToEdit.state"
                >
                  <option :value="false">Aún activo</option>
                  <option :value="true">Inactivo</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="hours" class="form-label">Descripción</label>
                <div
                  id="emailHelp"
                  class="form-text error"
                  v-for="error in e$.desc.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}*
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="hours"
                  v-model="ticketToEdit.desc"
                />
              </div>
            </div>
          </div>
        </va-card-content>
        <va-card-actions>
          <va-button @click="showEditModal = !showEditModal" color="primary"
            >Cerrar</va-button
          >
          <va-button @click="putEditedTicket" color="primary">Editar</va-button>
        </va-card-actions>
      </va-modal>
      <va-modal
        v-model="showReportModal"
        no-padding
        :hide-default-actions="true"
      >
        <template #content="{ ok }"
          ><va-card-title
            >Reporte del ticket: {{ ticket.num_ticket }}</va-card-title
          >
          <va-card-content>
            <ul>
              <li>Fecha: {{ report.date }}</li>
              <li>Cliente: {{ report.client }}</li>
              <li>Objetivos: {{ report.target }}</li>
              <li>Tiempo empleado: {{ report.time }}</li>
              <li>Actividades realizadas: {{ report.activities }}</li>
              <li>Hallazgos adicionales: {{ report.addi_find }}</li>
              <li>
                Link a la grabación:
                <a
                  class="text-primary"
                  :href="report.link_record"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Link</a
                >
              </li>
              <li>Resolución del caso: {{ report.rel_case }}</li>
              <li>
                Estado del caso:
                {{ report.case_state ? "Cerrado" : "Aun abierto" }}
              </li>
              <ul v-if="report.files && report.files.length > 0">
                <p>Archivos:</p>
                <li v-for="(file, index) in report.files" :key="index">
                  {{ index }}.
                  <a
                    :href="file"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-primary"
                    >{{ file.split("public/")[1] }}</a
                  >
                </li>
              </ul>
            </ul>
          </va-card-content>
          <va-card-actions>
            <va-button @click="ok" color="primary">Cerrar</va-button>
          </va-card-actions>
        </template>
      </va-modal>
    </template>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { helpers, maxLength, minLength, required } from "@vuelidate/validators";
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
      "El código de ingeniero no puede ser menor a 10 dígitos",
      minLength(10)
    ),
    maxLength: helpers.withMessage(
      "El código de ingeniero no puede ser mayor a 10 dígitos",
      maxLength(10)
    ),
  },
  cod_part: {
    minLength: helpers.withMessage(
      "El código de partner no puede ser menor a 10 dígitos",
      minLength(10)
    ),
    maxLength: helpers.withMessage(
      "El código de partner no puede ser mayor a 10 dígitos",
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
      "El número de ticket no puede tener menos 1 dígito",
      minLength(1)
    ),
    maxLength: helpers.withMessage(
      "El número de ticket no puede tener más de 5 dígitos",
      maxLength(5)
    ),
  },
};

const v$ = useVuelidate(rules, ticketToSearch);

const tickets = ref(null);

const report = ref(null);

const navOptions = ref({});

let url = "/staff/get-tickets?";

const submitTicket = async () => {
  alertStore.resetAlert();
  const result = await v$.value.$validate();
  if (result) {
    await getTicket();
  }
};

const getTicket = async () => {
  modalStore.setType("wait_offcanvas");
  url = "/staff/get-tickets?";
  for (const i in ticketToSearch.value) {
    if (
      ticketToSearch.value[i] ||
      typeof ticketToSearch.value[i] == "boolean"
    ) {
      url = url + `${i}=${ticketToSearch.value[i]}&`;
    }
  }
  axios
    .get(url)
    .then((res) => {
      for (const i in res.data) {
        if (i == "docs") {
          tickets.value = res.data.docs;
        } else navOptions.value[i] = res.data[i];
      }
      modalStore.resetModal();
    })
    .catch((err) => {
      modalStore.resetModal();
      // If there's any error
      if (err.response.data) {
        // If there's an error_msg, set it as an alert
        alertStore.setAlert("alert-danger", err.response.data);
      } else alertStore.setAlert("alert-danger", ["Hubo un error"]); // Else, just put an alert saying, there's an error
    });
};

const changePage = async (page) => {
  // Set off canvas
  modalStore.setType("wait_offcanvas");
  // Call the url, and put it the page that the user wants to go
  axios
    .get(url + `page=${page}`)
    .then((res) => {
      for (const i in res.data) {
        if (i == "docs") {
          tickets.value = res.data.docs;
        } else navOptions.value[i] = res.data[i];
      }
      modalStore.resetModal();
    })
    .catch((err) => {
      // If there's any error
      if (err.response.data) {
        // If there's an error_msg, set it as an alert
        alertStore.setAlert("alert-danger", err.response.data);
      } else alertStore.setAlert("alert-danger", ["Hubo un error"]); // Else, just put an alert saying, there's an error
      modalStore.resetModal();
    });
};

const showModal = ref(false);

const ticket = ref(null);

const initModal = (item) => {
  ticket.value = item;
  showModal.value = !showModal.value;
};

const showEditModal = ref(false);

const showReportModal = ref(false);

const ticketToEdit = ref({
  init_date: null,
  fin_date: null,
  hours: null,
  state: null,
  desc: null,
  num_ticket: null,
});

const editRules = {
  hours: {
    required: helpers.withMessage("Las horas son requeridas", required),
    maxLength: helpers.withMessage(
      "La hora no puede ser mayor a 6 dígitos",
      maxLength(6)
    ),
  },
  desc: {
    maxLength: helpers.withMessage(
      "La descripción debe ser menor a 80 caracteres es requerida",
      maxLength(80)
    ),
  },
  state: {
    required: helpers.withMessage("El estado es requerido", required),
  },
  init_date: {
    required: helpers.withMessage("La fecha es requerida", required),
  },
  fin_date: {
    required: helpers.withMessage("La fecha es requerida", required),
  },
};

const e$ = useVuelidate(editRules, ticketToEdit);

const editTicket = (ticket) => {
  const base = [
    "init_date",
    "fin_date",
    "hours",
    "state",
    "desc",
    "num_ticket",
  ];
  for (const i in ticket) {
    if (base.includes(i)) {
      ticketToEdit.value[i] = ticket[i];
    }
  }
  showEditModal.value = !showEditModal.value;
};

const reportTicket = (rep) => {
  report.value = rep;
  showReportModal.value = !showReportModal.value;
};

const putEditedTicket = async () => {
  modalStore.setType("wait-offcanvas");
  const result = await e$.value.$validate();
  if (result) {
    if (window.confirm("¿Seguro quieres editar el ticket?")) {
      axios
        .put("/staff/edit-ticket", ticketToEdit.value)
        .then((res) => {
          if (res.data && res.data.success_msg) {
            modalStore.resetModal();
            alertStore.setAlert("alert-success", res.data);
            showEditModal.value = !showEditModal.value;
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
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}

.list__item + .list__item {
  margin-top: 20px;
}

.page-item:hover {
  cursor: pointer;
}
</style>
