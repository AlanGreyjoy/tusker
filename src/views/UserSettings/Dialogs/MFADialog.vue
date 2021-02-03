<template>
    <v-dialog v-model="dialog" width="650" light>
        <v-card>
            <v-card-title>
                Two-factor Authentication Settings
            </v-card-title>
            <v-card-text>
                <!--Email to use for 2fa-->
                <v-subheader>Email to use for 2fa</v-subheader>
                <v-text-field label="Email" filled rounded></v-text-field>
                <!--Enable SMS 2fa-->
                <v-checkbox label="Enable SMS/Text 2fa?" :value="useSMS" v-model="UserUsesSMS"></v-checkbox>
                <!--Description-->
                <v-divider class="my-6"></v-divider>
                <p><strong>2fa is required to use tusker</strong></p>
                <p>You can use just email, just sms, or you can use both!</p>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon color="error" @click="close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-btn color="success" icon>
                    <v-icon>mdi-check</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "MFADialog",
        data() {
            return {
                dialog: false,
                resolve: null,
                reject: null,
                useSMS: false
            }
        },
        computed: {
            UserUsesSMS() {
                return this.$store.getters.GetUser.mfaDefaultSms
            }
        },
        methods: {
            open() {
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