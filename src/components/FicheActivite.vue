<template>
    <div class="card has-background-info has-text-white">
        <header class="card-header">
            <p class="card-header-title has-text-white">
              {{Domaine}} : {{Titre}}
            </p>
            <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </header>
        <div class="card-content">
            <div class="content">
              <p><b>Description : </b>{{Description}}</p>
              <p><b>Duree : </b>{{Duree}}</p>
              <p><b>Date de début initiale : </b> {{DateDebutPrev}} - <b>Date de début réelle : </b>{{DateDebutReelle}}</p>
              <p><b>Date de fin initiale : </b>{{DateFinPrev}} - <b>Date de fin réelle : </b>{{DateFinReelle}}</p>
              <p><b>TypeExercice : </b>{{TypeExercice}}</p>
              <p><b>CommentaireStagiai : </b>{{CommentaireStagiaire}}</p>
              <p><b>CommentaireCoach : </b>{{CommentaireCoach}}</p>
            </div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" type="button" @click="showModal">État et démo</a>
        </footer>
    </div>

    <ModalComponent
      v-show="isModalVisible"
      @close="closeModal"
      :status="Etat"
      :urlYtb="Lien"
    />

</template>
  
  <script>
  import ModalComponent from '@/components/Modal.vue';

  export default {
    name: 'ActivityComponent',
    components:{
      ModalComponent
    },
    props: {
      activity:String
    },
    data() {
      return {
        isModalVisible: false,
        Titre : "",
        Description: "",
        Domaine: "",
        Duree: "",
        Lien: "",
        Etat: "",
        DateDebutPrev: "",
        DateDebutReelle: "",
        DateFinPrev: "",
        DateFinReelle: "",
        TypeExercice: "",
        CommentaireStagiaire: "",
        CommentaireCoach: ""
      };
    },async created() {
      this.Titre = this.activity[0],
      this.Description = this.activity[1],
      this.Domaine = this.activity[2],
      this.Duree = this.activity[3],
      this.Lien = this.activity[4],
      this.Etat = this.activity[5],
      this.DateDebutPrev = this.activity[6],
      this.DateDebutReelle = this.activity[7],
      this.DateFinPrev = this.activity[8],
      this.DateFinReelle = this.activity[9],
      this.TypeExercice = this.activity[10],
      this.CommentaireStagiaire = this.activity[11],
      this.CommentaireCoach = this.activity[12]
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

  a{
  text-decoration: none;
  color: white;
  }

</style>
  