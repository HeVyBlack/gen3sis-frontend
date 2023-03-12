<template v-if="user">
  <template v-if="tickets"
    ><div class="row">
      <div class="col">
        <va-list>
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
                {{
                  user.type == "engineer"
                    ? "Para el partner número: " + ticket.cod_part
                    : user.type == "partner"
                    ? "Con el ingeniero número: " + ticket.cod_eng
                    : null
                }}
              </va-list-item-label>
            </va-list-item-section>

            <va-list-item-section icon>
              <va-icon
                class="mx-2"
                name="fas_calendar_check"
                color="#0062ff"
                @click="initModal(ticket)"
              />
              <va-icon
                class="mx-2"
                name="remove_red_eye"
                color="#0062ff"
                @click="initModal(ticket)"
              />
            </va-list-item-section>
          </va-list-item>
        </va-list>
        <template v-if="Object.keys(navOptions).length > 0">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <template v-if="navOptions.hasPrevPage"
                ><li class="page-item" @click="changePage(navOptions.prevPage)">
                  <a class="page-link">Previous</a>
                </li>
              </template>

              <template v-if="navOptions.page"
                ><li class="page-item">
                  <a class="page-link">{{ navOptions.page }}</a>
                </li></template
              >

              <template v-if="navOptions.hasNextPage"
                ><li class="page-item" @click="changePage(navOptions.nextPage)">
                  <a class="page-link">Next</a>
                </li>
              </template>
            </ul>
          </nav>
        </template>
      </div>
      <va-modal v-model="showModal" no-padding>
        <template #content="{ ok }">
          <va-card-title> información de ticket </va-card-title>
          <va-card-content>
            <div class="row">
              <div class="col">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    Código de ingeniero: {{ ticket.cod_eng }}
                  </li>
                  <li class="list-group-item">
                    Código de partner: {{ ticket.cod_part }}
                  </li>
                  <li class="list-group-item">
                    Fecha de inicio: {{ ticket.init_date }}
                  </li>
                  <li class="list-group-item">
                    Fecha de finalización: {{ ticket.fin_date }}
                  </li>
                  <li class="list-group-item">Horas: {{ ticket.hours }}</li>
                  <li class="list-group-item">
                    Stado:
                    {{ ticket.state === false ? "Abierto" : "Cerrado" }}
                  </li>
                  <li class="list-group-item">
                    Descripción: {{ ticket.desc }}
                  </li>
                  <li class="list-group-item">
                    Número de ticket: {{ ticket.num_ticket }}
                  </li>
                </ul>
              </div>
            </div>
          </va-card-content>
          <va-card-actions>
            <va-button @click="ok" color="primary">Cerrar</va-button>
          </va-card-actions>
        </template>
      </va-modal>
    </div>
  </template>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "../../../stores/auth";
import { useModalStore } from "../../../stores/ui/modal";
import { useAlertStore } from "../../../stores/ui/alert";
const tickets = ref(null);
const authStore = useAuthStore();
const modalStore = useModalStore();
const alertStore = useAlertStore();

const { user } = storeToRefs(authStore);
const navOptions = ref({});
onMounted(() => {
  modalStore.setType("wait_offcanvas");
  axios
    .get("/user/get-tickets")
    .then((res) => {
      for (const i in res.data) {
        if (i == "docs") {
          tickets.value = res.data.docs;
        } else navOptions.value[i] = res.data[i];
      }
      modalStore.resetModal();
    })
    .catch((err) => {
      showModal.value = !showModal.value;
      // If there's any error
      if (err.response.data) {
        // If there's an error_msg, set it as an alert
        alertStore.setAlert("alert-danger", err.response.data);
      } else alertStore.setAlert("alert-danger", ["Hubo un error"]); // Else, just put an alert saying, there's an error
      modalStore.resetModal();
    });
});

const showModal = ref(false);

const ticket = ref(null);

const initModal = (item) => {
  ticket.value = item;
  showModal.value = !showModal.value;
};

const changePage = async (page) => {
  modalStore.setType("wait_offcanvas");
  axios
    .get(`/user/get-tickets?page=${page}`)
    .then((res) => {
      for (const i in res.data) {
        if (i == "docs") {
          tickets.value = res.data.docs;
        } else navOptions.value[i] = res.data[i];
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
  modalStore.resetModal();
};
</script>

<style lang="scss" scoped>
.list__item + .list__item {
  margin-top: 20px;
}

.list__item:hover {
  cursor: pointer;
}
</style>
