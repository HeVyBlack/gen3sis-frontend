<template>
  <div>
    <div class="container border border-danger my-2 col-12 text-center px-5">
      <div class="row p-lg-5" style="margin: auto">
        <div>
          <label for="searchWithEmail" class="form-label"
            ><h5>Buscar por email</h5></label
          >
          <div
            id="emailHelp"
            class="form-text error"
            v-for="error in v$.email.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}*
          </div>
          <br />
          <input
            type="email"
            class="form-control"
            id="searchWithEmail"
            v-model="emailToSearch.email"
          />
        </div>
        <button type="submit" class="btn btn-dark" @click="searchEmail">
          Buscar
        </button>
      </div>
    </div>

    <template v-if="user">
      <div class="container bg-light border border-danger my-5 text-center">
        <div class="row">
          <div class="col-sm-12 col-lg-6 p-3">
            <button type="submit" class="btn btn-dark" @click="clear">
              Limpiar
            </button>
            <br />
            <br />
            <ul class="list-group">
              <ul class="list-group">
                <li class="list-group-item">Email: {{ user.email }}</li>
                <li class="list-group-item">Tipo: {{ user.type }}</li>
                <li class="list-group-item">
                  Verificó su email: {{ user.verified_email }}
                </li>
                <li class="list-group-item">
                  Verificó su info: {{ user.verified_info }}
                </li>
                <li class="list-group-item">
                  Usuario verificado: {{ user.user_checked }}
                </li>
                <li class="list-group-item">Código: {{ user.id_code }}</li>
              </ul>
            </ul>
            <template v-if="user.type == 'engineer' && user.verified_info">
              <div class="container bg-light border border-danger py-3 my-3">
                <div class="row">
                  <h5>Info:</h5>
                  <div class="col">
                    <ul class="list-group">
                      <li class="list-group-item">
                        Nombre: {{ user.info.name }}
                      </li>
                      <li class="list-group-item">
                        Apellido: {{ user.info.last_name }}
                      </li>
                      <li class="list-group-item">
                        País: {{ user.info.country }}
                      </li>
                      <li class="list-group-item">
                        Ciudad: {{ user.info.city }}
                      </li>
                      <li class="list-group-item">
                        Experiencia en dirección del proyectos:
                        {{ user.info.exp_in_pro_dir }}
                      </li>
                      <li class="list-group-item">
                        Experiencia en ejecución de proyectos:
                        {{ user.info.exp_in_exec }}
                      </li>
                      <li class="list-group-item">
                        Teléfono: {{ user.info.tel }}
                      </li>
                      <li class="list-group-item">
                        email: {{ user.info.email }}
                      </li>
                    </ul>
                    <h5>Certificados</h5>
                    <ul
                      class="list-group"
                      v-for="(cert, index) in user.info.certs"
                      :key="index"
                    >
                      <li class="list-group-item">
                        Certificado en: {{ cert.cert }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="user.type == 'partner' && user.verified_info">
              <div class="container bg-light border border-danger my-5">
                <div class="row">
                  <div class="col">
                    <h5>Cuenta</h5>
                    <ul class="list-group">
                      <li class="list-group-item">
                        Razón social: {{ user.info.account.r_social }}
                      </li>
                      <li class="list-group-item">
                        Nit: {{ user.info.account.nit }}
                      </li>
                      <li class="list-group-item">
                        Teléfono: {{ user.info.account.tel }}
                      </li>
                      <li class="list-group-item">
                        Extensión: {{ user.info.account.ext }}
                      </li>
                      <li class="list-group-item">
                        Página web: {{ user.info.account.web_page }}
                      </li>
                    </ul>
                    <h5>Contacto</h5>
                    <ul class="list-group">
                      <li class="list-group-item">
                        Posición: {{ user.info.cont.pos }}
                      </li>
                      <li class="list-group-item">
                        Name: {{ user.info.cont.name }}
                      </li>
                      <li class="list-group-item">
                        Apellido: {{ user.info.cont.last_name }}
                      </li>
                      <li class="list-group-item">
                        Email: {{ user.info.cont.email }}
                      </li>
                      <li class="list-group-item">
                        Teléfono: {{ user.info.cont.tel }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div class="col-sm-12 col-lg-2 p-2">
            <div class="p-4">
              <h6>Usuario verificado:</h6>
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="updateUser.user_checked"
              >
                <option value="false">No</option>
                <option value="true">Sí</option>
              </select>
            </div>
            <div class="p-4">
              <h6>Confirmar email:</h6>
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="updateUser.verified_email"
              >
                <option value="false">No</option>
                <option value="true">Sí</option>
              </select>
            </div>
            <div class="p-4">
              <h6>Confirmar info:</h6>
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="updateUser.verified_info"
              >
                <option value="false">No</option>
                <option value="true">Sí</option>
              </select>
            </div>
            <div class="p-4">
              <h6>Modificar rol:</h6>
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="updateUser.role"
              >
                <option value="user">Usuario</option>
                <option value="admin">Administrador</option>
                <option value="super_user">Super Usuario</option>
              </select>
            </div>
            <button class="btn btn-dark" @click="updateUserPost">
              Actualizar
            </button>
          </div>
          <div
            class="col-sm-12 col-lg-4 p-2"
            v-if="user.pets && user.pets.length > 0"
          >
            <div class="p-4">
              <div v-for="(item, index) in user.pets" :key="index">
                <ul class="list-group">
                  <li class="list-group-item">
                    Codigo de petición: {{ item.pet }}
                  </li>
                  <li class="list-group-item">Mensaje: {{ item.msg }}</li>
                </ul>
              </div>
            </div>
            <button class="btn btn-dark" @click="clearUserPet">
              Limpiar peticiones del usuario
            </button>
          </div>
          <div class="col-sm-12 col-lg-4 p-4" v-else>
            <h5>
              <div class="alert alert-warning" role="alert">
                <h4 class="alert-heading">Sin peticiones...</h4>
                <div>
                  <p class="mb-0">El usuario no tiene petición alguna</p>
                </div>
              </div>
            </h5>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
// --> Search with Email
// Imports
import { ref } from "vue";
import axios from "axios";
import { useAlertStore } from "../../../stores/ui/alert";
import { useModalStore } from "../../../stores/ui/modal";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { validate } from "email-validator";

// Vuelidate
import useVuelidate from "@vuelidate/core";

import { required, email, helpers } from "@vuelidate/validators";

const route = useRoute();

const alertStore = useAlertStore();
const modalStore = useModalStore();

const user = ref(null);
const rule = ref({
  email: {
    required: helpers.withMessage("El email debe ser requerido", required),
    email: helpers.withMessage("El email debe ser válido", email),
  },
});

const emailToSearch = ref({ email: null }); // Const that contains email

const updateUser = ref({
  email: null,
  type: null,
  verified_email: null,
  verified_info: null,
  user_checked: null,
  role: null,
});

// v$, required for Vuelidate
const v$ = useVuelidate(rule, emailToSearch.value);

const searchEmail = async () => {
  alertStore.resetAlert();

  modalStore.setType("wait_offcanvas");

  const result = await v$.value.$validate();

  if (result) {
    // Make a request in backend
    await axios
      .get(`/staff/get-users?email=${emailToSearch.value.email}`)
      .then((res) => {
        // If res has data
        if (res.data && Object.keys(res.data).length > 0) {
          // Set data in user const
          user.value = res.data;

          updateUser.value.email = res.data.email;
          updateUser.value.type = res.data.type;
          updateUser.value.user_checked = res.data.user_checked;
          updateUser.value.verified_email = res.data.verified_email;
          updateUser.value.verified_info = res.data.verified_info;

          updateUser.value.role = res.data.roles[0].name;
        }
      })
      .catch((err) => {
        // If there's any error
        if (err.response.data.error_msg) {
          // If there's an error_msg, set it as an alert
          alertStore.setAlert("alert-danger", [err.response.data.error_msg]);
        } else alertStore.setAlert("alert-danger", ["Hubo un error"]); // Else, just put an alert saying, there's an error
      });
  }
  modalStore.resetModal();
};

onMounted(() => {
  if (route.query.email && validate(route.query.email)) {
    emailToSearch.value.email = route.query.email;
    searchEmail();
  }
});

const updateUserPost = async () => {
  modalStore.setType("wait_offcanvas");
  alertStore.resetAlert();
  if (typeof updateUser.value.user_checked == "string") {
    updateUser.value.user_checked = updateUser.value.user_checked === "true";
  }
  if (typeof updateUser.value.verified_email == "string") {
    updateUser.value.verified_email =
      updateUser.value.verified_email === "true";
  }
  if (typeof updateUser.value.verified_info == "string") {
    updateUser.value.verified_info = updateUser.value.verified_info === "true";
  }
  await axios
    .put("/staff/update-user", updateUser.value)
    .then((res) => {
      if (res.data.success_msg) {
        alertStore.setAlert("alert-success", [res.data.success_msg]);
      }
    })
    .catch((err) => {
      console.log(err.response);
      if (err.response.data.error_msg) {
        // If there's an error_msg, set it as an alert
        alertStore.setAlert("alert-danger", [err.response.data.error_msg]);
      } else alertStore.setAlert("alert-danger", ["Hubo un error"]);
    });
  modalStore.resetModal();
};

const clear = () => {
  v$.value.$reset();
  user.value = null;
  emailToSearch.value.email = null;
};

const clearUserPet = async () => {
  modalStore.setType("wait_offcanvas");
  alertStore.resetAlert();
  await axios
    .put("/staff/clear-user-pet", user.value)
    .then((res) => {
      if (res.data.success_msg) {
        alertStore.setAlert("alert-success", [res.data.success_msg]);
      }
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
.error {
  color: red;
}
</style>
