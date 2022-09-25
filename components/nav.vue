<script setup>
import { gsap } from "gsap";
import MenuIcon from "./menuIcon.vue";
</script>

<template>
    <nav class="relative z-30">
      <div>
        <MenuIcon class="h-30 py-2" />
      </div>
      <div>
        <span class="m-1 p-1"
          ><NuxtLink
            to="https://www.admiralmanagementservices.com/sugarloaf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              class="border-2 border-white rounded-2xl transition delay-50 ease-in-out hover:border-brand-yellow duration:300"
            >
              <p
                class="text-white p-1 m-1 md:p-2 text-lg md:text-2xl transition delay-50 ease-in-out hover:text-brand-yellow duration:200"
              >
                Book now
              </p>
            </button>
          </NuxtLink>
        </span>
      </div>
    </nav>
</template>
