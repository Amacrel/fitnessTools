<template>
<div>
  <div class="card text-center">
    <div class="card-header">
      <h2>
        <strong>
      <span>
        Formulaire de contact
      </span>
        </strong>
      </h2>
    </div>
    <div class="card-body">
      <div class="input-group mb-3">
        <select v-model="form.gender">
          <option value="Mr">Mr.</option>
          <option value="Mrs">Mrs.</option>
          <option value="Mlle">Mlle.</option>
        </select>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Nom</span>
        <input type="text" class="form-control" v-model="form.name">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon2">Email</span>
        <input type="text" class="form-control" v-model="form.email">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" >Téléphone</span>
        <input type="text" class="form-control" v-model="form.phone">
      </div>

      <div class="input-group">
        <span class="input-group-text">Message</span>
        <textarea class="form-control" v-model="form.message"></textarea>
      </div>
    </div>
    <div class="card-footer text-muted">
      <button type="button" class="btn btn-outline-info" @click="sendContactForm(form)">Envoyer</button>
    </div>
  </div>


</div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: '',
        gender: '',
        email: '',
        message: '',
        phone: ''
      }
    }
  },
  methods: {
    sendContactForm(form) {
      console.log(form)
    }
  }
}
</script>

<style scoped>

</style>
