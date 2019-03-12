<template>
  <v-app dark>
    <HeaderBar/>
    <v-content>
      <v-container grid-list-md >
        <router-view />
      </v-container>
    </v-content>
    <v-footer class="pa-2">
      <v-spacer></v-spacer>
      <div>v{{version}} &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'

export default {
  name: 'App',
  components: {
    HeaderBar
  },
  data () {
    return {
      version: process.env.VERSION_NUMBER //eslint-disable-line
    }
  }
}
</script>
