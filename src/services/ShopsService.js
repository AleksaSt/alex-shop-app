import { HttpService } from './HttpService'
import store from '../store';

class ShopsService extends HttpService {

  getShopsByUrl(){
    return this.axios.get(store.getters.getNextPageUrl)
  }

  addShops(shop){
    return this.axios.post('/shops/create', shop)
  }
  search(term){
    return this.axios.get(`shops/search/${term}`)
  }

  getMyShops(id){
    return this.axios.get(`my-shops/${id}`)
  }
}

export const shopsService = new ShopsService()