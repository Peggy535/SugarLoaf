<script setup>
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="h-auto w-screen overflow-hidden">
    <!-- Video section -->
    <section class="h-screen w-screen fixed">
      <video
        class="absolute top-0 right-0 w-screen h-screen object-center object-cover"
        autoplay
        loop
        muted
        playsinline
      >
        <source
          src="https://res.cloudinary.com/peggy-co/video/upload/q_auto:best/v1664041139/SugarLoaf/video_dfr9s3.webm"
          type="video/webm"
        />
        <source
          src="https://res.cloudinary.com/peggy-co/video/upload/q_auto:best/v1664041139/SugarLoaf/video_dfr9s3.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/peggy-co/video/upload/q_auto:best/v1664041139/SugarLoaf/video_dfr9s3.mov"
          type="video/mov"
        />
      </video>
    </section>

    <section
      class="relative flex h-screen w-full bg-amber-50 bg-opacity-80 z-20"
    >
      <div class="flex flex-col place-content-end font-NeueMontrealBook">
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
          class="text-xl md:text-3xl xl:text-2xl sm:w-3/4 xl:w-1/2 m-1 p-2 sm:m-3 sm:p-3 w-full mb-3 xl:mb-12 border-l-2 border-l-black"
        >
          Using a trusted service partner, Admiral Managament Services of
          Antigua, discover the weekly pricing for Sugar Loaf and how best to
          book your stay.
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
    <section class="relative h-fit w-screen z-20 flex bg-amber-50">
      <div class="flex-flex-col place-content-center">
        <div class="flex flex-col w-full mb-5">
          <h1 class="p-1 m-1 text-2xl">
            1. Choose how many bedrooms you would like to book for.
          </h1>
          <p class="m-1 p-1">
            Sugar Loaf has 4 bedrooms in total. If you choose you can book for
            2, 3 or 4 bedrooms. The weekly prices reflect this.
          </p>
        </div>
        <div class="flex flex-col w-full">
          <h1 class="p-1 m-1 text-2xl">
            2. Review the pricing for your selected stay.
          </h1>
          <div class="flex flex-col border border-black rounded-2xl m-1">
            <h2 class="m-1 p-2 text-2xl">(2 Bedroom Option)</h2>
            <table class="table-fixed text-center m-1 p-1 mb-3">
              <thead>
                <tr>
                  <th>Summer*</th>
                  <th>Winter**</th>
                  <th>Peak***</th>
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

          <div class="flex flex-col border border-black rounded-2xl m-1">
            <h2 class="m-1 p-2 text-2xl">(3 Bedroom Option)</h2>
            <table class="table-fixed text-center mb-5">
              <thead>
                <tr>
                  <th>Summer*</th>
                  <th>Winter**</th>
                  <th>Peak***</th>
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
          <div class="flex flex-col border border-black rounded-2xl m-1">
            <h2 class="m-1 p-2 text-2xl">(4 Bedroom Option)</h2>
            <table class="table-fixed text-center mb-5">
              <thead>
                <tr>
                  <th>Summer*</th>
                  <th>Winter**</th>
                  <th>Peak***</th>
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
          <div>
            <ul>
              <li>* Summer: 16th May - 14th Nov incl.</li>
              <li>** Winter: 15th Nov - 15th May incl.</li>
              <li>*** Peak: Peak period dates are for the following events</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
