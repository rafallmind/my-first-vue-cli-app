<template>
  <div class="section">  
      <div class="container mb-3" v-for="activite in activites" :key="activite[0]">
        <ActivityComponent :title="activite[1]" :description="activite[2]" :status="activite[3]" :urlYtb="activite[4]"/>
      </div>    
  </div>
</template>

<script>

  import ActivityComponent from '@/components/FicheActivite.vue';
  import fetch from 'node-fetch';
  import axios from 'axios';

  var gsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSYY_mA0X_tnaoCir60aps-jnZIJEiRDh8OXuGoE7-BduonmY-BesOWjfHgtrIGhiLYuAccjYI9Jg9Z/pub?gid=0&single=true&output=csv";   
  //var whoList = [];
  export default {
    name: 'HomeView',
    components: {
      ActivityComponent
    },
    data() {
      return {
        fiches: [],
        activites: []
      }
    },
    async created() {
      //Fichier json pour les data :         <ActivityComponent :title="fiche.title" :description="fiche.description" :status="fiche.status" :urlYtb="fiche.urlYtb"/>

      const csv = await axios.get(gsheet_url);
      let activityList = parseData(csv.data);
      for (let i = 1; i < activityList.length; i++) {
        this.activites.push(activityList[i]);
      }

      const response = await fetch('/activityDataConfig.json');
      const data = await response.json();
      this.fiches = data.fiches;
    }
  }
  function parseData(data) {   
    let activityList = data.split("\r").map(function(line){
      return line.split(",")
    });
    return activityList;
    //TODO : traitement de la data https://gist.github.com/edwardlorilla/b9bb22dcc06ba6fe98aeb4f95d4fdbb1#file-styles OU https://edwardize.blogspot.com/2018/04/parsinf-csv-file-import-javascript-vuejs.html 
  }
</script>


<style scoped lang="scss">
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>