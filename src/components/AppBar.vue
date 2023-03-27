<template>
  <v-app-bar
    app
    fixed
    ref="appBar"
    class="elevation-0"
    :style="{ backgroundColor: bgColor }"
  >
    <v-toolbar-title>Landing Page</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text v-scroll-to="{ el: '#section1' }">Section 1</v-btn>
    <v-btn text v-scroll-to="{ el: '#section2' }">Section 2</v-btn>
    <v-btn text v-scroll-to="{ el: '#section3' }">Section 3</v-btn>
    <v-btn text v-scroll-to="{ el: '#section4' }">Section 4</v-btn>
  </v-app-bar>
</template>
    
<script>
export default {
  data() {
    return {
      bgColor: "transparent",
      lastScrollTop: 0,
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
        this.bgColor = "#ffffff";
      } else {
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
.v-container {
  padding-top: 50px;
}
</style>