<script setup>
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div>
    <!-- Video section -->
    <section class="h-screen w-screen fixed z-10 overflow-hidden">
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
          How to book and pricing
        </h1>
        <p
          class="text-xl md:text-3xl xl:text-2xl sm:w-3/4 xl:w-1/2 m-1 p-1 sm:m-3 sm:p-3 w-full mb-3 xl:mb-12 border-l-2 border-l-black"
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
  </div>
</template>
