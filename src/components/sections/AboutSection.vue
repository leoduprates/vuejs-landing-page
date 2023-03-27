<template>
  <v-container class="background-container" id="aboutSection">
    <v-row class="row-header">
      <v-col class="d-flex align-center justify-center col-size" lg="6">
        <span>
          <h3 class="bold-title">
            Lorem ipsum dolor <br />
            consectetur adipiscing elit
          </h3>
          <p class="description-content">
            Maecenas eu velit nunc. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Integer ultrices nisi
            vitae massa tincidunt maximus.
          </p>
        </span>
      </v-col>
      <v-col class="d-flex align-center justify-center" lg="6">
        <img :src="require(`../../assets/mobile-mockup.png`)" />
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
export default {};
</script>
  
<style>
.v-container {
  margin: 0 !important;
  padding: 0 !important;
}
.background-container {
  background: url('../../assets/header.jpg');
  background-size: cover;
  background-position: center;
}
.row-header {
  color: #ffffff;
  padding: 80px;
}
.col-size {
  padding: 40px;
  height: 600px;
}
.bold-title {
  font-size: 60px;
  line-height: 1.02em !important;
  margin-bottom: 0 !important;
}
.description-content {
  font-size: 18px;
  line-height: 26px;
}
</style>