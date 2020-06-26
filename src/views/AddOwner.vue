<template>
  <div class="container">
    <div class="container">
      <div class="form-group">
          <label class="mt-3"><b>Create Your Owner!</b></label>
          <input type="text" class="form-control" v-model="owner.name" placeholder="Enter Owner's name">
      </div>
      <button @click="addNewOwner" class="btn btn-success">Create Owner</button>
    </div>
  </div>
</template>

<script>
import { ownersService } from '../services/OwnersService'
export default {
  data(){
    return{
      owner:{}
    }
  },

  methods:{
    addNewOwner(){
      ownersService.addOwners(this.owner).then(() => {
        this.$router.push({name: 'Owners'})
      })
    }
  }
}
</script>

<style>

</style>