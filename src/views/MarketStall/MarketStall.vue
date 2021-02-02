<template>
    <div class="ma-0 pa-0">
        <v-toolbar flat color="transparent">
            <v-text-field
                    label="Search..."
                    append-icon="mdi-magnify"
                    single-line
                    hide-details
                    rounded
                    filled
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-select
                    label="Categories"
                    filled
                    rounded
                    hide-details
                    single-line
                    small-chips
            ></v-select>
            <v-btn x-large tile class="ml-3" color="transparent" elevation="0">Filters <v-icon>mdi-filter</v-icon></v-btn>
        </v-toolbar>
        <v-row class="mt-3">
            <v-col>
                <h3 class="subtitle-1"><v-icon left>mdi-fire</v-icon>Hot items</h3>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-row align="center" justify="start">
                                <v-card max-width="200" class="ma-1" shaped>
                                    <v-img
                                            src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.0-0/c43.0.260.260a/p261x260/133347545_2829891323923180_6767434728729601904_o.jpg?_nc_cat=101&ccb=2&_nc_sid=843cd7&_nc_ohc=QPWyaCshlp8AX9RjozC&_nc_ht=scontent-hou1-1.xx&tp=27&oh=c30633c4d5e945a41d764952e18cc8c1&oe=6037E6F5"
                                    ></v-img>
                                    <v-card-title>$1,1550</v-card-title>
                                    <v-card-subtitle>New Gaming Pc Rtx 3060 ti - Ryzen 5 5600x - 16g 3200mhz ram</v-card-subtitle>
                                    <v-card-text class="ma-0 pb-1">
                                        <p>McKinney, TX</p>
                                    </v-card-text>
                                </v-card>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
        <v-divider class="my-6"></v-divider>
        <v-row>
            <v-col>
                <h3 class="subtitle-1"><v-icon left>mdi-clock</v-icon>Latest</h3>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-row align="center" justify="start">
                                <v-card max-width="200" class="ma-1" shaped>
                                    <v-img
                                            src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.0-0/c43.0.260.260a/p261x260/133347545_2829891323923180_6767434728729601904_o.jpg?_nc_cat=101&ccb=2&_nc_sid=843cd7&_nc_ohc=QPWyaCshlp8AX9RjozC&_nc_ht=scontent-hou1-1.xx&tp=27&oh=c30633c4d5e945a41d764952e18cc8c1&oe=6037E6F5"
                                    ></v-img>
                                    <v-card-title>$1,1550</v-card-title>
                                    <v-card-subtitle>New Gaming Pc Rtx 3060 ti - Ryzen 5 5600x - 16g 3200mhz ram</v-card-subtitle>
                                    <v-card-text class="ma-0 pb-1">
                                        <p>McKinney, TX</p>
                                    </v-card-text>
                                </v-card>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
        <v-divider class="my-6"></v-divider>
        <v-row>
            <v-col>
                <h3 class="subtitle-1"><v-icon left>mdi-clock-alert</v-icon>Going soon</h3>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-row align="center" justify="start">
                                <v-card max-width="200" class="ma-1" shaped>
                                    <v-img
                                            src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.0-0/c43.0.260.260a/p261x260/133347545_2829891323923180_6767434728729601904_o.jpg?_nc_cat=101&ccb=2&_nc_sid=843cd7&_nc_ohc=QPWyaCshlp8AX9RjozC&_nc_ht=scontent-hou1-1.xx&tp=27&oh=c30633c4d5e945a41d764952e18cc8c1&oe=6037E6F5"
                                    ></v-img>
                                    <v-card-title>$1,1550</v-card-title>
                                    <v-card-subtitle>New Gaming Pc Rtx 3060 ti - Ryzen 5 5600x - 16g 3200mhz ram</v-card-subtitle>
                                    <v-card-text class="ma-0 pb-1">
                                        <p>McKinney, TX</p>
                                    </v-card-text>
                                </v-card>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "MarketStall"
    }
</script>

<style scoped>

</style>