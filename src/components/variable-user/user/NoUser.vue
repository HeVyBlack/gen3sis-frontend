<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-6 align-self-center">
        <img src="../../../assets/imagotipo.png" alt="logo" width="350" />
      </div>
      <div class="col" id="title">
        <h1>SOMOS ESPECIALISTAS EN T.I</h1>
        <h1>ESTAMOS PARA SERVIRTE</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-5">
        <img
          src="../../../assets/k-s6-jj-07006_1.jpg"
          alt="img"
          class="img-fluid"
        />
      </div>
      <div class="col">
        <div class="row align-items-center">
          <router-link
            :to="{ name: 'eng' }"
            class="col-sm-12 col-md-10 offset-md-2 go-to p-3 my-3 align-self-center"
            id="engineer"
          >
            <div class="px-3" id="engineer-content">
              <div>
                <h3>
                  Ingeniero
                  <font-awesome-icon icon="fa-solid fa-user-gear" />
                </h3>
              </div>
              <p>
                Inicia seisón como Ingeniero
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
              </p>
            </div>
          </router-link>
          <router-link
            :to="{ name: 'part' }"
            class="col-sm-12 col-md-10 offset-md-2 go-to p-3 my-3 align-self-center"
            id="partner"
            ><div class="px-3" id="partner-content">
              <div>
                <h3>
                  Partner
                  <font-awesome-icon icon="fa-solid fa-user-tie" />
                </h3>
              </div>
              <p>
                Inicia seisón como partner
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
              </p></div
          ></router-link>
        </div>
        <br />
        <div class="row text-center justify-content-center"></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
a {
  text-decoration: none;
}
</style>
