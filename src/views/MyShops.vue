<template>
  <div class="container">
      {{ shops }}
  </div>
</template>

<script>
import { shopsService } from '../services/ShopsService'
export default {
    data(){
        return{
            shops:[]
        }
    },

    created(){
        shopsService.getMyShops(localStorage.getItem('user_id')).then(response => {
            this.shops = response.data
        })
    }
}
</script>

<style>

</style>