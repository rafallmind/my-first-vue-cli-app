<template>
  <div class="container">    
    <div class="section" v-for="fiche in fiches" :key="fiche.title">
      <ActivityComponent :title="fiche.title" :description="fiche.description" :status="fiche.status"/>
    </div>
  </div>
</template>

<script>

import ActivityComponent from '@/components/FicheActivite.vue';
import fetch from 'node-fetch';


export default {
  name: 'HomeView',
  components: {
    ActivityComponent
  },
  data() {
    return {
      fiches: []
    }
  },
  async created() {
    const response = await fetch('/activityDataConfig.json');
    const data = await response.json();
    this.fiches = data.fiches;
  }
}
</script>


<style scoped lang="scss">
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>