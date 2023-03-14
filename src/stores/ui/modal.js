import { defineStore } from "pinia";

export const useModalStore = defineStore({
  id: "modalstore",
  state: () => ({
    type: null,
  }),
  actions: {
    // Set modal, it only receives one param (type of off canvas)
    setType(type) {
      // If type exists
      if (type) {
        this.type = type; // Set it in state
      }
    },
    // Reset modal
    resetModal() {
      this.type = null; // Set state to null
    },
  },
  getters: {
    // Get of type
    getType: (state) => state.type,
  },
});
