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
* {
  border-radius: 0 !important;
}
</style>
