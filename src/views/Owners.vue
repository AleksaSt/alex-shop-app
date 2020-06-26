<template>
  <div class="conatiner">
    <h1 class="mt-3">Owners:</h1>
     <div v-for="(owner, index) in owners" :key="index">
        <ul class="list-group">
         <li class="list-group-item">
            {{ owner.name }}
         </li>
       </ul>
     </div>
     <button v-if="nextPageUrl" @click="show()" class="btn btn-primary mt-3">
       <div v-if="!owners.length">
          Show All Owners
       </div>
       <div v-else>
         Load More
       </div>
     </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  
  computed:{
    ...mapGetters({
      owners: 'getOwners',
      nextPageUrl: 'getOwnerNextPageUrl'
    })
  },

  methods:{
    ...mapActions({
      getOwners: 'getOwnersByUrl'
    }),

      show(){
        this.getOwners()
    }
  }
}
</script>

<style>

</style>