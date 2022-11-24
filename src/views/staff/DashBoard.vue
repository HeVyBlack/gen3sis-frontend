<template>
  <div
    class="offcanvas offcanvas-start"
    data-bs-scroll="true"
    tabindex="-1"
    id="offcanvasWithBothOptions"
    aria-labelledby="offcanvasWithBothOptionsLabel"
  >
    <div class="offcanvas-header">
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="text-center container-fluid">
        <div class="row">
          <div class="col">
            <ul class="list-group list-group-flush">
              <router-link :to="{ name: 'staff-search-users' }">
                <li class="list-group-item">
                  Buscar usuarios
                  <font-awesome-icon icon="fa-solid fa-chevron-right" /></li
              ></router-link>
              <router-link :to="{ name: 'staff-manage-tickets' }">
                <li class="list-group-item">
                  Gestionar tickets
                  <font-awesome-icon icon="fa-solid fa-chevron-right" /></li
              ></router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="text-center container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-1 p-3">
        <button
          class="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <font-awesome-icon icon="fa-solid fa-burger" /> Menú
        </button>
      </div>
      <div class="col-sm-12 col-md p-2 m-2">
        <div><router-view /></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
* {
  font-family: "Signika Negative", sans-serif;
}

ul a {
  color: black;
  text-decoration: none;
}
</style>
