<script setup>
import { gsap } from "gsap";
import Arrowdown from "~~/components/icons/Arrowdown.vue";
onBeforeMount(() => {
  gsap.set(".page", { autoAlpha: 0 });
});
onMounted(() => {
  gsap.to(".page", { autoAlpha: 1, duration: 0.2 });
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
      class="h-auto w-screen overflow-hidden font-NeueMontrealLight text-slate-700 page"
    >
      <!-- Video section -->
      <section class="h-screen w-screen fixed z-10">
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
        <div class="flex flex-col absolute bottom-0 left-0 m-2 p-2 mb-20">
          <h1
            class="text-6xl sm:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl text-white mb-10"
          >
            Sugar Loaf
          </h1>
          <h6 class="text-3xl lg:text-4xl text-white mb-10">
            A luxurious Antiguan residence that is 'Home from Home'.
          </h6>
        </div>
        <div
          id="scroll-down"
          class="flex flex-col absolute bottom-1 right-1 m-2 p-2 z-20"
        >
          <span class="text-white text-sm text-center">Scroll down</span>
          <Arrowdown class="fill-white h-10" />
        </div>
      </section>
      <section class="relative w-screen bg-amber-50 bg-opacity-90 z-20">
        <!-- Opening Section -->
        <div class="flex flex-col w-full xl:flex-row xl:items-center">
          <div class="w-full xl:w-1/2">
            <NuxtImg
              provider="cloudinary"
              class="object-contain object-center"
              src="/PoolViewOfHarbour_znemtk.webp"
              alt=""
              width="1280"
              height="960"
              loading="lazy"
              sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
              format="webp"
            />
          </div>
          <div class="w-full lg:w-3/4 xl:w-1/2">
            <p
              class="text-2xl sm:text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl m-3 p-3 my-10 border-l-2 border-l-slate-700"
            >
              Set in quiet gardens overlooking Falmouth Harbour, Sugar Loaf has
              fantastic views, privacy, and peace and quiet.
            </p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row">
          <div class="w-full lg:w-1/2">
            <NuxtImg
              provider="cloudinary"
              class="object-contain object-center"
              src="/garden_view2_flvucr.webp"
              alt=""
              width="1024"
              height="683"
              loading="lazy"
              sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
              format="webp"
            />
          </div>
          <div class="w-full lg:w-1/2">
            <NuxtImg
              provider="cloudinary"
              class="object-contain object-center"
              src="/gardenview1_cver6b.webp"
              alt=""
              width="1024"
              height="683"
              loading="lazy"
              sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
              format="webp"
            />
          </div>
        </div>

        <div class="flex flex-col">
          <div class="w-full lg:w-1/2">
            <p
              class="text-xl sm:text-2xl xl:text-3xl m-2 p-2 md:mx-5 md:px-5 pt-10"
            >
              About 5 minutes drive from the beaches and restaurants of English
              Harbour, Sugarloaf has four large double bedrooms all with A/C; a
              big kitchen and sitting room and a gallery that really is just
              perfect - both day and night, for boat watching or just gazing at
              the Sea.
            </p>
          </div>
          <div class="w-full lg:w-1/2 lg:self-end">
            <p
              class="text-xl sm:text-2xl xl:text-3xl m-2 p-2 md:mx-5 md:px-5 pb-10"
            >
              Utilities include an automatic generator and two large fresh water
              tanks for bathing and laundry.
            </p>
          </div>
        </div>

        <!-- Bedroom Section -->
        <div class="flex flex-col lg:flex-row">
          <div class="w-full lg:w-1/2">
            <NuxtImg
              provider="cloudinary"
              class="object-contain object-center"
              src="/Bedroom2_a0mzih.webp"
              alt=""
              width="1024"
              height="768"
              loading="lazy"
              sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
              format="webp"
            />
          </div>
          <div class="w-full lg:w-1/2">
            <NuxtImg
              provider="cloudinary"
              class="object-contain object-center"
              src="/Bedroom1_a4e5kn.webp"
              alt=""
              width="1024"
              height="768"
              loading="lazy"
              sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
              format="webp"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="w-full lg:w-1/2">
            <p
              class="text-xl sm:text-2xl xl:text-3xl m-2 p-2 md:mx-5 md:px-5 pt-10"
            >
              There are 3 double bedrooms on the lower level, two with en-suite
              bathrooms and open air (walled) showers.
            </p>
          </div>
          <div class="w-full lg:w-1/2 lg:self-end">
            <p class="text-xl sm:text-2xl xl:text-3xl m-2 p-2 md:mx-5 md:px-5">
              All rooms have A/C, and views out over the lower gallery to
              Falmouth Bay. For an early morning dip, just walk out through your
              French windows, through the gated gallery, and down the stairs to
              the pool.
            </p>
          </div>

          <p class="text-2xl m-2 p-2 text-orange-600">
            Upstairs bed photo to go here. Not sure which one it is
            though???Sorry.
          </p>
          <div class="w-full lg:w-1/2 lg:self-end">
            <p class="text-xl sm:text-2xl xl:text-3xl m-2 p-2 md:mx-5 md:px-5">
              Upstairs, there is a lovely double bedroom again with A/C. This
              bedroom is ideal for those with mobility issues, and for those
              that need a little more help there are articulated wheelchair
              ramps on site which should enable access to most areas.
            </p>
          </div>
          <div class="w-full lg:w-1/2">
            <p
              class="text-xl sm:text-2xl xl:text-3xl m-2 p-2 md:mx-5 md:px-5 pb-10"
            >
              Oh, and there’s a loo, sitting room and a large kitchen. all with
              direct access to the upper gallery and dining table.
            </p>
          </div>
        </div>

        <!-- Sitting Room section -->
        <div class="flex flex-col lg:flex-row lg:items-center">
          <NuxtImg
            provider="cloudinary"
            class="object-contain object-center lg:w-1/2"
            src="/MainLivingRoom_wbonci.webp"
            alt=""
            width="1024"
            height="768"
            loading="lazy"
            sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
            format="webp"
          />
          <div class="w-full lg:w-1/2">
            <p
              class="text-xl sm:text-2xl xl:text-3xl m-2 p-2 py-10 md:mx-5 md:px-5 xl:py-0"
            >
              The Sitting room has A/C, comfy armchairs and sofas: there is also
              a table for any work that you need to do, a large tv, Bluetooth
              speaker, internet access, and a selection of books.
            </p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row-reverse lg:items-center">
          <div class="w-full lg:w-1/2">
            <NuxtImg
              provider="cloudinary"
              class="object-contain object-center"
              src="/Kitchen3_ze0bi1.webp"
              alt=""
              width="1024"
              height="768"
              loading="lazy"
              sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
              format="webp"
            />
          </div>

          <div class="w-full lg:w-1/2">
            <p
              class="text-xl sm:text-2xl xl:text-3xl m-2 p-2 md:mx-5 md:px-5 mt-5 pt-10 xl:pt-0"
            >
              The kitchen is fully equipped with A/C Gas stove, Cooker,
              microwave, fridge freezer, dishwasher and two sinks.
            </p>
            <p
              class="text-xl sm:text-2xl xl:text-3xl m-2 p-2 md:mx-5 md:px-5 mt-5 mb-5 pb-10"
            >
              There's also a 5 gallon water cooler.
            </p>
          </div>
        </div>
        <!-- Pool section -->
        <div class="flex flex-col">
          <NuxtImg
            provider="cloudinary"
            class="object-contain object-center xl:hidden"
            src="/IMG_0493_s4efju.webp"
            alt=""
            width="1280"
            height="853"
            loading="lazy"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw"
            format="webp"
          />
          <div class="lg:flex lg:flex-row">
            <NuxtImg
              provider="cloudinary"
              class="xs:hidden xl:visible object-contain object-center xl:w-1/3 xl:object-fill"
              src="/IMG_0493_s4efju.webp"
              alt=""
              width="1024"
              height="683"
              loading="lazy"
              sizes="xl:33vw xxl:33vw"
              format="webp"
            />
            <NuxtImg
              provider="cloudinary"
              class="object-contain object-center lg:w-1/2 xl:w-1/3"
              src="/PoolArea3_h4eazm.webp"
              alt=""
              width="1024"
              height="768"
              loading="lazy"
              sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
              format="webp"
            />
            <NuxtImg
              provider="cloudinary"
              class="object-contain object-center lg:w-1/2 xl:w-1/3"
              src="/PoolAreaWithCover_ve1rwu.webp"
              alt=""
              width="1024"
              height="768"
              loading="lazy"
              sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
              format="webp"
            />
          </div>
          <div class="w-full lg:w-1/2">
            <p
              class="text-xl sm:text-2xl xl:text-3xl m-2 p-2 md:mx-5 md:px-5 mt-5 pt-10"
            >
              The Pool is a good size and maintained weekly. Seating is
              plentiful as are shaded areas, and there is a Pool house with a
              loo and fridge.
            </p>
            <p
              class="text-xl sm:text-2xl xl:text-3xl m-2 p-2 md:mx-5 md:px-5 mb-5 pb-10"
            >
              There is also a Deck area, with cold water showers and BBQ.
            </p>
          </div>

          <div class="flex flex-col lg:flex-row">
            <NuxtImg
              provider="cloudinary"
              class="object-contain object-center lg:w-1/2"
              src="/CourtYard_vm9m46.webp"
              alt=""
              width="1024"
              height="768"
              loading="lazy"
              sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
              format="webp"
            />
            <NuxtImg
              provider="cloudinary"
              class="object-contain object-center lg:w-1/2"
              src="/ViewFromCourtYard_uw6mgk.webp"
              alt=""
              width="1024"
              height="768"
              loading="lazy"
              sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
              format="webp"
            />
          </div>
          <div class="flex flex-col">
            <div class="w-full lg:w-1/2">
              <p
                class="text-xl sm:text-2xl xl:text-3xl m-2 p-2 md:mx-5 md:px-5 pt-10"
              >
                Sugarloaf is situated on top of a hill overlooking Falmouth
                Harbour, and about 5 -10 minutes drive from Nelsons Dockyard,
                the beaches at Pigeon point and Galleon bay.
              </p>
              <p
                class="text-xl sm:text-2xl xl:text-3xl m-2 p-2 md:mx-5 md:px-5 pb-10"
              >
                The property is easily accessible by car, secure, and has ample
                parking out front.
              </p>
            </div>
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
          class="grid col-span-1 row-span-1 rounded-2xl m-2 p-2 h-48 bg-brand-green bg-opacity-40 border-4 border-brand-green transition ease-in-out duration-300 hover:bg-opacity-100 hover:-translate-y-1 hover:scale-110"
        >
          <div class="grid relative">
            <h1 class="text-xl m-2 p-2">Sugar Loaf Photo Gallery</h1>
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
          class="grid col-span-1 row-span-1 rounded-2xl m-2 p-2 h-48 bg-brand-turquoise bg-opacity-30 border-4 border-brand-turquoise transition ease-in-out duration-300 hover:bg-opacity-100 hover:scale-110"
        >
          <div class="grid relative">
            <h1 class="text-xl m-2 p-2">
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
          class="grid col-span-1 row-span-1 rounded-2xl m-2 p-2 h-48 bg-brand-yellow bg-opacity-40 border-2 border-brand-yellow transition ease-in-out duration-300 hover:bg-opacity-100 hover:-translate-y-1 hover:scale-110"
        >
          <div class="grid relative">
            <h1 class="text-xl m-2 p-2">Booking & Prices</h1>
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
