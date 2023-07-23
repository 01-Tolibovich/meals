<template>
  <div class="flex justify-center my-8">
    <input
      v-model="keyword"
      type="text"
      class="rounded-xl border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <!-- <pre>{{ meals }}</pre> -->
  <div class="grid md:grid-cols-3 gap-5">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
      <img class="rounded-xl" :src="meal.strMealThumb" :alt="strMeal" />
      <div class="p-4">
        <h3 class="mb-4 font-bold">{{ meal.strMeal }}</h3>
        <div class="flex justify-between">
          <a class="px-4 py-2 min-w-[100px] border border-red-600 rounded-lg flex justify-center" :href="meal.strYoutube" target="_blank">YouTube</a>
          <router-link to="/" target="_blank" class="px-4 py-2 min-w-[100px] rounded-lg border border-red-600 flex justify-center">View</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
</script>
