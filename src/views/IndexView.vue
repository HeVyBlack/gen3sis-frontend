<template>
  <div id="index">
    <template v-if="user">
      <template v-if="user.verified_info">
        <template v-if="user.type == 'engineer'">
          <ForEngineer />
        </template>
        <template v-if="user.type == 'partner'"><ForPartner /> </template>
      </template>
      <template v-else><NoVerifiedInfo /> </template>
    </template>
    <template v-else>
      <NoUser />
    </template>
  </div>
</template>

<script setup>
// Imports

import { storeToRefs } from "pinia"; // To ref stores
import ForEngineer from "../components/variable-user/ForEngineer.vue";
import ForPartner from "../components/variable-user/ForPartner.vue";
import NoUser from "../components/variable-user/user/NoUser.vue";
import NoVerifiedInfo from "../components/variable-user/user/NoVerifiedInfo.vue";

import { useAuthStore } from "../stores/auth"; // authStore

const authStore = useAuthStore();

// Ref user
const { user } = storeToRefs(authStore);
</script>

<style>
a {
  text-decoration: none;
}

#engineer {
  background-color: #e6e6e6;
  border-radius: 5px !important;
}

#partner {
  background-color: #e6e6e6;
  border-radius: 5px !important;
}
#engineer-content {
  color: #d80e2c;
}
#engineer-content p {
  color: black !important;
}

#partner-content {
  color: #d80e2c;
}
#partner-content p {
  color: black !important;
}

.link {
  text-decoration-line: underline;
}

.link:hover {
  cursor: pointer;
}

.go-to {
  border-style: solid !important;
  border-color: transparent !important;
}

.go-to p {
  font-family: "Nunito", sans-serif;
}

.go-to:hover {
  border-style: solid !important;
  border-color: transparent rgba(163, 163, 163, 0.8) rgba(163, 163, 163, 0.8)
    transparent !important;
}

#title {
  margin: auto;
}
</style>
