export default {
    state:{
        feed: []
    },
    mutations: {
        LoadFeed(state, data) {
            state.feed = data.myPosts.concat(data.friendsPosts)
            state.feed.sort((a,b)=>(a.createdAt > b.createdAt) ? -1: 1)
        },
        AddPost(state, data) {
            state.feed.push(data.post)
            state.feed.sort((a,b)=>(a.createdAt > b.createdAt) ? -1: 1)
        }
    },
    actions: {

    },
    getters: {},
}