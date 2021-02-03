<template>
    <div>
        <v-app-bar
                color="transparent"
                flat
                absolute
                fixed
                style="position: sticky; top: 0px"
        >
            <v-spacer></v-spacer>
            <v-btn outlined color="primary" @click="Login">Login</v-btn>
        </v-app-bar>
        <v-navigation-drawer
                app
                color="primary"
                floating
        >
            <v-row align="center" justify="center" class="mt-3">
                <v-col cols="8">
                    <v-img
                            src="/images/logo/dark-logo.png"
                            contain
                    ></v-img>
                    <p class="text-center text-sm-caption mt-3">Standing together</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col lg="12">
                    <v-card color="transparent" flat>
                        <v-card-text>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                            label="Email"
                                            filled
                                            rounded
                                            disabled
                                    ></v-text-field>
                                    <v-text-field
                                            label="Password"
                                            filled
                                            rounded
                                            disabled
                                    ></v-text-field>
                                    <v-btn block color="purple" rounded large>Register</v-btn>
                                    <p class="text-center mt-3">Head to the login page for the beta sign up form!</p>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <template v-slot:append>
                <div class="text-center">
                    {{ new Date().getFullYear() }} — <strong>tusker</strong>
                </div>
            </template>
        </v-navigation-drawer>
        <v-main style="margin-top: -63px">
            <v-container class="ma-0 pa-0" style="max-width: none !important;">

                <v-row style="height: 100vh !important; width: 100% !important; margin: 0 !important;" align="center" justify="center" class="header-wallpaper">
                    <v-col cols="8">
                        <h1 class="display-3 font-weight-light">Taking on the giants...</h1>
                        <h3 class="display-1 font-weight-thin mt-3">one whale at a time</h3>
                    </v-col>
                </v-row>

                <v-divider light class="my-6"></v-divider>

                <!--Privacy-->
                <v-row class="my-12 py-6 px-6">
                    <v-col lg="6">
                        <v-img
                                src="/images/privacy.png"
                                contain
                                height="350"
                        ></v-img>
                    </v-col>
                    <v-col lg="6" class="pr-12">
                        <h1 class="text-center display-2 font-weight-thin">First things first, lets talk about Privacy</h1>
                        <p class="mt-3 text-center subtitle-1">
                            We will never, ever, never ever never, sell your info
                        </p>
                        <p class="mt-8">
                            We will not sell your email <br>
                            We will not sell your phone number <br>
                            We will not sell any of your info <br>
                            We will not sell any of your posts, pictures, or anything that can help with advertisers <br>
                            <br>
                            Our privacy policy is simple, nothing is shared or sold. <br>
                            It would take a subpoena. That's how serious we are.
                        </p>
                    </v-col>
                </v-row>

                <v-divider light class="my-6 mx-12"></v-divider>

                <!--What is tusker?-->
                <v-row class="my-12 py-6 px-6">
                    <v-col lg="12">
                        <v-row>
                            <v-col>
                                <v-img src="/images/logo/dark-icon.png" height="75" contain class="mb-6"></v-img>
                                <h1 class="text-center display-2 font-weight-thin">What is tusker?</h1>
                            </v-col>
                        </v-row>
                        <v-row align="center" justify="center">
                            <v-col lg="12" class="text-center">
                                <p>
                                    tusker is a social media alternative to facebook with one goal. Earn the trust of people on social
                                    media platforms again.
                                </p>
                                <p>Posting, market place, live auctions, chat, live polls, groups, pages, cloud storage, voice, video... its all here!</p>
                                <h3 class="grey--text mt-3">
                                    What about that crazy name?
                                </h3>
                                <p>
                                    Tusker is another word for elephant. They are tough and resilient animals
                                </p>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-divider light class="my-6 mx-12"></v-divider>

                <!--Advertising-->
                <v-row class="my-12 py-6 px-12">
                    <v-col lg="6">
                        <h1 class="text-center display-2 font-weight-thin">Advertising</h1>
                        <p class="text-center display-1 mt-3">Will I see ads?</p>
                        <div class="mx-12">
                            <p>Yes.</p>
                            <h3 class="mb-3">BUT!</h3>
                            <p>We control the ads. We will not use any third party service to randomly display advertisements on our platform.</p>
                            <p>They are NEVER right either. You buy some new clothes, and now for the next three days, you see clothing advertisements... A little late right?</p>
                            <p>What's even worse... is how and why do they know that?</p>
                            <p>That's not cool.</p>
                            <p>
                                Every ad MUST be approved by us. And its simple. Submit a 300x300 advertisement, if approved, it will be displayed.
                                <br> That was the good ole' days of seeing ads.
                            </p>
                        </div>
                    </v-col>
                    <v-col lg="6">
                        <v-img
                                src="/images/adpurple.png"
                                height="500"
                                contain
                        ></v-img>
                    </v-col>
                </v-row>

                <v-divider light class="my-6 mx-12"></v-divider>

                <!--Who are we?-->
                <v-row class="my-12 py-6 px-12" align="center" justify="center">
                    <v-col lg="8">
                        <v-img src="/images/logo/dark-logo.png" contain height="100"></v-img>
                        <h1 class="text-center display-2 font-weight-thin mt-6">Who are we?</h1>
                        <p class="text-center display-1 mt-3">Are we a... "we"?</p>
                        <p>NOPE!</p>
                        <p>My name is Alan Spurlock and I am the sole owner of tusker!</p>
                        <p>
                            I started this, because I am tired of scrolling through facebook and seeing a million ads. Ads that know if I googled "Mothers day gifts for wife".
                            Or if I googled "What are coil over suspension", now I have ads for coil over suspensions.
                            There was a day when this was not the case.
                            Each site approved what ads they would use and not some third party service. <br>
                            Third party services install tracking cookies and monitor EVERYTHING you search for visit.
                        </p>

                        <p>
                            No thanks.
                        </p>

                        <p>
                            I am a Sr. Software Engineer by day. I have no investors, no angles, no one to answer to. No political affiliation to influence my platform and NO ONE is going
                            to shut down my platform. No one.
                        </p>

                        <p>
                            tusker will not <strong>limit your free speech!</strong> <small>(hate speech and bullying will not be not tolerated)</small>
                        </p>
                        <p>So... what do you say?</p>
                        <p>Become a tusker and take on the whales with me!</p>
                        <p></p>
                    </v-col>
                </v-row>

            </v-container>
        </v-main>
        <v-footer
                dark
                padless
        >
            <v-card
                    class="flex"
                    flat
                    tile
            >
                <v-card-text class="py-2 white--text text-center">
                    {{ new Date().getFullYear() }} — <strong>tusker</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name: "Welcome",
        data() {
            return{
                icons: [
                    'mdi-facebook',
                    'mdi-twitter',
                    'mdi-linkedin',
                    'mdi-instagram',
                ],
            }
        },
        methods:{
            Login() {
                this.$router.push({name: 'auth.login'})
            }
        }
    }
</script>

<style scoped>
    .header-wallpaper{
        background-position: center;
        background-size: cover;
        width: 100%;
        background-image: url("/images/elephant-whale.jpg");
    }
</style>