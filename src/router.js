import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: () => import("./views/LandingPage.vue")
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("./views/Home.vue")
    }
  ]
});
