<template>
  <v-container id="testimonialSection">
    <h3>Testimonial</h3>
    <v-row class="row-panding">
      <v-col cols="12" sm="6" md="4">
        <v-card class="testimonial">
          <v-img
            class="testimonial-image rounded-circle"
            :src="require(`../../assets/profile_placeholder.png`)"
          />
          <v-card-text class="testimonial-quote">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            euismod nibh at orci aliquam, nec bibendum magna facilisis."
          </v-card-text>
          <v-card-title class="testimonial-name">John Doe</v-card-title>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card class="testimonial">
          <v-img
            class="testimonial-image rounded-circle"
            :src="require(`../../assets/profile_placeholder.png`)"
          />
          <v-card-text class="testimonial-quote">
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Sed vel dapibus libero, vel auctor arcu."
          </v-card-text>
          <v-card-title class="testimonial-name">Jane Smith</v-card-title>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card class="testimonial">
          <v-img
            class="testimonial-image rounded-circle"
            :src="require(`../../assets/profile_placeholder.png`)"
          />
          <v-card-text class="testimonial-quote">
            "Maecenas ut felis quis mi ultricies blandit eget non dui.
            Suspendisse tincidunt turpis eget sagittis dictum."
          </v-card-text>
          <v-card-title class="testimonial-name">Bob Johnson</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<style>
.row-panding {
  padding: 40px;
}

.testimonial {
  text-align: center;
  padding: 40px 20px;
  border-radius: 25px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}

.testimonial-image {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.testimonial-quote {
  font-style: italic;
  margin-top: 20px;
}

.testimonial-name {
  margin-top: 20px;
}
</style>
  