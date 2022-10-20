<template>
  <div>
    <div class="container border border-danger my-2 col-12 text-center">
      <h1>Ingenieros</h1>
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
        <!--name-->
        <div>
          <label for="name" class="form-label"
            ><strong>Tu nombre</strong></label
          >
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="name_help"
            v-model="formToSearch.engineer.name"
          />
        </div>
        <br />
        <!--last_name-->
        <div>
          <label for="last_name" class="form-label"
            ><strong>Tu apellido</strong></label
          >
          <input
            type="text"
            class="form-control"
            id="last_name"
            aria-describedby="last_name_help"
            v-model="formToSearch.engineer.last_name"
          />
        </div>
        <br />
        <!--country-->
        <div>
          <label for="country" class="form-label"
            ><strong>Tu país</strong></label
          >
          <input
            type="text"
            class="form-control"
            id="country"
            aria-describedby="country_help"
            v-model="formToSearch.engineer.country"
          />
        </div>
        <br />
        <!--city-->
        <div>
          <label for="city" class="form-label"
            ><strong>Tu ciudad</strong></label
          >
          <input
            type="text"
            class="form-control"
            id="city"
            aria-describedby="city_help"
            v-model="formToSearch.engineer.city"
          />
        </div>
        <br />
        <!--level-->
        <div>
          <label for="level" class="form-label"
            ><strong>Tu nivel</strong></label
          >
          <div class="form-check">
            <input
              class="form-check-input bg-danger"
              type="radio"
              name="checkLevel"
              id="profesional"
              value="profesional"
              v-model="formToSearch.engineer.level"
            />
            <label class="form-check-label" for="profesional">
              Profesional
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input bg-danger"
              type="radio"
              name="checkLevel"
              id="technical"
              value="technical"
              v-model="formToSearch.engineer.level"
            />
            <label class="form-check-label" for="technical"> Técnico </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input bg-danger"
              type="radio"
              name="checkLevel"
              id="technologist"
              value="technologist"
              v-model="formToSearch.engineer.level"
            />
            <label class="form-check-label" for="technologist">
              Tecnológico
            </label>
          </div>
        </div>
        <br />
        <!--certs-->
        <div>
          <label for="certs" class="form-label"
            ><strong>Certificado</strong></label
          >
          <input
            type="text"
            class="form-control"
            id="certs"
            aria-describedby="cert_help"
            v-model="formToSearch.engineer.certs"
          />
        </div>
        <br />
        <!--exp_in_pro_dir-->
        <div>
          <label for="exp_in_pro_dir" class="form-label"
            ><strong
              >¿Tienes experiencia en dirección de proyectos?</strong
            ></label
          >
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exp_in_pro_dir_check"
              id="exp_in_pro_dir_check"
              value="true"
              v-model="formToSearch.engineer.exp_in_pro_dir"
            />
            <label class="form-check-label" for="exp_in_pro_dir_check">
              Si
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exp_in_pro_dir_check"
              id="exp_in_pro_dir_check1"
              value="false"
              v-model="formToSearch.engineer.exp_in_pro_dir"
            />
            <label class="form-check-label" for="exp_in_pro_dir_check1">
              No
            </label>
          </div>
        </div>
        <br />
        <!--exp_in_exec-->
        <div>
          <label for="exp_in_exec" class="form-label"
            ><strong
              >¿Tienes experiencia en ejecución de proyectos?</strong
            ></label
          >
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exp_in_exec_check"
              id="exp_in_exec_check"
              value="true"
              v-model="formToSearch.engineer.exp_in_exec"
            />
            <label class="form-check-label" for="exp_in_exec_check"> Si </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exp_in_exec_check"
              id="exp_in_exec_check1"
              value="false"
              v-model="formToSearch.engineer.exp_in_exec"
            />
            <label class="form-check-label" for="exp_in_exec_check1">
              No
            </label>
          </div>
        </div>
        <br />
        <!--tel-->
        <div>
          <label for="tel" class="form-label"
            ><strong>Tu teléfono</strong></label
          >
          <input
            type="text"
            class="form-control"
            id="tel"
            aria-describedby="tel_help"
            v-model="formToSearch.engineer.tel"
          />
        </div>
        <br />
        <!--email-->
        <div>
          <label for="email" class="form-label"
            ><strong>Tu email</strong></label
          >
          <input
            type="text"
            class="form-control"
            id="email"
            aria-describedby="email_help"
            v-model="formToSearch.engineer.email"
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
              <ul class="list-group">
                <li class="list-group-item">Nombre: {{ item.info.name }}</li>
                <li class="list-group-item">
                  Apellido: {{ item.info.last_name }}
                </li>
                <li class="list-group-item">País: {{ item.info.country }}</li>
                <li class="list-group-item">Ciudad: {{ item.info.city }}</li>
                <li class="list-group-item">
                  Experiencia en dirección del proyectos:
                  {{ item.info.exp_in_pro_dir }}
                </li>
                <li class="list-group-item">
                  Experiencia en ejecución de proyectos:
                  {{ item.info.exp_in_exec }}
                </li>
                <li class="list-group-item">Teléfono: {{ item.info.tel }}</li>
                <li class="list-group-item">email: {{ item.info.email }}</li>
              </ul>
              <h5>Certificados</h5>
              <ul
                class="list-group"
                v-for="(cert, index) in item.info.certs"
                :key="index"
              >
                <li class="list-group-item">Certificado en: {{ cert.cert }}</li>
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
  engineer: {
    name: null,
    last_name: null,
    country: null,
    city: null,
    level: null,
    certs: null,
    exp_in_pro_dir: null,
    exp_in_exec: null,
    tel: null,
    email: null,
  },
});

let url = "/staff/get-users?type=engineer&";

const getUsers = async () => {
  alertStore.resetAlert();
  // Reassign url
  url = "/staff/get-users?type=engineer&";

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

  // Make a for in
  for (const propery in formToSearch.value.engineer) {
    // If value is not an null
    if (formToSearch.value.engineer[propery]) {
      // Set it in url
      url =
        url + `info.${propery}=${formToSearch.value.engineer[propery].trim()}&`;
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
