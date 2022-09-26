<script setup>
import { gsap } from "gsap";

const title = ref("Sugar Loaf | Amenities & facilities");
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
onMounted(() => {});
</script>

<template>
  <div class="font-NeueMontrealLight">
    <!-- Video section -->
    <section class="h-screen w-screen fixed z-10">
      <video
        class="absolute top-0 right-0 w-screen h-screen object-center object-cover"
        autoplay
        loop
        muted
        playsinline
        preload
        poster=""
      >
        <source
          src="https://res.cloudinary.com/peggy-co/video/upload/q_auto/v1664038068/SugarLoaf/production_ID_4782135_1_onpelh.webm"
          type="video/webm"
        />
        <source
          src="https://res.cloudinary.com/peggy-co/video/upload/q_auto/v1664038068/SugarLoaf/production_ID_4782135_1_onpelh.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/peggy-co/video/upload/f_auto,q_auto/v1664038068/SugarLoaf/production_ID_4782135_1_onpelh.mp4"
          type="video/mov"
        />
      </video>
    </section>
    <section class="relative flex h-screen w-screen z-20">
      <div
        class="flex flex-col place-content-end text-slate-800 bg-amber-50 bg-opacity-80 font-NeueMontrealBook"
      >
        <h1
          class="text-7xl md:text-8xl xl:text-10xl m-1 sm:m-3 sm:p-3 mt-20 mb-10"
        >
          Sugar Loaf
        </h1>
        <h1
          class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl m-1 sm:m-3 sm:p-3 mb-5"
        >
          House details, amenities and facilities
        </h1>
        <p
          class="text-xl md:text-3xl xl:text-2xl sm:w-3/4 xl:w-1/2 m-1 p-1 sm:m-3 sm:p-3 w-full mb-3 xl:mb-12 border-l-2 border-l-black"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non
          dolorem facilis aut possimus voluptatum nostrum nisi. Aspernatur
          delectus quisquam consequuntur aliquam libero unde sed, voluptate
          blanditiis quasi harum hic!
        </p>
      </div>
      <span class="absolute top-0 md:top-3 right-0 md:right-3 m-1 p-1"
        ><NuxtLink
          to="https://www.admiralmanagementservices.com/sugarloaf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            class="border-2 border-slate-800 rounded-2xl transition delay-50 ease-in-out hover:border-brand-yellow duration:300"
          >
            <p
              class="text-slate-800 p-1 m-1 md:p-2 text-lg md:text-3xl transition delay-50 ease-in-out hover:text-brand-yellow duration:200"
            >
              Book now
            </p>
          </button>
        </NuxtLink>
      </span>
    </section>

    <section class="relative h-fit w-screen bg-amber-50 bg-opacity-80 z-20">
      <div
        class="w-full md:w-3/4 items-start flex flex-col mx-auto divide-y divide-slate-600 text-slate-800"
      >
        <div
          class="relative transition duration-200 delay-50 ease-in-out hover:scale-110"
        >
          <!-- Start of amenities -->
          <div class="m-1 p-1">
            <div>
              <h1 class="text-4xl m-1 p-1">General details of Sugar Loaf</h1>
            </div>
            <ul class="m-1 p-1 text-xl list-disc list-inside">
              <li>Up to 8 guests</li>
              <li>4 Bedrooms</li>
              <li>2 Bathrooms | 2 Indoor showers</li>
              <li>Private swimming pool</li>
              <li>Outside, secluded stone-walled shower</li>
              <li>Private and secure gardens</li>
              <li>Private & gated entrance & parking</li>
            </ul>
          </div>
        </div>

        <div class="relative">
          <div class="m-1 p-1">
            <div>
              <h1 class="text-4xl m-1 p-1">Scenic Views</h1>
            </div>
            <ul class="m-1 p-1 text-xl list-disc list-inside">
              <li>
                Uninterrupted views of Falmouth Harbour from the pool area,
                outside balcont, living room and bedrooms.
              </li>
              <li>Private garden and surrounding areas</li>
            </ul>
          </div>
        </div>

        <div class="relative">
          <div class="m-1 p-1">
            <div>
              <h1 class="text-4xl m-1 p-1">Outdoors</h1>
            </div>
            <ul class="m-1 p-1 list-disc list-inside text-xl">
              <li>
                Private balcony area extending along two sides of the house
              </li>
              <li>Private swimming pool and pool-side area</li>
              <li>
                Private garden Outdoor furniture including poolside sun
                loungers/poolside sofa/outdoor dining area/relaxing &
                comfortable seating and tables on balcony
              </li>
              <li>Hammock</li>
            </ul>
          </div>
        </div>

        <div class="relative">
          <div class="m-1 p-1">
            <div>
              <h1 class="text-4xl m-1 p-1">Bedrooms & Laundry</h1>
            </div>
            <ul class="m-1 p-1 text-xl list-disc list-inside">
              <li>
                Housekeeper ('Jolly') for all laundry and washing (Attends 3
                times per week - this can be extended)
              </li>
              <li>Washing machine</li>
              <li>Essentials - Towels/bed sheets/hand soap/toilet paper</li>
              <li>Hangers</li>
              <li>Bed linen</li>
              <li>Mosquito nets</li>
              <li>Wardrobes</li>
            </ul>
          </div>
        </div>

        <div class="relative">
          <div class="m-1 p-1">
            <div>
              <h1 class="text-4xl m-1 p-1">Heating & cooling</h1>
            </div>
            <ul class="m-1 p-1 text-xl list-disc list-inside">
              <li>Air Conditioning</li>
              <li>Ceiling fans</li>
              <li>Portable fans</li>
            </ul>
          </div>
        </div>

        <div class="relative">
          <div class="m-1 p-1">
            <div>
              <h1 class="text-4xl m-1 p-1 pr-10">Entertainment</h1>
            </div>
            <ul class="m-1 p-1 text-xl list-disc list-inside">
              <li>Wifi</li>
              <li>TV in main living room</li>
              <li>Anything else??</li>
            </ul>
          </div>
        </div>

        <div class="relative">
          <div class="m-1 p-1">
            <div>
              <h1 class="text-4xl m-1 p-1">Bathrooms</h1>
            </div>
            <ul class="m-1 p-1 text-xl list-disc list-inside">
              <li>Hot Water</li>
              <li>Hair dryers</li>
              <li>2 indoor showers | 1 outdoor shower</li>
              <li>Baths? Towels?</li>
            </ul>
          </div>
        </div>

        <div class="relative">
          <div class="m-1 p-1">
            <div>
              <h1 class="text-4xl m-1 p-1">Wheelchair access</h1>
            </div>
            <ul class="m-1 p-1 text-xl list-disc list-inside">
              <li>
                Wheelchairs have access to the main villa level and the pool
                level.
              </li>
              <li>Are there ramps and which bedrooms are avalaible?</li>
            </ul>
          </div>
        </div>

        <div class="relative">
          <div class="m-1 p-1">
            <div>
              <h1 class="text-4xl m-1 p-1">Other important aspects</h1>
            </div>
            <ul class="m-1 p-1 text-xl list-disc list-inside">
              <li>
                At the House, the back-up generator will provide a rapid pick up
                in the event of occasional power drops, and there is a TV to
                sign into your favourite viewing apps.
              </li>
              <li>
                Water is supplied from two large tanks and is the Island’s most
                precious resource.
              </li>
              <li>
                Nathan and Clare of Admiral Management Services, are available
                for support if ever there are problems.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
