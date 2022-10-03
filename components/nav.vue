<script setup>
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import MenuIcon from "./menuIcon.vue";

onMounted(() => {
  gsap.registerPlugin(CSSPlugin);
  gsap.set(".menu", { autoAlpha: 0, xPercent: -100 });
});
const openMenu = () => {
  gsap.registerPlugin(CSSPlugin);
  gsap.fromTo(
    ".menu",
    { autoAlpha: 1, xPercent: -100 },
    { xPercent: 0, duration: 1, ease: "expo.inOut" }
  );
};
const closeMenu = () => {
  gsap.to(".menu", {
    xPercent: -100,
    duration: 1,
    autoAlpha: 0,
    ease: "expo.inOut",
  });
};
</script>

<template>
  <div
    class="fixed z-40 h-screen w-full bg-amber-100 flex flex-col place-content-center invisible menu font-NeueMontrealThin"
  >
    <span class="absolute top-5 left-5" @click="closeMenu">
      <h1
        class="text-xl transition delay-75 ease-in-out duration-700 hover:text-amber-500 hover:scale-125 after:origin-left after:block after:absolute after:w-full after:scale-0 after:bg-amber-500 after:h-[1px] after:bottom-0 after:z-40 after:hover:transition after:hover:ease-in-out after:hover:duration-700 after:hover:delay-75 after:hover:scale-100"
      >
        Close
      </h1>
    </span>
    <div class="flex mx-auto">
      <ul class="text-slate-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        <NuxtLink to="/" @click="closeMenu">
          <li
            class="m-2 p-2 transition delay-75 ease-in-out duration-700 hover:text-amber-500 hover:scale-110 after:origin-left after:block after:absolute after:w-full after:scale-0 after:bg-amber-500 after:h-[1px] after:bottom-0 after:z-40 after:hover:transition after:hover:ease-in-out after:hover:duration-700 after:hover:delay-75 after:hover:scale-100"
          >
            Home
          </li>
        </NuxtLink>
        <span></span>
        <NuxtLink to="/gallery" @click="closeMenu">
          <li
            class="m-2 p-2 transition delay-75 ease-in-out duration-700 hover:text-amber-500 hover:scale-110 after:origin-left after:block after:absolute after:w-full after:scale-0 after:bg-amber-500 after:h-[1px] after:bottom-0 after:z-40 after:hover:transition after:hover:ease-in-out after:hover:duration-700 after:hover:delay-75 after:hover:scale-100"
          >
            Photo Gallery
          </li>
        </NuxtLink>
        <NuxtLink to="/housedetails" @click="closeMenu">
          <li
            class="m-2 p-2 transition delay-75 ease-in-out duration-700 hover:text-amber-500 hover:scale-110 after:origin-left after:block after:absolute after:w-full after:scale-0 after:bg-amber-500 after:h-[1px] after:bottom-0 after:z-40 after:hover:transition after:hover:ease-in-out after:hover:duration-700 after:hover:delay-75 after:hover:scale-100"
          >
            House details & amenities
          </li>
        </NuxtLink>
        <NuxtLink to="/booking" @click="closeMenu">
          <li
            class="m-2 p-2 transition delay-75 ease-in-out duration-700 hover:text-amber-500 hover:scale-110 after:origin-left after:block after:absolute after:w-full after:scale-0 after:bg-amber-500 after:h-[1px] after:bottom-0 after:z-40 after:hover:transition after:hover:ease-in-out after:hover:duration-700 after:hover:delay-75 after:hover:scale-100"
          >
            Booking & Pricing
          </li>
        </NuxtLink>
      </ul>
    </div>
  </div>

  <div
    class="fixed w-full flex flex-row place-content-between items-center z-30 font-NeueMontrealThin"
  >
    <MenuIcon class="fill-white w-16 sm:w-18 md:w-20" @click="openMenu" />
    <span class="m-1"
      ><NuxtLink
        to="https://www.admiralmanagementservices.com/sugarloaf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          class="border-2 border-slate-200 rounded-2xl transition delay-50 ease-in-out hover:border-brand-yellow duration:300"
        >
          <p
            class="text-slate-200 p-1 sm:p-2 text-md sm:text-xl md:text-2xl transition delay-50 ease-in-out hover:text-brand-yellow duration:200"
          >
            Book now
          </p>
        </button>
      </NuxtLink>
    </span>
  </div>
</template>
