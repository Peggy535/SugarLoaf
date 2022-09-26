<script setup>
const title = ref("Sugar Loaf | Home");
const description = ref("The description goes here");

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<template>
  <div class="h-auto w-screen overflow-hidden">
    <!-- Video section -->
    <section class="h-screen w-screen fixed">
      <video
        src="https://res.cloudinary.com/peggy-co/video/upload/c_fit,f_auto,q_auto,w_1024/v1663840583/SugarLoaf/antigua_sea_qof8pg.mp4"
        class="absolute top-0 right-0 w-screen h-screen object-center object-cover"
        width="1024"
        height="576"
        preload
        autoplay
        loop
        muted
        playsinline
        poster="https://res.cloudinary.com/peggy-co/video/upload/c_fit,q_auto,w_1024/v1663840583/SugarLoaf/antigua_sea_qof8pg.webp"
      ></video>
    </section>
    <!-- Landing title -->
    <section class="relative h-screen w-full bg-amber-500 bg-opacity-20 z-20">
      <div class="flex flex-row place-content-between items-center">
        <MenuIcon class="w-10" />

        <span class="m-1"
          ><NuxtLink
            to="https://www.admiralmanagementservices.com/sugarloaf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              class="border-2 border-white rounded-2xl transition delay-50 ease-in-out hover:border-brand-yellow duration:300"
            >
              <p
                class="text-white p-1 md:p-2 text-md md:text-2xl transition delay-50 ease-in-out hover:text-brand-yellow duration:200"
              >
                Book now
              </p>
            </button>
          </NuxtLink>
        </span>
      </div>
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
            <NuxtImg
              provider="cloudinary"
              class="object-contain rounded-2xl py-2"
              src="/CourtYard_khmzbz.jpg"
              alt=""
              width="1024"
              height="768"
              loading="lazy"
              sizes="xs:100vw sm:80vw md:80vw lg:80vw xl:80vw xxl:80vw"
            />
            <NuxtImg
              provider="cloudinary"
              class="object-contain rounded-2xl"
              src="/PoolViewOfHarbour_qqmxlg.jpg"
              alt=""
              width="1024"
              height="768"
              loading="lazy"
              sizes="xs:100vw sm:80vw md:80vw lg:80vw xl:80vw xxl:80vw"
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
            <NuxtImg
              provider="cloudinary"
              class="object-contain rounded-2xl py-2"
              src="/veranda_ipjnac.jpg"
              alt=""
              width="1024"
              height="768"
              loading="lazy"
              sizes="xs:100vw sm:80vw md:80vw lg:80vw xl:80vw xxl:80vw"
            />
            <NuxtImg
              provider="cloudinary"
              class="object-contain rounded-2xl"
              src="/MainLivingRoom3_njhdjo.jpg"
              alt=""
              width="1024"
              height="768"
              loading="lazy"
              sizes="xs:100vw sm:80vw md:80vw lg:80vw xl:80vw xxl:80vw"
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
          <NuxtLink to="/housedetails">
            <span class="absolute bottom-0 right-0">
              <button
                class="m-2 p-2 rounded-2xl ring-2 ring-black transition ease-in-out duration-300 hover:ring-6 hover:ring-white hover:text-white"
              >
                Press here
              </button>
            </span>
          </NuxtLink>
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
        class="grid col-span-1 row-span-1 rounded-2xl m-2 p-2 h-60 bg-brand-yellow bg-opacity-40 border-4 border-brand-yellow transition ease-in-out duration-300 hover:bg-opacity-100 hover:-translate-y-1 hover:scale-110"
      >
        <div class="flex relative">
          <h1 class="text-3xl m-1 p-1">Booking & Prices</h1>
          <NuxtLink to="/booking">
            <span class="absolute bottom-0 right-0">
              <button
                class="m-2 p-2 rounded-2xl ring-2 ring-black transition ease-in-out duration-300 hover:ring-6 hover:ring-white hover:text-white"
              >
                Go here
              </button>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
