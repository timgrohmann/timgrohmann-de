<template>
  <div>
    <v-card-title class="d-none">
      <div class="headline grey darken-1">Das wird timgrohmann.de - BAUSTELLE</div>
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
            style="background-image: url(img/ESSEN-05.jpeg); background-size: cover; background-position: 50% 50%;"
          ></v-avatar>
        </v-card-text>
      </v-flex>
    </v-layout>
    <v-card-text>
      <v-layout row wrap align-center justify-left justify-sm-center hidden-sm-and-down>
        <v-flex class="text-xs-left text-md-right no-grow">
          <!--span class="display-4 secondary--text hidden-md-and-up"></span-->
          <span class="display-1">Ich bin</span>
        </v-flex>
        <v-flex>
          <DottedLine />
        </v-flex>
        <v-flex class="no-grow">
          <span class="display-4 secondary--text animate texts-t">Full Stack</span>
          <br />
          <span class="display-1 animate texts-s">Entwickler.</span>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-center justify-center hidden-md-and-up>
        <v-flex class="no-grow">
          <span class="display-1">Ich bin</span>
          <br />
          <span class="display-3 secondary--text animate texts-t">Full Stack</span>
          <br />
          <span class="display-1 animate texts-s">Entwickler.</span>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-text>
      Du suchst nach persönlicher und kompetenter Unterstützung bei deinem IT-Projekt?
    </v-card-text>
    <v-card-text>
      <p>
      Dann kontaktiere mich <a href="mailto:mail@timgrohmann.de">per Mail</a> oder finde mich auf:
      </p>
      <div class="social-links">
        <a href="https://instagram.com/timgrohmann" target="_blank">
          <img src="/img/timgrohmann_nametag.png" alt />
          <span>Instagram</span>
        </a>
        <a href="https://twitter.com/_just_timothy_" target="_blank">
          <img src="/img/twitter.png" alt />
          <span>Twitter</span>
        </a>
        <a href="https://www.linkedin.com/in/tim-grohmann" target="_blank">
          <img src="/img/LinkedIn.png" alt />
          <span>LinkedIn</span>
        </a>
      </div>
    </v-card-text>
    <v-card-text>Was ich kann, was ich nicht kann, man weiß es nicht</v-card-text>
  </div>
</template>

<script>
import DottedLine from "./DottedLine.vue";

export default {
  components: {
    DottedLine,
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
      timer: null,
      state: 0,
    };
  },
  created() {
    this.timer = setInterval(this.cycle, 5000);
  },
  computed: {
    age() {
      let birthday = new Date("1999-08-04");
      return Math.floor(
        new Number((new Date().getTime() - birthday.getTime()) / 31536000000)
      );
    },
  },
  methods: {
    cycle() {
      this.state++;
      if (this.state == this.texts.length) {
        this.state = 0;
      }
      console.log("Timer", this.state);
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
  margin: 0 auto;
  display: flex;
  a {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 5px;
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
