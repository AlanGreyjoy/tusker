export default {
    state:{
        token: localStorage.getItem('jwt') ? localStorage.getItem('jwt'):null,
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):null
    },
    mutations:{
        // eslint-disable-next-line no-unused-vars
        Logout(state) {
            localStorage.removeItem('jwt')
            localStorage.removeItem('user')
        }
    },
    actions: {},
    getters: {
        GetUser: state =>{
            return state.user
        }
    }
}