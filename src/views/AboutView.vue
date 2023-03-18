<template>
  <div class="container">
    <div class="section" v-for="coach in coaches" :key="coach.nomCoach">
      <FicheCoach :nomCoach="coach.nomCoach" :mail="coach.mail" :description="coach.description" :siteInternet="coach.siteInternet"/>
    </div>
  </div>
</template>

<script>

import FicheCoach from '@/components/FicheCoach.vue';

export default {
  name: 'AboutView',
  components: {
    FicheCoach
  },
  props: {
    title: String,
    description: String,
    status: String

  },
  data(){
    return{
      coaches: [
        {
          nomCoach : "Benjamin Pavard",
          siteInternet : "https://fr.wikipedia.org/wiki/Benjamin_Pavard",
          mail : "secondpoteau.pavard@gmail.com",
          description : "Benjamin Pavard, né le 28 mars 1996 à Maubeuge (Nord), est un footballeur international français qui évolue au poste de défenseur central et de latéral droit au Bayern Munich."

        },
        {
          nomCoach : "Kyk's",
          siteInternet : "https://fr.wikipedia.org/wiki/Kylian_Mbapp%C3%A9",
          mail : "qatar.noucl@gmail.com",
          description : "Kylian Mbappé, né le 20 décembre 1998 à Paris, est un footballeur international français qui évolue au poste d'attaquant au Paris Saint-Germain."

        }
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>

