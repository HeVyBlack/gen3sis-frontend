import { defineStore } from "pinia";

export const useStaffStore = defineStore({
  id: "staffstore",
  state: () => ({
    ticket: {
      eng: null,
      part: null,
    },
  }),
  actions: {
    resetTicket() {
      this.ticket.eng = this.ticket.part = null;
    },
    setEng(eng) {
      this.ticket.eng = eng;
    },
    setPart(part) {
      this.ticket.part = part;
    },
  },
  getters: {
    // Get user's info
    getTicket: (state) => state.ticket,
  },
});
