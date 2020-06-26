import { authService } from '../services/AuthService'

export const AuthStore = {

    state:{
        token:localStorage.getItem('token'),
        errors:[]
    },

    mutations:{
        
        setErrors(state, errors){
            state.errors = errors
        },

        setToken(state, token){
            state.token = token
        }
    },

    actions:{

        async login(context, credentials){

            try{

                const response = await authService.login(credentials);
                
                authService.setHeaders({

                    Authorization: `Bearer: ${response.data}`
                })
                localStorage.setItem('user_id', response.data.user_id)
                localStorage.setItem('token', response.data.token)
                context.commit('setToken', response.data.token)
                context.commit('setErrors', null)
            }catch(exception){
                context.commit('setErrors', exception.response.data.error)
            }
        },

        async logout(context){
            localStorage.removeItem('token')
            context.commit('setToken', null)
        }
    },

    getters:{

        getErrors(state){
            return state.errors
        },

        isUserLoggedIn(state){
            return !!state.token
        }
    }
}