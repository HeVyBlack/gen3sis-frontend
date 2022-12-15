<template>
  <template v-if="user.user_checked">
    <div class="container text-center p-5">
      <div class="row justify-content-center">
        <div class="col-6">
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Ya estás de alta!</h4>
            <div>
              <p class="mb-0">
                ¡Ya estás de alta! Ahora, hay que esperar a que te lleguen casos
                ;)
                <router-link
                  :to="{ name: 'get-tickets' }"
                  class="btn btn-success mt-2"
                  >Mira tus tickets</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="container text-center p-5">
      <div class="row">
        <div class="alert alert-warning" role="alert">
          <h4 class="alert-heading">¡No te hemos dado de alta!</h4>
          <div>
            <p class="mb-0">
              Ya validaste tu información, nos pondremos en contacto contigo en
              menos de 48h
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "../../stores/auth";
const authStore = useAuthStore();
// Ref user
const { user } = storeToRefs(authStore);
</script>

<style scoped></style>
