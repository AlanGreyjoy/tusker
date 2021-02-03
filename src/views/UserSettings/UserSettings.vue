<template>
    <div>
        <v-bottom-sheet inset v-model="show" light style="background-color: white" width="800">
            <v-card light shaped class="fill-height pb-12">
                <v-toolbar>
                    <v-toolbar-title>
                        <v-avatar color="primary" class="mr-3">
                            <v-img v-if="User.profilePictureUrl !== ''"></v-img>
                            <span v-else class="white--text">{{User.firstName.charAt(0) + User.lastName.charAt(0)}}</span>
                        </v-avatar>
                        {{`${User.firstName} ${User.lastName}`}}
                    </v-toolbar-title>
                    <v-subheader>{{User.email}}</v-subheader>
                    <v-spacer></v-spacer>
                    <v-btn fab small color="error"><v-icon>mdi-close</v-icon></v-btn>
                </v-toolbar>
                <v-tabs v-model="tabModel" vertical light icons-and-text class="fill-height">
                    <!--Settings-->
                    <v-tab>Settings<v-icon>mdi-account-settings</v-icon></v-tab>
                    <v-tab-item style="background-color: white">
                        <General class="fill-height"></General>
                    </v-tab-item>
                    <!--Security & Login-->
                    <v-tab>Security & Login <v-icon>mdi-account-key</v-icon></v-tab>
                    <v-tab-item style="background-color: white">
                        <SecurityAndLogin></SecurityAndLogin>
                    </v-tab-item>
                </v-tabs>
            </v-card>
        </v-bottom-sheet>
    </div>
</template>

<script>
    import General from "./General";
    import SecurityAndLogin from "./SecurityAndLogin";

    export default {
        name: "UserSettings",
        components: {General, SecurityAndLogin},
        data() {
            return{
                show: true,
                resolve: null,
                reject: null,
                tabModel: 1
            }
        },
        watch: {
            show() {

            }
        },
        computed: {
            User() {
                console.log(this.$store.getters.GetUser)
                return this.$store.getters.GetUser
            }
        },
        methods:{
            Show() {
                this.show = true
                return new Promise((resolve, reject)=>{
                    this.resolve = resolve
                    this.reject = reject
                })
            },
            Close() {
                this.show = false
                this.reject(false)
            }
        }
    }
</script>

<style scoped>

</style>