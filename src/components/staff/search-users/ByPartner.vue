<template>
  <div>
    <div class="container border border-danger my-2 col-12 text-center">
      <h1>Partners:</h1>
      <div class="row">
        <div class="p-3">
          <div>
            <h6>Verificó su info</h6>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="formToSearch.verified_info"
            >
              <option value="none"></option>
              <option value="true">Verdadero</option>
              <option value="false">Falso</option>
            </select>
          </div>
          <br />
          <div>
            <h6>Verificó su email</h6>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="formToSearch.verified_email"
            >
              <option value="none"></option>
              <option value="true">Verdadero</option>
              <option value="false">Falso</option>
            </select>
          </div>
        </div>
        <h4>Información de cuenta</h4>
        <!--r_social-->

        <div>
          <label for="r_social" class="form-label"
            ><strong>Razón social</strong></label
          >
          <input
            type="text"
            class="form-control"
            id="r_social"
            aria-describedby="r_social_help"
            v-model="formToSearch.account.r_social"
          />
        </div>
        <br />
        <!--nit-->
        <div>
          <label for="nit" class="form-label"><strong>Tú NIT</strong></label>
          <input
            type="text"
            class="form-control"
            id="nit"
            aria-describedby="nit_help"
            v-model="formToSearch.account.nit"
          />
        </div>
        <br />
        <!--tel-->
        <div>
          <label for="tel" class="form-label"
            ><strong>Tú teléfono</strong></label
          >
          <input
            type="text"
            class="form-control"
            id="tel"
            aria-describedby="tel_help"
            v-model="formToSearch.account.tel"
          />
        </div>
        <br />
        <!--ext-->
        <div>
          <label for="ext" class="form-label"
            ><strong>Extensión del teléfono</strong></label
          >
          <input
            type="text"
            class="form-control"
            id="ext"
            aria-describedby="ext_help"
            v-model="formToSearch.account.ext"
          />
        </div>
        <br />
        <!--web_page-->
        <div>
          <label for="web_page" class="form-label"
            ><strong>Tu página web (opcional)</strong></label
          >
          <input
            type="text"
            class="form-control"
            id="web_page"
            aria-describedby="web_page_help"
            v-model="formToSearch.account.web_page"
          />
        </div>
        <br />
        <h4>Información de contacto</h4>
        <br />
        <!--pos-->
        <div>
          <label for="pos" class="form-label"
            ><strong
              >Posición en la empresa de la persona de contacto</strong
            ></label
          >
          <input
            type="text"
            class="form-control"
            id="pos"
            aria-describedby="pos_help"
            v-model="formToSearch.cont.pos"
          />
        </div>
        <br />
        <!--name-->
        <div>
          <label for="name" class="form-label"
            ><strong>Nombre de la persona de contacto</strong></label
          >
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="name_help"
            v-model="formToSearch.cont.name"
          />
        </div>
        <br />
        <!--last_name-->
        <div>
          <label for="last_name" class="form-label"
            ><strong>Apellido de la persona de contacto</strong></label
          >
          <input
            type="text"
            class="form-control"
            id="last_name"
            aria-describedby="last_name_help"
            v-model="formToSearch.cont.last_name"
          />
        </div>
        <br />
        <!--email-->
        <div>
          <label for="email" class="form-label"
            ><strong>Email de la persona de contacto</strong></label
          >

          <input
            type="text"
            class="form-control"
            id="email"
            aria-describedby="email_help"
            v-model="formToSearch.cont.email"
          />
        </div>
        <br />
        <!--tel-->
        <div>
          <label for="tel" class="form-label"
            ><strong>Teléfono de la persona de contacto</strong></label
          >
          <input
            type="text"
            class="form-control"
            id="tel"
            aria-describedby="tel_help"
            v-model="formToSearch.cont.tel"
          />
        </div>
        <button class="btn btn-dark" @click="getUsers">Buscar</button>
      </div>
    </div>
    <template v-if="users">
      <div v-for="(item, index) in users" :key="index" id="users">
        <div class="container bg-light border border-danger my-5">
          <div class="row p-3">
            <div class="col">
              <ul class="list-group">
                <li class="list-group-item">Email: {{ item.email }}</li>
                <li class="list-group-item">Tipo: {{ item.type }}</li>
                <li class="list-group-item">
                  Verificó su email: {{ item.verified_email }}
                </li>
                <li class="list-group-item">
                  Verificó su info: {{ item.verified_info }}
                </li>
                <li class="list-group-item">
                  Usuario verificado: {{ item.user_checked }}
                </li>
              </ul>
            </div>
            <div class="col" v-if="item.verified_info">
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
                <li class="list-group-item">Name: {{ item.info.cont.name }}</li>
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
        </div>
      </div>
    </template>
    <nav aria-label="Navigation">
      <ul class="pagination">
        <li class="page-item">
          <a
            class="page-link btn btn-dark"
            @click="changePage(paginateOptions.prevPage)"
            v-if="paginateOptions.hasPrevPage"
            >Previous</a
          >
        </li>
        <li class="page-item">
          <a
            class="page-link btn btn-dark"
            @click="changePage(paginateOptions.nextPage)"
            v-if="paginateOptions.hasNextPage"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useAlertStore } from "../../../stores/ui/alert";
import { useModalStore } from "../../../stores/ui/modal";

// State
const modalStore = useModalStore();
const alertStore = useAlertStore();
const users = ref(null);
const paginateOptions = ref({});

const formToSearch = ref({
  verified_email: null,
  verified_info: null,
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
    formToSearch.value.verified_email &&
    formToSearch.value.verified_email != "none"
  ) {
    url =
      url + `verified_email=${formToSearch.value.verified_email === "true"}&`;
  }
  if (
    formToSearch.value.verified_info &&
    formToSearch.value.verified_info != "none"
  ) {
    url = url + `verified_info=${formToSearch.value.verified_info === "true"}&`;
  }

  // If type is partner
  // Make a for in, in partner account section
  for (const propery in formToSearch.value.account) {
    // If value is not a null
    if (formToSearch.value.account[propery]) {
      // Set it in url
      url =
        url +
        `info.account.${propery}=${formToSearch.value.account[
          propery
        ].trim()}&`;
    }
  }
  // Make a for in, in partner cont section
  for (const propery in formToSearch.value.cont) {
    // If value is not a null
    if (formToSearch.value.cont[propery]) {
      // Set it in url
      url =
        url +
        `info.cont.${propery}=${formToSearch.value.cont[propery].trim()}&`;
    }
  }

  // Send the url, with querys
  await axios
    .get(url)
    .then((res) => {
      // If data docs exists and, has users
      if (res.data.docs && res.data.docs.length > 0) {
        // Save users in users const
        users.value = res.data.docs;
        // Information giving by mongoose paginate -->
        // hasNextPage
        paginateOptions.value.hasNextPage = res.data.hasNextPage;
        // hasPrevePage
        paginateOptions.value.hasPrevPage = res.data.hasPrevPage;
        // nextPage
        paginateOptions.value.nextPage = res.data.nextPage;
        // totalPages
        paginateOptions.value.totalPages = res.data.totalPages;
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
  const res = await axios.get(url + `page=${page}`);
  // Reset modal
  modalStore.resetModal();
  // If there's users found, set paginateOptios, and set users found in users const
  if (res.data.docs.length > 0) {
    users.value = res.data.docs;
    // Information giving by mongoose paginate -->
    // hasNextPage
    paginateOptions.value.hasNextPage = res.data.hasNextPage;
    // hasPrevPage
    paginateOptions.value.hasPrevPage = res.data.hasPrevPage;
    // nextPage
    paginateOptions.value.nextPage = res.data.nextPage;
    // totalPages
    paginateOptions.value.totalPages = res.data.totalPages;
    // prevPage
    paginateOptions.value.prevPage = res.data.prevPage;
  } else {
    // Else, show an alert
    alertStore.setAlert("alert-danger", ["No hay usuarios"]);
  }
};
</script>

<style scoped></style>
