<template>
  <a
    class="px-4 py-2 min-w-[100px] border border-red-600 rounded-lg flex justify-center hover:bg-red-600 transition-colors hover:text-white"
    :href="href"
    target="_blank"
    ><slot>YouTube</slot></a
  >
</template>

<script setup>
const props = defineProps({
    href: String
})
</script>