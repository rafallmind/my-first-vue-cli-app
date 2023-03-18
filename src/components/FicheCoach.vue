<template>
    <div class="container">
        <h1 class="title">Page d'information de votre coach</h1>
        <p class="subtitle">
            Nom du coach : {{ nomCoach }}
        </p>
        <p class="subtitle">Site : 
            <a href="https://www.google.com/" target="_blank">{{ siteInternet }}</a>
        </p>
        <p class="subtitle">
        Mail : {{ mail }}
        </p>
        <p class="subtitle">
        Description : {{ description }}
        </p>
        <p class="subtitle">
        Reseaux sociaux : 
        </p>
        <a class="mr-3" href="https://www.facebook.com/" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" width="32" height="32">
        </a>
        <a class="mr-3" href="https://www.linkedin.com" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="LinkedIn" width="32" height="32">
        </a>
        <a class="mr-3" href="https://www.instagram.com" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="Instagram" width="32" height="32">
        </a>
        <a href="https://mail.google.com" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/800px-Gmail_icon_%282020%29.svg.png" alt="Instagram" width="32" height="32">
        </a>
  </div>
</template>

<script>
export default {
  name: 'CoachComponent',
  props: {
    nomCoach: String,
    siteInternet: String,
    mail: String,
    description: String

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
