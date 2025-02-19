<template>
  <div class="min-h-screen flex items-center justify-center px-4 pb-30">
    <div
      class="max-w-[700px] w-full border border-blue-200 p-7 rounded-2xl shadow-xl"
    >
      <h2 class="text-2xl font-semibold text-gray-700 text-center">
        Create an Account
      </h2>
      <form @submit.prevent="handleSignin">
        <input-component
          v-model="formData.email"
          label="Email"
          placeholder="Type your email"
          type="email"
        />
        <input-component
          v-model="formData.password"
          label="Password"
          placeholder="Type your Password"
          type="password"
        />
        <button
          class="bg-blue-700 text-white px-4 py-2 rounded-md mt-6 w-full cursor-pointer hover:bg-gray-700"
          type="submit"
        >
          Signin
        </button>
      </form>
      <p class="text-center mt-4">
        Don't have a account ?
        <RouterLink to="/signup" class="text-blue-700 cursor-pointer underline"
          >Create Account</RouterLink
        >
      </p>
    </div>
  </div>
</template>

<script>
import InputComponent from "../components/Shared/InputComponent.vue";
export default {
  name: "Signin",
  components: {
    InputComponent,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async handleSignin() {
      const res = await this.$store.dispatch("SIGNIN", this.formData);
      console.log("Res from Login", res);
      if (res.success) {
        this.$router.push("/");
      }
    },
  },
};
</script>
