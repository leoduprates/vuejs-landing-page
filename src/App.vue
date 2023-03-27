<template myCustomLightTheme>
  <v-app>
    <v-main>
      <v-container fluid>
        <AppBar />
        <AboutSection />
        <TextSection />
        <SlideSection />
        <CardsSection />
        <TestimonialSection />
        <SliderSection />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import AboutSection from "./components/sections/AboutSection.vue";
import TextSection from "./components/sections/TextSection.vue";
import SlideSection from "./components/sections/SlideSection.vue";
import CardsSection from "./components/sections/CardsSection.vue";
import TestimonialSection from "./components/sections/TestimonialSection.vue";
import SliderSection from "./components/sections/SliderSection.vue";

export default {
  name: "App",
  components: {
    AppBar,
    AboutSection,
    TextSection,
    SlideSection,
    CardsSection,
    TestimonialSection,
    SliderSection
},
};
</script>
<style>
.v-container {
  max-width: none !important;
}
.v-main {
  --v-layout-top: 0 !important;
}
</style>