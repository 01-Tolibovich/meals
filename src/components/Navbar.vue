<template>
    <header class="bg-white shadow">
      <div class="max-w-5xl mx-auto flex justify-between items-center h-16">
        <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-2 hover:bg-purple-100">Home</router-link>
      <div class="flex gap-4 h-full">
        <router-link :to="{name: 'SearchMeals'}" class="hover:bg-purple-100 transition-colors px-2 inline-flex items-center">
          Search Meals
        </router-link>
        <router-link :to="{name: 'byLetter'}" class="hover:bg-purple-100 transition-colors px-2 inline-flex items-center">
          Measl by letter
        </router-link>
        <router-link :to="{name: 'ingredients'}" class="hover:bg-purple-100 transition-colors px-2 inline-flex items-center">
          Measl by ingridient
        </router-link>
      </div>
      </div>
      
    </header>
</template>

<script setup>
</script>