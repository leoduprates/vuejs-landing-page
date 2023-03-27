<template myCustomLightTheme>
  <v-app>
    <v-main>
      <AppBar />
      <v-container fluid>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import SectionOne from "./components/sections/SectionOne.vue";
import SectionTwo from "./components/sections/SectionTwo.vue";
import SectionThree from "./components/sections/SectionThree.vue";
import SectionFour from "./components/sections/SectionFour.vue";

export default {
  name: "App",
  components: {
    AppBar,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
  },
};
</script>
<style></style>