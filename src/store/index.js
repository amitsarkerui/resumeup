import { createStore } from "vuex";
import resumeup from "./resumeup/";

const store = createStore({
  modules: {
    resumeup,
  },
});

export default store;
