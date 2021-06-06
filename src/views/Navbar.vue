<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="navbar">
      <img src="../../public/pictos-telephone.png" alt="" width="50" height="50" class="d-inline-block align-text-top">
      <h4 class="navbar--phone-number">+33 (0) 7 77 31 03 82</h4>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
              <router-link class="nav-link active" to="/">Home</router-link>
              <router-link class="nav-link" v-if="!authenticated" to="/about"> About</router-link>
              <router-link class="nav-link" v-if="authenticated && this.$route.path !== '/profile'" to="/profile"> Profile</router-link>
              <router-link class="nav-link" v-if="!authenticated" to="/login">Login</router-link>
              <router-link class="nav-link" v-if="authenticated" to="/login" v-on:click.native="$emit('logout')" replace>Logout</router-link>

              <router-link class="nav-link" to="/pagePro">Lien vers profil Angélique</router-link>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    authenticated: Boolean
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.navbar--phone-number{
  color: white;
  padding-left: 10px;
  padding-top: 7px;
}
</style>
