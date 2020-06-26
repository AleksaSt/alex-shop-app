import { shopsService } from '../services/ShopsService'

export const ShopsStore = {

    state:{
        next_page_url: 'shops',
        shops:[]
    },

    mutations:{
        
        setNextPageUrl(state, url){
            state.next_page_url = shopsService.parseUrl(url)
        },

        extendsShops(state, shops){
            state.shops.push(... shops)
        },

        setShops(state, shops){
            state.shops = shops
        }
    },

    actions:{
        async getShopsByUrl(context){
            
            const response = await shopsService.getShopsByUrl()
            context.commit('extendsShops', response.data.data)
            context.commit('setNextPageUrl', response.data.next_page_url)
        },
        async search(context, term){
            const response = await shopsService.search(term)
            context.commit('setShops', response.data)
        }
    },
    
    getters:{

        getNextPageUrl(state){
            return state.next_page_url
        },
    
        getShops(state){
            return state.shops
        }
    }
}