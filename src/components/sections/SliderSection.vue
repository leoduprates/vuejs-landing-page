<template>
  <v-carousel class="row-panding">
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-card>
        <v-row>
          <v-col cols="4">
            <v-img :src="item.image" :alt="item.name"></v-img>
          </v-col>
          <v-col cols="8">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>{{ item.description }}</v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'Person 1',
          title: 'Testimonial 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Person 2',
          title: 'Testimonial 2',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Person 3',
          title: 'Testimonial 3',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          image: 'https://via.placeholder.com/150',
        },
      ],
    };
  },
};
</script>

<style>
.row-panding {
  padding: 40px;
}
</style>