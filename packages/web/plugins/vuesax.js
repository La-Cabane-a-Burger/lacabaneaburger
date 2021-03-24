import Vue from "vue";
import Vuesax from "vuesax";

Vue.use(Vuesax);
Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: "#ef7202",
      success: "rgb(23, 201, 100)",
      danger: "rgb(242, 19, 93)",
      warning: "rgb(255, 130, 0)",
      dark: "rgb(36, 33, 69)"
    }
  }
});
