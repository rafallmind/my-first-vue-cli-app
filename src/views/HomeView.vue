<template>
  <div class="container">    
    <div class="section" v-for="fiche in fiches" :key="fiche.title">
      <ActivityComponent :title="fiche.title" :description="fiche.description" :status="fiche.status"/>
    </div>
  </div>
</template>

<script>

import ActivityComponent from '@/components/FicheActivite.vue';

export default {
  name: 'HomeView',
  components: {
    ActivityComponent
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
    }
  }
}
</script>


<style scoped lang="scss">
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>