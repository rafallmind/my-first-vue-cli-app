<template>
  <div class="title">
    {{ nomApplication }}
  </div>
  <div class="container">    
    <div v-for="fiche in fiches" :key="fiche.title">
      <FicheActivite :title="fiche.title" :description="fiche.description" :status="fiche.status"/>
    </div>
  </div>
</template>

<script>
import FicheActivite from '@/components/FicheActivite.vue';

export default {
  name: 'HomeView',
  components: {
    FicheActivite
  },
  data(){
    return{
      fiches: [{
          title : "Activity 1",
          description : "Descritpion 1",
          status : "Done"
        },
        {
          title : "Activity 2",
          description : "Descritpion 2",
          status : "Done"
        },
        {
          title : "Activity 3",
          description : "Descritpion 3",
          status : "Done"
        },
        {
          title : "Activity 4",
          description : "Descritpion 4",
          status : "Todo"
        },
        {
          title : "Activity 5",
          description : "Descritpion 5",
          status : "Todo"
        },
        {
          title : "Activity 6",
          description : "Descritpion 6",
          status : "Done"
        },
        {
          title : "Activity 7",
          description : "Descritpion 7",
          status : "Todo"
        },
      ],

      nomApplication: ''

    }
  },
  mounted() {
    fetch('/config.txt')
      .then(response => response.text())
      .then(data => {
        this.nomApplication = data;
      });
  }
}
</script>


<style scoped lang="scss">
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>