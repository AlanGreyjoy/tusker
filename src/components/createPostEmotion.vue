<template>
    <v-dialog v-model="dialog" width="650">
        <v-card>
            <v-card-title>

            </v-card-title>
            <v-card-text>

            </v-card-text>
            <v-card-actions>
                <v-spacer>

                </v-spacer>
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
        name: "createPostEmotion",
        data() {
            return {
                dialog: false,
                resolve: null,
                reject: null,
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