<template>
  <div>
    <AlertComp />
    <ModalComp />
    <NavBar v-if="user" :key="navBarKey" />
    <router-view />
    <FooterComp v-if="user" />
  </div>
</template>

<script setup>
import AlertComp from "./components/ui/AlertComp.vue";
import ModalComp from "./components/ui/ModalComp.vue";
import NavBar from "./components/ui/NavBar.vue";
import FooterComp from "./components/ui/FooterComp.vue";

// Stores
import { storeToRefs } from "pinia";
import { useAuthStore } from "./stores/auth";
import { useUiStore } from "./stores/ui/uistore";

const uiStore = useUiStore();
const authStore = useAuthStore();

// Ref user
const { user } = storeToRefs(authStore);
// Ref navBarKey
const { navBarKey } = storeToRefs(uiStore);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dosis&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Asap&display=swap");
* {
  font-family: "Asap", sans-serif;
  border-radius: 0 !important;
}
</style>
