<template>
  <div class="max-w-screen-xl mx-auto my-10 px-4">
    <div class="min-h-[3508] w-[2480] bg-gray-50 p-12 mb-30">
      <div class="flex gap-10">
        <img
          class="object-cover object-top rounded-sm text-center w-[200px] h-[200px]"
          :src="resume?.attributes?.userImage"
          alt=""
        />
        <div>
          <h3 class="text-2xl font-semibold">{{ fullName }}</h3>
          <p class="font-medium text-gray-600">
            Email: {{ this.resume?.attributes?.email }}
          </p>
          <p class="font-medium text-gray-600">
            Address: {{ this.resume?.attributes?.address }}
          </p>
          <p class="font-medium text-gray-600">
            Contact : {{ this.resume?.attributes?.phone }}
          </p>
          <p class="font-medium mt-5">
            Objectives:
            <span class="font-normal text-gray-600">{{
              resume?.attributes?.objectives
            }}</span>
          </p>
          <div class="mt-12">
            <p class="text-xl font-semibold">Educational Qualifications:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {};
  },
  methods: {},
  computed: {
    resume() {
      return this.$store.getters.getResumeById;
    },
    fullName() {
      return (
        this.resume?.attributes?.firstName +
        " " +
        this.resume?.attributes?.lastName
      );
    },
  },
  mounted() {
    const resumeId = this.$route.params.id;
    this.$store.dispatch("FETCH_RESUME_BY_ID", resumeId);
  },
};
</script>
