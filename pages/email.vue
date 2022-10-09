<script setup>

definePageMeta({
  layout: "slate-nav",
});

</script>

<template>
  <div>
    <div
      class="h-auto w-screen overflow-hidden font-NeueMontrealLight text-slate-700"
    >
      <!-- Video section -->
      <section class="h-screen w-screen fixed">
        <video
          src="https://res.cloudinary.com/peggy-co/video/upload/ac_none,c_scale,q_auto,vc_vp9,w_1024/v1665217406/SugarLoaf/video_jfu16c.webm"
          class="absolute top-0 right-0 w-screen h-screen object-center object-cover"
          width="1024"
          height="576"
          autoplay
          loop
          muted
          playsinline
          poster="https://res.cloudinary.com/peggy-co/video/upload/ac_none,c_fit,q_auto,w_1024/v1665217406/SugarLoaf/video_jfu16c.jpg"
        ></video>
      </section>

      <section
        class="relative flex h-screen w-full bg-amber-50 bg-opacity-50 z-20"
      >
        <div
          class="flex flex-col place-content-end font-NeueMontrealBook my-10 text-slate-700"
        >
          <h1
            class="text-6xl sm:text-9xl md:text-8xl lg:text-9xl xl:text-10xl m-1 sm:m-2 sm:p-2 mt-20 mb-10"
          >
            Sugar Loaf
          </h1>
          <h2
            class="text-3xl sm:text-5xl md:text-6xl xl:text-7xl m-1 sm:m-2 sm:p-2 mb-5"
          >
            Email page
          </h2>
          <p
            class="text-xl md:text-3xl xl:text-2xl sm:w-3/4 xl:w-1/2 m-1 p-1 w-full mb-3 xl:mb-12 border-l-2 border-l-slate-700"
          >
            Create severless webhook via Netlify to Sparkpost for email to Nick
          </p>
         
        </div>
      </section>
    </div>
  </div>
</template>
