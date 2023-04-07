<template>
  <div class="bloc-modale">
    <div class="container m-3 has-background-grey-lighter">
        <h1 class="subtitle">Etat de l'activité : {{ status }} </h1>
        <a class="button is-info" :href="urlYtb"> Démo ici</a><p></p>
        <a class="button is-info my-2" @click="close">Fermer</a>    
    </div>    
  </div>
</template>


<script>
  export default {
    name: 'ModalComponent',
    methods: {
      close() {
        this.$emit('close');
      },
    },props: {
      status: String,
      urlYtb: String

    },
  };
</script>

<style scoped lang="scss">
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

 
  .bloc-modale{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button{
    color: #363636 !important;
  }
  a{
    color: #363636 !important;
  }

  .container{
    text-align: center;
  }


</style>
