<template>
  <div class="relative h-[600px] w-full mt-3">
    <div
      class="bg-[url(/images/hero_banner.jpg)] absolute w-full h-full bg-cover filter blur-xs"
    ></div>
    <div class="absolute inset-0 bg-black opacity-70"></div>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
      <h1 class="text-4xl text-white font-bold">
        Build Your Perfect Resume in Minutes
      </h1>
      <p class="text-white mt-4 max-w-[700px] text-center">
        Craft a professional, eye-catching resume effortlessly with ResuMeUp.
        Whether you're a student, a job seeker, or a seasoned professional, our
        intuitive tools help you create a standout resume that gets noticed.
        Start now and land your dream job!
      </p>
      <RouterLink>
        <button
          class="bg-blue-700 text-white px-4 py-2 rounded-md mt-6 hover:bg-gray-500 cursor-pointer"
        >
          Create Resume
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
