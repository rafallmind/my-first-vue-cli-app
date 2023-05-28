

<template>
  <header>
    <div class="navbar is-fixed-top is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" @click="defaut" href="/">
          <img alt="Logo Application" src="../public/objective.png" width="30" height="30">
          <h1 class="title is-4 ml-4 has-text-white">{{ nomApplication }}</h1>
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu has-background-info">
        <div class="navbar-start">

          <!--router-link class="navbar-item" to="/">Page d'accueil</router-link-->

          <router-link class="navbar-item" to="/PageCoach">A propos du coach</router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Vos cours
            </a>
            <div class="navbar-dropdown has-background-info">
              <a class="navbar-item" @click="cuisine">
                Cuisine
              </a>
              <a class="navbar-item" @click="sport">
                Sport
              </a>
              <a class="navbar-item" @click="educ">
                Education
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div id="messageAcc" class="loginPlace" style="display = 'none'">
              Déconnecté
            </div>
            <button id="logout" class="loginPlace button btnColor" @click="logout()">
              Se déconnecter
            </button>
            <GoogleLogin :callback="callback" id="boutonG" />
          </div>
        </div>
      </div>
    </div>
  </header>

  <body class="has-background-grey-lighter">
    <section class="hero is-medium">
      <div class="hero-body">
        <RouterView />
      </div>
    </section>
  </body>
  <footer class="footer has-background-info has-text-white">
    <div class="content has-text-centered">
      {{ nomApplication }} par
      <a href="https://www.linkedin.com/in/julian-aubert-4b6438174/">Julian Aubert</a> -
      <a href="https://www.linkedin.com/in/samuel-briand-44220/">Samuel Briand</a> -
      <a href="https://www.linkedin.com/in/louis-andre-298785171/">Louis André</a> -
      <a href="https://www.linkedin.com/in/maxime-perrin-12a5601a7/">Maxime Perrin</a>.
    </div>
  </footer>
</template>
<script setup>
import { decodeCredential } from 'vue3-google-login'

const callback = (response) => {
  const userData = decodeCredential(response.credential);
  const messageAcc = document.getElementById('messageAcc');
  const loginBouton = document.getElementById("boutonG");
  const logoutBouton = document.getElementById("logout");

  loginBouton.style.display = "none";
  messageAcc.style.visibility = "visible";
  logoutBouton.style.visibility = "visible";

  localStorage.setItem("mail", userData.email);
  localStorage.setItem("pseudo", userData.name);
  localStorage.setItem("messageAcc", "Bienvenue " + userData.name);
  localStorage.setItem("login", 1);

  messageAcc.textContent = localStorage.getItem("messageAcc");

  console.log("MESSAGE : ", localStorage.getItem("messageAcc"));

  history.go(0);

}
</script>
<script>
  import axios from 'axios';
  export default {
    name: 'AppView',
    data() {
      return {
        nomApplication: '',
        filtre: '',
        txtContent: '',
      }
    },
    mounted() {
      fetch('/config.txt')
        .then(response => response.text())
        .then(data => {
          this.nomApplication = data;
        });
      this.fetchTxtContent();
    },
    updated() {
      console.log("UPDATE");
      if (localStorage.getItem("login") == 0) {
        const messageAcc = document.getElementById('messageAcc');
        const loginBouton = document.getElementById("boutonG");
        const logoutBouton = document.getElementById("logout");
        loginBouton.style.display = "block";
        messageAcc.style.visibility = "hidden";
        logoutBouton.style.visibility = "hidden";
      } else if (localStorage.getItem("login") == 1) {
        const messageAcc = document.getElementById('messageAcc');
        const loginBouton = document.getElementById("boutonG");
        const logoutBouton = document.getElementById("logout");
        loginBouton.style.display = "none";
        messageAcc.style.visibility = "visible";
        logoutBouton.style.visibility = "visible";

        messageAcc.textContent = localStorage.getItem("messageAcc");
      }

    },
    methods: {
      logout() {
        const messageAcc = document.getElementById('messageAcc');
        const loginBouton = document.getElementById("boutonG");
        const logoutBouton = document.getElementById("logout");
        loginBouton.style.display = "block";
        messageAcc.style.visibility = "hidden";
        logoutBouton.style.visibility = "hidden";

        localStorage.setItem("pseudo", "");
        localStorage.setItem("messageAcc", "");
        localStorage.setItem("login", 0);
        localStorage.setItem("mail", "");

        history.go(0);
      },         
      defaut() {
        this.filtre = '';
        localStorage.setItem("filtre", this.filtre);
      },     
      cuisine() {
        this.filtre = 'Cuisine';
        localStorage.setItem("filtre", this.filtre);
        history.go(0);
      },      
      sport() {
        this.filtre = 'Sport';
        localStorage.setItem("filtre", this.filtre);
        history.go(0);
      },      
      educ() {
        this.filtre = 'Education';
        localStorage.setItem("filtre", this.filtre);
        history.go(0);
      },      
      fetchTxtContent() {
        axios.get('/config.txt')
          .then(response => {
            this.txtContent = response.data;
            document.title = this.txtContent;          
          })
          .catch(error => {
            console.error(error);
          });
          console.log("TXT CONTENT : "+this.txtContent);  
      }
    }  
  }

  document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

  });
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

  a:link, a:visited, .navbar-item, .navbar-link{
    text-decoration: none !important;
    color:white !important;
  }

  .navbar-dropdown a:hover,a.navbar-item:hover, a.navbar-link:hover {
    background-color: #3082C5 !important;
  }

  a.navbar-link::after{
    border-color:white !important;
  }

  .loginPlace {
    color: #ffffff !important;
    margin-right: 25px;
    /*display: none;*/
    visibility: hidden;
  }

  .btnColor{
    background-color : #EA4335 !important;
  }

</style>
