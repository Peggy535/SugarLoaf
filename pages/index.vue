<template>
  <div class="overscroll-none divide-y-2 divide-slate-300">
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
    <section class="relative h-screen w-screenz-20 bg-white bg-opacity-5 z-20">
      <div
        class="flex flex-col absolute bottom-0 left-0 m-1 p-1 mb-20 text-brand-rose-gold"
      >
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
      class="relative h-screen w-screen grid grid-cols-1 grid-rows-2 z-20 bg-white items-center"
    >
      <div class="grid col-span-1 row-span-1">
        <p
          class="text-left text-black text-4xl m-2 p-2 mt-10 border-l-2 border-l-black"
        >
          Set in large and quiet gardens overlooking Falmouth Harbour, Sugar
          Loaf has views to swoon at and plenty of privacy, peace and quiet.
        </p>
      </div>
      <div class="grid col-span-1 row-span-1">
        <img
          class="object-cover object-center shadow-xl shadow-neutral-400"
          src="https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best,r_0/v1663840537/SugarLoaf/HarbourView_rxip6o.jpg"
          alt=""
        />
        <cite class="font-NeueMontrealLight m-1 p-1"
          >View of Falmouth Bay from Sugar Loaf
        </cite>
      </div>
    </section>
    <section
      class="relative h-screen w-screen grid grid-cols-1 grid-rows-2 z-20 bg-white items-center"
    >
      <div class="grid col-span-1 row-span-1">
        <p class="text-left text-black text-2xl m-2 p-2 mt-10">
          Situated 5 minutes drive from the beaches and restaurants of English
          Harbour, the property has four large double bedrooms all with A/C; a
          big kitchen and sitting room and a gallery that really is just perfect
          - both day and night, for boat watching or just gazing at the Sea.
        </p>
      </div>
      <div class="grid col-span-1 row-span-1">
        <img
          class="object-cover object-center shadow-xl shadow-neutral-400"
          src="https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840537/SugarLoaf/CourtYard_khmzbz.jpg"
          alt=""
        />
        <cite class="font-NeueMontrealLight m-1 p-1"
          >Front drive and entrance to Sugar Loaf
        </cite>
      </div>
    </section>
    <section
      class="relative h-screen w-screen grid grid-cols-1 grid-rows-3 z-20 bg-white items-center"
    >
    <div class="grid col-span-1 row-span-1">
      <img
          class="object-contain object-center shadow-xl shadow-neutral-400"
          src="https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840542/SugarLoaf/PoolViewOfHarbour_qqmxlg.jpg"
          alt=""
        />
    </div>
      <div class="grid col-span-1 row-span-1">
        <p class="text-left text-black text-3xl m-2 p-2">
          There’s a large Private Pool with stunning views, an outside shower
          and plenty of shade and seating.
        </p>
      </div>
      <div class="grid col-span-1 row-span-1">
        <img
          class="object-contain object-center shadow-xl shadow-neutral-400"
          src="https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840542/SugarLoaf/PoolArea2_ictxam.jpg"
          alt=""
        />
      </div>
    </section>
  </div>
</template>
