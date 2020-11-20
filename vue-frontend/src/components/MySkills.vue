<template>
  <div>
    <h2 class="text-h2 mb-2 text-md-center">Meine Skills</h2>
    <v-card class="mb-3">
      <v-img
        class="white--text align-end"
        height="200px"
        src="/img/my-skills/webdev.jpg"
      ></v-img>
      <v-card-title>Webentwicklung</v-card-title>
      <v-card-subtitle>Modernste Technologien und Frameworks</v-card-subtitle>
      <v-card-text class="text--primary">
        Ich spreche fließend HTML und Javascript.
        Mit Vue, Angular oder React gebe ich Deiner Webanwendung den nötigen Boost!<br>
        Ein modernes Design und responsive Kompatibilität mit vielen verschiedenen Geräten
        gehört zu einer Website von heute genau so dazu, wie blitzschnelle Ladezeiten
        und dauerhafte, globale Verfügbarkeit.
      </v-card-text>
    </v-card>
    <v-card class="mb-3">
      <v-img
        class="white--text align-end"
        height="200px"
        src="/img/my-skills/server.jpg"
      ></v-img>
      <v-card-title>Server Side</v-card-title>
      <v-card-subtitle>Cloud Native Development</v-card-subtitle>
      <v-card-text class="text--primary">
        Deine Anwendung braucht mehr als ein schönes Frontend?
        Egal ob Java, Node oder Python, mit meiner vielfältigen Erfahrung finden wir die beste Lösung.<br>
        Natürlich alles in einer Cloud-Umgebung wie Kubernetes und OpenShift
        oder direkt auf AWS oder Google Cloud. Der Vorteil für Dich: Nahezu grenzenlose Skalierbarkeit.
      </v-card-text>
    </v-card>
    <v-card>
      <v-img
        class="white--text align-end"
        height="200px"
        src="/img/my-skills/apps.jpg"
      ></v-img>
      <v-card-title>iOS-Entwicklung</v-card-title>
      <v-card-subtitle>Native Apps für maximale Performance</v-card-subtitle>
      <v-card-text class="text--primary">
        Du willst mehr als nur eine Website? Native Apps auf iOS bieten Deinen Nutzern das gewisse Etwas:
        Offline verfügbar und extrem schnell und responsiv. <br>
        Mit Swift und Objective-C sowie der nötigen Erfahrung, Anwendungen im App Store zu veröffentlichen,
        kann ich Dein Projekt auch in dieser Hinsicht unterstützen.
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
