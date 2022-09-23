<script setup></script>
<template>
  <div class="h-auto w-screen overflow-hidden">
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
      class="relative max-h-fit w-screen bg-amber-50 grid grid-cols-1 grid-rows-1 z-20"
    >
      <div class="grid col-span-1 row-span-1 md:col-span-2 md:row-span-1">
        <div class="flex flex-col w-full items-center">
          <p
            class="text-4xl md:text-6xl m-3 p-3 my-10 border-l-2 border-l-black"
          >
            "Set in large and quiet gardens overlooking Falmouth Harbour, Sugar
            Loaf has views to swoon at and plenty of privacy, peace and quiet."
          </p>
          <div class="m-2 p-2 sm:m-5 sm:p-5 md:h-2/3 items-center">
            <cite class="text-xs"
              >The front court yard and entrance to Sugar Loaf</cite
            >
            <img
              class="object-contain rounded-2xl py-2"
              src="https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840537/SugarLoaf/CourtYard_khmzbz.jpg"
              alt=""
            />
            <img
              class="object-contain rounded-2xl"
              src="https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840542/SugarLoaf/PoolViewOfHarbour_qqmxlg.jpg"
              alt=""
            />
            <cite class="text-xs"
              >Views of Falmouth Harbour from the private pool</cite
            >
          </div>
        </div>
      </div>
    </section>
    <section
      class="relative max-h-fit w-screen bg-amber-50 grid grid-cols-1 grid-rows-1 z-20"
    >
      <div class="grid col-span-1 row-span-1 md:col-span-2 md:row-span-1">
        <div class="flex flex-col w-full items-center">
          <p
            class="text-4xl md:text-6xl m-3 p-3 my-10 border-l-2 border-l-black"
          >
            "Situated 5 minutes drive from the beaches and restaurants of
            English Harbour, the property has four large double bedrooms all
            with A/C; a big kitchen and sitting room and a gallery that really
            is just perfect - both day and night, for boat watching or just
            gazing at the Sea."
          </p>
          <div class="m-2 p-2 sm:m-5 sm:p-5 md:h-2/3 items-center">
            <cite class="text-xs"
              >Sit back, relax, chat and ponder over the awe inspiring view</cite
            >
            <img
              class="object-contain rounded-2xl py-2"
              src="https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840543/SugarLoaf/veranda_ipjnac.jpg"
              alt=""
            />
            <img
              class="object-contain rounded-2xl"
              src="https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840540/SugarLoaf/MainLivingRoom3_njhdjo.jpg"
              alt=""
            />
            <cite class="text-xs"
              >Sugar Loafs living area</cite
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
