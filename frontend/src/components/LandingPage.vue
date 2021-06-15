<template>
  <div>
    <v-card-title class="d-none">
      <div class="headline grey darken-1">
        Das wird timgrohmann.de - BAUSTELLE
      </div>
    </v-card-title>
    <v-layout row wrap justify-center>
      <v-flex xs12 md8 align-self-center>
        <v-card-text class="display-2">
          <span class="display-4 secondary--text">Hey,</span> ich bin Tim.
        </v-card-text>
      </v-flex>
      <v-flex xs12 md4 text-center text-md-right>
        <v-card-text>
          <v-avatar
            color="grey lighten-4"
            :size="$vuetify.breakpoint.smAndDown ? '128px' : '256px'"
            style="
              background-image: url(img/ESSEN-05.jpeg);
              background-size: cover;
              background-position: 50% 50%;
            "
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
          <span class="display-4 secondary--text animate texts-t"
            >Full Stack</span
          >
          <br />
          <span class="display-1 animate texts-s">Entwickler.</span>
        </v-flex>
      </v-layout>
      <v-layout
        row
        wrap
        align-center
        justify-left
        justify-sm-center
        hidden-md-and-up
      >
        <v-flex class="no-grow">
          <span class="display-1">Ich bin</span>
          <br />
          <span class="display-3 secondary--text animate texts-t"
            >Full Stack</span
          >
          <br />
          <span class="display-1 animate texts-s">Entwickler.</span>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-text class="text-justify text-sm-left">
      Was heißt das für Dich? Wenn du nach persönlicher und kompetenter
      Unterstützung für dein
      <b>digitales Projekt</b> suchst, bist du bei mir genau an der richtigen
      Adresse. Vom Design bis zur technischen Umsetzung, von HTML bis Swift
      biete ich Dir das volle Spektrum. Mehr dazu findest du
      <router-link :to="{ name: 'MySkills' }">hier</router-link>.
    </v-card-text>
    <!--Vita /-->
    <v-card-text>
      <p>
        Kontaktiere mich direkt
        <a href="mailto:mail@timgrohmann.de">per Mail</a> oder finde mich auf:
      </p>
      <v-row class="social-links">
        <v-col v-for="s in social" :key="s.name" cols="6" sm="3">
          <a :href="s.href" target="_blank">
            <img
              :src="'/img/social/' + s.name.toLowerCase() + '.png'"
              :alt="s.name"
            />
            <span>{{ s.name }}</span>
          </a>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
import DottedLine from "./DottedLine.vue";
import Vita from "./Vita.vue";

export default {
  components: {
    DottedLine,
    Vita,
  },
  data() {
    return {
      texts: [
        {
          t: "Full Stack",
          s: "Entwickler.",
        },
        {
          t: "jung",
          s: "und innovativ.",
        },
        {
          t: "bereit",
          s: "für Dein Projekt.",
        },
      ],
      social: [
        {
          href: "https://instagram.com/timgrohmann",
          name: "Instagram",
        },
        {
          href: "https://twitter.com/_just_timothy_",
          name: "Twitter",
        },
        {
          href: "https://www.linkedin.com/in/tim-grohmann",
          name: "LinkedIn",
        },
        {
          href: "https://www.github.com/timgrohmann",
          name: "GitHub",
        },
      ],
      timer: null,
      state: 0,
    };
  },
  created() {
    this.timer = setInterval(this.cycle, 5000);
  },
  methods: {
    cycle() {
      this.state++;
      if (this.state == this.texts.length) {
        this.state = 0;
      }
      Array.from(document.getElementsByClassName("animate")).forEach((e) => {
        e.classList.add("animate-out");
      });
      setTimeout(() => {
        Array.from(document.getElementsByClassName("animate")).forEach((e) => {
          e.classList.remove("animate-out");
          e.classList.add("animate-in");
        });
        Array.from(document.getElementsByClassName("texts-t")).forEach((e) => {
          e.innerHTML = this.texts[this.state].t;
        });
        Array.from(document.getElementsByClassName("texts-s")).forEach((e) => {
          e.innerHTML = this.texts[this.state].s;
        });
      }, 100);
      setTimeout(() => {
        Array.from(document.getElementsByClassName("animate")).forEach((e) => {
          e.classList.remove("animate-in");
        });
      }, 200);
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
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
  a,
  span {
    display: block;
    text-align: center;
  }
  img {
    width: 100%;
    max-width: 128px;
    height: auto;
  }
}

.animate {
  transition: all ease-in 0.1s;
  opacity: 1;
  transform: translateY(0);
  display: inline-block;
}
.animate-out {
  transform: translateY(-10px);
  opacity: 0;
}
.animate-in {
  transition: all ease-out 0.1s;
  transform: translateY(10px);
  opacity: 0;
}
</style>
