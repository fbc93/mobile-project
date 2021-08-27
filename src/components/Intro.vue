<template>
  <div id="intro">
    <!-- App Logo -->
    <div class="logo">
      <img src="../assets/intro/intro-logo.png" alt="Intro Logo">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Intro',
    mounted() {
      this.loginMove();
    },
    methods: {
      loginMove(){
        setTimeout(() => {
          this.$router.push('/login')
        }, 2000);
      }
    }
  }
</script>

<style scoped>

  /* background img */
  #intro{
    height: 900px;
    background-image: url(https://mobile-project-img.netlify.app/intro-bg.png);
    background-size: cover;
  }

  #intro::after{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }

  /* App logo */
  #intro .logo {
    position: absolute;
    left: 50%;
    top: 50%;

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>