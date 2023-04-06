<template>
  <div class="section">  
      <div class="container mb-3" v-for="fiche in fiches" :key="fiche.title">
        <ActivityComponent :title="fiche.title" :description="fiche.description" :status="fiche.status" :urlYtb="fiche.urlYtb"/>
      </div>    
  </div>
</template>

<script>

import ActivityComponent from '@/components/FicheActivite.vue';
import fetch from 'node-fetch';
import axios from 'axios';

var gsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSYY_mA0X_tnaoCir60aps-jnZIJEiRDh8OXuGoE7-BduonmY-BesOWjfHgtrIGhiLYuAccjYI9Jg9Z/pub?gid=0&single=true&output=csv";   
var activityList = [];
//var whoList = [];

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
  mounted(){
    axios.get(gsheet_url).then(response=>(
      parseData(response.data)
    ))
  },
  async created() {
    const response = await fetch('/activityDataConfig.json');
    const data = await response.json();
    this.fiches = data.fiches;
  }
}


function parseData(data) {   
    var whoSet = new Set();
    console.log(data);
    //TODO : traitement de la data https://gist.github.com/edwardlorilla/b9bb22dcc06ba6fe98aeb4f95d4fdbb1#file-styles OU https://edwardize.blogspot.com/2018/04/parsinf-csv-file-import-javascript-vuejs.html 
    /*
    entries.forEach(function(value) {
        var entry = {
            "who": value.gsx$who.$t,
            "title": value.gsx$title.$t,
            "description": value.gsx$description.$t,
            "status": value.gsx$status.$t,
            "urlYtb": value.gsx$urlYtb.$t
        };

        // Add to the set of authors
        whoSet.add(entry.who);

        // Push entry into the list
        activityList.push(entry);
    });*/
    whoList = Array.from(whoSet);
    whoList.sort();
  }
</script>


<style scoped lang="scss">
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>