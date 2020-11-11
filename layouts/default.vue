<template>
  <div>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="../assets/img/logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          >
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="/" link nuxt>
          Home
        </b-navbar-item>
        <b-navbar-item href="/gui-converter" link nuxt>
          GUI Converter
        </b-navbar-item>
      </template>
    </b-navbar>
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
};
</script>
