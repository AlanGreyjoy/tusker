<template>
    <v-dialog v-model="dialog" width="650" persistent scrollable>
        <v-card>
            <v-toolbar class="mb-3" flat color="transparent">
                <v-toolbar-title>New post</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon color="error" @click="close"><v-icon>mdi-close</v-icon></v-btn>
            </v-toolbar>
            <v-card-text>
                <v-form ref="form">
                    <v-row>
                        <v-col>
                            <v-avatar>
                                <v-img
                                        src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.0-1/p200x200/81254961_2984429791590845_6278584811942576128_n.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_ohc=Ur9Ia1cZfJoAX_dKTut&_nc_ht=scontent-hou1-1.xx&tp=6&oh=3ae80d8ead917910a1c056932a2a3a89&oe=603BE315"
                                        contain
                                ></v-img>
                            </v-avatar>
                            <span class="ml-3">Alan Spurlock</span>
                        </v-col>
                    </v-row>
                    <!--Write something awesome!-->
                    <v-row>
                        <v-col>
                            <v-textarea
                                    label="Write something awesome!"
                                    filled
                                    outlined
                                    autofocus
                                    auto-grow
                                    v-model="postMessage"
                                    clearable
                            ></v-textarea>
                        </v-col>
                    </v-row>

                    <!--Inserted Gif-->
                    <v-row v-if="insertedGif.length > 0" dense no-gutters>
                        <v-col lg="12">
                            <v-card flat color="transparent">
                                <v-img :src="insertedGif" contain max-height="350">
                                    <v-btn fab small class="float-right mt-3 mr-3" color="error" @click="insertedGif = ''"><v-icon>mdi-close</v-icon></v-btn>
                                </v-img>
                            </v-card>
                        </v-col>
                    </v-row>

                    <!--Inserted Images-->
                    <v-card flat color="transparent" v-if="insertedPhotos.length > 0">
                        <v-slide-group
                                show-arrows
                        >
                            <v-slide-item
                                    v-for="(photo, index) in insertedPhotos"
                                    :key="index"
                            >
                                <v-card
                                        class=""
                                        width="500"
                                >
                                    <v-img :src="GeneratePhotoPreviewURL(index)" contain>
                                        <v-btn fab small color="error" class="float-right mt-3 mr-3" @click="insertedPhotos.splice(index, 1)"><v-icon>mdi-close</v-icon></v-btn>
                                    </v-img>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                        <v-card-title>
                            <p>Total: <small>{{insertedPhotos.length}}</small></p>
                        </v-card-title>
                    </v-card>

                    <!--Inserted Videos-->
                    <v-row v-if="insertedVideo">
                        <v-col></v-col>
                    </v-row>

                </v-form>
            </v-card-text>
            <!--Actions-->
            <v-card-actions>
                <!--Image-->
                <v-file-input hide-input single-line hide-details dense class="ma-0 pa-0 flex-grow-0" prepend-icon="mdi-image" accept="image/png, image/jpeg, image/gif, image/bmp" multiple v-model="insertedPhotos"></v-file-input>
                <!--Movie/Video-->
                <v-file-input hide-input single-line hide-details dense class="ma-0 pa-0 flex-grow-0" prepend-icon="mdi-movie" accept="video/wav, video/mp4, video/avi"></v-file-input>
                <!--Gif-->
                <v-dialog max-width="500" scrollable>
                    <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on"><v-icon>mdi-gif</v-icon></v-btn>
                    </template>
                    <v-card>
                        <v-toolbar>
                            <v-text-field label="Search" filled rounded dense hide-details single-line v-model="gfycatSearch" clearable></v-text-field>
                            <v-spacer></v-spacer>
                            <v-img src="/images/logo/gfycat-dark.png" width="1"></v-img>
                        </v-toolbar>
                        <v-card-text class="pa-0">
                            <v-row v-if="gfycatSearch.length <= 0" align="center" justify="center" no-gutters>
                                <v-col lg="2" v-for="(item, index) in gfycatCategoryList" :key="index">
                                    <v-card hover tile @click="InsertGif(item.link)">
                                        <v-img :src="item.link" height="75"></v-img>
                                    </v-card>
                                </v-col>
                            </v-row>
                            <v-row v-else no-gutters dense>
                                <v-col lg="2" v-for="(item, index) in gifs" :key="index">
                                    <v-card hover @click="InsertGif(item.link)" tile>
                                        <v-img :src="item.link" height="75">
                                        </v-img>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-dialog>
                <v-spacer></v-spacer>
                <v-btn icon color="error" @click="close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-btn color="success" icon @click="post">
                    <v-icon>mdi-check</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "createPostDialog",
        data() {
            return {
                model: null,
                dialog: false,
                resolve: null,
                reject: null,
                postMessage: '',
                gfycatCategories:[
                    'troll', 'please', 'thank you', 'miss you', 'wink', 'whatever', 'hungry', 'dance', 'annoyed', 'omg', 'crazy', 'shrug', 'smile', 'awkward', 'ew', 'angry', 'surprised', 'michael scott', 'why', 'thumbs up', 'wow', 'ouch', 'oops', 'youre welcome', 'lazy', 'stressed',
                    'embarrassed', 'clapping', 'awesome', 'jk', 'lol', 'lmao', 'yolo', 'good luck', 'high five', 'duh', 'aww', 'scared', 'smash', 'sleepy', 'ok', 'sorry'
                ],
                gfycatCategoryList:[],
                gifs: [],
                gfycatSearch: '',
                insertedGif: '',
                insertedPhotos:[],
                insertedVideo: null,
                private: false,
            }
        },
        watch: {
            insertedPhotos() {
                console.log(this.insertedPhotos)
            },
            dialog() {
                if (!this.dialog) {
                    this.postMessage = ''
                    this.$refs.form.reset
                    this.gfycatSearch = ''
                    this.gifs = []
                    this.gfycatCategoryList = []
                    this.insertedGif = ''
                }
            },
            gfycatSearch() {
                setTimeout(()=>{
                    this.SearchGfycat()
                }, 500)
            }
        },
        methods: {
            GeneratePhotoPreviewURL(index) {
                return URL.createObjectURL(this.insertedPhotos[index])
            },
            post() {
                if (!this.$refs.form.validate()) {
                    return;
                }
                this.$axios.post('/api/v1/feed', {
                    user: this.$store.getters.GetUser,
                    postMessage: this.postMessage,
                    hasGif: this.insertedGif !== '',
                    gif: this.insertedGif,
                    hasPhotos: this.insertedPhotos.length > 0,
                    photos: this.insertedPhotos,
                    private: this.private
                    // eslint-disable-next-line no-unused-vars
                }).then(res=>{
                    this.$store.dispatch('ShowAlertAsync', {color: 'success', message: 'Post Success!'})
                    this.$store.commit('AddPost', res.data)
                    this.close()
                }).catch(error=>{
                    this.$store.dispatch('ShowAlertAsync', {color: 'error', message: error.response.data.message})
                })
            },
            InsertGif(link) {
                if(this.insertedGif.length) this.insertedGif = ''
                this.insertedGif = link
            },
            SearchGfycat() {
                this.$axios.get(`https://api.gfycat.com/v1/gfycats/search?search_text=${this.gfycatSearch}&count=18&rating=g`).then(res=>{
                    this.gifs = []
                    res.data.gfycats.forEach(gif=>{
                        this.gifs.push({
                            link: gif.gif100px
                        })
                    })
                })
            },
            GetgfycatCategories() {
                this.gfycatCategories.forEach(cat=>{
                    this.$axios.get(`https://api.gfycat.com/v1/gfycats/search?search_text=${cat}&count=1&rating=g`).then(res=>{
                        this.gfycatCategoryList.push({
                            name: cat,
                            link: res.data.gfycats[0].gif100px
                        })
                    })
                })
            },
            open() {
                this.gfycatCategoryList = []
                this.GetgfycatCategories()
                this.dialog = true
                return new Promise((resolve, reject) => {
                    this.resolve = resolve
                    this.reject = reject
                })
            },
            close() {
                this.resolve(false)
                this.dialog = false
            }
        }
    }
</script>

<style scoped>

</style>