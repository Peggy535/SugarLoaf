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
  meta:[
    {
      name:'locale', content:'en-GB'
    },
    {
      name:'google', content:'notranslate'
    },
    {
      name:'theme-colour', content:'#fffbeb'
    },
    {
      name:'description', content:'A luxurious Antiguan holiday residence that is Home from Home. Set in large and quiet gardens overlooking Falmouth Harbour, Sugar Loaf has views to swoon at and plenty of privacy, peace and quiet'
    },
    {
      name:'twitter:card', content:'summary'
    },
    {
      name:'twitter:title', content:'Sugar Loaf - An Antiguan holiday Residence'
    },
    {
      name:'twitter:description', content:'A luxurious Antiguan holiday residence that is Home from Home. Set in large and quiet gardens overlooking Falmouth Harbour, Sugar Loaf has views to swoon at and plenty of privacy, peace and quiet'
    },
    {
      name:'twitter:url', content:'https://www.sugarloafantigua.com'
    },
    
  ],
  link: [
    {
      href: favicon,
      rel: "icon",
      type: "image/x-icon",
    },
    {
      rel: 'canonical', href:'https://www.sugarloafantigua.com'
    },
  ],
});
</script>
