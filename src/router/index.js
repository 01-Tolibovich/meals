import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../components/DefaultLayout.vue";
import GuestsLayout from "../components/GuestsLayout.vue";
import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue";
import SearchByIngridient from "../views/SearchByIngridient.vue";
import SearchByLetter from "../views/SearchByLetter.vue";
import SearchMeals from "../views/SearchMeals.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/letter/:letter",
        name: "byLetter",
        component: MealList,
      },
      {
        path: "/search-by-ingridient/:SearchByIngridient?",
        name: "SearchByIngridient",
        component: SearchByIngridient,
      },
      {
        path: "/search-by-letter/:SearchByLetter?",
        name: "SearchByLetter",
        component: SearchByLetter,
      },
      {
        path: "/search-meals/:SearchMeals?",
        name: "SearchMeals",
        component: SearchMeals,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestsLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
