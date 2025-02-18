<template>
  <Navbar />
  <RouterView />
</template>
<script>
import Navbar from "../src/components/Shared/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
