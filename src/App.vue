<template>
  <v-app>
    <router-view></router-view>

    <!--Snacky-->
    <defaultSnackbar></defaultSnackbar>

  </v-app>
</template>

<script>
  import defaultSnackbar from "./components/snackbars/defaultSnackbar";

  export default {
    name: 'App',
    components:{defaultSnackbar},
    data: () => ({
      links:[
        {name: '', linkTo: '', value: 'Alan Spurlock', icon: 'mdi-home', iconColor: 'primary'},
        {name: 'Pages', linkTo: 'pages', value: '', icon: 'mdi-book-open-page-variant', iconColor: 'primary'},
        {name: 'Find Tuskers', linkTo: 'findTuskers', value: '', icon: 'mdi-elephant', iconColor: 'purple'}
      ]
    }),
    beforeMount() {
      if(localStorage.getItem('jwt') !== null)
        this.$router.push({name: 'home', params:{displayName: this.$store.getters.GetUser.firstName + this.$store.getters.GetUser.lastName + this.$store.getters.GetUser.id}})
      else
        this.$router.push({name: 'welcome'})
    }
  };
</script>
