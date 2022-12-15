<template>
  <template v-if="user.user_checked">
    <div class="container text-center p-5">
      <div class="row">
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">¡Ya estás de alta!</h4>
          <div>
            <p class="mb-0">Ya estás listo para presentar casos</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="container p-5 text-center">
      <div class="row p-5">
        <div class="alert alert-warning" role="alert">
          <h4 class="alert-heading">¡No te hemos dado de alta!</h4>
          <template v-if="user.pets && user.pets.length == 0">
            <p>
              <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
              Pero, ¿tienes un caso urgente? o, ¿quieres conocer nuestros
              servicios?
            </p>
            <hr />
            <p class="mb-0">
              Te podemos atender en sala
              <a
                href="https://servidesk.gen3sis.co/portal/es/signin"
                target="_blank"
                rel="noopener noreferrer"
                ><strong class="link btn btn-dark" @click="makePartRequest"
                  >CRÍTICA</strong
                ></a
              >
            </p>
          </template>
          <div v-else>
            <p>
              <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />Ya
              tienes una petición de urgencia activa
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
// Imports
import axios from "axios";
import { storeToRefs } from "pinia"; // To ref stores

import { useAuthStore } from "../../stores/auth"; // authStore
import { useAlertStore } from "../../stores/ui/alert";
import { useModalStore } from "../../stores/ui/modal";

const authStore = useAuthStore();
const alertStore = useAlertStore();
const modalStore = useModalStore();
// Ref user
const { user } = storeToRefs(authStore);

const makePartRequest = async () => {
  modalStore.setType("wait_offcanvas");
  alertStore.resetAlert();
  await axios
    .post("/part/make-request", { pet: 211 })
    .then((res) => {
      if (res.data.success_msg) {
        alertStore.setAlert("alert-success", [res.data.success_msg]);
      }
      authStore.refreshSate();
    })
    .catch((err) => {
      if (err.response.data.error_msg) {
        // If there's an error_msg, set it as an alert
        alertStore.setAlert("alert-danger", [err.response.data.error_msg]);
      } else alertStore.setAlert("alert-danger", ["Hubo un error"]);
    });
  modalStore.resetModal();
};
</script>

<style scoped></style>
