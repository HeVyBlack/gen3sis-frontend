import { defineStore } from "pinia";

export const useStaffStore = defineStore({
  id: "staffstore",
  state: () => ({
    ticket: {
      eng: [],
      part: null,
    },
  }),
  actions: {
    resetTicket() {
      this.ticket.eng = this.ticket.part = null;
    },
    setEng(eng) {
      this.ticket.eng.push(eng);
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
