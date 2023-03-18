<template>
  <div class="container">
    <div class="leader">
      <img alt="Vue logo" src="./assets/logo.png" width="30" height="30">
      <router-link to="/">Page d'accueil</router-link> / 
      <router-link to="/PageCoach">A propos du coach</router-link>
    </div>
    <hr class="separator">
    <div class="content">
      <RouterView/>
    </div>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.separator {
  border-top: 1px solid #ccc;
  margin: 20px 0;
}

.leader {
  position: absolute;
  top: 0;
  left: 0;
}

</style>
