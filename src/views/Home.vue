<template>
  <section class="p-8">
    
    <div class="flex gap-2 justify-center mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js"

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingridients = ref([])

onMounted( async () => {
   const response = await axiosClient.get('/list.php?i=list');
   console.log(response.data);
   ingridients.value = response.data
})
</script>
