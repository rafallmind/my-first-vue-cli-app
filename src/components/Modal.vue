<template>
  <div class="bloc-modale has-background-grey-lighter">
    <div class="container m-3 bg2">
      <div>
        <label id="txt">{{ status }}</label>
        <!--label id="txt" for="checkbox">{{ text }}</label>
        <input type="checkbox" id="checkbox" v-model="checked" @change="check()"-->
      </div>
      <a class="button is-info" :href="urlYtb"> Démo ici </a>
      <p></p>
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
    /*check() {

      console.log("Checked : ",this.checked);

      if (this.checked == true) { 
        this.text = "DONE";
      } else if (this.checked == false) {
        this.text = "TODO";
      }
    },*/
  },
  data() {
    return {
      checked: null,
      done: null,
      text: null,
    }
  }, props: {
    status: String,
    urlYtb: String
  },
  mounted() {
    localStorage.setItem("status", this.status);

    if (this.status == "DONE") {
      this.text = "DONE";
      this.checked = true;
    } else if (this.status == "TODO") {
      this.text = "TODO";
      this.checked = false;
    }

  },
  updated() {
    //const box = document.getElementById('box');
    //console.log("VALEUR BOX : ", box.checked);

  }
};
</script>

<style scoped lang="scss">
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";


.bloc-modale {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  color: white;
}

.container {
  text-align: center;
}
</style>
