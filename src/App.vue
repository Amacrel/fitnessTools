<template>
  <div id="app">
    <div id="nav">

    </div>
<Navbar @logout="logout" :authenticated="authenticated"></Navbar>
    <router-view @authenticated="setAuthenticated"/>
  </div>
</template>

<script>
import Navbar from "./views/Navbar";
export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "Amacrel",
        password: "12345678"
      }
    }
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({name: "Login"});
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*#nav {*/
/*  padding: 30px;*/
/*}*/

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
