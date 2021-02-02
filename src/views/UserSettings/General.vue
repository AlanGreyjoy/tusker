<template>
    <div class="fill-height">
        <h1 class="grey--text mb-6"><v-icon left light>mdi-account-settings</v-icon>General Account Settings</h1>
        <v-row align="center" justify="center">
            <v-col lg="12">
                <v-list light>
                    <v-list-item v-for="(setting, index) in settings" :key="index" link>
                        <v-list-item-content>
                            <v-list-item-title>{{setting.value}}</v-list-item-title>
                            <v-list-item-subtitle>{{setting.text}}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-icon :color="setting.canEdit ? 'primary':''">mdi-account-edit</v-icon>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "General",
        data() {
            return{
                settings:[
                    {text: 'Name', value: this.$store.getters.GetUser.firstName + this.$store.getters.GetUser.lastName, canEdit: true},
                    {text: 'Username', value: 'https://tuskersocial.com/'+this.$store.getters.GetUser.firstName + this.$store.getters.GetUser.lastName + this.$store.getters.GetUser.id, canEdit: false},
                    {text: 'Email', value: this.$store.getters.GetUser.email, canEdit: false},
                    {text: 'Opt-out Email, no longer receive emails from tusker :(', value: false, canEdit: true}
                ]
            }
        }
    }
</script>

<style scoped>

</style>