<template>
  <div class="conatiner">
    <h1 class="mt-3">Shops:</h1>
     <div v-for="(shop, index) in shops" :key="index">
        <ul class="list-group">
         <li class="list-group-item">
            {{ shop.name }}
         </li>
       </ul>
     </div>
     <button v-if="nextPageUrl" @click="show()" class="btn btn-primary mt-3">
       <div v-if="!shops.length">
          Show All Shops
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
      shops: 'getShops',
      nextPageUrl: 'getNextPageUrl'
    })
  },

  methods:{
    ...mapActions({
      getShops: 'getShopsByUrl'
    }),

      show(){
        this.getShops()
    }
  }
}
</script>

<style>

</style>