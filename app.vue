<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const favicon = ref("/favicon.ico");

useHead({
  link: [
    {
      href: favicon,
      rel: "icon",
      type: "image/x-icon",
    },
  ],
});
</script>
