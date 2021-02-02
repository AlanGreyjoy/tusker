<template>
    <div>
        <!--App Bar-->
        <v-app-bar
                app
                color="primary"
                dark
                clipped-left
                clipped-right
        >
            <div class="d-flex align-center">
                <v-img
                        alt="tusker Logo"
                        class="shrink mr-6"
                        contain
                        src="/images/logo/dark-logo.png"
                        transition="scale-transition"
                        width="150"
                />
                <v-text-field
                        filled
                        rounded
                        label="Search tusker..."
                        prepend-inner-icon="mdi-magnify"
                        hide-details
                        single-line
                ></v-text-field>
            </div>

            <v-spacer></v-spacer>
            <!--Profile Picture / Link to profile page-->
            <v-btn fab small @click="goToMyProfile" class="mr-1">
                <v-avatar size="40">
                    <v-img
                            src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.0-1/p200x200/81254961_2984429791590845_6278584811942576128_n.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_ohc=Ur9Ia1cZfJoAX_dKTut&_nc_ht=scontent-hou1-1.xx&tp=6&oh=3ae80d8ead917910a1c056932a2a3a89&oe=603BE315"
                    ></v-img>
                </v-avatar>
            </v-btn>
            <!--Dark/Light-->
            <v-btn icon class="mr-1" @click="changeDarkMode">
                <v-icon>{{darkModeEnabled ? 'mdi-lightbulb-on':'mdi-lightbulb'}}</v-icon>
            </v-btn>
            <!--Alerts-->
            <v-btn icon class="mr-1">
                <v-icon>mdi-bell</v-icon>
            </v-btn>
            <!--Messages-->
            <v-btn icon class="mr-1">
                <v-icon>mdi-message</v-icon>
            </v-btn>
            <!--Settings-->
            <v-menu offset-y min-width="350">
                <template v-slot:activator="{on}">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <v-avatar>
                            <v-img
                                    src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.0-1/p200x200/81254961_2984429791590845_6278584811942576128_n.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_ohc=Ur9Ia1cZfJoAX_dKTut&_nc_ht=scontent-hou1-1.xx&tp=6&oh=3ae80d8ead917910a1c056932a2a3a89&oe=603BE315"
                            ></v-img>
                        </v-avatar>
                        <span class="ml-3">{{`${$store.getters.GetUser.firstName} ${$store.getters.GetUser.lastName}`}}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-list rounded>
                            <!--Settings-->
                            <v-list-item link @click="OpenUserSettingsSheet">
                                <v-list-item-avatar><v-icon>mdi-account-settings</v-icon></v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>Settings</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <!--View Profile-->
                            <v-list-item link>
                                <v-list-item-avatar><v-icon>mdi-eye</v-icon></v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>View Profile</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider class="mb-2"></v-divider>
                            <!--Feedback-->
                            <v-list-item link>
                                <v-list-item-avatar><v-icon>mdi-message-text-outline</v-icon></v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>Feedback</v-list-item-title>
                                    <v-list-item-subtitle>It's always welcome!</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider class="mb-2"></v-divider>
                            <!--Logout-->
                            <v-list-item link @click="Logout">
                                <v-list-item-avatar><v-icon>mdi-logout-variant</v-icon></v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>Logout!</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-menu>
        </v-app-bar>

        <!--Left Nav-->
        <v-navigation-drawer
                app
                clipped
                floating
        >
            <v-list rounded nav>
                <v-list-item v-for="link in links" :key="link.linkTo" link :to="{name: link.linkTo}">
                    <v-list-item-avatar>
                        <v-icon :color="link.iconColor">{{link.icon}}</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{link.name ? link.name:link.value}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view></router-view>
        </v-main>

        <!--User Settings Bottom Sheet-->
        <UserSettings ref="UserSettings"></UserSettings>

    </div>
</template>

<script>
    import UserSettings from "../UserSettings/UserSettings";

    export default {
        name: "TuskerHome",
        components: {UserSettings},
        data() {
            return{
                settingsDialog: true,
                links:[
                    {name: '', linkTo: 'home.tuskerFeed', value: 'My Feed', icon: 'mdi-fire', iconColor: 'primary'},
                    {name: 'Pages', linkTo: 'home.tuskerPages', value: '', icon: 'mdi-book-open-page-variant', iconColor: 'primary lighten-3'},
                    {name: 'Groups', linkTo: 'home.tuskerGroups', value: '', icon: 'mdi-book-open-page-variant', iconColor: 'red'},
                    {name: 'Find Tuskers', linkTo: 'home.findTusker', value: '', icon: 'mdi-account-group', iconColor: 'purple'}
                ]
            }
        },
        computed: {
            darkModeEnabled() {
                return this.$vuetify.theme.dark
            }
        },
        beforeMount() {
            this.$router.push({name: 'home.tuskerFeed'})
        },
        methods:{
            Logout() {
                this.$store.commit('Logout')
                this.$router.push({name: 'welcome'})
            },
            goToMyProfile() {

            },
            changeDarkMode() {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            },
            OpenUserSettingsSheet() {
                this.$refs.UserSettings.Show().then(res=>{
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>

</style>