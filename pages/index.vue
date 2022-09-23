<script setup></script>
<template>
  <div class="h-auto w-screen overflow-hidden divide-y-2 divide-black">
    <!-- Video section -->
    <section class="h-screen w-screen fixed">
      <video
        class="absolute top-0 right-0 w-screen h-screen object-center object-cover"
        autoplay
        loop
        muted
      >
        <source
          src="https://res.cloudinary.com/peggy-co/video/upload/q_auto:best/v1663840583/SugarLoaf/antigua_sea_qof8pg.webm"
          type="video/webm"
        />
        <source
          src="https://res.cloudinary.com/peggy-co/video/upload/q_auto:best/v1663840583/SugarLoaf/antigua_sea_qof8pg.mp4"
          type="video/mp4"
        />
      </video>
    </section>
    <!-- Landing title -->
    <section class="relative h-screen w-full bg-amber-500 bg-opacity-20 z-20">
      <div class="flex flex-col absolute bottom-0 left-0 m-1 p-1 mb-20">
        <h1
          class="text-6xl sm:text-9xl lg:text-11xl 2xl:text-13xl text-white mb-10"
        >
          Sugar Loaf
        </h1>
        <h6 class="text-3xl text-white mb-10">
          A luxurious Antiguan residence that is 'Home from Home'.
        </h6>
      </div>
      <aside class="text-white text-sm z-20 absolute bottom-0 m-2 p-2">
        Please scroll down Worthers!
      </aside>
    </section>
    <section
      class="relative h-fit w-full bg-amber-50 grid-cols-1 grid-rows-1 z-20"
    >
      <div class="grid col-span-1 row-span-1 md:col-span-2 md:row-span-1">
        <div class="flex flex-col flex-shrink">
          <p class="text-4xl m-3 p-3 border-l-2 border-l-black">
            "Set in large and quiet gardens overlooking Falmouth Harbour, Sugar
            Loaf has views to swoon at and plenty of privacy, peace and quiet."
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
