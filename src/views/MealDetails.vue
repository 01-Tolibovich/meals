<template>
  <h1>{{ meal.strMeal }}</h1>
  <div><img :src="meal.strMealThumb" :alt="meal.strMeal" /></div>
  <p>Category: {{ meal.strCategory }}</p>
  <p>Area: {{ meal.strArea }}</p>
  <p>Tags: {{ meal.strTags }}</p>
  <p>{{ meal.strInstructions }}</p>
  <div>
    <h2>Ingredients</h2>
    <ul>
      <template v-for="(el, ind) of new Array(20)"
        ><li v-if="meal[`strIngredient${ind + 1}`]">
          {{ ind + 1 }}.{{ meal[`strIngredient${ind + 1}`] }}
        </li></template
      >
    </ul>
  </div>

  <h2>Measures</h2>
  <ul>
    <template v-for="(el, ind) of new Array(20)"
      ><li v-if="meal[`strMeasure${ind + 1}`]">
        {{ ind + 1 }}.{{ meal[`strMeasure${ind + 1}`] }}
      </li></template
    >
  </ul>
  <you-tube-button :href="meal.strYoutube">Go to YouTube</you-tube-button>
  <a
    :href="meal.strSource"
    target="_blank"
    class="px-4 py-2 min-w-[100px] rounded-lg border border-red-600 flex justify-center hover:bg-red-600 transition-colors hover:text-white"
    >View orogin source</a
  >
  <pre>{{ meal }}</pre>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    debugger;
    meal.value = data.meals[0] || {};
  });
});
</script>

<style>
</style>