<template>
  <v-app>    
    <v-app-bar app color="white">
      <img src="./assets/logo_lass.jpg" style="width: 5%" />
      <v-spacer></v-spacer>
      <div>
        <v-tabs>
          <v-tab @click="goToItem1">Item One</v-tab>
          <v-tab @click="goToItem2">Item Two</v-tab>
          <v-tab @click="goToItem3">Item Three</v-tab>
        </v-tabs>
      </div>

      <v-menu
        bottom
        min-width="250px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              color="red"
              size="36"
            >
              <span class="white--text text-h6">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="red"
              >
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Logout
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>


    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
      footer here
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    user: {
        initials: 'LA',
        fullName: 'Labros Alexandris',
        email: 'lampros.alexandris@lass.gr',
      },
    }),
  methods: {
    goToItem1() {
      this.$router.push('/item1')
    },
    goToItem2() {
      this.$router.push('/item2')
    },
    goToItem3() {
      this.$router.push('/item3')
    }
  }

};
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/graphik');

.v-tab{
   font-family: 'Graphik Web'
}
</style>