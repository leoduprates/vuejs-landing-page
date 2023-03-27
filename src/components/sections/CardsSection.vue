<template>
  <v-container id="cardsSection" >
    <v-row class="row-panding">
      <v-col cols="4">
        <v-card class="card-rounded">
          <v-img :src="require(`../../assets/picture_placeholder.png`)" height="450"></v-img>
          <v-card-title>Lorem ipsum </v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="card-rounded">
          <v-img :src="require(`../../assets/picture_placeholder.png`)" height="450"></v-img>
          <v-card-title>Lorem ipsum </v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="card-rounded">
          <v-img :src="require(`../../assets/picture_placeholder.png`)" height="450"></v-img>
          <v-card-title>Lorem ipsum </v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
<style>
.row-panding {
  padding: 40px;
}
.card-rounded {
  border-radius: 25px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}
</style>  