<template>
  <div class="container">
    <img class="img-fluid" alt="Vue logo" src="./assets/csb_logo.png"> 
    <NewTest1/> 
  </div> 
</template>

<script>
import NewTest1 from './components/NewTest1.vue'

export default {
  name: 'App',
  components: {
    NewTest1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;

}
#inputs{
  margin-bottom: 10px;
}
.btn{margin-top: 10px;}
</style>
