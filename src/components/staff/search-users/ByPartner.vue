<template>
  <div class="border border-danger p-3 container">
    <h4>Partners</h4>
    <va-form tag="form" @submit.prevent="getUsers">
      <div class="row px-3">
        <div class="col-sm-3 col-lg-3">
          <div class="my-3">
            <h6><strong>¿Verificó su info?</strong></h6>
            <select class="form-select" v-model="formData.verified_info">
              <option :value="null">Selecciona</option>
              <option :value="true">Verdadero</option>
              <option :value="false">Falso</option>
            </select>
          </div>
          <div class="my-3">
            <h6><strong>¿Verificó su email?</strong></h6>
            <select class="form-select" v-model="formData.verified_email">
              <option :value="null">Selecciona</option>
              <option :value="true">Verdadero</option>
              <option :value="false">Falso</option>
            </select>
          </div>
          <div class="my-3">
            <h6><strong>¿Usuario verificado?</strong></h6>
            <select class="form-select" v-model="formData.user_checked">
              <option :value="null">Selecciona</option>
              <option :value="true">Verdadero</option>
              <option :value="false">Falso</option>
            </select>
          </div>
        </div>

        <div class="col-sm-3 col-lg-3">
          <div class="my-3">
            <h5><strong>Contacto</strong></h5>
          </div>
          <div class="my-3">
            <h6><strong>Razón Social</strong></h6>
            <input
              type="text"
              class="form-control"
              id="r_social"
              aria-describedby="r_social_help"
              v-model="formData.account.r_social"
            />
          </div>
          <div class="my-3">
            <h6><strong>Nit</strong></h6>
            <input
              type="number"
              class="form-control"
              id="nit"
              aria-describedby="nit_help"
              v-model="formData.account.nit"
            />
          </div>
          <div class="my-3">
            <h6><strong>Teléfono</strong></h6>
            <input
              type="number"
              class="form-control"
              id="a_tel"
              aria-describedby="a_tel_help"
              v-model="formData.account.tel"
            />
          </div>
          <div class="my-3">
            <h6><strong>Extensión del teléfono</strong></h6>
            <input
              type="number"
              class="form-control"
              id="ext"
              aria-describedby="ext_help"
              v-model="formData.account.ext"
            />
          </div>
          <div class="my-3">
            <h6><strong>Página web</strong></h6>
            <input
              type="text"
              class="form-control"
              id="web_page"
              aria-describedby="web_page_help"
              v-model="formData.account.web_page"
            />
          </div>
        </div>
        <div class="col-sm-3 col-lg-3">
          <div class="my-3">
            <h5><strong>Contacto</strong></h5>
          </div>
          <div class="my-3">
            <h6><strong>Posición</strong></h6>
            <input
              type="text"
              class="form-control"
              id="pos"
              aria-describedby="pos_help"
              v-model="formData.cont.pos"
            />
          </div>
          <div class="my-3">
            <h6><strong>Nombre</strong></h6>
            <input
              class="form-control"
              type="text"
              id="name"
              v-model="formData.cont.name"
            />
          </div>
          <div class="my-3">
            <h6><strong>Apellido</strong></h6>
            <input
              class="form-control"
              type="text"
              id="last_name"
              v-model="formData.cont.last_name"
            />
          </div>
          <div class="my-3">
            <h6><strong>Email</strong></h6>
            <input
              class="form-control"
              type="email"
              id="a_email"
              v-model="formData.cont.email"
            />
          </div>
          <div class="my-3">
            <h6><strong>Teléfono</strong></h6>
            <input
              class="form-control"
              type="number"
              id="a_tel"
              v-model="formData.cont.tel"
            />
          </div>
        </div>
      </div>
      <button type="submit" class="btn m-1 bg-dark border-0 text-light">
        Buscar
      </button>
      <template v-if="users">
        <button
          class="btn m-1 bg-dark border-0 text-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasPartner"
          aria-controls="offcanvasPartner"
        >
          Ver usuarios
        </button>
      </template>
    </va-form>
  </div>
  <template v-if="users"
    ><div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasPartner"
      aria-labelledby="offcanvasRightLabel"
    >
      <template v-if="Object.keys(paginateOptions).length > 0"> </template>
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Partners</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <nav aria-label="navigation" class="m-auto mt-3">
        <ul class="pagination">
          <li
            class="page-item"
            @click="changePage(paginateOptions.prevPage)"
            v-if="paginateOptions.hasPrevPage"
          >
            <a class="page-link text-dark"
              ><va-icon name="chevron_left" size="small" /> Previo
            </a>
          </li>
          <li class="page-item" v-if="paginateOptions.page">
            <a class="page-link text-dark">{{ paginateOptions.page }}</a>
          </li>
          <li
            class="page-item"
            @click="changePage(paginateOptions.nextPage)"
            v-if="paginateOptions.hasNextPage"
          >
            <a class="page-link text-dark"
              >Siguiente <va-icon name="chevron_right" size="small"
            /></a>
          </li>
        </ul>
      </nav>
      <div class="offcanvas-body">
        <div v-for="(item, index) in users" :key="index" id="users">
          <div class="container bg-light border border-danger my-5">
            <div class="row p-3">
              <div class="col">
                <ul class="list-group">
                  <li class="list-group-item">
                    Email: <strong>{{ item.email }}</strong>
                  </li>
                  <li class="list-group-item">
                    Tipo: <strong>{{ item.type }}</strong>
                  </li>
                  <li class="list-group-item">
                    Verificó su email:
                    <strong>{{
                      item.verified_email
                        ? "Verificó su email"
                        : "No está verificado"
                    }}</strong>
                  </li>
                  <li class="list-group-item">
                    Verificó su info:
                    <strong>{{
                      item.verified_info
                        ? "Verificó su info"
                        : "No verificó su info"
                    }}</strong>
                  </li>
                  <li class="list-group-item">
                    Usuario verificado:
                    <strong>{{
                      item.user_checked
                        ? "Está verificado"
                        : "No está verificado"
                    }}</strong>
                  </li>
                  <li class="list-group-item">
                    Código: <strong>{{ item.id_code }}</strong>
                  </li>
                </ul>
              </div>
              <div class="col" v-if="item.verified_info && item.info">
                <h5>Cuenta</h5>
                <ul class="list-group">
                  <li class="list-group-item">
                    Razón social: {{ item.info.account.r_social }}
                  </li>
                  <li class="list-group-item">
                    Nit: {{ item.info.account.nit }}
                  </li>
                  <li class="list-group-item">
                    Teléfono: {{ item.info.account.tel }}
                  </li>
                  <li class="list-group-item">
                    Extensión: {{ item.info.account.ext }}
                  </li>
                  <li class="list-group-item">
                    Página web: {{ item.info.account.web_page }}
                  </li>
                </ul>
                <h5>Contacto</h5>
                <ul class="list-group">
                  <li class="list-group-item">
                    Posición: {{ item.info.cont.pos }}
                  </li>
                  <li class="list-group-item">
                    Name: {{ item.info.cont.name }}
                  </li>
                  <li class="list-group-item">
                    Apellido: {{ item.info.cont.last_name }}
                  </li>
                  <li class="list-group-item">
                    Email: {{ item.info.cont.email }}
                  </li>
                  <li class="list-group-item">
                    Teléfono: {{ item.info.cont.tel }}
                  </li>
                </ul>
              </div>
            </div>
            <template v-if="item.user_checked">
              <button
                type="submit"
                class="btn btn-dark mb-3"
                @:click="
                  item.type == 'engineer'
                    ? staffStore.setEng(item)
                    : item.type == 'partner'
                    ? staffStore.setPart(item)
                    : null
                "
              >
                Crear ticket
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useAlertStore } from "../../../stores/ui/alert";
import { useModalStore } from "../../../stores/ui/modal";
import { useStaffStore } from "../../../stores/staff";

// State
const staffStore = useStaffStore();
const modalStore = useModalStore();
const alertStore = useAlertStore();
const users = ref(null);
const paginateOptions = ref({});

const formData = ref({
  verified_email: null,
  verified_info: null,
  user_checked: null,
  account: {
    r_social: null,
    nit: null,
    tel: null,
    ext: null,
    web_page: null,
  },
  cont: {
    pos: null,
    name: null,
    last_name: null,
    email: null,
    tel: null,
  },
});

let url = "/staff/get-users?type=partner&";

const getUsers = async () => {
  alertStore.resetAlert();
  // Reassign url
  url = "/staff/get-users?type=partner&";

  // Set offcanvas
  modalStore.setType("wait_offcanvas");
  // Basics querys (type, verified email, and verified info)

  if (
    formData.value.verified_email &&
    formData.value.verified_email != "none"
  ) {
    url = url + `verified_email=${formData.value.verified_email === "true"}&`;
  }
  if (formData.value.verified_info && formData.value.verified_info != "none") {
    url = url + `verified_info=${formData.value.verified_info === "true"}&`;
  }

  // If type is partner
  // Make a for in, in partner account section
  for (const propery in formData.value.account) {
    // If value is not a null
    if (formData.value.account[propery]) {
      // Set it in url
      url =
        url +
        `info.account.${propery}=${formData.value.account[propery].trim()}&`;
    }
  }
  // Make a for in, in partner cont section
  for (const propery in formData.value.cont) {
    // If value is not a null
    if (formData.value.cont[propery]) {
      // Set it in url
      url =
        url + `info.cont.${propery}=${formData.value.cont[propery].trim()}&`;
    }
  }

  // Send the url, with querys
  await axios
    .get(url)
    .then((res) => {
      // If data docs exists and, has users
      if (res.data.docs && res.data.docs.length > 0) {
        for (const i in res.data) {
          if (i == "docs") {
            users.value = res.data.docs;
          } else paginateOptions.value[i] = res.data[i];
        }
      } else alertStore.setAlert("alert-danger", ["No hay usuarios"]); // Else, set an alert
    })
    .catch((err) => {
      // If there's any error, set an alert
      alertStore.setAlert("alert-danger", err.response.data);
    });
  // Reset modal
  modalStore.resetModal();
};

// If res has more pages, this functions is called
const changePage = async (page) => {
  // Set off canvas
  modalStore.setType("wait_offcanvas");
  // Call the url, and put it the page that the user wants to go
  const res = await axios.get(url + `page=${page}`).catch((err) => {
    modalStore.resetModal();
    // If there's any error
    if (err.response.data) {
      // If there's an error_msg, set it as an alert
      alertStore.setAlert("alert-danger", err.response.data);
    } else alertStore.setAlert("alert-danger", ["Hubo un error"]); // Else, just put an alert saying, there's an error
  });
  // Reset modal
  modalStore.resetModal();
  // If there's users found, set paginateOptios, and set users found in users const
  if (res.data.docs.length > 0) {
    for (const i in res.data) {
      if (i == "docs") {
        users.value = res.data.docs;
      } else paginateOptions.value[i] = res.data[i];
    }
  } else {
    // Else, show an alert
    alertStore.setAlert("alert-danger", ["No hay usuarios"]);
  }
};
</script>

<style scoped>
.page-item:hover {
  cursor: pointer;
}
</style>
