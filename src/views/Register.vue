<template>
  <div class="container">
      <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
            {{error[0]}}
      </div>
      <div class="form-group">
          <label class="mt-3"><b>Name</b></label>
          <input type="text" class="form-control" v-model="user.name" placeholder="Enter name">
      </div>
      <div class="form-group">
          <label><b>Email</b></label>
          <input type="email" class="form-control" v-model="user.email" placeholder="Enter email">
      </div>
      <div class="form-group">
          <label><b>Password</b></label>
          <input type="password" class="form-control" v-model="user.password" placeholder="Enter password">
      </div>
      <div class="form-group">
          <label><b>Repeat Password</b></label>
          <input type="password" class="form-control" v-model="user.confirm_password" placeholder="Repeat name">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" v-model="user.accept_terms_and_conditions" value="1">
        <label class="form-check-label-mb-3">Accept Terms And Conditions</label>
      </div>
      <button @click="registerUser()" class="btn btn-primary">Register</button>
  </div>
</template>

<script>
import { authService } from '../services/AuthService'
import { mapActions } from 'vuex'

export default {
    data(){
        return{
            user:{},
            errors:[]
        }
    },

    methods:{

        ...mapActions({
            login: 'login'
        }),

        registerUser(){
            authService.register(this.user).then(() => {

                this.login({email: this.user.email, password:this.user.password})
                this.$router.push({name: 'Home'})
            }).catch(error =>{
                this.errors = error.response.data.errors
            })
        }
    }
}
</script>

<style>

</style>