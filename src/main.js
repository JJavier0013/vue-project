import { createApp } from 'vue'
import App from './App.vue' 
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';

createApp(App).mount('#app')


axios.get('/api/users')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });