<template>
  <div><Navbar /><CarSinglePage /></div>
</template>

<script setup>
const route = useRoute();

useHead({
  title: toTitleCase(route.params.name),
});

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
</script>
