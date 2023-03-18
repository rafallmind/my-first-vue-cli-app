<template>
  <div class="container">
    <div class="section" v-for="coach in coaches" :key="coach.nomCoach">
      <FicheCoach :nomCoach="coach.nomCoach" :mail="coach.mail" :description="coach.description" :siteInternet="coach.siteInternet"/>
    </div>
  </div>
</template>

<script>

import FicheCoach from '@/components/FicheCoach.vue';
import fetch from 'node-fetch';

export default {
  name: 'AboutView',
  components: {
    FicheCoach
  },
  data() {
    return {
      coaches: []
    }
  },
  async created() {
    const response = await fetch('/infoCoachDataConfig.json');
    const data = await response.json();
    this.coaches = data.coaches;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>

