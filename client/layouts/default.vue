<template>
  <v-app app>
    <Navbar/>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>
<script>
import Navbar from '~/components/global/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>
