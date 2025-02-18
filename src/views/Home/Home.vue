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
      <RouterLink to="/">
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
  <section class="max-w-screen-xl mx-auto px-4 pt-10">
    <h2 class="text-4xl font-bold text-gray-700 text-center">
      What Our Users Say
    </h2>
    <p class="text-gray-600 text-center mt-5 max-w-[500px] mx-auto">
      See how ResuMeUp has helped others land their dream jobs with professional
      resumes in no time.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="bg-white dark:bg-gray-900">
        <div
          class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
        >
          <figure class="max-w-screen-md mx-auto">
            <svg
              class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p class="text-2xl font-medium text-gray-900 dark:text-white">
                "ResuMeUp made resume building so easy! The templates are great,
                and I landed my job within weeks!"
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img
                class="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div
                class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700"
              >
                <div class="pr-3 font-medium text-gray-900 dark:text-white">
                  Micheal Gough
                </div>
                <div
                  class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400"
                >
                  Web Developer
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-900">
        <div
          class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
        >
          <figure class="max-w-screen-md mx-auto">
            <svg
              class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p class="text-2xl font-medium text-gray-900 dark:text-white">
                "The ATS-friendly format gave me the edge I needed. Highly
                recommend it to anyone job hunting!"
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img
                class="w-6 h-6 rounded-full"
                src="/images/user.png"
                alt="profile picture"
              />
              <div
                class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700"
              >
                <div class="pr-3 font-medium text-gray-900 dark:text-white">
                  Imran Hoeesn
                </div>
                <div
                  class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400"
                >
                  Marketing Officer
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
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
