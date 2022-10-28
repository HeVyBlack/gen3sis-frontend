<template>
  <div id="index">
    <template v-if="user">
      <template v-if="user.verified_info">
        <template v-if="user.type == 'engineer'">
          <template v-if="user.user_checked">
            <div class="container text-center p-5">
              <div class="row justify-content-center">
                <div class="col-6">
                  <div class="alert alert-success" role="alert">
                    <h4 class="alert-heading">Ya estás de alta!</h4>
                    <div>
                      <p class="mb-0">
                        Ya estás de alta! Ahora, hay que esperar a que te
                        lleguen casos ;)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="container text-center p-5">
              <div class="row">
                <div class="alert alert-warning" role="alert">
                  <h4 class="alert-heading">No te hemos dado de alta!</h4>
                  <div>
                    <p class="mb-0">
                      Ya vlidates tu información, nos pondremos en contacto
                      contigo en menos de 48h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
        <template v-if="user.type == 'partner'">
          <template v-if="user.user_checked">
            <div class="container text-center p-5">
              <div class="row">
                <div class="alert alert-success" role="alert">
                  <h4 class="alert-heading">Ya estás de alta!</h4>
                  <div>
                    <p class="mb-0">Ya estás listo para presentar casos</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="container p-5 text-center">
              <div class="row">
                <div class="alert alert-warning" role="alert">
                  <h4 class="alert-heading">No te hemos dado de alta!</h4>
                  <div v-if="user.pets && user.pets.length == 0">
                    <p>
                      <font-awesome-icon
                        icon="fa-solid fa-triangle-exclamation"
                      />
                      Pero, tienes un caso urgente? O, quieres conocer nuestros
                      servicios?
                    </p>
                    <hr />
                    <p class="mb-0">
                      Te podemos atender en sala
                      <a
                        href="https://servidesk.gen3sis.co/portal/es/signin"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><strong
                          class="link btn btn-dark"
                          @click="makePartRequest"
                          >crítica</strong
                        ></a
                      >
                    </p>
                  </div>
                  <div v-else>
                    <p>
                      <font-awesome-icon
                        icon="fa-solid fa-triangle-exclamation"
                      />Ya tienes una petición de urgencia activa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
      </template>
      <template v-else>
        <div class="container p-5 text-center">
          <h1>No haz verificado tu info</h1>
          <h2>
            Por favor, verificala
            <router-link
              :to="{ name: 'dash-verify-info' }"
              class="btn btn-dark text-light"
              >Aquí</router-link
            >
          </h2>
        </div>
      </template>
    </template>
    <template v-else>
      <div class="container text-center pt-5" id="container">
        <div class="row gap-5 justify-content-center m-3 pt-5 mt-5">
          <router-link
            :to="{ name: 'eng' }"
            class="col-md-12 col-lg-4 pt-5 go-to"
            id="engineer"
          >
            <div>
              <h3>
                Ingeniero
                <font-awesome-icon icon="fa-solid fa-user-gear" />
              </h3>
            </div>
            <p>
              Inicia seisón como Ingeniero
              <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </p>
          </router-link>
          <router-link
            :to="{ name: 'part' }"
            class="col-md-12 col-lg-4 pt-5 go-to"
            id="partner"
          >
            <div>
              <h3>
                Partner
                <font-awesome-icon icon="fa-solid fa-user-tie" />
              </h3>
            </div>
            <p>
              Inicia seisón como partner
              <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </p>
          </router-link>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
// Imports
import axios from "axios";
import { storeToRefs } from "pinia"; // To ref stores

import { useAuthStore } from "../stores/auth"; // authStore
import { useAlertStore } from "../stores/ui/alert";
import { useModalStore } from "../stores/ui/modal";

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

<style scoped>
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: black;
}

#engineer {
  background-color: #eed777;
}

#partner {
  background-color: #1fcfcc;
}

.link {
  text-decoration-line: underline;
}

.link:hover {
  cursor: pointer;
}

#index {
  height: 70vh;
  background-image: url("../assets/isotipo.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.go-to {
  border-style: solid !important;
  border-color: transparent !important;
}

.go-to p {
  font-family: "Nunito", sans-serif;
}

.go-to:hover {
  border-style: solid !important;
  border-color: transparent rgba(163, 163, 163, 0.8) rgba(163, 163, 163, 0.8)
    transparent !important;
}
</style>
