import Parse from "parse/dist/parse.min.js";
let Resume = Parse.Object.extend("Resume");
const user = new Parse.User();
const getUser = async () => {
  return Parse.User.current();
};
const state = () => ({
  resume: {},
  currentUser: null,
});
const getters = {
  getCurrentUser: (state) => {
    console.log("Current user in store and getters", state.currentUser);
    return state.currentUser;
  },
  getResumeById: (state) => {
    console.log(state.resume);
    return state.resume;
  },
};
const mutations = {
  setCurrentUser: (state, currentUser) => {
    console.log("Current User in Mutations", currentUser);
    state.currentUser = currentUser;
  },
  Set_Resume_By_Id: (state, resumeData) => {
    console.log(resumeData);
    state.resume = resumeData;
  },
};
const actions = {
  async SIGNUP(context, formData) {
    console.log(formData);
    try {
      user.set("name", formData.name);
      user.set("username", formData.email);
      user.set("email", formData.email);
      user.set("password", formData.password);
      const res = await user.signUp();
      context.commit("setCurrentUser", res);
      return { success: true, data: res };
    } catch (error) {
      console.error(error);
      return { success: false, error: error.message };
    }
  },
  async SIGNIN(context, fromData) {
    try {
      const res = await Parse.User.logIn(fromData.email, fromData.password);
      //   console.log("From Store", res);
      if (res.id) {
        const currentUser = await getUser();
        console.log("Current User in Actions", currentUser);
        context.commit("setCurrentUser", currentUser);
        return { success: true, res };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
  async CHECK_USER_SESSION({ commit }) {
    const user = Parse.User.current(); // Fetch session user
    if (user) {
      console.log("User found in session:", user);
      commit("setCurrentUser", user);
    }
  },
  async LOGOUT(context) {
    try {
      await Parse.User.logOut();
      context.commit("setCurrentUser", null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  },
  async CREATE_RESUME(context, resumeData) {
    try {
      let resume = new Parse.Object("Resume");
      const currentUser = await getUser();

      const dataToSave = {
        firstName: resumeData.personal.firstName,
        lastName: resumeData.personal.lastName,
        email: resumeData.personal.email,
        userImage: resumeData.personal.imageFile,
        address: resumeData.personal.address,
        phone: resumeData.personal.phone,
        objectives: resumeData.personal.objectives,
        skills: resumeData.skills,
        interests: resumeData.interests,
        experience: resumeData.experience,
        educations: resumeData.educations,
        relatedUser: currentUser,
      };

      resume.set(dataToSave);
      const res = await resume.save();
      return res;
    } catch (error) {
      console.error("Error saving resume:", error);
      throw error;
    }
  },
  async FETCH_RESUME_BY_ID(context, id) {
    try {
      console.log(id);
      const resumeQuery = new Parse.Query("Resume");
      const res = await resumeQuery.get(id);
      console.log("Get by Id", res);
      await context.commit("Set_Resume_By_Id", res);
    } catch (error) {
      console.error(error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
