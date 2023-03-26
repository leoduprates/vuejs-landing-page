<template>
  <v-app>
    <v-main>
      <AppBar />
      <v-container fluid>
        <SectionOne />
        <SectionTwo />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import SectionOne from "./components/sections/SectionOne.vue";
import SectionTwo from "./components/sections/SectionTwo.vue";

export default {
  name: "App",
  components: {
    AppBar,
    SectionOne,
    SectionTwo,
  },
};
</script>
<style></style>