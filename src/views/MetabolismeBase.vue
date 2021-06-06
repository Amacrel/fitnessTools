<template>
  <div id="contenu">
    <h2 v-if="mdbFinal === 0">Merci de renseigner les informations demandées ci-dessous pour calculer votre métabolisme de base</h2>
    <h2 v-if="mdbFinal > 0">Votre métabolisme a été calculé graĉe à la formule de "Mifflin-St.Jeor".</h2>
    <div v-if="mdb === 0">
      <div>
        <h3>Sexe :</h3>
        <select v-model="sexe">
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
        </select>
        <h3>Votre taille (en cm):</h3>
        <input type="text" v-model="taille">
        <h3>Votre poids (en kg):</h3>
        <input type="text" v-model="poids">
        <h3>Votre âge :</h3>
        <input type="text" v-model="age">
      </div>
      <br><br>
      <button v-on:click="getMdb(sexe)">Prochaine étape</button>
    </div>

    <div id="facteurs" v-if="mdb !== 0">
      <h3>Merci de choisir le facteur correspond à votre activité sportive</h3>
      <div>
        <h4>Sédentaire</h4>
        <p>Vous ne faites quasiment pas d'exercices physique.</p>
        <input type="radio" value="1.2" v-model="facteur">
        <h4>Faiblement actif</h4>
        <p>Peu d'activités physiques, vous pratiquez une activité physique 1 à 3 fois par semaine à faible intensité.</p>
        <input type="radio" value="1.375" v-model="facteur">
        <h4>Modérément actif</h4>
        <p>Vous pratiquez une activité physique 1 à 3 fois par semaine à moyenne intensité.</p>
        <input type="radio" value="1.55" v-model="facteur">
        <h4>Très actif</h4>
        <p>Vous pratiquez des exercices 6 à 7 fois par semaine, à intensité élevée.</p>
        <input type="radio" value="1.725" v-model="facteur">
        <h4>Vraiment très actif</h4>
        <p>Vous pratiquez des entraînements sportifs intensifs tout les jours ou effectuez un travail très physique.</p>
        <input type="radio" value="1.9" v-model="facteur">
      </div>
      <br><br>
      <button v-on:click="getFinalMdb(facteur)">Calculez votre métabolisme de base</button>
    </div>

    <div v-if="mdbFinal !== 0">
      <h3>Votre métabolisme de base est de: {{mdbFinal}}</h3>
      <router-link to="/metabolismebase"> Calculez votre métabolisme de base à nouveau</router-link>

    </div>
    <div v-else-if="mdbFinal === 0">
      <p>{{msg}}</p>

    </div>

    <div id="bas" v-if="mdbFinal > 0">
      <h2>Si vous souhaitez en savoir plus sur la formule de "Mifflin-St.Jeor"...</h2>
      <button><a :href="link"> Cliquez ici </a></button>
    </div>


  </div>
</template>

<script>
export default {
  name: "MetabolismeBase",
  data(){
    return {
      sexe: '',
      age: 0,
      poids: 0,
      taille: 0,
      mdb: 0,
      facteur: 0,
      mdbFinal: 0,
      msg: '',
      link:'http://localhost:8080/metabolismebase/mifflinStJeor'
    }
  },
  methods: {
    getMdb(sexe) {
      if (sexe === 'homme') {
        this.mdb = (((this.poids * 10) + (this.taille * 6.25)) - (this.age * 5)) + 5
      } else {
        this.mdb = (((this.poids * 10) + (this.taille * 6.25)) - (this.age * 5)) - 161
      }
    },
    getFinalMdb(facteur) {
      switch (facteur) {
      case '1.2':
        this.mdbFinal = this.mdb * 1.2
        break
        case '1.375':
          this.mdbFinal = this.mdb * 1.375
          break
        case '1.55':
          this.mdbFinal = this.mdb * 1.55
          break
        case '1.725':
          this.mdbFinal = this.mdb * 1.725
          break
        case '1.9':
          this.mdbFinal = this.mdb * 1.9
          break
        default:
          this.msg = 'Merci de sélectionner votre le champ correspond à votre activité sportive'
      }

      if (this.mdbFinal > 0) {
        document.getElementById('facteurs').setAttribute('class','displayZero')
      }
    }
  }
}
</script>

<style scoped>
.displayZero {
  display: none;
}
#contenu {
  height: 10000px;
}
#bas {
  position: fixed;
  padding: 10px 10px 10px 10px;
  bottom: 80px;
  left: 0;
  width: 100%;
  height: 40px;
  background: lightgrey;
}
</style>
