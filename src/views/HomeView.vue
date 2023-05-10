<template>
  <div class="container has-text-centered is-size-1" v-if="mail == ''">
    <span>Veuillez vous connecter</span>
  </div>
  <div class="container mb-3" v-for="activite in activites" :key="activite[13]">
    <div v-if="activite[13] == mail">
      <ActivityComponent :title="activite[0]" :description="activite[1]" :status="activite[5]" :urlYtb="activite[4]" />
    </div>
  </div>
</template>

<script>

import ActivityComponent from '@/components/FicheActivite.vue';
import fetch from 'node-fetch';
import axios from 'axios';
var gsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSYY_mA0X_tnaoCir60aps-jnZIJEiRDh8OXuGoE7-BduonmY-BesOWjfHgtrIGhiLYuAccjYI9Jg9Z/pub?gid=0&single=true&output=csv";

function parseData(data) {
  let activityList = data.split("\r").map(function (line) {
    return line.split(",")
  });
  return activityList;
}
export default {
  name: 'HomeView',
  components: {
    ActivityComponent
  },
  data() {
    return {
      fiches: [],
      activites: [],
      mail: "",
      login: 0
    }
  },
  updated() {
    this.mail = localStorage.getItem("mail");
    this.login = localStorage.getItem("login");
  },
  async created() {
    //Fichier json pour les data :         <ActivityComponent :title="fiche.title" :description="fiche.description" :status="fiche.status" :urlYtb="fiche.urlYtb"/>


    const csv = await axios.get(gsheet_url);
    let activityList = parseData(csv.data);
    for (let i = 1; i < activityList.length; i++) {
      if (activityList[i][2] == localStorage.getItem("filtre") || localStorage.getItem("filtre")=='') {
        this.activites.push(activityList[i]);
      }
    }

    const response = await fetch('/activityDataConfig.json');
    const data = await response.json();
    this.fiches = data.fiches;
  },
}

</script>


<style scoped lang="scss">
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>