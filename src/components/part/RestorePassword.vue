<template>
  <form @submit.prevent="restorePass">
    <div class="mb-3">
      <div
        id="emailHelp"
        class="form-text error"
        v-for="error in v$.email.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}*
      </div>
      <label for="exampleInputEmail1" class="form-label">Tu email:</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="userEmail.email"
      />
      <div id="emailHelp" class="form-text">
        Ingreso tu email, para restaurar la contraseña
      </div>
    </div>
    <button type="submit" class="btn btn-primary bg-dark">Restaurar</button>
  </form>
</template>

<script setup>
import { useAlertStore } from "../../stores/ui/alert.js";
import { useModalStore } from "../../stores/ui/modal.js";
import { ref } from "vue";
import axios from "axios";
import useValidate from "@vuelidate/core";
import { email, required, helpers } from "@vuelidate/validators";
import router from "../../router/index.js";

const userEmail = ref({ email: null });
const alertStore = useAlertStore();
const modalStore = useModalStore();
const rules = {
  email: {
    required: helpers.withMessage("El email es requerido", required),
    email: helpers.withMessage("El correo debe ser válido", email),
  },
};

const v$ = useValidate(rules, userEmail);

const restorePass = async () => {
  alertStore.resetAlert();
  // Set an offcanvas
  modalStore.setType("wait_offcanvas");
  if (await v$.value.$validate()) {
    await axios
      .post("/part/restore-password", userEmail.value)
      .then((res) => {
        if (res.data) {
          alertStore.setAlert("alert-success", [
            res.data.success_msg || "Petición recibida",
          ]);
        }
        router.push("/");
      })
      .catch((err) => {
        // If there's any error
        if (err.response.data.error_msg) {
          // If there's an error_msg, set it as an alert
          alertStore.setAlert("alert-danger", [err.response.data.error_msg]);
        } else alertStore.setAlert("alert-danger", ["Hubo un error"]); // Else, just put an alert saying, there's an error
      });
  }
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
