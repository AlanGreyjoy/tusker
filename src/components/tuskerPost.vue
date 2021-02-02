<template>
    <v-card shaped class="pb-1" max-width="600">
        <v-card-title>
            <v-avatar>
                <v-img
                        alt="Mandy"
                        src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.0-1/cp0/p40x40/124156481_2286907241453079_7234334879373091197_o.jpg?_nc_cat=103&ccb=2&_nc_sid=7206a8&_nc_ohc=3aA4JrhODQcAX89bWxq&_nc_ht=scontent-hou1-1.xx&tp=27&oh=ec747827576f74441733e3f2a22773a4&oe=6036E727"
                >
                </v-img>
            </v-avatar>
            <h1 class="ml-3 headline font-weight-light">{{`${post.user.firstName} ${post.user.lastName}`}} <span class="subtitle-2 font-weight-light grey--text ml-3">{{post.createdAt | moment('MM/DD/YYYY @ h:MM A')}}</span></h1>
            <v-spacer></v-spacer>
            <!--Menu-->
            <v-btn icon><v-icon>mdi-dots-horizontal</v-icon></v-btn>
            <!--Show/Hide post-->
            <v-btn icon @click="showPost = !showPost"><v-icon>{{showPost ? 'mdi-chevron-up':'mdi-chevron-down'}}</v-icon></v-btn>
        </v-card-title>
        <div v-show="showPost">
            <!--Post Text-->
            <v-card-text class="py-0">
                <p>
                    {{post.post}}
                </p>
                <v-img v-if="post.hasGif" :src="post.gfycatUrl"></v-img>
            </v-card-text>

            <!--Reactions and Comment total-->
            <v-toolbar color="transparent" flat dense>
                <emoji class="mr-1" emoji=":santa::skin-tone-3:"></emoji>
                <emoji class="mr-1" emoji=":eggplant::skin-tone-3:"></emoji>
                <emoji class="mr-1" emoji=":heart_eyes:"></emoji>
                <v-spacer></v-spacer>
                <v-btn color="transparent" tile elevation="0" @click="showComments = !showComments" class="text-sm-caption"><v-icon left>mdi-comment</v-icon>Show Comments</v-btn>
            </v-toolbar>

            <!--Actions-->
            <v-toolbar color="transparent" flat dense>
                <v-row align="center" justify="space-between">
                    <!--Emoji Picker-->
                    <v-col>
                        <picker v-if="showAddReaction" set="twitter" :style="{ position: 'absolute', bottom: '50px', left: '20px' }" :showPreview="false" :infiniteScroll="false"></picker>
                        <v-btn icon block rounded @click="showAddReaction = !showAddReaction"><v-icon class="mr-1 grey--text" :color="showAddReaction ? 'primary':''">mdi-emoticon-outline</v-icon></v-btn>
                    </v-col>
                    <!--Add Comment-->
                    <v-col>
                        <v-btn icon block rounded @click="showEnterComment = !showEnterComment"><v-icon class="mr-1 grey--text" :color="showEnterComment ? 'primary':''">mdi-comment</v-icon></v-btn>
                    </v-col>
                    <!--Repost-->
                    <v-col>
                        <v-btn icon block rounded><v-icon class="mr-1 grey--text">mdi-recycle</v-icon></v-btn>
                    </v-col>
                    <!--Share-->
                    <v-col>
                        <v-btn icon block rounded><v-icon class="mr-1 grey--text">mdi-share</v-icon></v-btn>
                    </v-col>
                </v-row>
            </v-toolbar>

            <!--Write a comment-->
            <div v-if="showEnterComment" class="mx-3 mb-6 mt-3">
                <v-text-field
                        label="Enter your comment..."
                        filled
                        rounded
                        single-line
                        hide-details
                        append-icon="mdi-message"
                ></v-text-field>
            </div>

            <!--Comments-->
            <div v-if="showComments" class="mx-3 my-3">
                <h4 class="grey--text mb-3">Comments</h4>
                <v-row align="center" justify="center">
                    <v-col lg="12">
                        <div class="float-left mr-3">
                            <v-avatar>
                                <v-img
                                        src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.0-0/p526x296/141970079_1335926026775312_6485756272681141377_o.jpg?_nc_cat=1&ccb=2&_nc_sid=8bfeb9&_nc_ohc=8hjoYZfgIFwAX_RNQ7k&_nc_oc=AQk0CTax0S7nAzHMv_ZguF96l22OwykJvsMY_JHtGMdU_acmtmntx7D_npoMpBTbvgo&_nc_ht=scontent-hou1-1.xx&tp=6&oh=5c6e83ece585b7fea69286b1ec8ed4cd&oe=6034044F"
                                ></v-img>
                            </v-avatar>
                        </div>
                        <div>
                            <h5 class="grey--text">Alan Spurlock <span class="font-weight-light ml-3">Today at 1:15 PM</span></h5>
                            <p class="text-body-1 grey--text">lajsdfklasjdf</p>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "tuskerPost",
        props:['post'],
        data() {
            return{
                showPost: true,
                showAddReaction: false,
                showEnterComment: false,
                showComments: false,
            }
        }
    }
</script>

<style scoped>

</style>