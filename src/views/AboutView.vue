<template>
  <div id="app">
    <h1>Page d'information de votre coach</h1>
    <p>
      Nom du coach : {{ nomCoach }}
    </p>
    <p>
      Site : 
      <a href="https://www.google.com/" target="_blank">
        {{ siteInternet }}
      </a>
    </p>
    <p>
      Mail : {{ mail }}
    </p>
    <p>
      Description : {{ description }}
    </p>
    <p>
      Reseaux sociaux : 
    </p>
    <a href="https://www.facebook.com/" target="_blank">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" width="32" height="32">
    </a>      /       
    <a href="https://www.linkedin.com" target="_blank">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="LinkedIn" width="32" height="32">
    </a>      /       
    <a href="https://www.instagram.com" target="_blank">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="Instagram" width="32" height="32">
    </a>      /       
    <a href="https://mail.google.com" target="_blank">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/800px-Gmail_icon_%282020%29.svg.png" alt="Instagram" width="32" height="32">
    </a>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // autres données de votre composant
      nomCoach: "Benjamin Pavard",
      siteInternet: "benjamin-pavard-coach.fr",
      mail: "benjaminpavardcoach@gmail.com",
      description: "Coach spécialisé dans la musculuation. Pratiquant depuis quelques années, je donne maintenant des cours aux débutants."
    }
  }
}
</script>


