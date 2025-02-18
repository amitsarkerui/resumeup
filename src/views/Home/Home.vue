<template>
  <div class="relative h-[600px] w-full mt-3">
    <div
      class="bg-[url(/images/hero_banner.jpg)] absolute w-full h-full bg-cover filter blur-xs"
    ></div>
    <div class="absolute inset-0 bg-black opacity-70"></div>
    <div
      class="max-w-screen-xl px-4 mx-auto absolute inset-0 flex flex-col items-center justify-center"
    >
      <h1 class="text-4xl text-white font-bold text-center">
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
  <!-- Features -->
  <div class="max-w-screen-xl px-4 mx-auto my-15">
    <h2 class="text-4xl font-bold text-gray-700 text-center">
      Key Features of ResuMeUp
    </h2>
    <p class="text-gray-600 text-center mt-5 max-w-[500px] mx-auto">
      Create a standout resume with easy templates, ATS compatibility, and more.
      Get hired faster with ResuMeUp!
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-7 my-8">
      <div
        class="w-full text-center border border-gray-200 bg-white drop-shadow-xl p-7 rounded-2xl"
      >
        <i class="pi pi-file text-4xl text-blue-700"></i>
        <h3 class="text-2xl font-semibold text-gray-700 my-2">
          Resume Builder
        </h3>
        <p class="text-lg max-w-[250px] mx-auto">
          Create a professional resume in minutes.
        </p>
      </div>
      <div
        class="w-full text-center border border-gray-200 bg-white drop-shadow-xl p-7 rounded-2xl"
      >
        <i class="pi pi-trophy text-4xl text-blue-700"></i>
        <h3 class="text-2xl font-semibold text-gray-700 my-2">
          Higher Hiring Chances
        </h3>
        <p class="text-lg max-w-[250px] mx-auto">
          Stand out with ATS-friendly resumes.
        </p>
      </div>
      <div
        class="w-full text-center border border-gray-200 bg-white drop-shadow-xl p-7 rounded-2xl"
      >
        <i class="pi pi-list text-4xl text-blue-700"></i>
        <h3 class="text-2xl font-semibold text-gray-700 my-2">
          Multiple Templates
        </h3>
        <p class="text-lg max-w-[250px] mx-auto">
          Choose from modern, stylish designs.
        </p>
      </div>
    </div>
  </div>
  <!-- Testimonials -->
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
