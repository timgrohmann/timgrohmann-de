<template>
  <div>
    <v-navigation-drawer app v-model="visible" mobile-breakpoint="10000" right>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.name"
          :to="item.link"
          exact
          @click="visible=false"
        >
          <v-list-item-action>
            <v-icon color="secondary">{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-title>{{item.name}}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-switch v-model="$vuetify.theme.dark" hide-details inset label="Dunkler Modus" color="secondary"></v-switch>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat>
      <router-link :to="{name: 'LandingPage'}">
        <v-img :src="`/img/t${$vuetify.theme.dark ? '-white' : ''}@0.25x.png`" width="48px"></v-img>
      </router-link>
      <v-spacer />

      <v-app-bar-nav-icon @click="visible = !visible" class />
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: "home", name: "Startseite", link: { name: "LandingPage" } },
      { icon: "face", name: "Über mich", link: { name: "AboutMe" } },
      {
        icon: "model_training",
        name: "Meine Skills",
        link: { name: "MySkills" },
      },
      {
        icon: "delete",
        name: "Sperrmüll",
        link: { name: "Sperrmüll" },
      },
    ],
    visible: false,
  }),
};
</script>

<style>
</style>
