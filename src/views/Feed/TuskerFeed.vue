<template>
    <v-main class="pt-0">
        <v-container class="pt-0">
            <!--Create Post-->
            <v-row>
                <v-col lg="12">
                    <tuskerCreatePost></tuskerCreatePost>
                </v-col>
            </v-row>
            <!--Feed-->
            <v-row>
                <v-col lg="12">
                    <tuskerPost
                            v-for="(post, index) in Feed"
                            :key="index"
                            :post="post"
                            class="my-6"
                    ></tuskerPost>
                </v-col>
            </v-row>
            <v-row>
                <v-col lg="12">
                    <tuskerPostPoll></tuskerPostPoll>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import tuskerCreatePost from "../../components/tuskerCreatePost";
    import tuskerPost from "../../components/tuskerPost";
    import tuskerPostPoll from "../../components/tuskerPostPoll";

    export default {
        name: "TuskerFeed",
        components:{tuskerCreatePost, tuskerPost, tuskerPostPoll},
        data() {
            return{
                myPosts:[],
                friendsPosts:[]
            }
        },
        computed: {
            Feed() {
                return this.$store.state.TuskerFeedModule.feed
            }
        },
        mounted() {
            this.GetFeed()
        },
        methods:{
            GetFeed() {
                this.$axios.get('/api/v1/feed', {params:{userId: this.$store.getters.GetUser.id}}).then(res=>{
                    this.$store.commit('LoadFeed', res.data)
                })
            }
        }
    }
</script>

<style scoped>

</style>