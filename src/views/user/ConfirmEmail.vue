<template>
  <div class="container p-5 text-center">
    <div class="row">
      <div class="col">
        <template v-if="!msg.success_msg && !msg.error_msg"
          ><div class="alert alert-primary" role="alert">
            <h4 class="alert-heading">Verificando tu correo</h4>
            <p>Por favor espera...</p>
          </div>
        </template>
        <template v-if="msg.success_msg"
          ><div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Listo!</h4>
            <p>
              {{ msg.success_msg }}
            </p>
          </div>
        </template>
        <template v-if="msg.error_msg">
          <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">Error!</h4>
            <p>
              {{ msg.error_msg }}
            </p>
          </div></template
        >
        <router-link :to="{ name: 'index' }" class="btn btn-dark"
          >Ir al inicio</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
// --> Imports <--
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import router from "../../router";
// Stores
// --> State <--
// Our litte msg array
const msg = ref([{}]);
// useRout, for get token from url
const route = useRoute();
onMounted(async () => {
  // If token exist, send it
  if (route.query.token) {
    // Const that contais backend's response
    await axios
      .post(`user/confirm-email?token=${route.query.token}`)
      .then((res) => {
        // If res has data
        if (res.data) {
          // Set success_msg in msg
          msg.value.success_msg = res.data.success_msg;
        }
      })
      .catch((err) => {
        // If there's any error
        if (err.response.data.error_msg) {
          // If there's an error_msg, set it as an alert
          msg.value.error_msg = err.response.data.error_msg;
        } else msg.value.error_msg = "Hubo un error"; // Else, just put an alert saying, there's an error
      });
  } else {
    // If doesn't exist, redirect to home
    router.push({ name: "index" });
  }
});
</script>

<style scoped></style>
