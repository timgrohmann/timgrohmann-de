<template>
  <v-card>
    <v-card-title class="d-none">
      <div class="headline grey darken-1">Das wird timgrohmann.de - BAUSTELLE</div>
    </v-card-title>
    <v-layout row wrap justify-center>
      <v-flex xs12 md8 align-self-center>
        <v-card-text class="display-2 ">
          <span class="display-4 secondary--text">Hey,</span> ich bin Tim.
        </v-card-text>
      </v-flex>
      <v-flex xs12 md4 text-center text-md-right>
        <v-card-text>
          <v-avatar
            color="grey lighten-4"
            :size="$vuetify.breakpoint.smAndDown ? '128px' : '256px'"
            style="background-image: url(img/ESSEN-05.jpeg); background-size: cover; background-position: 50% 50%;"
          ></v-avatar>
        </v-card-text>
      </v-flex>
    </v-layout>
    <v-card-text>
      <v-layout row wrap align-center justify-center hidden-sm-and-down>
        <v-flex class="text-xs-left text-md-right no-grow">
          <!--span class="display-4 secondary--text hidden-md-and-up"></span-->
          <span class="display-1">Ich bin</span>
        </v-flex>
        <v-flex>
          <DottedLine />
        </v-flex>
        <v-flex class="no-grow">
          <span class="display-4 secondary--text">{{ age }}</span>
          <span class="display-1">Jahre alt.</span>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-center justify-center hidden-md-and-up>
        <v-flex class="no-grow">
          <span class="display-1">Ich bin</span>
          <span class="display-4 secondary--text">{{ age }}</span>
          <span class="display-1">Jahre alt.</span>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-text>
      Finde mich auf:
      <div class="social-links">
        <a href="https://instagram.com/timgrohmann">
          <img src="/img/timgrohmann_nametag.png" alt />
          <span>Instagram</span>
        </a>
        <a href="https://twitter.com/_just_timothy_">
          <img src="/img/twitter.png" alt />
          <span>Twitter</span>
        </a>
      </div>
    </v-card-text>
    <v-card-text>Was ich kann, was ich nicht kann, man weiß es nicht</v-card-text>
  </v-card>
</template>

<script>
import DottedLine from "./DottedLine.vue";

export default {
  components: {
    DottedLine,
  },
  data() {
    return {};
  },
  computed: {
    age() {
      let birthday = new Date("1999-08-04");
      return Math.floor(
        new Number((new Date().getTime() - birthday.getTime()) / 31536000000)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.no-grow {
  flex-grow: 0;
}

.i-am {
  flex-basis: 100%;
  flex-shrink: 0;
}

.social-links {
  margin: 0 auto;
  display: flex;
  a {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 100%;
    max-width: 128px;
    height: auto;
  }
}
</style>
