<template>
   <div>
       <v-card shaped max-width="600">
           <v-card-title>
               <v-text-field filled rounded single-line hide-details label="Whats on your mind?" @click="OpenCreatePostDialog" readonly></v-text-field>
           </v-card-title>
       </v-card>

       <!--Create Post Dialog-->
       <createPostDialog ref="createPostDialog"></createPostDialog>
   </div>
</template>

<script>

    import createPostDialog from "./dialogs/createPostDialog";

    export default {
        name: "tuskerCreatePost",
        components:{
            createPostDialog
        },
        data() {
            return{
                showStuff: false
            }
        },
        methods:{
            OpenCreatePostDialog() {
                this.$refs.createPostDialog.open().then(res=>{
                    console.log(res)
                })
            }
        }
    };
</script>

<style scoped>

</style>