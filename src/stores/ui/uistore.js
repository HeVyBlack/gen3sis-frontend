import { defineStore } from "pinia";

export const useUiStore = defineStore({
  id: "uistore",
  state: () => ({
    navBarKey: 0,
  }),
  actions: {
    // This, reset navbar key, this, to force an reset
    resetUiComps() {
      // If key is bigger than 10, set it to 0
      if (this.navBarKey >= 10) {
        this.navBarKey = 0;
      }
      // Add 1 to key
      this.navBarKey += 1;
    },
  },
});
