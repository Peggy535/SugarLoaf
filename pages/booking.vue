<script setup>
const title = ref("Sugar Loaf | Booking & Pricing");
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
  <div
    class="h-auto w-screen overflow-hidden font-NeueMontrealLight text-slate-700"
  >
    <!-- Video section -->
    <section class="h-screen w-screen fixed">
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
          src="https://res.cloudinary.com/peggy-co/video/upload/q_auto/v1664041139/SugarLoaf/video_dfr9s3.webm"
          type="video/webm"
        />
        <source
          src="https://res.cloudinary.com/peggy-co/video/upload/q_auto/v1664041139/SugarLoaf/video_dfr9s3.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/peggy-co/video/upload/q_auto/v1664041139/SugarLoaf/video_dfr9s3.mov"
          type="video/mov"
        />
      </video>
    </section>

    <section
      class="relative flex h-screen w-full bg-amber-50 bg-opacity-50 z-20"
    >
      <div
        class="flex flex-col place-content-end font-NeueMontrealBook my-10 text-slate-700"
      >
        <h1
          class="text-6xl md:text-8xl xl:text-10xl m-1 sm:m-3 sm:p-3 mt-20 mb-10"
        >
          Sugar Loaf
        </h1>
        <h1
          class="text-3xl sm:text-5xl md:text-6xl xl:text-7xl m-1 sm:m-3 sm:p-3 mb-5"
        >
          How to book and pricing
        </h1>
        <p
          class="text-xl md:text-3xl xl:text-2xl sm:w-3/4 xl:w-1/2 m-1 p-2 sm:m-3 sm:p-3 w-full mb-3 xl:mb-12 border-l-2 border-l-slate-700"
        >
          Using a trusted service partner, Admiral Managament Services of
          Antigua, discover the weekly pricing for Sugar Loaf and how best to
          book your stay.
        </p>
      </div>
    </section>
    <section
      class="relative h-auto w-screen z-20 flex bg-amber-50 bg-opacity-50 p-2"
    >
      <div class="flex-flex-col w-full sm:w-3/4 lg:w-1/2 mx-auto">
        <div
          class="flex flex-col my-10 bg-amber-50 border-2 border-white rounded-2xl"
        >
          <h1 class="p-1 m-1 text-2xl">
            1. Choose how many bedrooms you would like to book for.
          </h1>
          <p class="m-1 p-1">
            Sugar Loaf has 4 bedrooms in total. You can book the entire house
            with 2, 3 or 4 bedrooms - depending on the size of your party. The
            weekly pricing for 2, 3 or 4 bedroom options are listed below.
          </p>
        </div>
        <div
          class="flex flex-col w-full sm:w-3/4 lg:w-1/2 mx-auto bg-amber-50 border-2 border-white rounded-2xl"
        >
          <h1 class="p-1 m-1 text-2xl">
            2. Review the pricing for your selected stay.
          </h1>
          <div
            class="flex flex-col border border-slate-700 rounded-2xl m-1 my-5"
          >
            <h2 class="m-1 p-1 text-lg">
              2 Bedroom Option | Price per week US$
            </h2>
            <table class="table-fixed text-center m-1 p-1 mb-3">
              <thead>
                <tr>
                  <th>Summer</th>
                  <th>Winter</th>
                  <th>Peak</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>US$3192</td>
                  <td>US$3990</td>
                  <td>US$5586</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            class="flex flex-col border border-slate-700 rounded-2xl m-1 my-5"
          >
            <h2 class="m-1 p-1 text-lg">
              3 Bedroom Option | Price per week US$
            </h2>
            <table class="table-fixed text-center m-1 p-1 mb-5">
              <thead>
                <tr>
                  <th>Summer</th>
                  <th>Winter</th>
                  <th>Peak</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>US$4788</td>
                  <td>US$5985</td>
                  <td>US$8379</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="flex flex-col border border-slate-700 rounded-2xl m-1 my-5"
          >
            <h2 class="m-1 p-1 text-lg">
              4 Bedroom Option | Price per week US$
            </h2>
            <table class="table-fixed text-center m-1 p-1 mb-5">
              <thead>
                <tr>
                  <th>Summer</th>
                  <th>Winter</th>
                  <th>Peak</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>US$6384</td>
                  <td>US$7980</td>
                  <td>US$11172</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="flex flex-col border border-white rounded-2xl m-1 my-5 bg-amber-50"
        >
          <h1 class="m-1 p-1 text-2xl">Booking periods</h1>
          <ul class="m-1 p-1">
            <li class="m-1 p-1">Summer: 16th May - 14th Nov incl.</li>
            <li class="m-1 p-1">Winter: 15th Nov - 15th May incl.</li>
            <li class="m-1 p-1">
              Peak: Peak periods are detailed below. Please click on the event
              link to take you to the official event website.
              <table class="table-auto text-center w-full my-5">
                <thead>
                  <tr class="font-NeueMontrealMedium">
                    <th>Event</th>
                    <th>Dates</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <NuxtLink
                        to="https://visitantiguabarbuda.com/antiguas-carnival/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Carnival</NuxtLink
                      >
                    </td>
                    <td>7th Aug 2023</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
