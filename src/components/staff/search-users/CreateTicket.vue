<template>
  <div>
    <va-collapse
      v-model="showCollapse"
      color="#212121"
      :header="
        ticket.part && ticket.eng
          ? 'Crear ticket (Todo listo)'
          : !ticket.part && ticket.eng
          ? 'Crear ticket (Falta partner)'
          : ticket.part && !ticket.eng
          ? 'Crear ticket (Falta ingeniero)'
          : 'Crear ticket (Falta ingeniero y partner)'
      "
      icon="person"
    >
      <div class="row">
        <template v-if="ticket">
          <va-list fit class="col-sm-12 col-md-6">
            <va-list-label> partner </va-list-label>

            <va-list-item class="list__item">
              <va-list-item-section>
                <template v-if="ticket.part"
                  ><va-icon name="person" /><va-list-item-label>
                    Código: {{ ticket.part.id_code }}
                  </va-list-item-label>
                  <va-list-item-label>
                    Email: {{ ticket.part.email }}
                  </va-list-item-label></template
                >
                <template v-else
                  ><va-icon name="person_off" /><va-list-item-label>
                    No existe partner </va-list-item-label
                  ><va-list-item-label caption>
                    Por favor selecciona uno
                  </va-list-item-label></template
                >
              </va-list-item-section>
              <va-list-item-section icon>
                <va-icon
                  :name="ticket.part ? 'remove_red_eye' : 'visibility_off'"
                  color="background-tertiary"
                  :class="ticket.part ? 'hover_pointer' : ''"
                  @:click="ticket.part ? initModal(ticket.part) : null"
                />
              </va-list-item-section>
            </va-list-item>
          </va-list>
          <va-list fit class="col-sm-12 col-md-6">
            <va-list-label> Ingeniero </va-list-label>

            <va-list-item class="list__item">
              <va-list-item-section>
                <template v-if="ticket.eng"
                  ><va-icon name="person" /><va-list-item-label>
                    Código: {{ ticket.eng.id_code }}
                  </va-list-item-label>
                  <va-list-item-label>
                    Email: {{ ticket.eng.email }}
                  </va-list-item-label></template
                >
                <template v-else
                  ><va-icon name="person_off" /><va-list-item-label>
                    No existe ingeniero </va-list-item-label
                  ><va-list-item-label caption>
                    Por favor selecciona uno
                  </va-list-item-label></template
                >
              </va-list-item-section>
              <va-list-item-section icon>
                <va-icon
                  :name="ticket.eng ? 'remove_red_eye' : 'visibility_off'"
                  color="background-tertiary"
                  :class="ticket.eng ? 'hover_pointer' : ''"
                  @:click="ticket.eng ? initModal(ticket.eng) : null"
                />
              </va-list-item-section>
            </va-list-item>
          </va-list>
        </template>
      </div>
      <template v-if="ticket.eng && ticket.part">
        <label @click="setTicket" class="btn btn-dark my-3"
          >Ir a crear ticket</label
        >
      </template>
    </va-collapse>
  </div>
  <va-modal v-model="showModal" hide-default-actions
    ><va-card-title>
      Información de
      {{
        user.type == "engineer"
          ? "ingeniero"
          : user.type == "partner"
          ? "partner"
          : ""
      }}
    </va-card-title>
    <va-card-content>
      Estás a punto de crear un nuevo ticket.
      <h6><strong>Tiene esta información:</strong></h6>
      <div class="container p-2 m-2">
        <div class="row">
          <div class="col">
            <ul class="list-group">
              <li class="list-group-item">
                Email: <strong>{{ user.email }}</strong>
              </li>
              <li class="list-group-item">
                Tipo: <strong>{{ user.type }}</strong>
              </li>
              <li class="list-group-item">
                Verificó su email:
                <strong>{{
                  user.verified_email
                    ? "Verificó su email"
                    : "No está verificado"
                }}</strong>
              </li>
              <li class="list-group-item">
                Verificó su info:
                <strong>{{
                  user.verified_info
                    ? "Verificó su info"
                    : "No verificó su info"
                }}</strong>
              </li>
              <li class="list-group-item">
                Usuario verificado:
                <strong>{{
                  user.user_checked ? "Está verificado" : "No está verificado"
                }}</strong>
              </li>
              <li class="list-group-item">
                Código: <strong>{{ user.id_code }}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </va-card-content>
  </va-modal>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import router from "../../../router";

import { useStaffStore } from "../../../stores/staff";

const staffStore = useStaffStore();

const { ticket } = storeToRefs(staffStore);

const showCollapse = ref(false);

const setTicket = () => {
  router.push({ name: "staff-manage-tickets" });
};

const showModal = ref(false);
const user = ref(null);

const initModal = (u) => {
  showModal.value = !showModal.value;
  user.value = u;
};
</script>

<style lang="scss" scoped>
.hover_pointer:hover {
  cursor: pointer;
}
</style>
