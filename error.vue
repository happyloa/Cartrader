<template>
  <main class="h-screen flex flex-col justify-center items-center">
    <h1 class="text-9xl">{{ error.statusCode }}</h1>
    <p class="mt-7 text-4xl">{{ error.message }}</p>
    <NuxtLink
      to="/"
      class="border rounded-full mt-7 text-2xl bg-blue-400 px-7 py-3 text-white"
      >Go back</NuxtLink
    >
  </main>
</template>

<script setup>
const error = useError();
</script>
