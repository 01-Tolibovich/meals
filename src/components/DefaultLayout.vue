<template>
<div class="bg-gray-100 min-h-screen">
    <navbar />
    <main class="px-4 max-w-5xl mx-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
</script>