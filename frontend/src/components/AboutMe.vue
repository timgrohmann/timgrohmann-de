<template>
  <div>
    <v-card>
      <v-card-title>
        <div class="headline">Über mich</div>
      </v-card-title>
      <v-card-text>
        <p>
          {{ age }} Jahre alt (oder jung?), meistens in Mannheim, Frankfurt oder im ICE.
        </p>
        Neugierig geworden? Schreibe mir doch <a href="mailto:mail@timgrohmann.de">gleich eine Mail</a>.
      </v-card-text>
    </v-card>
    <v-card class="mt-2">
      <v-card-title>
        <div class="headline">Impressum</div>
      </v-card-title>
      <v-card-text>
        <p>Diese Seite wird betrieben von:</p>
        <p>
          Tim Grohmann
          <br />Elbestraße 29
          <br />60329 Frankfurt
        </p>
        <p>
          Du kannst mich unter
          <a href="mailto:mail@timgrohmann.de">mail@timgrohmann.de</a> erreichen.
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    age() {
      let birthday = new Date("1999-08-04");
      return Math.floor(
        new Number((new Date().getTime() - birthday.getTime()) / 31536000000)
      );
    },
  },
  data() {
    return {};
  },
};
</script>
