<template>
  <div class="container">
      <div v-if="errors.length" class="alert alert-danger mt-3">
          {{errors}}
      </div>
      <div class="form-group">
          <label class="mt-3"><b>Email</b></label>
          <input type="email" class="form-control" v-model="user.email" placeholder="Enter email">
      </div>
      <div class="form-group">
          <label><b>Password</b></label>
          <input type="password" class="form-control" v-model="user.password" placeholder="Enter password">
      </div>
      <button @click="loginUser()" class="btn btn-primary">Login</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return{
            user:{}
        }
    },
    
    computed:{
        ...mapGetters({
            errors: 'getErrors',
            
        })
    },

    methods:{
        ...mapActions({
            login: 'login'
        }),

        loginUser(){
            this.login(this.user).then(() => {
                if(!this.errors){
                    this.$router.push({name: 'Home'})
                }
            })
        }
    }
}
</script>

<style>

</style>