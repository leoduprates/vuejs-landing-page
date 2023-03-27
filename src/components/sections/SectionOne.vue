<template>
  <v-container id="section1">
    <v-row>
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
        <img :src="require(`../../assets/head.png`)" />
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
  font-size: 60px;
  line-height: 1.02em !important;
  margin-bottom: 15px;
}
.description-content {
  font-size: 18px;
  line-height: 26px;
}
</style>