import { createRouter, createWebHashHistory } from "vue-router";

// Stores
import { storeToRefs } from "pinia";
import { useAuthStore } from "../stores/auth";
import { useModalStore } from "../stores/ui/modal";
import { useUiStore } from "../stores/ui/uistore";

import NotFound from "../views/NotFound.vue";

import IndexView from "../views/IndexView.vue";

// Eng
import EngView from "../views/eng/EngView.vue";
// Comps
import EngSignIn from "../components/eng/SignIn.vue";

// Part
import PartView from "../views/part/PartView.vue";

// Comps
import PartSignIn from "../components/part/SignIn.vue";

// User

import DashboardView from "../views/user/DashboardView.vue";
import ConfirmEmail from "../views/user/ConfirmEmail.vue";

// Comps
import DashVerifyInfo from "../components/user/dashboard/VerifyInfo.vue";
import getTickets from "../components/user/dashboard/GetTickets.vue";

// Staff
// Views
import StaffView from "../views/staff/StaffView.vue";
import StaffDashBoard from "../views/staff/DashBoard.vue";

// Comps
import StaffSearchUsers from "../components/staff/SearchUsers.vue";
import ManageTickets from "../components/staff/ManageTickets.vue";
import CreateNewUser from "../components/staff/CreateUser.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/staff",
      name: "staff",
      component: StaffView,
      redirect: { name: "staff-search-users" },
      children: [
        {
          path: "dashboard",
          name: "staff-dashboard",
          component: StaffDashBoard,
          children: [
            {
              path: "search-users",
              name: "staff-search-users",
              component: StaffSearchUsers,
            },
            {
              path: "manage-tickets",
              name: "staff-manage-tickets",
              component: ManageTickets,
            },
            {
              path: "staff-create-user",
              name: "staff-create-user",
              component: CreateNewUser,
            },
          ],
        },
      ],
    },
    {
      path: "/eng",
      name: "eng",
      component: EngView,
      redirect: { name: "eng-signin" },
      children: [
        {
          path: "",
          name: "eng-signin",
          component: EngSignIn,
        },
        {
          path: "restore-password",
          name: "eng-restore-password",
          component: () => {
            return import("../components/eng/RestorePassword.vue");
          },
        },
        {
          path: "new-password",
          name: "eng-new-password",
          component: () => {
            return import("../components/eng/NewPassword.vue");
          },
        },
      ],
    },
    {
      path: "/part",
      name: "part",
      component: PartView,
      redirect: { name: "part-signin" },
      children: [
        {
          path: "",
          name: "part-signin",
          component: PartSignIn,
        },
        {
          path: "restore-password",
          name: "part-restore-password",
          component: () => {
            return import("../components/part/RestorePassword.vue");
          },
        },
        {
          path: "new-password",
          name: "part-new-password",
          component: () => {
            return import("../components/part/NewPassword.vue");
          },
        },
      ],
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      children: [
        {
          path: "verify-info",
          name: "dash-verify-info",
          component: DashVerifyInfo,
        },
        {
          path: "get-tickets",
          name: "get-tickets",
          component: getTickets,
        },
        {
          path: "add-report",
          name: "eng-add-report",
          component: () => {
            return import("../components/user/dashboard/AddReport.vue");
          },
        },
      ],
    },
    {
      path: "/confirm-email",
      name: "confirm-email",
      component: ConfirmEmail,
    },
    {
      path: "/",
      name: "index",
      component: IndexView,
    },
    {
      path: "/:matchPath(.*)*",
      name: "notfound",
      component: NotFound,
    },
  ],
});

// This, is used for reset all ui comps
const resetUiComps = () => {
  const modalStore = useModalStore(); // For modals
  const uiStore = useUiStore(); // For navbar mostly

  // Reset modals and navbar
  modalStore.resetModal();
  uiStore.resetUiComps();
};

router.beforeEach((to) => {
  // Call resetUiComps
  resetUiComps();
  // --> Router Guard
  // const with authStore
  const authStore = useAuthStore();
  // Ref user and staff_token
  const { user, staff_token } = storeToRefs(authStore);
  // People auth, can't access to this routes anymore
  const withOutAuth = [
    "/eng",
    "/eng/restore-password",
    "/eng/new-password",
    "/part",
    "/part/restore-password",
    "/part/new-password",
  ];
  // If route that the user is going to, is withOutAuth, and, user is auth
  if (withOutAuth.includes(to.path) && user.value) {
    // Send him to index
    return "/";
  }

  // Only auth people
  const onlyAuth = ["/dashboard", "/dashboard/verify-info"];
  // If route that the user is going to, is onlyAuth, and, user is not auth
  if (onlyAuth.includes(to.path) && !user.value) {
    // Send him to index
    return "/";
  }

  // Only verified_info
  const onlyVerifyInfo = ["/dashboard/get-tickets", "/dashboard/add-report"];

  if (onlyVerifyInfo.includes(to.path)) {
    if (!user.value || !user.value.verified_info) {
      return "/";
    }
    const onlyEngineer = ["/dashboard/add-report"];

    if (onlyEngineer.includes(to.path)) {
      if (user.value.type !== "engineer") {
        return "/";
      }
    }
  }

  // Only staff people
  const onlyStaff = [
    "/staff",
    "/staff/dashboard",
    "/staff/dashboard/search-users",
    "/staff/dashboard/manage-tickets",
    "/staff/dashboard/staff-create-user",
  ];
  // If route that the user is goint to, is onlyStaff, and, user hasn't staff_token
  if (onlyStaff.includes(to.path) && !staff_token.value) {
    // Send him to index
    return "/";
  }
});

export default router;
