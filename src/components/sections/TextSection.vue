<template>
  <v-container id="textSection">
    <v-row>
      <v-col class="d-flex align-center justify-center col-size">
        <span>
          <v-card-title class="text-center bold-title">Lorem Ipsum</v-card-title>
          <v-card-text class="text-center description-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget
            tortor feugiat, euismod arcu ac, tristique felis. Vivamus interdum
            purus vitae eros tincidunt hendrerit. Suspendisse sit amet leo ut
            enim hendrerit vehicula eu ac orci.
          </v-card-text>
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
export default {};
</script>
<style>
.col-size {
  height: 600px
}
.bold-title {
  font-size: 60px !important;
  line-height: 1.02em !important;
  margin-bottom: 15px;
}
.description-content {
  font-size: 18px !important;
  line-height: 26px;
}
</style>