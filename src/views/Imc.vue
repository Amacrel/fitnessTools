<template>
  <div>
    <h1 v-if="like"> Merci d'avoir utilisé notre calculateur d'IMC</h1>
    <h1>{{title}}</h1>
    <div>
      <p>Sexe :</p>
      <select v-model="sexe">
        <option value="homme">Homme</option>
        <option value="femme">Femme</option>
      </select>
      <p>Poids (en kg):</p>
      <input type="text" v-model="poids">
      <p>Taille (en m):</p>
      <input type="text" v-model="taille">
    </div>
    <br><br>
    <button v-on:click="getImc()">Calculer votre IMC</button>

    <br><br>
    <div v-if="imc !== 0">{{ imc.toFixed(2) }}</div>
    <br><br>
    <div  v-if="result === 'Insuffisance pondérale (maigreur)'">
      <h3 :class="resultClass">Insuffisance pondérale (maigreur)</h3>
      <button @click="moreDetails()">Plus de détails...</button>
      <Details v-if="details === true" :result="result" @like="Like"></Details>
    </div>
    <div v-if="result === 'Poids normal'">
      <h3 :class="resultClass" >Poids normal</h3>
      <button @click="moreDetails()">Plus de détails...</button>
      <Details v-if="details === true" :result="result" @like="Like"></Details>
    </div>
    <div v-if="result === 'Surpoids'">
      <h3 :class="resultClass">Surpoids</h3>
      <button @click="moreDetails()">Plus de détails...</button>
      <Details v-if="details === true" :result="result" @like="Like"></Details>
    </div>
    <div v-if="result === 'Obésité'">
      <h3 :class="resultClass">Obésité</h3>
      <button @click="moreDetails()">Plus de détails...</button>
      <Details v-if="details === true" :result="result" @like="Like"></Details>
    </div>
  </div>

</template>

<script>
import ImcDescription from '../components/ImcDescription.vue'

export default {
  name: "Imc",
  components: {
    'Details': ImcDescription
  },
  data() {
    return {
      title: 'Calculateur d\'IMC',
      message: 'helloworld',
      sexe: '',
      poids: '',
      taille: '',
      imc: 0,
      details: false,
      result: '',
      like: false
    }
  },
  computed: {
    upperCase() {
      return this.message.toUpperCase()
    },

    resultClass() {
      if (this.result === 'Insuffisance pondérale (maigreur)') {
        return 'IP'
      } else if (this.result === 'Poids normal') {
        return 'PN'
      } else if (this.result === 'Surpoids') {
        return 'SP'
      } else {
        return 'OB'
      }
    }
  },
  methods: {
    getImc() {
     this.imc = (this.poids / (this.taille * this.taille))

      if (this.imc < 18.51) {
        this.result = 'Insuffisance pondérale (maigreur)'
      } else if (18.51 <= this.imc && this.imc < 24.9) {
        this.result = 'Poids normal'
      } else if (24.91 <= this.imc && this.imc < 29.99) {
        this.result = 'Surpoids'
      } else if (this.imc >= 30) {
        this.result = 'Obésité'
      }
    },
    moreDetails() {
      this.details = true
    },
    Like() {
      this.like = true
    }
  }
}
</script>

<style scoped>
.IP {
  color: red
}

.PN {
  color: green
}

.SP {
  color: indianred
}

.OB {
  color: darkred
}
</style>
