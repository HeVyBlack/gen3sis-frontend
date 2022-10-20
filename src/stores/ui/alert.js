import { defineStore } from "pinia";

export const useAlertStore = defineStore({
  id: "alertsore",
  state: () => ({
    type: null,
    content: null,
  }),
  actions: {
    // Set alert function, it recieve two params, type and content
    setAlert(type, content) {
      // If, type and content exists, set it in state
      if (type && content) {
        this.type = type;
        this.content = content;
      }
    },
    resetAlert() {
      // Reset alert
      (this.type = null), (this.content = null); // Put everything in null
    },
  },
});
