<template>
    <div class="card has-background-info">
        <header class="card-header">
            <p class="card-header-title">
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
            <a href="#" class="card-footer-item">{{ status }}</a>
        </footer>
    </div>
</template>
  
  <script>
  export default {
    name: 'ActivityComponent',
    props: {
      title: String,
      description: String,
      status: String

    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
  