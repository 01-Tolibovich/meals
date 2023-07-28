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
    <meal-item v-for="meal of meals"
      :key="meal.idMeal" :meal="meal"
      class="bg-white shadow rounded-xl"/>
  </div>
</template>

<script setup>  
import { computed } from "@vue/reactivity";
import { ref, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import YouTubeButton from "../components/YouTubeButton.vue"
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.SearchMeals;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
