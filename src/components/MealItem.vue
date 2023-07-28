<template>
     
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
        ><img class="rounded-xl" :src="meal.strMealThumb" :alt="meal.strMeal"
      /></router-link>

      <div class="p-4">
        <h3 class="mb-4 font-bold">{{ meal.strMeal }}</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          sapiente!
        </p>
        <div class="flex justify-between mt-4">
          <you-tube-button :href="meal.strYoutube"/>
          <router-link
            :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
            target="_blank"
            class="px-4 py-2 min-w-[100px] rounded-lg border border-red-600 flex justify-center hover:bg-red-600 transition-colors hover:text-white"
            >View</router-link
          >
        </div>
      </div>
</template>

<script setup>
import YouTubeButton from "./YouTubeButton.vue"
const {meal} = defineProps({
    meal: {
        required: true,
        type: Object
    }
})
</script>