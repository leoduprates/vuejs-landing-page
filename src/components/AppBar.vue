<template>
  <v-app-bar
    app
    flex
    ref="appBar"
    class="elevation-0"
    :class="{'app-bar--scrolled': scrolled, 'app-bar-no-scrolled': noScrolled}"
    :style="{ backgroundColor: bgColor }"
  >
    <v-toolbar-title>Landing Page</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text v-scroll-to="{ el: '#aboutSection' }">About</v-btn>
    <v-btn text v-scroll-to="{ el: '#textSection' }">Text</v-btn>
    <v-btn text v-scroll-to="{ el: '#slideSection' }">Slide</v-btn>
    <v-btn text v-scroll-to="{ el: '#cardsSection' }">Cards</v-btn>
    <v-btn text v-scroll-to="{ el: '#testimonialSection' }">Testimonial</v-btn>
  </v-app-bar>
</template>
    
<script>
export default {
  data() {
    return {
      bgColor: "transparent",
      lastScrollTop: 0,
      scrolled: true,
      noScrolled: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      if (scrollTop > this.lastScrollTop) {
        this.scrolled = false
        this.noScrolled = true
        this.bgColor = "#ffffff";
      } else {
        this.scrolled = true
        this.noScrolled = false
        this.bgColor = "transparent";
      }
      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    },
  },
};
</script>
<style>
.v-toolbar__content {
  transition: background-color 0.3s ease-out;
  box-shadow: none;
}
.app-bar--scrolled {
  color: white !important; /* change to your desired font color */
}
.app-bar--no-scrolled {
  color: black !important; /* change to your desired font color */
}
.v-container {
  padding-top: 50px;
}
</style>