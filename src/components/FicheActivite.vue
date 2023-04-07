<template>
    <div class="card has-background-info has-text-white">
        <header class="card-header">
            <p class="card-header-title has-text-white">
            {{title}}
            </p>
            <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </header>
        <div class="card-content">
            <div class="content">
                {{ description }}
            </div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" type="button" @click="showModal">État et démo</a>
        </footer>
    </div>

    <ModalComponent
      v-show="isModalVisible"
      @close="closeModal"
      :status="status"
      :urlYtb="urlYtb"
    />

</template>
  
  <script>
  import ModalComponent from '@/components/Modal.vue';

  export default {
    name: 'ActivityComponent',
    props: {
      title: String,
      description: String,
      status: String,
      urlYtb: String

    },
    components:{
      ModalComponent
    },
    data() {
      return {
        isModalVisible: false,
      };
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
  