<template>
  <v-app>
    <HeaderBar />
    <v-main>
      <v-container grid-list-md>
        <router-view />
      </v-container>
    </v-main>
    <v-footer class="pa-2">
      <v-spacer></v-spacer>
      <div class="text--secondary text-body-2">
        v{{ version }} &copy; {{ new Date().getFullYear() }}
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
  },
  data() {
    return {
      version: process.env.VERSION_NUMBER, //eslint-disable-line
    };
  },
  mounted() {
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    this.$vuetify.theme.dark = preference.matches;
    preference.addListener((q) => {
      this.$vuetify.theme.dark = q.matches;
    });
  },
};
</script>
