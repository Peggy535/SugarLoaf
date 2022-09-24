<script setup></script>
<template>
  <div class="h-auto w-screen overflow-hidden">
    <!-- Video section -->
    <section class="h-screen w-screen fixed">
      <video
        class="absolute top-0 right-0 w-screen h-screen object-center object-cover"
        preload
        autoplay="autoplay"
        loop
        muted="true"
        playsinline
        poster=""
      >
        <source
          src="https://res.cloudinary.com/peggy-co/video/upload/q_auto:best/v1663840583/SugarLoaf/antigua_sea_qof8pg.webm"
          type="video/webm"
        />
        <source
          src="https://res.cloudinary.com/peggy-co/video/upload/q_auto:best/v1663840583/SugarLoaf/antigua_sea_qof8pg.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/peggy-co/video/upload/q_auto:best/v1663840583/SugarLoaf/antigua_sea_qof8pg.mov"
          type="video/mov"
        />
      </video>
    </section>
    <!-- Landing title -->
    <section class="relative h-screen w-full bg-amber-500 bg-opacity-20 z-20">
      <div class="flex flex-col absolute bottom-0 left-0 m-1 p-1 mb-20">
        <h1
          class="text-6xl sm:text-9xl lg:text-12xl xl:text-14xl 2xl:text-13xl text-white mb-10"
        >
          Sugar Loaf
        </h1>
        <h6 class="text-3xl lg:text-4xl text-white mb-10">
          A luxurious Antiguan residence that is 'Home from Home'.
        </h6>
        <span class="text-white text-left">Please scroll down Worthers!</span>
      </div>
    </section>
    <section
      class="relative max-h-fit w-screen bg-amber-50 bg-opacity-90 grid grid-cols-1 grid-rows-1 z-20"
    >
      <div class="grid col-span-1 row-span-1 md:col-span-2 md:row-span-1">
        <div class="flex flex-col w-full items-center">
          <p
            class="text-4xl md:text-6xl lg:text-7xl xl:text-8xl m-3 p-3 my-10 border-l-2 border-l-black"
          >
            "Set in large and quiet gardens overlooking Falmouth Harbour, Sugar
            Loaf has views to swoon at and plenty of privacy, peace and quiet."
          </p>
          <div class="m-2 p-2 sm:m-5 sm:p-5 md:h-2/3 items-center">
            <cite class="text-xs lg:text-sm"
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
            <cite class="text-xs lg:text-sm"
              >Views of Falmouth Harbour from the private pool</cite
            >
          </div>
        </div>
      </div>
    </section>
    <section
      class="relative max-h-fit w-screen bg-amber-50 bg-opacity-90 grid grid-cols-1 grid-rows-1 z-20"
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
            <cite class="text-xs lg:text-sm"
              >Sit back, relax, chat and ponder over the awe inspiring
              view</cite
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
            <cite class="text-xs lg:text-sm">Sugar Loafs living area</cite>
          </div>
        </div>
      </div>
    </section>
    <section
      class="relative z-20 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-auto h-auto w-screen bg-amber-50 bg-opacity-90"
    >
      <div class="grid col-span-1 row-span-1 h-40 m-2 p-2">
        <div class="relative flex">
          <h1
            class="text-5xl m-1 p-1 lg:text-3xl lg:leading-normal xl:text-5xl 2xl:text-6xl"
          >
            Discover more about Sugar Loaf
          </h1>
        </div>
      </div>
      <div
        class="grid col-span-1 row-span-1 rounded-2xl m-2 p-2 h-60 bg-brand-turquoise bg-opacity-40 border-4 border-brand-turquoise transition ease-in-out duration-300 hover:bg-opacity-100 hover:-translate-y-1 hover:scale-110"
      >
        <div class="flex relative">
          <h1 class="text-3xl m-1 p-1">
            House details, amenities and specifications
          </h1>
          <span class="absolute bottom-0 right-0">
            <button
              class="m-2 p-2 rounded-2xl ring-2 ring-black transition ease-in-out duration-300 hover:ring-6 hover:ring-white hover:text-white"
            >
              Press here
            </button>
          </span>
        </div>
      </div>
      <div
        class="grid col-span-1 row-span-1 rounded-2xl m-2 p-2 h-60 bg-brand-green bg-opacity-40 border-4 border-brand-green transition ease-in-out duration-300 hover:bg-opacity-100 hover:-translate-y-1 hover:scale-110"
      >
        <div class="flex relative">
          <h1 class="text-3xl m-1 p-1">Sugar Loaf Photo Gallery</h1>
          <NuxtLink to="/gallery">
            <span class="absolute bottom-0 right-0">
              <button
                class="m-2 p-2 rounded-2xl ring-2 ring-black transition ease-in-out duration-300 hover:ring-6 hover:ring-white hover:text-white"
              >
                Tap here
              </button>
            </span>
          </NuxtLink>
        </div>
      </div>
      <div
        class="grid col-span-1 row-span-1 rounded-2xl m-2 p-2 h-60 bg-brand-pink bg-opacity-40 border-4 border-brand-pink transition ease-in-out duration-300 hover:bg-opacity-100 hover:-translate-y-1 hover:scale-110"
      >
        <div class="flex relative">
          <h1 class="text-3xl m-1 p-1">Booking & Prices</h1>
          <span class="absolute bottom-0 right-0">
            <button
              class="m-2 p-2 rounded-2xl ring-2 ring-black transition ease-in-out duration-300 hover:ring-6 hover:ring-white hover:text-white"
            >
              Go here
            </button>
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
