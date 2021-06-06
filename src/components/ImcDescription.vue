<template>
<div>
  <div v-if="result === 'Insuffisance pondérale (maigreur)'">
    <p>Votre poids apparaît trop faible par rapport à votre taille.
      Ce faible indice de masse corporel (IMC) est peut-être la conséquence d'une pathologie,
      mais elle-même peut exposer à un certain nombre de risques pour votre santé (carences, anémie, ostéoporose...).
      Parlez-en avec votre médecin traitant. Il pourra rechercher la cause de cette maigreur et vous conseiller.</p>
  </div>
  <div v-if="result === 'Poids normal'">
    <p>Votre poids est adapté à votre taille.
      Gardez vos habitudes alimentaires pour conserver un indice de masse corporel (IMC) idéal et un poids qui vous assure un état de santé optimal.
      Une alimentation équilibrée, sans excès de matières grasses, associée à une activité physique régulière vous aideront à maintenir votre poids idéal.</p>
  </div>
  <div v-if="result === 'Surpoids'">
    <p>Votre poids commence à devenir trop élevé par rapport à votre taille.
      A long terme, un indice de masse corporel (IMC) élevé a des conséquences sur la santé.
      L'excès de poids entraîne un risque accru de maladies métaboliques (diabète), cardiaques, respiratoires, articulaires et de cancer.
      Si vous souhaitez commencer un régime pour perdre du poids, parlez-en au préalable avec votre médecin traitant.</p>
  </div>
  <div v-if="result === 'Obésité'">
    <p>Votre poids est trop élevé par rapport à votre taille.
      Du point de vue médical, l'obésité est un excès de masse grasse ayant des conséquences sur la santé.
      L'excès de poids entraîne un risque accru de maladies métaboliques (diabète), cardiaques, respiratoires, articulaires et de cancer.
      Si vous souhaitez commencer un régime pour perdre du poids, parlez-en au préalable avec votre médecin traitant.
      A noter que la sévérité de l'obésité dépend de l'indice de masse corporelle (IMC) : elle est dite "modérée" pour un IMC compris entre 30 et 34,9,
      "sévère" lorsque l'IMC est compris entre 35 et 39,9 et "massive" pour un IMC au-dessus de 40.</p>
  </div>

  <button @click="$emit('like')">J'aime</button>
  <br><br>
  <div>
    <router-link :to="Home">Retour à la page d'accueil</router-link>
  </div>

</div>
</template>

<script>
export default {
  name: "ImcDescription",
  props: {
    result: String
  },
  data() {
    return {
      message: 'test',
      Home: '/'
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
