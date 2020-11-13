<template>
  <div>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item to="/" tag="nuxt-link">
          <img
            src="https://github.com/Romitou/SkriptUtils/raw/master/assets/img/logo.png"
            alt=""
          >
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="nuxt-link" to="/">
          Home
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="gui-converter">
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
