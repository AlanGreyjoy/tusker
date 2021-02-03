<template>
    <div class="fill-height">
        <h1 class="grey--text mb-6"><v-icon left light>mdi-account-key</v-icon>Security & Login</h1>
        <v-row>
            <v-col lg="12">
                <v-list light>
                    <!--2fa-->
                    <v-list-item link @click="OpenMFADialog">
                        <v-list-item-avatar>
                            <v-icon>mdi-account-key</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Enabled</v-list-item-title>
                            <v-list-item-subtitle>Two-factor Authentication</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-icon color="primary">mdi-pencil</v-icon>
                        </v-list-item-action>
                    </v-list-item>
                    <!--Change Password-->
                    <v-list-item link @click="OpenPasswordDialog">
                        <v-list-item-avatar>
                            <v-icon>mdi-onepassword</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>**********</v-list-item-title>
                            <v-list-item-subtitle>Password</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-icon color="primary">mdi-pencil</v-icon>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
        <!--Logins-->
        <h3 class="mt-6 grey--text">Logins</h3>
        <v-row align="center" justify="center">
            <v-col lg="12" class="pr-6">
                <v-toolbar flat light shaped class="mx-0 px-0">
                    <v-text-field
                            label="Search..."
                            append-icon="mdi-magnify"
                            v-model="loginSearch"
                            filled
                            rounded
                            hide-details
                            single-line
                    ></v-text-field>
                </v-toolbar>
                <v-data-table
                        light
                        :headers="loginHeaders"
                        :items="logins"
                        :search="loginSearch"
                ></v-data-table>
            </v-col>
        </v-row>

        <!--Password Dialog-->
        <PasswordDialog ref="PasswordDialog"></PasswordDialog>
        <!--MFADialog-->
        <MFADialog ref="MFADialog"></MFADialog>
    </div>
</template>

<script>
    import PasswordDialog from "./Dialogs/PasswordDialog";
    import MFADialog from "./Dialogs/MFADialog";

    export default {
        name: "SecurityAndLogin",
        components: {PasswordDialog, MFADialog},
        data() {
            return{
                loginHeaders:[
                    {text: 'Device Name', value: 'deviceName'},
                    {text: 'App', value: 'app'},
                    {text: 'Location', value: 'location'},
                    {text: 'Active Now?', value: 'activeNow'}
                ],
                logins:[],
                loginSearch: ''
            }
        },
        methods:{
            OpenMFADialog() {
                this.$refs.MFADialog.open()
            },
            OpenPasswordDialog() {
                this.$refs.PasswordDialog.open()
            }
        }
    }
</script>

<style scoped>

</style>