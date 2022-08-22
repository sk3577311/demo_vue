<template>
<div class="container">
  <div class="row">
    <div class="col-12 col-md-4 col-sm-6 offset-sm-4">
      <div class="card me-auto mt-5 shadow-lg">
        <div class="card-header bg-success text-white">
          <p class="h3">Register</p>
        </div>
        <div class="card-body bg-light">
          <form @submit.prevent="register()">
            <div class="mb-2">
              <input v-model="user.name" type="text" class="form-control" placeholder="Enter Name">
            </div>
            <div class="mb-2">
              <input v-model="user.email" type="email" class="form-control" placeholder="Enter Email">
            </div>
            <div class="mb-2">
              <input v-model="user.password" type="password" class="form-control" placeholder="Enter Password">
            </div>
            <div class="mb-2">
              <input type="submit" class="form-control bg-success text-white" value="Register">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
 
<script>
  export default {
    name : 'MyRegistration',
    data: function(){
        return {
          user : {
            name  : "",
            email : "",
            password : "",

          }
        }
    },
    methods : {
      register : function(){
        console.log(this.user);
      }
    }
  };
</script>
