<template>
  <div>
    <template v-if="type == 'wait_offcanvas'"
      ><div class="wait-offcanvas fixed-top">
        <div class="wait-content">
          <div class="lds-dual-ring"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
// Imports
import { storeToRefs } from "pinia";
import { useModalStore } from "../../stores/ui/modal";

// State
const modalStore = useModalStore();

// Ref type from store
const { type } = storeToRefs(modalStore);
</script>

<style scoped>
.wait-offcanvas {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  z-index: 1046;
  top: 0;
  left: 0;
  display: flex;
}
.wait-content {
  width: 4%;
  height: 15%;
  margin: auto;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
