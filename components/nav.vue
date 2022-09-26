<script setup>
import { gsap } from "gsap";
import MenuIcon from "./menuIcon.vue";
</script>

<template>
  <div
    class="fixed w-full flex flex-row place-content-between items-center z-30 font-NeueMontrealThin"
  >
    <MenuIcon class="w-10 sm:w-12 md:w-14" />
    <span class="m-1"
      ><NuxtLink
        to="https://www.admiralmanagementservices.com/sugarloaf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          class="border-2 border-slate-400 rounded-2xl transition delay-50 ease-in-out hover:border-brand-yellow duration:300"
        >
          <p
            class="text-slate-400 p-1 md:p-2 text-md md:text-2xl transition delay-50 ease-in-out hover:text-brand-yellow duration:200"
          >
            Book now
          </p>
        </button>
      </NuxtLink>
    </span>
  </div>
</template>
