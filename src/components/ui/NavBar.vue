<template>
  <div>
    <template v-if="user">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light static-top text-center"
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
              class="link"
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
                  <li v-if="staff_token">
                    <router-link class="dropdown-item" :to="{ name: 'staff' }"
                      >Staff Dashboard</router-link
                    >
                  </li>

                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" @click="authSotre.logOut">Salir</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </template>
    <template v-else>
      <nav class="navbar navbar-expand-lg navbar-light bg-light static-top">
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
              class="link"
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
const authSotre = useAuthStore();

// Ref user and staff_token from auth store
const { user, staff_token } = storeToRefs(authSotre);

// Methods
authSotre.logOut;
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
  color: rgba(255, 255, 255, 0.8);
}
</style>
