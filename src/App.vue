<template>
  <header>
    <div class="navbar is-fixed-top is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img alt="Logo Application" src="./assets/objective.png" width="30" height="30">
          <h1 class="title is-4 ml-4">{{ nomApplication }}</h1>
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          
          <router-link class="navbar-item" to="/">Page d'accueil</router-link>

          <router-link class="navbar-item" to="/PageCoach">A propos du coach</router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Plus
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                A venir #1
              </a>
              <a class="navbar-item">
                A venir #2
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>S'enregistrer</strong>
              </a>
              <a class="button is-light">
                Se connecter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <body>
    <div class="container">
      <RouterView/>
    </div>
  </body>
  <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Digi Circus</strong> par 
      <a href="https://www.linkedin.com/in/julian-aubert-4b6438174/">Julian Aubert</a> - 
      <a href="https://www.linkedin.com/in/samuel-briand-44220/">Samuel Briand</a> - 
      <a href="https://www.linkedin.com/in/louis-andre-298785171/">Louis André</a> - 
      <a href="https://www.linkedin.com/in/maxime-perrin-12a5601a7/">Maxime Perrin</a>.
    </p>
  </div>
</footer>
  
</template>

<script>

export default{
  name: 'AppView',
  data(){
    return{
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

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

</style>
