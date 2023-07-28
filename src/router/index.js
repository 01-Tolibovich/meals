import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../components/DefaultLayout.vue";
import GuestsLayout from "../components/GuestsLayout.vue";
import Home from "../views/Home.vue";
// import MealList from "../views/MealList.vue";
import SearchByIngridient from "../views/SearchByIngridient.vue";
import SearchByLetter from "../views/SearchByLetter.vue";
import SearchMeals from "../views/SearchMeals.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredients from "../views/Ingredients.vue"

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
      // {
      //   path: "/search-by-letter/:letter",
      //   name: "byLetter",
      //   component: SearchByLetter,
      // },
      {
        path: "/search-by-ingridient/:SearchByIngridient?",
        name: "SearchByIngridient",
        component: SearchByIngridient,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/search-by-letter/:letter?",
        name: "byLetter",
        component: SearchByLetter,
      },
      {
        path: "/search-meals/:SearchMeals?",
        name: "SearchMeals",
        component: SearchMeals,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails
      }
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
