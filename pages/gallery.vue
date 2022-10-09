<script setup>
import { gsap } from "gsap";

const title = ref("Sugar Loaf | Photo Gallery");
const description = ref("The description goes here");
definePageMeta({
  layout: "slate-nav",
});
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});

const query = groq`{ "imagesArray":*[_type == "photoGallery"]{_id, caption, "image":photoImage.asset->url} }`;
const sanity = useSanity();
const { pending, data, refresh } = await useAsyncData("imagesArray", () =>
  sanity.fetch(query)
);
refresh();

onMounted(() => {
  gsap.to(".page", { autoAlpha: 1, duration: 0.5, delay: 0.3 });
  const displayWriting = console.log(img);
});
</script>

<template>
  <div>
    <div
      class="overflow-hidden z-10 font-NeueMontrealLight bg-amber-50 text-slate-700 page"
    >
      <!-- Video section -->
      <section class="h-screen w-screen fixed z-10">
        <video
          class="absolute top-0 right-0 w-screen h-screen object-center object-cover"
          src="https://res.cloudinary.com/peggy-co/video/upload/ac_none,c_scale,q_auto,vc_vp9,w_1024/v1664955010/SugarLoaf/3235898963_xhaye6.webm"
          autoplay
          loop
          muted
          playsinline
          width="1024"
          height="576"
          poster="https://res.cloudinary.com/peggy-co/video/upload/ac_none,c_scale,q_auto,w_1024/v1664955010/SugarLoaf/3235898963_xhaye6.jpg"
        ></video>
      </section>
      <section
        class="relative flex flex-col h-screen w-screen place-content-end z-20 bg-white bg-opacity-60"
      >
        <div class="flex flex-col">
          <h1
            class="text-6xl sm:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl m-1 sm:m-2 sm:p-2 my-20"
          >
            Sugar Loaf
          </h1>
          <h1
            class="text-4xl sm:text-5xl md:text-6xl xl:text-8xl m-1 sm:m-2 sm:p-2 mb-5"
          >
            Photo Gallery
          </h1>
          <p
            class="text-xl md:text-2xl xl:text-3xl sm:w-3/4 xl:w-1/2 m-1 p-1 sm:m-3 sm:p-3 w-full mb-3 xl:mb-12 border-l-2 border-l-slate-700"
          >
            Discover Sugar Loaf both inside and out. Simply click on the areas
            you would like to see in more detail or simply hover, click or touch
            the image you would like to view to see the image and a brief
            description.
          </p>
        </div>
      </section>

      <main class="relative bg-white bg-opacity-60 h-auto w-screen z-20">
        <div
          class="h-auto w-screen grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-auto-rows gap-4"
        >
          <div
            class="flex flex-col w-full bg-amber-50 rounded-2xl"
            v-for="image in data.imagesArray"
            :key="image._id"
          >
            <img
              class="object-contain object-center overflow-hidden border-2 border-white rounded-2xl"
              :src="`${image.image}?h=800&w=800&auto=format&fit=min`"
            />
            <figcaption class="text-2xl m-2 p-2">
              Sugar Loaf - {{ image.caption }}
            </figcaption>
          </div>
        </div>
        <ul class="flex flex-row flex-wrap">
          <li
            class="h-50 sm:h-40 lg:h-60 xl:h-70 2xl:h-80 flex-grow m-1 p-1"
            v-for="image in data.imagesArray"
            :key="image._id"
          >
            <img
              class="max-h-full min-w-full object-cover align-bottom rounded-2xl border-2 border-white"
              :src="image.image"
              :alt="image.caption"
            />
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>
