<template>
  <div>
    <template v-if="user">
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark static-top text-center"
      >
        <div class="container">
          <router-link class="navbar-brand" :to="{ name: 'index' }">
            <img src="../../assets/isotipo.png" alt="logo" height="36" />
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <font-awesome-icon icon="fa-solid fa-burger" />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a
              href="http://www.gen3sis.net"
              target="_blank"
              rel="noopener noreferrer"
              class="link text-dark"
              >Servicios</a
            >
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link
                  class="nav-link link"
                  aria-current="page"
                  :to="{ name: 'index' }"
                  >Inicio</router-link
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hola! <strong>{{ user.email }}</strong>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <router-link
                      class="dropdown-item"
                      :to="{ name: 'dashboard' }"
                      >Dashboard</router-link
                    >
                  </li>
                  <template v-if="staff_token">
                    <li>
                      <router-link class="dropdown-item" :to="{ name: 'staff' }"
                        >Staff Dashboard</router-link
                      >
                    </li></template
                  >

                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" @click="authStore.logOut">Salir</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </template>
    <template v-else>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class="container">
          <router-link class="navbar-brand" :to="{ name: 'index' }">
            <img src="../../assets/isotipo.png" alt="logo" height="36" />
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <font-awesome-icon icon="fa-solid fa-burger" />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link
                  class="nav-link link"
                  aria-current="page"
                  :to="{ name: 'index' }"
                  >Inicio</router-link
                >
              </li>
              <li class="nav-item">
                <a
                  href="http://www.gen3sis.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link nav-link"
                  >¿Quienes somos?</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="http://www.gen3sis.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link nav-link"
                  >Planes</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </template>
  </div>
</template>

<script setup>
// Imports
import { useAuthStore } from "../../stores/auth";

import { storeToRefs } from "pinia";

// State
const authStore = useAuthStore();

// Ref user and staff_token from auth store
const { user, staff_token } = storeToRefs(authStore);

// Methods
authStore.logOut;
</script>

<style scoped>
.navbar-light .navbar-nav .nav-link {
  color: #000;
}

a:hover {
  cursor: pointer;
}

.link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8) !important;
}
</style>
