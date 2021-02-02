<template>
    <v-snackbar
            shaped
            v-model="showAlert"
            :timeout="AlertTimer"
            :color="AlertColor"
    >
        <v-icon left>mdi-alert-circle-outline</v-icon><span>{{AlertMessage}}</span>
    </v-snackbar>
</template>

<script>
    export default {
        name: "defaultSnackbar",
        data() {
            return{
                show: false
            }
        },
        computed: {
            showAlert() {
                return this.$store.getters.AlertStatus
            },
            AlertTimer() {
                return this.$store.state.snackbarAlertModule.timeout
            },
            AlertColor() {
                return this.$store.state.snackbarAlertModule.color
            },
            AlertMessage() {
                return this.$store.state.snackbarAlertModule.message
            }
        },
    }
</script>

<style scoped>

</style>