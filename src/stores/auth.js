import { defineStore } from "pinia";

// Axios
import axios from "axios";
import router from "../router";

export const useAuthStore = defineStore({
  id: "authstore",
  state: () => ({
    user: null,
    token: null,
    staff_token: null,
  }),
  actions: {
    async refreshSate() {
      // When refreshSate is call, it call attempt, to refresh state
      await this.attempt(this.token);
    },
    async saveToken(token, staff_token) {
      // Call attempt method, with the token
      if (token) await this.attempt(token);
      // If res has an staff_token
      // Set staff_token
      // If staff_token exists
      if (staff_token) {
        // Call saveStaff and pass the staff_token
        this.saveStaff(staff_token);
        // Push user to staff route
        router.push({ name: "staff" });
      } else router.push({ name: "index" }); // Else, push user to index
    },
    async attempt(token) {
      // If receives an token
      if (token) {
        // Save it in store
        this.token = token;
        // Set to axios defaults headers (to send it every time)
        axios.defaults.headers.common = {
          Authorization: `Bearer ${token}`,
        };
        // Save token in local storage
        localStorage.setItem("token", token);
      }
      // If doesn't exist
      if (!this.token) {
        // Delete it from axios headers
        delete axios.defaults.headers.Authorization;
        // Delete it from local storage
        localStorage.removeItem("token");
        return;
      }
      // Let's try something
      try {
        // Variable that contains backend's response (is calling to get user's info)
        await axios
          .get("user/get-user")
          .then((res) => {
            // If res, has data, set it in state
            this.user = res.data;
          })
          .catch((err) => {
            this.$state.staff_token = null;
            this.$state.token = null;
            this.$state.user = null;
            localStorage.removeItem("token");
            localStorage.removeItem("staff_token");
            // If there's any error, log it
            console.log(err);
          });
      } catch (err) {
        // If there's any error, log it
        console.log(err);
      }
    },
    saveStaff(token) {
      // If receives a token
      if (token) {
        // Save it in staff_token const
        this.staff_token = token;
        // Set staff token and token in axios headers
        axios.defaults.headers.common = {
          Authorization: `Bearer ${this.token}`, // Set Authorization header, with Bearer and token
          Staff_Authorization: `Bearer ${token}`, // Set Staff_Authorization header, with Bearer and staff_token
        };
        // Save it in local storage
        localStorage.setItem("staff_token", token);
      }
      if (!this.token) {
        // If store doesn't have any normal token: Delete it from axios headers
        delete axios.defaults.headers.Staff_Authorization;
        // Remove it from local storage
        localStorage.removeItem("staff_token");
        // And return
        return;
      }
    },
    async logOut() {
      // Set normal token to null
      this.token = null;
      // Set user to null
      this.user = null;
      // Set staff token to null
      this.staff_token = null;
      // Remove from local storage, normal token and staff token
      localStorage.removeItem("token");
      localStorage.removeItem("staff_token");
      // Call attempt function (this, to reset everything)
      this.attempt();
      // Redirect to home
      router.replace({ name: "index" });
    },
  },
  getters: {
    // Get user's info
    getUser: (state) => state.user,
    // Get user's token
    getToken: (state) => state.token,
  },
});
