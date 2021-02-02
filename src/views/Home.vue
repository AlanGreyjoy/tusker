<template>
  <v-container>

    <!--Left Nav Drawer / Home,Find Tuskers, Watch, Market House-->
    <v-navigation-drawer
            width="75"
            color="transparent"
            floating
            left
            style="position: sticky !important; top: 75px; float: left;"
    >
      <v-list nav dense rounded>
        <v-list-item v-for="item in leftNavItems" :key="item.id" link ripple :to="{name: item.linkTo}" active-class="primary">
          <v-list-item-avatar>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!--Router View-->
    <v-main class="mt-0 pt-0" style="padding: 0 0 0 0 !important;">
      <v-container>
        <v-row align="center" justify="center">
          <v-col lg="12">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!--Right Nav Drawer / Sponsors-->
    <v-navigation-drawer
            color="grey darken-3"
            right
            fixed
            app
            clipped
            floating
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-row>
              <v-col lg="12">
                <h3 class="font-weight-light">Tusker Sponsors</h3>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </v-container>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    value: 'recent',
    emojiDialog: false,
    tuskerPosts: [],
    leftNavItems:[
      {text: 'Home', id: 0, linkTo: 'home.tuskerFeed', icon: 'mdi-home'},
      {tet: 'Market Stall', id: 1, linkTo: 'home.marketStall', icon: 'mdi-store'}
    ]
  })
}
</script>
