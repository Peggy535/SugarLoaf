<template>
  <div>
    <section class="relative h-fit w-screen bg-amber-50">
      <div class="flex flex-col">
        <h1 class="text-6xl md:text-8xl xl:text-11xl m-1 sm:m-3 sm:p-3 my-20">
          Sugar Loaf
        </h1>
        <h1 class="text-4xl md:text-6xl xl:text-8xl m-1 sm:m-3 sm:p-3 mb-5">
          House details, amenities and facilities
        </h1>
        <p
          class="text-xl md:text-3xl xl:text-3xl sm:w-3/4 xl:w-1/2 m-1 p-1 sm:m-3 sm:p-3 w-full mb-3 xl:mb-12 border-l-2 border-l-black"
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
            class="border-2 border-black rounded-2xl transition delay-50 ease-in-out hover:border-brand-yellow duration:300"
          >
            <p
              class="text-black p-1 m-1 md:p-2 text-lg md:text-3xl transition delay-50 ease-in-out hover:text-brand-yellow duration:200"
            >
              Book now
            </p>
          </button>
        </NuxtLink>
      </span>
    </section>
    <section
      class="h-fit w-screen bg-amber-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-auto"
    >
      <div class="grid col-span-1 row-span-1">
        <div class="relative flex flex-col basis-full">
          <!-- Start of amenities -->
          <div class="m-1 p-1 border border-black rounded-2xl">
            <div>
              <h1 class="text-3xl m-1 p-1">General details of Sugar Loaf</h1>
            </div>
            <ul class="m-1 p-1">
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
      </div>
      <div class="grid col-span-1 row-span-1 ">
        <div
          class="relative flex flex-col basis-full"
        >
          <div class="m-1 p-1 border border-black rounded-2xl">
            <div>
              <h1 class="text-3xl m-1 p-1">Scenic Views</h1>
            </div>
            <ul class="m-1 p-1">
              <li>
                Uninterrupted views of Falmouth Harbour from the pool area,
                outside balcont, living room and bedrooms.
              </li>
              <li>Private garden and surrounding areas</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="grid col-span-1 row-span-1">
        <div class="relative flex flex-col basis-full">
          <div class="m-1 p-1 border border-black rounded-2xl">
            <div>
              <h1 class="text-3xl m-1 p-1">Outdoors</h1>
            </div>
            <ul class="m-1 p-1">
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
      </div>

      <div class="grid col-span-1 row-span-1">
        <div class="relative flex flex-col basis-full">
          <div class="m-1 p-1 border border-black rounded-2xl">
            <div>
              <h1 class="text-3xl m-1 p-1">Bedrooms & Laundry</h1>
            </div>
            <ul class="m-1 p-1">
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
      </div>

      <div class="grid col-span-1 row-span-1">
        <div class="relative flex flex-col basis-full">
          <div class="m-1 p-1 border border-black rounded-2xl">
            <div>
              <h1 class="text-3xl m-1 p-1">Heating & cooling</h1>
            </div>
            <ul class="m-1 p-1">
              <li>Air Conditioning</li>
              <li>Ceiling fans</li>
              <li>Portable fans</li>
              <li class=""></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="grid col-span-1 row-span-1">
        <div class="relative flex flex-col basis-full">
          <div class="m-1 p-1 border border-black rounded-2xl">
            <div>
              <h1 class="text-3xl m-1 p-1">Entertainment</h1>
            </div>
            <ul class="m-1 p-1">
              <li>Wifi</li>
              <li>TV in main living room</li>
              <li>Anything else??</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="grid col-span-1 row-span-1">
        <div class="relative flex flex-col basis-full">
          <div class="m-1 p-1 border border-black rounded-2xl">
            <div>
              <h1 class="text-3xl m-1 p-1">Bathrooms</h1>
            </div>
            <ul class="m-1 p-1">
              <li>Hot Water</li>
              <li>Hair dryers</li>
              <li>2 indoor showers | 1 outdoor shower</li>
              <li>Baths? Towels?</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="grid col-span-1 row-span-1">
        <div class="relative flex flex-col basis-full">
          <div class="border border-black rounded-2xl">
            <div>
              <h1 class="text-3xl m-1 p-1">Wheelchair access</h1>
            </div>
            <ul class="m-1 p-1">
              <li>
                Wheelchairs have access to the main villa level and the pool
                level.
              </li>
              <li>Are there ramps and which bedrooms are avalaible?</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="grid col-span-1 row-span-1">
        <div class="relative flex flex-col basis-full">
          <div class="m-1 p-1 border border-black rounded-2xl">
            <div>
              <h1 class="text-3xl m-1 p-1">Other important aspects</h1>
            </div>
            <ul class="m-1 p-1">
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
