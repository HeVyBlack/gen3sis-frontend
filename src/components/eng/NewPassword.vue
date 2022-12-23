<template>
  <form @submit.prevent="saveNewPassword">
    <div class="mb-3">
      <div
        id="passwordHelp"
        class="form-text error"
        v-for="error in v$.password.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}*
      </div>
      <label for="pass" class="form-label">Nueva contraseña</label>
      <input
        type="password"
        class="form-control"
        id="pass"
        v-model="passwords.password"
      />
    </div>
    <div class="mb-3">
      <div
        id="passwordHelp"
        class="form-text error"
        v-for="error in v$.confirm_password.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}*
      </div>
      <label for="confirmPass" class="form-label">Confirma tu contraseña</label>
      <input
        type="password"
        class="form-control"
        id="confirmPass"
        v-model="passwords.confirm_password"
      />
    </div>
    <button type="submit" class="btn btn-primary bg-dark">
      Cambiar contraseña
    </button>
  </form>
</template>

<script setup>
import axios from "axios";
import { useAlertStore } from "../../stores/ui/alert";
import { useModalStore } from "../../stores/ui/modal";
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import router from "../../router";
import { useVuelidate } from "@vuelidate/core";
import {
  helpers,
  required,
  minLength,
  maxLength,
  sameAs,
} from "@vuelidate/validators";
const route = useRoute();
const alertStore = useAlertStore();
const modalStore = useModalStore();

const passwords = ref({
  password: null,
  confirm_password: null,
  token: null,
});

const rules = computed(() => {
  return {
    password: {
      required: helpers.withMessage("Contraseña es necesaria", required),
      minLength: helpers.withMessage(
        "La contraseña debe tener al menos 8 carácteres",
        minLength(8)
      ),
      maxLength: helpers.withMessage(
        "La contraseña debe tener menos de 80 carácteres",
        maxLength(80)
      ),
    },
    confirm_password: {
      required: helpers.withMessage("Confirma tu contraseña", required),
      minLength: helpers.withMessage(
        "La contraseña debe tener al menos 8 carácteres",
        minLength(8)
      ),
      maxLength: helpers.withMessage(
        "La contraseña debe tener menos de 80 carácteres",
        maxLength(80)
      ),
      sameAs: helpers.withMessage(
        "Las contraseñas deben ser iguales",
        sameAs(passwords.value.password)
      ),
    },
  };
});

const v$ = useVuelidate(rules, passwords);

const saveNewPassword = async () => {
  alertStore.resetAlert();
  // Set an offcanvas
  modalStore.setType("wait_offcanvas");
  if (await v$.value.$validate()) {
    await axios
      .post("/eng/new-password", passwords.value)
      .then((res) => {
        if (res.data) {
          alertStore.setAlert("alert-success", [
            res.data.success_msg || "Peticón recibida",
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

onMounted(() => {
  passwords.value.token = route.query.token;
  if (!passwords.value.token) return router.push("/");
});
</script>

<style coped>
.error {
  color: red;
}

* {
  font-family: "Dosis", sans-serif !important;
}
</style>
