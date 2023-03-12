<template>
  <div>
    <div>
      <form class="px-lg-0 px-xl-5">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Correo:</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="formData.email"
          />
          <div
            id="emailHelp"
            class="form-text error"
            v-for="error in v$.email.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}*
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label"
            >Contraseña:</label
          >
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="formData.password"
          />
          <div
            id="passHelp"
            class="form-text error"
            v-for="error in v$.password.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}*
          </div>
        </div>
        <p>
          <router-link :to="{ name: 'eng-restore-password' }"
            >¿Olvidaste tu contraseña?</router-link
          >
        </p>
        <div class="text-center">
          <button
            type="submit"
            class="btn btn-dark"
            @click.prevent="submitAuthForm"
          >
            Ingresa
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// --> Imports <--
// Stores
import { useAuthStore } from "../../stores/auth";
import { useModalStore } from "../../stores/ui/modal";
import { useAlertStore } from "../../stores/ui/alert";
// Ref, from Vue
import { ref } from "vue";
// Vuelidate
import useVuelidate from "@vuelidate/core";
//Axios
import axios from "axios";

import {
  required,
  email,
  helpers,
  minLength,
  maxLength,
} from "@vuelidate/validators";
// --> State <--
const authStore = useAuthStore();
const modalStore = useModalStore();
const alertStore = useAlertStore();
// Const that contains form's data
const formData = ref({
  email: "",
  password: "",
});


// Const that contains rules, for Vuelidate
const rules = {
  email: {
    required: helpers.withMessage("El correo es requerido", required),
    email: helpers.withMessage("El correo debe ser válido", email),
  },
  password: {
    required: helpers.withMessage("La contraseña es requerida", required),
    minLength: helpers.withMessage(
      "La contraseña debe contener al menos 8 carácteres",
      minLength(8)
    ),
    maxLength: helpers.withMessage(
      "La contraseña debe tener menos de 14 carácteres",
      maxLength(14)
    ),
  },
};
// v$, required for Vuelidate
const v$ = useVuelidate(rules, formData);
// --> Methods <--
const submitAuthForm = async () => {
  alertStore.resetAlert();
  // Set an offcanvas
  modalStore.setType("wait_offcanvas");
  // Const that contains vuelidate check
  const result = await v$.value.$validate();
  // Check if everithing is alright
  if (result) {
    await axios
      .post("/eng/sign-in", formData.value)
      .then((res) => {
        if (!(res.data.token || res.data.admin_token)) {
          if (res.data.confirm_email) {
            alertStore.setAlert("alert-warning", ["Confirma tu email!"]);
          }
        } else authStore.saveToken(res.data.token, res.data.admin_token);
      })
      .catch((err) => {
        // If there's any error
        if (err.response.data.error_msg) {
          // If there's an error_msg, set it as an alert
          alertStore.setAlert("alert-danger", [err.response.data.error_msg]);
        } else alertStore.setAlert("alert-danger", ["Hubo un error"]); // Else, just put an alert saying, there's an error
      });
  }
  // Reset modal
  modalStore.resetModal();
};
</script>

<style scoped>
.error {
  color: red;
}

* {
  font-family: "Dosis", sans-serif !important;
}
</style>
