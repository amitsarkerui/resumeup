<template>
  <div class="max-w-screen-xl mx-auto px-4">
    <!-- Personal Details -->
    <div v-show="slideCount === 1">
      <h2 class="text-3xl text-center my-14 font-bold text-gray-700">
        Personal Details
      </h2>
      <div
        class="flex flex-col md:flex-row gap-7 bg-white p-7 shadow-xl rounded-xl"
      >
        <img
          class="object-cover object-top border border-gray-300 rounded-2xl text-center w-[300px] h-[300px]"
          :src="previewImages"
          alt=""
        />
        <div class="flex-grow">
          <div class="flex-grow grid grid-cols-1 gap-x-7 md:grid-cols-2">
            <InputComponent
              v-model="resumeData.personal.firstName"
              label="First Name"
              placeholder="Your First Name here"
              type="text"
            />
            <input-component
              v-model="resumeData.personal.lastName"
              label="Last Name"
              placeholder="Your Last Name here"
              type="text"
            />
            <input-component
              @change="handleImageUpload"
              v-model="resumeData.personal.imageFile"
              label="Profile Image"
              placeholder="Add you images"
              type="file"
            />
            <input-component
              v-model="resumeData.personal.email"
              label="Email Address"
              placeholder="Email Address"
              type="email"
            />
            <input-component
              v-model="resumeData.personal.phone"
              label="Phone"
              placeholder="Phone Number"
              type="number"
            />
            <input-component
              v-model="resumeData.personal.address"
              label="Address"
              placeholder="Your Address"
              type="text"
            />
          </div>
          <label class="block mb-2 text-sm text-slate-600">Objective</label>
          <textarea
            v-model="resumeData.personal.objectives"
            id="message"
            rows="4"
            class="block p-2.5 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-300 slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border border-gray-300-slate-400 hover:border border-gray-300-slate-300 shadow-sm focus:shadow mt-3"
            placeholder="Objective here..."
          ></textarea>
        </div>
      </div>
    </div>
    <!-- Experience  -->
    <div v-show="slideCount === 2">
      <h2 class="text-3xl text-center my-14 font-bold text-gray-700">
        Experience
      </h2>
      <div class="bg-white p-7 shadow-xl rounded-xl">
        <div
          class="border border-gray-300 p-4 rounded-lg mb-4"
          v-for="(exp, index) in resumeData.experience"
          :key="index"
        >
          <div
            class="flex justify-between items-center cursor-pointer"
            @click="exp.expanded = !exp.expanded"
          >
            <h3 class="font-bold text-gray-700">
              {{ exp.jobTitle || "Work Experience" }}
            </h3>
            <p v-show="exp.startDate && exp.endDate">
              From: {{ exp?.startDate }} - To {{ exp.endDate }}
            </p>
            <div class="flex gap-2">
              <button
                @click="removeItem('experience', index)"
                class="text-red-500"
              >
                ❌
              </button>
              <button
                @click="exp.expanded = !exp.expanded"
                class="text-gray-500"
              >
                ✏️
              </button>
            </div>
          </div>
          <div v-show="exp.expanded">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input-component
                v-model="exp.jobTitle"
                label="Job Title"
                placeholder="i.e. Graphic Designer"
                type="text"
              />
              <input-component
                v-model="exp.city"
                label="City/Town"
                placeholder="City/Town"
                type="text"
              />
              <input-component
                v-model="exp.startDate"
                label="Start Date"
                placeholder="Start Date"
                type="date"
              />
              <input-component
                v-model="exp.endDate"
                label="End Date"
                placeholder="End Date"
                type="date"
              />
            </div>
            <textarea
              v-model="exp.description"
              rows="4"
              class="block w-full mt-3 border border-gray-300 rounded-md p-2"
              placeholder="Job Responsibility..."
            ></textarea>
          </div>
        </div>
        <button
          @click="handleAddExp"
          class="bg-gray-200 w-full py-2 rounded-xl mt-4 cursor-pointer"
        >
          + Add more Experience
        </button>
      </div>
    </div>
    <!-- Educational Qualifications -->
    <div v-show="slideCount === 3">
      <h2 class="text-3xl text-center my-14 font-bold text-gray-700">
        Education
      </h2>
      <div class="my-10 bg-white p-7 shadow-xl rounded-xl">
        <div
          class="border border-gray-300 p-4 rounded-lg mb-4"
          v-for="(edu, index) in resumeData.educations"
          :key="index"
        >
          <div
            class="flex justify-between items-center cursor-pointer"
            @click="edu.expanded = !edu.expanded"
          >
            <h3 class="font-bold text-gray-700">
              {{ edu?.degree || "Educational Qualifications" }}
            </h3>
            <p v-show="edu.startDate && edu.endDate">
              Form {{ edu?.startDate }} - To {{ edu?.endDate }}
            </p>
            <div class="flex gap-2">
              <button
                @click="removeItem('educations', index)"
                class="text-red-500"
              >
                ❌
              </button>
              <button
                @click="exp.expanded = !exp.expanded"
                class="text-gray-500"
              >
                ✏️
              </button>
            </div>
          </div>
          <div v-show="edu.expanded">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input-component
                v-model="edu.degree"
                label="Degree / Course Name"
                placeholder="i.e. MSc in CSE"
                type="text"
              />
              <input-component
                v-model="edu.institute"
                label="Institute"
                placeholder="i.e. Oxford University"
                type="text"
              />
              <input-component
                v-model="edu.city"
                label="City/Town"
                placeholder="City/Town"
                type="text"
              />
              <input-component
                v-model="edu.startDate"
                label="Start Date"
                placeholder="Start Date"
                type="date"
              />
              <input-component
                v-model="edu.endDate"
                label="End Date"
                placeholder="End Date"
                type="date"
              />
            </div>
            <textarea
              v-model="edu.description"
              rows="4"
              class="block w-full mt-3 border border-gray-300 rounded-md p-2"
              placeholder="Job Responsibility..."
            ></textarea>
          </div>
        </div>
        <button
          @click="handleAddEdu"
          class="bg-gray-200 w-full py-2 rounded-xl mt-4 cursor-pointer"
        >
          + Add more Educations
        </button>
      </div>
    </div>
    <!-- Interest & Skills -->
    <div v-show="slideCount === 4">
      <h2 class="text-3xl text-center my-14 font-bold text-gray-700">
        Interests and Skills
      </h2>
      <div class="bg-white p-7 rounded-xl shadow-xl">
        <div
          class="border border-gray-300 p-4 rounded-lg mb-4"
          v-for="(interest, index) in resumeData?.interests"
          :key="index"
        >
          <div
            class="flex justify-between items-center cursor-pointer"
            @click="interest.expanded = !interest.expanded"
          >
            <h3 class="font-bold text-gray-700">
              {{ interest?.hobbyTitle || "Interest" }}
            </h3>
            <div class="flex gap-2">
              <button
                @click="removeItem('interests', index)"
                class="text-red-500"
              >
                ❌
              </button>
              <button
                @click="interest.expanded = !interest.expanded"
                class="text-gray-500"
              >
                ✏️
              </button>
            </div>
          </div>
          <div class="mt-2" v-show="interest.expanded">
            <input-component
              v-model="interest.hobbyTitle"
              label="Add your interest / hobby"
              placeholder="i.e. Gardening"
              type="text"
            />
          </div>
        </div>
        <button
          @click="handleAddInterest"
          class="bg-gray-200 w-full py-2 rounded-xl mt-4 cursor-pointer"
        >
          + Add more Interest
        </button>
      </div>
      <!-- Skills -->
      <div class="bg-white p-7 rounded-xl shadow-xl mt-10">
        <div
          class="border border-gray-300 p-4 rounded-lg mb-4"
          v-for="(skill, index) in resumeData?.skills"
          :key="index"
        >
          <div
            class="flex justify-between items-center cursor-pointer"
            @click="skill.expanded = !skill.expanded"
          >
            <h3 class="font-bold text-gray-700">
              {{ skill?.skillTitle || "Skill" }} - {{ skill?.level }}
            </h3>
            <div class="flex gap-2">
              <button @click="removeItem('skills', index)" class="text-red-500">
                ❌
              </button>
              <button
                @click="skill.expanded = !skill.expanded"
                class="text-gray-500"
              >
                ✏️
              </button>
            </div>
          </div>
          <div class="mt-2" v-show="skill.expanded">
            <input-component
              v-model="skill.skillTitle"
              label="Skill"
              placeholder="i.e. Leadership"
              type="text"
            />
            <select
              v-model="skill.level"
              class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              name="level"
              id="level"
              required
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </div>
        </div>
        <button
          @click="handleAddSkills"
          class="bg-gray-200 w-full py-2 rounded-xl mt-4 cursor-pointer"
        >
          + Add more Skills
        </button>
      </div>
    </div>
    <!-- Next and Prev btn -->
    <div class="text-right mt-8 mb-32">
      <button
        @click="handlePrevious"
        class="cursor-pointer text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
      >
        Previous
      </button>
      <button
        @click="handleNext"
        v-show="slideCount !== 4"
        class="cursor-pointer ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Next
      </button>
      <button
        @click="handleSubmit"
        v-show="slideCount === 4"
        class="cursor-pointer ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import InputComponent from "../components/Shared/InputComponent.vue";
import userImagePlaceHolder from "/images/user-image-placeholder.jpeg";

export default {
  components: { InputComponent },
  name: "CreateResume",
  props: {
    InputComponent,
  },
  data() {
    return {
      slideCount: 1,
      resumeData: {
        personal: {
          firstName: "",
          lastName: "",
          imageFile: "",
          objectives: "",
          email: "",
          address: "",
          phone: "",
        },
        experience: [
          {
            jobTitle: "",
            city: "",
            startDate: "",
            endDate: "",
            description: "",
            expanded: true,
          },
        ],
        educations: [
          {
            degree: "",
            city: "",
            institute: "",
            startDate: "",
            endDate: "",
            description: "",
            expanded: true,
          },
        ],
        interests: [
          {
            hobbyTitle: "",
            expanded: true,
          },
        ],
        skills: [
          {
            skillTitle: "",
            level: "beginner",
            expanded: true,
          },
        ],
      },
      previewImages:
        this.resumeData?.personal?.imageFile || userImagePlaceHolder,
    };
  },
  methods: {
    handleImageUpload(event) {
      console.log("I am changed");
      const file = event.target.files[0];
      if (file) {
        this.resumeData.imageFile = file;
        this.previewImages = URL.createObjectURL(file);
      }
    },
    handleAddExp() {
      this.resumeData.experience.map((exp) => {
        exp.expanded = false;
      });
      this.resumeData.experience.push({
        jobTitle: "",
        city: "",
        startDate: "",
        endDate: "",
        description: "",
        expanded: true,
      });
    },
    handleAddEdu() {
      this.resumeData.educations.map((edu) => {
        edu.expanded = false;
      });
      this.resumeData.educations.push({
        degree: "",
        city: "",
        institute: "",
        startDate: "",
        endDate: "",
        description: "",
        expanded: true,
      });
    },
    handleAddInterest() {
      this.resumeData.interests.map((interest) => (interest.expanded = false));
      this.resumeData.interests.push({
        hobbyTitle: "",
        expanded: true,
      });
    },
    handleAddSkills() {
      this.resumeData.skills.map((skill) => (skill.expanded = false));
      this.resumeData.skills.push({
        skillTitle: "",
        level: "beginner",
        expanded: true,
      });
    },
    removeItem(section, index) {
      if (this.resumeData[section]) {
        this.resumeData[section].splice(index, 1);
      } else {
        console.error(`Section '${section}' does not exist in resumeData.`);
      }
    },
    handlePrevious() {
      if (this.slideCount > 1) {
        this.slideCount -= 1;
      }
    },
    handleNext() {
      if (this.slideCount < 4) {
        this.slideCount += 1;
      }
    },
    handleSubmit() {
      console.log(this.resumeData);
    },
  },
};
</script>

<style scoped></style>
