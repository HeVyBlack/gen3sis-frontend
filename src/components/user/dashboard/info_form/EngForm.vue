<template>
  <div class="container px-5">
    <!--name-->
    <div>
      <label for="name" class="form-label"><strong>Tu nombre</strong></label>
      <div
        id="name_help"
        class="form-text error"
        v-for="error in v$.name.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
      <input
        type="text"
        class="form-control"
        id="name"
        aria-describedby="name_help"
        v-model="formData.name"
      />
    </div>
    <br />
    <!--last_name-->
    <div>
      <label for="last_name" class="form-label"
        ><strong>Tu apellido</strong></label
      >
      <div
        id="last_name_help"
        class="form-text error"
        v-for="error in v$.last_name.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
      <input
        type="text"
        class="form-control"
        id="last_name"
        aria-describedby="last_name_help"
        v-model="formData.last_name"
      />
    </div>
    <br />
    <!--country-->
    <div>
      <label for="country" class="form-label"><strong>Tu país</strong></label>
      <div
        id="country_help"
        class="form-text error"
        v-for="error in v$.country.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
      <input
        type="text"
        class="form-control"
        id="country"
        aria-describedby="country_help"
        v-model="formData.country"
      />
    </div>
    <br />
    <!--city-->
    <div>
      <label for="city" class="form-label"><strong>Tu ciudad</strong></label>
      <div
        id="city_help"
        class="form-text error"
        v-for="error in v$.city.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
      <input
        type="text"
        class="form-control"
        id="city"
        aria-describedby="city_help"
        v-model="formData.city"
      />
    </div>
    <br />
    <!--level-->
    <div>
      <label for="level" class="form-label"><strong>Tu nivel</strong></label>
      <div
        id="level_help"
        class="form-text error"
        v-for="error in v$.level.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
      <div class="form-check">
        <input
          class="form-check-input bg-danger"
          type="radio"
          name="checkLevel"
          id="profesional"
          value="profesional"
          v-model="formData.level"
        />
        <label class="form-check-label" for="profesional"> Profesional </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input bg-danger"
          type="radio"
          name="checkLevel"
          id="technical"
          value="technical"
          v-model="formData.level"
        />
        <label class="form-check-label" for="technical"> Técnico </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input bg-danger"
          type="radio"
          name="checkLevel"
          id="technologist"
          value="technologist"
          v-model="formData.level"
        />
        <label class="form-check-label" for="technologist"> Tecnológico </label>
      </div>
    </div>
    <br />
    <!--exp_plat-->
    <div>
      <label for="level" class="form-label"
        ><strong
          >Tienes experiencia en implementación y manejo de plataformas y/o
          servicios, selecciona cuales</strong
        ></label
      >
      <div
        id="exp_plat_check_help"
        class="form-text error"
        v-for="error in v$.exp_plat_check.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
      <div class="form-check">
        <input
          class="form-check-input bg-danger"
          type="radio"
          name="platCheck"
          id="yes"
          value="true"
          v-model="formData.exp_plat_check"
        />
        <label class="form-check-label" for="yes"> Si </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input bg-danger"
          type="radio"
          name="platCheck"
          id="no"
          value="false"
          v-model="formData.exp_plat_check"
        />
        <label class="form-check-label" for="no"> No </label>
      </div>
      <div
        v-if="
          formData.exp_plat_check == 'true' || formData.exp_plat_check == true
        "
      >
        <h5>Si tu respuesta anterior fue si, selecciona caul</h5>
        <div
          id="email_help"
          class="form-text error"
          v-for="error in v$.exp_plat.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </div>
        <div class="form-check">
          <input
            class="form-check-input bg-danger"
            type="radio"
            name="platValue"
            id="implementation"
            value="1"
            v-model="formData.exp_plat"
          />
          <label class="form-check-label" for="implementation">
            Implementación
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input bg-danger"
            type="radio"
            name="platValue"
            id="cyber_security"
            value="2"
            v-model="formData.exp_plat"
          />
          <label class="form-check-label" for="cyber_security">
            Ciber Seguridad
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input bg-danger"
            type="radio"
            name="platValue"
            id="cloud_services"
            value="3"
            v-model="formData.exp_plat"
          />
          <label class="form-check-label" for="cloud_services">
            Cloud Services
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input bg-danger"
            type="radio"
            name="platValue"
            id="infrastructure"
            value="4"
            v-model="formData.exp_plat"
          />
          <label class="form-check-label" for="infrastructure">
            Infraestructura
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input bg-danger"
            type="radio"
            name="platValue"
            id="structured_cabling"
            value="5"
            v-model="formData.exp_plat"
          />
          <label class="form-check-label" for="structured_cabling">
            Cableado Estructurado
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input bg-danger"
            type="radio"
            name="platValue"
            id="exp_plat"
            value="exp_plat"
            v-model="formData.exp_plat"
          />
          <label class="form-check-label" for="exp_plat"> Otro cual </label>
        </div>
        <div v-if="formData.exp_plat == 'exp_plat'">
          <h6><strong>Escribe cual:</strong></h6>
          <div
            id="email_help"
            class="form-text error"
            v-for="error in v$.exp_plat_value.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </div>
          <input
            type="text"
            class="form-control"
            id="city"
            aria-describedby="city_help"
            v-model="formData.exp_plat_value"
          />
        </div>
      </div>
    </div>
    <br />
    <div>
      <label for="time_in_imp" class="form-label"
        ><strong
          >Cuanto tiempo de experiencia tienes en implementación de soluciones
          de tecnología</strong
        ></label
      >
      <div
        id="time_in_imp_help"
        class="form-text error"
        v-for="error in v$.time_in_imp.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
      <input
        type="text"
        class="form-control"
        id="time_in_imp"
        aria-describedby="time_in_imp_help"
        v-model="formData.time_in_imp"
      />
    </div>
    <br />
    <!--certs-->
    <div>
      <label class="form-label"
        ><strong>Tus certificados </strong>(escribe, y luego dale en el botón de
        enviar)</label
      >
      <div v-if="formData.certs.length > 0">
        <ul
          class="list-group list-group-flush"
          v-for="(cert, index) in formData.certs"
          :key="index"
        >
          <li class="list-group-item">{{ index }}. {{ cert.cert }}</li>
        </ul>
        <label class="btn btn-dark" @click="clearCerts">Limpiar</label>
      </div>
      <div
        id="certs_help"
        class="form-text error"
        v-for="error in v$.certs.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
      <br />
      <div class="form-text error" id="cert_help_error">
        {{ cert_value_error }}
      </div>
      <label class="btn btn-dark" lass="form-label" @click="saveCerts"
        >Guardar</label
      >
      <br />
      <br />
      <label for="input_certs" class="form-label"
        >Ingresa tus certificaciones</label
      >
      <input
        type="text"
        id="input_certs"
        v-model="cert_value"
        ref="input_certs"
      />
    </div>
    <br />
    <!--exp_in_pro_dir-->
    <div>
      <label for="exp_in_pro_dir" class="form-label"
        ><strong>¿Tienes experiencia en dirección de proyectos?</strong></label
      >
      <div
        id="exp_in_pro_dir_help"
        class="form-text error"
        v-for="error in v$.exp_in_pro_dir.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exp_in_pro_dir_check"
          id="exp_in_pro_dir_check"
          value="true"
          v-model="formData.exp_in_pro_dir"
        />
        <label class="form-check-label" for="exp_in_pro_dir_check"> Si </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exp_in_pro_dir_check"
          id="exp_in_pro_dir_check1"
          value="false"
          v-model="formData.exp_in_pro_dir"
        />
        <label class="form-check-label" for="exp_in_pro_dir_check1"> No </label>
      </div>
    </div>
    <br />
    <!--exp_in_exec-->
    <div>
      <label for="exp_in_exec" class="form-label"
        ><strong>¿Tienes experiencia en ejecución de proyectos?</strong></label
      >
      <div
        id="exp_in_exec_help"
        class="form-text error"
        v-for="error in v$.exp_in_exec.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exp_in_exec_check"
          id="exp_in_exec_check"
          value="true"
          v-model="formData.exp_in_exec"
        />
        <label class="form-check-label" for="exp_in_exec_check"> Si </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exp_in_exec_check"
          id="exp_in_exec_check1"
          value="false"
          v-model="formData.exp_in_exec"
        />
        <label class="form-check-label" for="exp_in_exec_check1"> No </label>
      </div>
    </div>
    <br />
    <!--tel-->
    <div>
      <label for="tel" class="form-label"><strong>Tu teléfono</strong></label>
      <div
        id="tel_help"
        class="form-text error"
        v-for="error in v$.tel.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
      <input
        type="text"
        class="form-control"
        id="tel"
        aria-describedby="tel_help"
        v-model="formData.tel"
      />
    </div>
    <br />
    <!--email-->
    <div>
      <label for="email" class="form-label"><strong>Tu email</strong></label>
      <div
        id="email_help"
        class="form-text error"
        v-for="error in v$.email.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
      <input
        type="text"
        class="form-control"
        id="email"
        aria-describedby="email_help"
        v-model="formData.email"
      />
    </div>
    <br />
    <button class="btn btn-dark" @click="submitForm">Enviar</button>
  </div>
</template>

<script setup>
// Stores
import { useModalStore } from "../../../../stores/ui/modal";
import { useAlertStore } from "../../../../stores/ui/alert";

import { useAuthStore } from "../../../../stores/auth";

// Ref, from vue
import { ref } from "vue";

// Vuelidate and stuff
import useVuelidate from "@vuelidate/core";

import {
  required,
  requiredIf,
  helpers,
  minLength,
  maxLength,
  email,
} from "@vuelidate/validators";

import axios from "axios";
import router from "../../../../router";

// --> State <--
const modalStore = useModalStore();
const alertSotre = useAlertStore();
const authstore = useAuthStore();

const formData = ref({
  name: null,
  last_name: null,
  country: null,
  city: null,
  level: null,
  exp_plat_check: null,
  exp_plat: null,
  exp_plat_value: null,
  time_in_imp: null,
  certs: [],
  exp_in_pro_dir: "",
  exp_in_exec: "",
  tel: "",
  email: "",
});

// Cert value, this, will contains the cert input
const cert_value = ref(null);

// Rulse for vuelidate
const rules = {
  name: {
    required: helpers.withMessage("El nombre debe de ser requerido", required),
    minLength: helpers.withMessage(
      "El nombre debe tener al menos 3 carácteres",
      minLength(3)
    ),
    maxLength: helpers.withMessage(
      "El nombre debe de ser menor a 14 carácteres",
      maxLength(14)
    ),
  },
  last_name: {
    required: helpers.withMessage("El apellido es requerido", required),
    minLength: helpers.withMessage(
      "El nombre debe tener al menos 3 carácteres",
      minLength(3)
    ),
    maxLength: helpers.withMessage(
      "El apellido debe de ser menor a 14 carácteres",
      maxLength(14)
    ),
  },
  city: {
    required: helpers.withMessage("La ciudad es requerida", required),
    minLength: helpers.withMessage(
      "La ciudad debe contener al menos 3 carácteres",
      minLength(3)
    ),
    maxLength: helpers.withMessage(
      "La ciudad debe de ser menor a 14 carácteres",
      maxLength(14)
    ),
  },
  country: {
    required: helpers.withMessage("El país es requerido", required),
    minLength: helpers.withMessage(
      "El país debe contener al menos 3 carácteres",
      minLength(3)
    ),
    maxLength: helpers.withMessage(
      "La ciudad debe de ser menor a 14 carácteres",
      maxLength(14)
    ),
  },
  tel: {
    required: helpers.withMessage("El teléfono es requerido", required),
    minLength: helpers.withMessage(
      "El teléfono debe contener al menos 8 carácteres",
      minLength(8)
    ),
    maxLength: helpers.withMessage(
      "El teléfono debe de ser menor a 14 carácteres",
      maxLength(14)
    ),
  },
  level: {
    required: helpers.withMessage("Tu nivel es requerido", required),
  },
  exp_plat_check: {
    required: helpers.withMessage(
      "La experiencia en plataformas es requerida",
      required
    ),
  },
  exp_plat: {
    requiredIfTrue: helpers.withMessage(
      "La plataformas es requerida",
      requiredIf(() => {
        return formData.value.exp_plat_check == "true";
      })
    ),
  },
  exp_plat_value: {
    requiredIfexp_plat: helpers.withMessage(
      "La plataforma es requerida",
      requiredIf(() => {
        return formData.value.exp_plat == "exp_plat";
      })
    ),
  },
  time_in_imp: {
    required: helpers.withMessage("El tiempo es necesario", required),
    maxLength: helpers.withMessage(
      "El tiempo debe ser menor a 30 dígitos",
      maxLength(30)
    ),
  },
  certs: {
    maxLength: helpers.withMessage(
      "Los certificados deben de ser menor a 14 carácteres",
      maxLength(14)
    ),
  },
  email: {
    email: helpers.withMessage("El email debe ser válido", email),
    required: helpers.withMessage("El email es requerido", required),
  },
  exp_in_pro_dir: {
    required: helpers.withMessage(
      "Experiencia en dirección de proyectos es requerida",
      required
    ),
  },
  exp_in_exec: {
    required: helpers.withMessage(
      "Experiencia en ejecución es requerida",
      required
    ),
  },
};

// v$, required for Vuelidate
const v$ = useVuelidate(rules, formData);

// Cert value error, this, if there's any error
const cert_value_error = ref(null);

const submitForm = async () => {
  // Set modal
  modalStore.setType("wait_offcanvas");

  // Check if everything is alright
  const result = await v$.value.$validate();
  // If everything is alright

  if (result) {
    formData.value.exp_in_exec = formData.value.exp_in_exec === "true"; // This, is to convert to boolean, the text in exp_in_exect
    formData.value.exp_in_pro_dir = formData.value.exp_in_pro_dir === "true"; // This, is to convert to boolean, the text in exp_in_pro_dir
    formData.value.exp_plat_check = formData.value.exp_plat_check === "true";
    if (!formData.value.exp_plat_check) {
      formData.value.exp_plat_value = null;
      formData.value.exp_plat = null;
    }
    // Call postForm
    await postForm();
    // Reset modal
    modalStore.resetModal();
  }
  // Else, reset modal
  modalStore.resetModal();
};

const postForm = async () => {
  await axios
    .post("eng/post-infoform", formData.value)
    .then(async (res) => {
      // Set an alert with res.ddta
      alertSotre.setAlert("alert-success", res.data);
      // Refresh authStore's state
      await authstore.refreshSate();
      // Push user to index
      router.push("/");
    })
    .catch((err) => {
      // If there's any error, set an alert with err.response.data
      alertSotre.setAlert("alert-danger", err.response.data);
    });
  modalStore.resetModal();
};

const saveCerts = () => {
  // Check if input has more than 0 and less of 14 characters
  if (
    cert_value.value &&
    cert_value.value.length > 0 &&
    cert_value.value.length < 14
  ) {
    // Push input's content to const certs
    formData.value.certs.push({ cert: cert_value.value });
    // Clear input
    cert_value.value = "";
    // And, set the alert to null
    cert_value_error.value = null;
  } else if (cert_value.value && cert_value.value.length > 14) {
    // If input has more than 14 characteres, set an alert
    cert_value_error.value = "El certificado debe ser menos a 14 digítos*";
  }
};
const clearCerts = () => {
  // Clear certs const
  formData.value.certs = [];
  // Clear value cons
  cert_value.value = "";
};
</script>

<style scoped>
.form-text {
  color: #ab0202;
}
</style>
