<template v-if="user">
  <div class="container p-5 text-center">
    <div class="row">
      <div class="col-sm-12 col-lg-3">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-if="!user.verified_info">
            <h6>
              <router-link :to="{ name: 'dash-verify-info' }"
                >Verifica tu info
                <font-awesome-icon icon="fa-solid fa-caret-right"
              /></router-link>
            </h6>
          </li>
          <li class="list-group-item" v-if="user.verified_info">
            <h6>
              <router-link :to="{ name: 'get-tickets' }"
                >Consulta tus tickets
                <font-awesome-icon icon="fa-solid fa-caret-right"
              /></router-link>
            </h6>
          </li>
          <li
            class="list-group-item"
            v-if="user.verified_info && user.type === 'engineer'"
          >
            <h6>
              <router-link :to="{ name: 'eng-add-report' }"
                >Agrega un reporte
                <font-awesome-icon icon="fa-solid fa-caret-right"
              /></router-link>
            </h6>
          </li>
          <li class="list-group-item" v-if="user.type == 'engineer'">
            <img
              src="../../assets/1932-Economic_research.jpg"
              alt="img"
              class="img-fluid"
            />
          </li>
          <li class="list-group-item" v-if="user.type == 'partner'">
            <img
              src="../../assets/9ed04e320533cd9e9b270ec24547ecf0(1).jpg"
              alt="img"
              class="img-fluid"
            />
          </li>
        </ul>
      </div>
      <div class="col">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
// Imports
import { useAuthStore } from "../../stores/auth"; // autStore
import { storeToRefs } from "pinia"; // To ref stores

// State -->

const authStore = useAuthStore();

// Ref user
const { user } = storeToRefs(authStore);
</script>

<style scoped>
* {
  border-radius: 0 !important;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: black;
}
</style>
