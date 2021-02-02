<template>
    <div>
        <v-app-bar
                app
                color="primary"
                dark
                clipped-left
        >
            <div class="d-flex align-center">
                <v-img
                        alt="Vuetify Logo"
                        class="shrink mr-2"
                        contain
                        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                        transition="scale-transition"
                        width="40"
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

            <v-btn icon class="mr-1">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn icon class="mr-1">
                <v-icon>mdi-bell</v-icon>
            </v-btn>
            <v-btn icon class="mr-1">
                <v-icon>mdi-message</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer
                app
                clipped
                floating
        >
            <v-list rounded nav>
                <v-list-item v-for="link in links" :key="link.linkTo" link>
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
    </div>
</template>

<script>
    export default {
        name: "tuskerHome"
    }
</script>

<style scoped>

</style>