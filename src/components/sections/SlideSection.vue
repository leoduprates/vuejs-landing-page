<template>
  <v-container id="slideSection">
    <v-card color="#f05365" class="banner-section row-panding" id="section3">
      <v-row>
        <v-col class="d-flex align-center justify-center" cols="6">
          <span>
            <v-card-title class="bold-title">Left Column</v-card-title>
            <v-card-text class="description-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                eget tortor feugiat, euismod arcu ac, tristique felis. Vivamus
                interdum purus vitae eros tincidunt hendrerit. Suspendisse sit
                amet leo ut enim hendrerit vehicula eu ac orci.
              </p>
            </v-card-text>
          </span>
        </v-col>
        <v-col class="d-flex align-center justify-center" cols="6">
          <v-img
            :src="require(`../../assets/picture_placeholder.png`)"
            height="90%"
            width="90%"
          ></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

  
<script>
export default {};
</script>
<style>
.row-panding {
  margin: 40px;
}
.banner-section {
  color: #ffffff;
  border-radius: 25px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
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