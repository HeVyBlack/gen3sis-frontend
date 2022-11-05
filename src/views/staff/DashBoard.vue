<template>
  <div class="text-center container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-1 p-3">
        <div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <router-link :to="{ name: 'staff-search-users' }"
                >Buscar usuarios
                <font-awesome-icon icon="fa-solid fa-chevron-right"
              /></router-link>
            </li>
            <li class="list-group-item">
              <router-link :to="{ name: 'staff-manage-tickets' }"
                >Gestionar tickets
                <font-awesome-icon icon="fa-solid fa-chevron-right"
              /></router-link>
            </li>
          </ul>
        </div>
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

li a {
  color: black;
  text-decoration: none;
}
</style>
