<template>
    <div class="fill-height login-bg">
        <v-toolbar absolute flat color="transparent">
            <v-btn fab color="purple" @click="$router.push({name: 'welcome'})"><v-icon>mdi-reply</v-icon></v-btn>
        </v-toolbar>
        <v-main class="fill-height">
            <v-container class="fill-height">
                <v-row align="center" justify="center">
                    <v-col lg="3" md="3" sm="12">
                        <!--Login-->
                        <v-card v-if="!show2fa" color="primary" shaped dark elevation="12">
                            <div class="pa-6">
                                <v-img src="/images/logo/dark-logo.png" contain height="100"></v-img>
                                <h2 class="text-center font-weight-thin my-6">Currently only open for beta members!</h2>
                                <v-btn block small text @click="SignupForBeta">Click here for beta sign up!</v-btn>
                            </div>
                            <v-card-text>
                                <v-text-field
                                        filled
                                        rounded
                                        label="Email address"
                                        append-icon="mdi-email"
                                        v-model="email"
                                        type="email"
                                ></v-text-field>
                                <v-text-field
                                        filled
                                        rounded
                                        label="Password"
                                        append-icon="mdi-key"
                                        v-model="password"
                                        type="password"
                                ></v-text-field>
                            </v-card-text>
                            <v-row align="center" justify="center" class="px-6">
                                <v-col lg="12">
                                    <v-btn block large color="success" @click="login">Login</v-btn>
                                    <p class="text-center mt-6">Forgot password?</p>
                                </v-col>
                            </v-row>
                        </v-card>
                        <!--2fa-->
                        <v-card v-else color="primary" shaped dark>
                            <div class="pa-6">
                                <v-img src="/images/logo/dark-logo.png" contain height="100"></v-img>
                            </div>
                            <v-card-text>
                                <v-text-field
                                        filled
                                        rounded
                                        label="Your 2fa code"
                                        append-icon="mdi-email"
                                        v-model="mfaCode"
                                ></v-text-field>
                            </v-card-text>
                            <v-row align="center" justify="center" class="px-6">
                                <v-col lg="12" class="text-center">
                                    <v-btn block large color="success" @click="SubmitMfaCode">Submit</v-btn>
                                    <v-btn large text color="purple" @click="ResendMfaCode">Resend code</v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>

        <!--Beta Signup Dialog-->
        <v-dialog v-model="betaSignupDialog" light width="500">
            <v-card>
                <v-card-title></v-card-title>
                <v-card-text>
                    <v-row align="center" justify="center">
                        <v-col lg="12">
                            <h2 class="display-1 text-center">Beta Sign Up!</h2>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                                    label="Email"
                                    append-icon="mdi-email"
                                    rounded
                                    filled
                                    v-model="betaEmail"
                            ></v-text-field>
                            <p>
                                Enter your email above!
                            </p>
                            <p>
                                If approved, you'll get an email containing instructions on how to join the beta program!
                            </p>
                            <p>
                                Beta testers will receive the badge <strong>Beta Strong</strong> that they can add to their display name!
                            </p>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-btn rounded block large color="primary" @click="SubmitBetaSignup">Submit!</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return{
                email: '',
                password: '',
                mfaCode: '',
                show2fa: false,
                betaSignupDialog: false,
                betaEmail: ''
            }
        },
        watch: {
            betaSignupDialog() {
                if (!this.betaSignupDialog) {
                    this.betaEmail = ''
                }
            }
        },
        beforeMount() {
            if(localStorage.getItem('jwt') !== null)
                this.$router.push({name: 'home', params:{displayName: this.$store.getters.GetUser.firstName + this.$store.getters.GetUser.lastName + this.$store.getters.GetUser.id}})
        },
        methods:{
            SignupForBeta() {
                this.betaSignupDialog = true
            },
            SubmitBetaSignup() {
                if (this.betaEmail === '') {
                    this.$store.dispatch('ShowAlertAsync', {color: 'error', message: 'You forgot to include your email!'})
                    return;
                }
                this.$axios.post('/api/v1/auth/beta-signup', {email: this.betaEmail}).then(res=>{
                    this.$store.dispatch('ShowAlertAsync', {color: 'success', message: res.data.message})
                    this.betaSignupDialog = false
                }).catch(error=>{
                    this.$store.dispatch('ShowAlertAsync', {color: 'error', message: error.response.data.message})
                });
            },
            login() {
                this.$axios.post('/api/v1/auth/login', {email: this.email, password: this.password}).then(res=>{
                    localStorage.setItem('user', JSON.stringify(res.data.user))
                    this.show2fa = true
                    this.$store.dispatch('ShowAlertAsync', {color: 'success', message: 'Success!'})
                }).catch(error=>{
                    console.log(error)
                    this.$store.dispatch('ShowAlertAsync', {color: 'error', message: error.response.data.message})
                })
            },
            SubmitMfaCode() {
                this.$axios.post('/api/v1/auth/verify-mfa-code', {mfaCode: this.mfaCode, user: localStorage.getItem('user')}).then(res=>{
                    localStorage.setItem('user', JSON.stringify(res.data.user))
                    localStorage.setItem('jwt', res.data.token)
                    this.$router.push({name: 'home', params:{displayName: this.$store.getters.GetUser.firstName + this.$store.getters.GetUser.lastName + this.$store.getters.GetUser.id}})
                }).catch(error=>{
                    this.$store.dispatch('ShowAlertAsync', {color: 'error', message: error.response.data.message})
                    localStorage.setItem('jwt', null)
                    if(error.response.data.message === 'To many attempts! Your account has been locked for 24 hours. Please try again then.')
                        setTimeout(()=>{
                            this.$router.push({name: 'welcome'})
                        }, 3000)
                })
            },
            ResendMfaCode() {
                this.$axios.post('/api/v1/auth/resend-mfa', {user: JSON.parse(localStorage.getItem('user'))}).then(res=>{
                    if(!res.data.success)
                        return
                    this.$store.state.showAlert = true
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>
    .login-bg{
        background-image: url("/images/login-bg.jpeg");
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>