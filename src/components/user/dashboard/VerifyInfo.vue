<template>
  <div>
    <template v-if="!user.verified_info">
      <div>
        <template v-if="user.type == 'engineer'">
          <div><EngForm /></div>
        </template>
        <template v-if="user.type == 'partner'">
          <div><PartForm /></div>
        </template>
      </div>
    </template>
    <template v-else>
      <div>Ya verificaste tu info...</div>
    </template>
  </div>
</template>

<script setup>
// Imports
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "../../../stores/auth";
import router from "../../../router";

import EngForm from "./info_form/EngForm.vue";
import PartForm from "./info_form/PartForm.vue";

// State

const authStore = useAuthStore();

const { user } = storeToRefs(authStore);

onMounted(() => {
  if (user.value.verified_info) {
    router.push({ name: "dashboard" });
  }
});
</script>

<style scoped>
* {
  font-family: "Signika Negative", sans-serif;
}
</style>
