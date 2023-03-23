<template> 
      <div class="row">
        <div class="col-sm-12">
            <div class="form-group">
                <h1>New Test 1</h1>
                <h2>Message : {{ message }}</h2>
                <h2>Length : {{ length }}</h2>     
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <input class="form-control" v-model="inputValue" placeholder="Enter First Name" type="text"> 
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <input class="form-control" placeholder="Enter Last Name" type="text">  
          </div>
        </div>
      </div>  
      <div class="row">
        <div class="col-sm-12">
          <div class="form-group">
            <button class="btn btn-success" @click="setMessage">Submit</button> 
          </div>
             
        </div>
      </div>  
         
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: ' ',
        inputValue: ''
      };
    },
    methods: {
      setMessage() {
        this.message = this.inputValue;
        this.length = this.inputValue.length;
        this.inputValue = '';
      }
    }
  };
  </script>