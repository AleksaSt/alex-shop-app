import { ownersService } from '../services/OwnersService'


export const OwnersStore = {

    state:{
        owners:[],
        owner_next_page_url: 'owners'
    },

    mutations:{
        
        setOwners(state, owners){
            state.owners = owners
        },

        extendsOwners(state, owners){
            state.owners.push(... owners)
        },

        setNextPageUrl(state, url){
            state.owner_next_page_url = ownersService.parseUrl(url)
        }
    },

    actions:{

        async getOwnersByUrl(context){

            const response = await ownersService.getOwnersByUrl()
            context.commit('extendsOwners', response.data.data)
            context.commit('setNextPageUrl', response.data.next_page_url)
        }
    },

    getters:{

        getOwners(state){
            return state.owners
        },

        getOwnerNextPageUrl(state){
            return state.owner_next_page_url
        }
    }
}