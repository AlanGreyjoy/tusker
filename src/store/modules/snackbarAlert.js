export default {
    state:{
        show: false,
        message: '',
        color: 'error',
        timeout: 3000
    },
    mutations: {
        ShowAlert(state, data) {
            state.show = true
            state.color = data.color
            state.message = data.message
        }
    },
    actions: {
        ShowAlertAsync (context, data){
            context.commit('ShowAlert', data)
            setTimeout(()=>{
                context.state.show = false
            }, context.state.timeout)
        }
    },
    getters: {
        AlertStatus: state =>{
            return state.show
        }
    }
}