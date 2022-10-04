<script setup>
import { gsap } from "gsap";
import Arrowdown from "~~/components/icons/Arrowdown.vue";
onBeforeMount(() => {
  gsap.set(".page", { autoAlpha: 0 });
});
onMounted(() => {
  gsap.to(".page", { autoAlpha: 1, duration: 2 });
  gsap.set("#scroll-down", { autoAlpha: 1 });
  gsap.fromTo(
    "#scroll-down",
    { autoAlpha: 1 },
    { autoAlpha: 0, duration: 2, yoyo: true, repeat: 5 }
  );
});
</script>

<template>
  <div>
    <div
      class="h-auto w-screen overflow-hidden font-NeueMontrealLight text-slate-700 page invisible"
    >
      <!-- Video section -->
      <section class="h-screen w-screen fixed">
        <video
          src="https://res.cloudinary.com/peggy-co/video/upload/ac_none,c_scale,q_auto,vc_vp9,w_1024/v1663840583/SugarLoaf/antigua_sea_qof8pg.webm"
          class="absolute top-0 right-0 w-screen h-screen object-center object-cover"
          width="1024"
          height="576"
          autoplay
          loop
          muted
          playsinline
          poster="https://res.cloudinary.com/peggy-co/video/upload/c_fit,q_auto,w_1024/v1663840583/SugarLoaf/antigua_sea_qof8pg.webp"
        ></video>
      </section>
      <!-- Landing title -->
      <section class="relative h-screen w-full bg-amber-500 bg-opacity-30 z-20">
        <!-- Landing Page text -->
        <div class="flex flex-col absolute bottom-0 left-0 m-1 p-1 mb-20">
          <h1
            class="text-6xl sm:text-9xl lg:text-12xl xl:text-14xl 2xl:text-13xl text-white mb-10"
          >
            Sugar Loaf
          </h1>
          <h6 class="text-3xl lg:text-4xl text-white mb-10">
            A luxurious Antiguan residence that is 'Home from Home'.
          </h6>
        </div>
        <div
          id="scroll-down"
          class="flex flex-col absolute bottom-1 right-1 m-1 p-1 z-20"
          v-on:scroll="scrollDisappear"
        >
          <span class="text-white text-sm text-center">Scroll down</span>
          <Arrowdown class="fill-white h-10" />
        </div>
      </section>
      <section class="relative w-screen bg-amber-50 bg-opacity-90 z-20">
        <div class="flex flex-col w-full items-center">
          <p
            class="text-4xl md:text-6xl lg:text-7xl xl:text-8xl m-3 p-3 my-10 border-l-2 border-l-slate-700"
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
              format="webp"
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
              format="webp"
            />
            <cite class="text-xs lg:text-sm"
              >Views of Falmouth Harbour from the private pool</cite
            >
          </div>
        </div>
      </section>
      <section class="relative h-auto w-screen bg-amber-50 bg-opacity-90 z-20">
        <div class="flex flex-col w-full items-center">
          <p
            class="text-4xl md:text-6xl m-3 p-3 my-10 border-l-2 border-l-slate-700"
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
              format="webp"
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
              format="webp"
            />
            <cite class="text-xs lg:text-sm">Sugar Loafs living area</cite>
          </div>
        </div>
      </section>
      <section
        class="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-auto h-auto w-screen bg-amber-50 bg-opacity-90 px-4"
      >
        <div class="grid col-span-1 row-span-1 h-48 m-2 p-2">
          <div class="relative flex">
            <h1
              class="text-5xl lg:text-3xl lg:leading-normal xl:text-5xl 2xl:text-6xl"
            >
              Discover more about Sugar Loaf
            </h1>
          </div>
        </div>
        <div
          class="grid col-span-1 row-span-1 rounded-2xl m-2 p-2 h-48 bg-brand-turquoise bg-opacity-30 border-4 border-brand-turquoise transition ease-in-out duration-300 hover:bg-opacity-100 hover:scale-110"
        >
          <div class="grid relative">
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
          class="grid col-span-1 row-span-1 rounded-2xl m-2 p-2 h-48 bg-brand-green bg-opacity-40 border-4 border-brand-green transition ease-in-out duration-300 hover:bg-opacity-100 hover:-translate-y-1 hover:scale-110"
        >
          <div class="grid relative">
            <h1 class="text-3xl m-1 p-1">Sugar Loaf Photo Gallery</h1>
            <NuxtLink to="/gallery">
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
          class="grid col-span-1 row-span-1 rounded-2xl m-2 p-2 h-48 bg-brand-yellow bg-opacity-40 border-2 border-brand-yellow transition ease-in-out duration-300 hover:bg-opacity-100 hover:-translate-y-1 hover:scale-110"
        >
          <div class="grid relative">
            <h1 class="text-3xl m-1 p-1">Booking & Prices</h1>
            <NuxtLink to="/booking">
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
      </section>
    </div>
  </div>
</template>
