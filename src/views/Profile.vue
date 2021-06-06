<template>
  <div id="secure">
    <h1>Secure Area</h1>
    <p>
      <router-link to="/imc">Calculez votre IMC</router-link> |
      <router-link to="/metabolismebase"> Calculez votre Métabolisme de base</router-link>
    </p>
  </div>
</template>

<script>
export default {
    name: 'Profile',
    data() {
      return {};
    }
}
</script>

<style scoped>
#secure {
  background-color: #FFFFFF;
  border: 1px solid #CCCCCC;
  padding: 20px;
  margin-top: 10px;
}
</style>
