import { HttpService } from './HttpService'
import store from '../store';

class OwnersService extends HttpService {

  addOwners(owner){
    return this.axios.post('/owners/create', owner)
  }

  getOwnersByUrl(){
    return this.axios.post(store.getters.getOwnerNextPageUrl)
  }
}

export const ownersService = new OwnersService()