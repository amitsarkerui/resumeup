import Parse from "parse/dist/parse.min.js";
const user = new Parse.User();
const state = () => ({
  resume: [],
});
const getters = {};
const mutations = {};
const actions = {
  async SIGNUP(context, formData) {
    console.log(formData);
    try {
      user.set("name", formData.name);
      user.set("username", formData.email);
      user.set("email", formData.email);
      user.set("password", formData.password);
      const res = await user.signUp();
      console.log("Res from store", res);
      return { success: true, data: res };
    } catch (error) {
      console.error(error);
      return { success: false, error: error.message };
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
