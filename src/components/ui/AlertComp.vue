<template>
  <div class="container fixed-bottom text-center">
    <div>
      <template v-if="type == 'alert-warning'">
        <div v-for="cont in content" v-bind:key="cont">
          <div
            class="alert alert-warning alert-dismissible fade show px-5 mx-5"
            role="alert"
          >
            <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
            {{ cont.error_msg || cont }}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              @click="alertStore.resetAlert"
            ></button>
          </div>
        </div>
      </template>
      <template v-if="type == 'alert-danger'">
        <div v-for="cont in content" v-bind:key="cont">
          <div
            class="alert alert-danger alert-dismissible fade show px-5 mx-5"
            role="alert"
          >
            <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
            {{ cont.error_msg || cont }}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              @click="alertStore.resetAlert"
            ></button>
          </div>
        </div>
      </template>
      <template v-if="type == 'alert-success'">
        <div v-for="cont in content" v-bind:key="cont">
          <div
            class="alert alert-success lert-dismissible fade show px-5 mx-5"
            role="alert"
          >
            <font-awesome-icon icon="fa-solid fa-check" />
            {{ cont.success_msg || cont }}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              @click="alertStore.resetAlert"
            ></button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
// Imports
import { storeToRefs } from "pinia";
import { useAlertStore } from "../../stores/ui/alert";

// State
const alertStore = useAlertStore();

// Ref type and content from the store
const { type, content } = storeToRefs(alertStore);

alertStore.resetAlert;
</script>

<style scoped></style>
