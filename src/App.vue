<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
<script>
import Navbar from "../src/components/Shared/Navbar.vue";
import Footer from "../src/components/Shared/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
