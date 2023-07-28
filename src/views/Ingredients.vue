<template>
  <h1 class="mt-8">Ingredients</h1>
  <router-link
    :to="{
      name: 'ingredients',
      params: { ingredients: ingredient.idIngredient },
    }"
    v-for="ingredient of ingredients"
    :key="ingredient.idIngredient"
    class="my-4"
  >
    <h3>{{ ingredient.strIngredient }}</h3>
    <p>{{ ingredient.strDescription }}</p>
  </router-link>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref([]);

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>