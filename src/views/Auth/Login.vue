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
        <v-dialog v-model="betaSignupDialog" light width="500" persistent>
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
                            <v-form ref="form">
                                <!--Email-->
                                <v-text-field :rules="rules" label="Email" append-icon="mdi-email" rounded filled v-model="betaEmail"></v-text-field>
                                <!--First Name-->
                                <v-text-field :rules="rules" label="First Name" rounded filled v-model="betaFirstName" append-icon="mdi-account"></v-text-field>
                                <!--Last Name-->
                                <v-text-field :rules="rules" label="Last Name" rounded filled v-model="betaLastName" append-icon="mdi-account"></v-text-field>
                                <!--Password-->
                                <v-text-field :rules="rules" label="Password" rounded filled v-model="betaPassword" append-icon="mdi-key"></v-text-field>
                                <!--Enable sms 2fa-->
                                <v-checkbox class="mt-0 pt-0" label="Auto enable SMS 2fa?" @change="showBetaPhonenumber = !showBetaPhonenumber"></v-checkbox>
                                <!--SMS Phone number-->
                                <v-text-field v-show="showBetaPhonenumber" label="Phone number" rounded filled v-model="betaPhonenumber" append-icon="mdi-phone"></v-text-field>
                            </v-form>
                            <p>
                                Enter your email above!
                            </p>
                            <p>
                                If approved, you'll get an email containing instructions on how to join the beta program!
                            </p>
                        </v-col>
                    </v-row>
                </v-card-text>
                <div class="px-6 pb-6">
                    <v-btn class="mb-3" rounded block large color="primary" @click="SubmitBetaSignup">Submit!</v-btn>
                    <v-btn rounded block large color="error" @click="betaSignupDialog = false">I love being spied on and my info sold!</v-btn>
                </div>
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
                betaEmail: '',
                betaFirstName: '',
                betaLastName: '',
                betaPassword: '',
                betaPhonenumber: '',
                showBetaPhonenumber: false,
                rules: [v=>!!v||'This field is required!']
            }
        },
        watch: {
            betaSignupDialog() {
                if (!this.betaSignupDialog) {
                    this.$refs.form.reset()
                    this.betaEmail = ''
                    this.betaEmail = ''
                    this.betaFirstName = ''
                    this.betaLastName = ''
                    this.betaPassword = ''
                    this.betaPhonenumber = ''
                    this.showBetaPhonenumber = false
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

                if(!this.$refs.form.validate())
                    return

                this.$axios.post('/api/v1/auth/beta-signup', {
                    email: this.betaEmail,
                    firstName: this.betaFirstName,
                    lastName: this.betaPassword,
                    password: this.betaPassword,
                    sms: this.betaPhonenumber
                }).then(res=>{
                    this.$store.dispatch('ShowAlertAsync', {color: 'success', message: res.data.message})
                    this.betaSignupDialog = false
                    this.$router.push({name: 'welcome'})
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
                    this.$store.dispatch('ShowAlertAsync', {color: 'success', message: 'Login successful! Please wait....'})
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