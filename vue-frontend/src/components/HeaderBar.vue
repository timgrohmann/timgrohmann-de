<template>
  <div>
    <v-navigation-drawer app v-model="visible" mobile-breakpoint="10000">
      <v-list>
        <v-list-item v-for="item in items" :key="item.name" :to="item.link">
          <v-list-item-action>
            <v-icon color="secondary">{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-title>{{item.name}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary">
      <v-app-bar-nav-icon @click="visible = !visible"/>
      <router-link :to="{name: 'LandingPage'}" class="display-1 white--text" style="text-decoration: none;">
        timgrohmann.de
      </router-link>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: "face", name: "Über mich", link: {name: "AboutMe"} },
      { icon: "model_training", name: "Meine Skills", link: {name: "MySkills"} },
    ],
    visible: false
  })
};
</script>

<style>
</style>
