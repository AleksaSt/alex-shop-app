<template>
  <div class="container">
      <div class="form-group">
          <label class="mt-3"><b>Create Your Shop!</b></label>
          <input type="text" class="form-control" v-model="shop.name" placeholder="Enter shop name">
      </div>
      <button @click="addNewShop" class="btn btn-success">Create Shop</button>
  </div>
</template>

<script>
import { shopsService } from '../services/ShopsService'
export default {
  data(){
    return{
      shop:{
        user_id: localStorage.getItem('user_id')
      }
    }
  },

  methods:{
    addNewShop(){
      shopsService.addShops(this.shop).then(() => {
        this.$router.push({name: 'Shops'})
      })
    }
  }
}
</script>

<style>

</style>