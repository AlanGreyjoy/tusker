<template>
    <div>
        <v-card shaped class="pb-1" max-width="600">
            <v-card-title>
                <v-avatar>
                    <v-img
                            alt="Mandy"
                            src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.0-1/cp0/p40x40/124156481_2286907241453079_7234334879373091197_o.jpg?_nc_cat=103&ccb=2&_nc_sid=7206a8&_nc_ohc=3aA4JrhODQcAX89bWxq&_nc_ht=scontent-hou1-1.xx&tp=27&oh=ec747827576f74441733e3f2a22773a4&oe=6036E727"
                    >
                    </v-img>
                </v-avatar>
                <h1 class="ml-3 headline font-weight-light">Mandy Lara <span class="font-weight-thin text-body-1 ml-3"><v-icon size="12" class="mr-1">mdi-clock</v-icon>6h</span></h1>
                <v-spacer></v-spacer>
                <!--Menu-->
                <v-btn icon><v-icon>mdi-dots-horizontal</v-icon></v-btn>
                <!--Show/Hide post-->
                <v-btn icon @click="showPost = !showPost"><v-icon>{{showPost ? 'mdi-chevron-up':'mdi-chevron-down'}}</v-icon></v-btn>
            </v-card-title>
            <v-card-text>
                Pineapple on pizza????
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" outlined tile>Hate it!</v-btn>
                <v-btn color="primary" outlined tile>Love it!</v-btn>
                <v-btn color="primary" outlined tile>I don't care either way</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "tuskerPostPoll",
        data() {
            return{
                showPost: true,
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>