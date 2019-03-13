<template>
  <div>
    <v-card>
      <v-card-title>
        <div class="headline">Über mich</div>
      </v-card-title>
      <v-card-text>Hier könnte bald etwas stehen.</v-card-text>
    </v-card>
    <v-card class="mt-2">
      <v-card-title>
        <div class="headline">Impressum</div>
      </v-card-title>
      <v-card-text>
        <p>
          Diese Seite wird betrieben von:
        </p>
        <p>
          Tim Grohmann<br>
          B 7 14<br>
          68159 Mannheim
        </p>
        <p>Du kannst mich unter <a href="mailto:kontakt@timgrohmann.de">kontakt@timgrohmann.de</a> erreichen.</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        people: [
            {
                name: "Tim Grohmann",
                image_src: "https://avatars3.githubusercontent.com/u/14997424"
            },
            {
                name: "Felix Wortmann",
                image_src: "https://avatars2.githubusercontent.com/u/45035656"
            },
            {
                name: "Florian Redmann",
                image_src: "teammembers/flo_red.jpg"
            }
        ]
    };
  }
};
</script>