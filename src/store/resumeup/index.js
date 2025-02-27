import Parse from "parse/dist/parse.min.js";
const user = new Parse.User();
const getUser = async () => {
  return Parse.User.current();
};
const state = () => ({
  resume: [],
  currentUser: null,
});
const getters = {
  getCurrentUser: (state) => {
    console.log("Current user in store and getters", state.currentUser);
    return state.currentUser;
  },
};
const mutations = {
  setCurrentUser: (state, currentUser) => {
    console.log("Current User in Mutations", currentUser);
    state.currentUser = currentUser;
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};
