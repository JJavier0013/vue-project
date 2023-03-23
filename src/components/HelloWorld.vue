<template>
  <div>
        <h2>Hello World</h2>
    <h1>{{ message }}</h1>
    <input v-model="inputValue" placeholder="Enter a message">
    <button @click="setMessage">Set message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!',
      inputValue: ''
    };
  },
  methods: {
    setMessage() {
      this.message = this.inputValue;
      this.inputValue = '';
    }
  }
};
</script>