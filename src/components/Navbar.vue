<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" v-if="!isUserLoggedIn" href="/register">Register</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-if="!isUserLoggedIn" href="/login">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-if="isUserLoggedIn" href="/shops">Shops</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-if="isUserLoggedIn" href="/owners">Owners</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-if="isUserLoggedIn" href="/shops/create">Add Shop</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-if="isUserLoggedIn" href="/owners/create">Add Owner</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-if="isUserLoggedIn" href="/owners">Owners</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-if="isUserLoggedIn" href="/my-shops">My Shops</a>
      </li>
      <button v-if="isUserLoggedIn" @click="logoutUser()" class="btb btn-danger">Logout</button>
    </ul>
    <div class="form-inline my-2 my-lg-0">
      <input v-if="isUserLoggedIn" class="form-control mr-sm-2" v-model="term" type="search" placeholder="Search" aria-label="Search">
      <button v-if="isUserLoggedIn" class="btn btn-success my-2 my-sm-0" @click="searchShops()" type="submit">Search</button>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

  data(){
    return{
      term: ''
    }
  },

  computed:{
    ...mapGetters({
      isUserLoggedIn: 'isUserLoggedIn'
    })
  },
  
  methods:{
    ...mapActions({
      logout: 'logout',
      search: 'search'
    }),

    logoutUser(){
      this.logout().then(() => {
        if(this.$route.name != 'Home'){
          this.$router.push({name: 'Home'})
        }
      })
    },

    searchShops(){
      this.search(this.term)
    }
  }
}
</script>

<style>

</style>
