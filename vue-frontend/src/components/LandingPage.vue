<template>
  <v-card>
    <v-card-title class="d-none">
      <div class="headline grey darken-1">Das wird timgrohmann.de - BAUSTELLE</div>
    </v-card-title>
    <v-layout row wrap>
      <v-flex xs12 md8>
        <v-card-text class="display-2">
          <span class="display-4 secondary--text">Hey,</span> ich bin Tim.
        </v-card-text>
      </v-flex>
      <v-flex xs12 md4 text-xs-center text-md-right>
        <v-card-text>
          <v-avatar
            color="grey lighten-4"
            size="128px"
            style="background-image: url(img/DSC00454.jpg); background-size: cover; background-position: 50% 50%;"
          ></v-avatar>
        </v-card-text>
      </v-flex>
    </v-layout>
    <v-card-text>
      <v-layout row wrap align-center style="justify-content: center;">
        <v-flex align-self-bottom align-left class="text-xs-left text-md-right no-grow">
          <!--span class="display-4 secondary--text hidden-md-and-up"></span-->
          <span class="display-1">Ich bin</span>
        </v-flex>
        <v-flex hidden-sm-and-down>
          <DottedLine />
        </v-flex>
        <v-flex class="no-grow">
          <span class="display-4 secondary--text">{{ age }}</span>
          <span class="display-1">Jahre alt.</span>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-text>Was ich kann, was ich nicht kann, man weiß es nicht</v-card-text>
  </v-card>
</template>

<script>
import DottedLine from "./DottedLine.vue";

export default {
  components: {
    DottedLine
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
    }
  }
};
</script>

<style lang="scss" scoped>
.no-grow {
  flex-grow: 0;
}
</style>
