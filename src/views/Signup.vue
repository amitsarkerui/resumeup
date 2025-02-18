<template>
  <div class="min-h-screen flex items-center justify-center px-4 pb-30">
    <div
      class="max-w-[700px] w-full border border-blue-200 p-7 rounded-2xl shadow-xl"
    >
      <h2 class="text-2xl font-semibold text-gray-700 text-center">
        Signup to continue
      </h2>
      <form @submit.prevent="handleSignup">
        <input-component
          v-model="formData.name"
          label="Name"
          placeholder="Type your Name"
          type="text"
        />
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
          Signup
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import InputComponent from "../components/Shared/InputComponent.vue";
export default {
  name: "Signup",
  components: {
    InputComponent,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async handleSignup() {
      const res = await this.$store.dispatch("SIGNUP", this.formData);
      //   console.log("Res from signup", res);
      if (res.success) {
        this.$router.push("/");
      }
    },
  },
};
</script>
