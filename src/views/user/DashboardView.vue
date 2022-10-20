<template>
  <div class="container p-5 text-center" v-if="user">
    <div class="row">
      <div class="col-sm-12 col-lg-3">
        <ul class="list-group">
          <li class="list-group-item" v-if="!user.verified_info">
            <h6>
              <router-link :to="{ name: 'dash-verify-info' }"
                >Verifica tu info
                <font-awesome-icon icon="fa-solid fa-caret-right"
              /></router-link>
            </h6>
          </li>
          <li class="list-group-item">
            <h6>
              <a href="#"
                >Cambia tu e-mail
                <font-awesome-icon icon="fa-solid fa-caret-right"
              /></a>
            </h6>
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
