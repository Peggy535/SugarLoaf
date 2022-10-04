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
const images = [
  {
    imageUrl: "/SideOfMainBuilding_rtdcok.jpg",
    imageAlt:
      "View from the side garden, blacony and Falmouth Harbour in the distance",
    tag: "Building",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/ViewFromCourtYard_nfevbp.jpg",
    imageAlt:
      "View of the surrounding area from the private front court yard/entrance",
    tag: "Building",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/CourtYard_khmzbz.jpg",
    imageAlt: "Front entrance to Sugar Loaf",
    tag: "Building",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/FrontDoor_ea8i9a.jpg",
    imageAlt: "Secure entrance with a beautiful view through to the Harbour",
    tag: "Building",
    imageWidth: "576",
    imageHeight: "768",
  },
  {
    imageUrl: "/PoolViewOfHarbour_qqmxlg.jpg",
    imageAlt:
      "View from the private pool side which looks directly towards Falmouth Harbour",
    tag: "Pool",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/PoolAreaWithCover_cmgtom.jpg",
    imageAlt: "View of the pool, sun loungers and shaded seating area",
    tag: "Pool",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/PoolArea2_ictxam.jpg",
    imageAlt:
      "A view of the pool area from underneath the shaded area. Stunning view can be seen from virtually all positions.",
    tag: "Pool",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/OpenAirShower_ygit2t.jpg",
    imageAlt: "Outside, stone-walled, rain-fall shower.",
    tag: "Pool",
    imageWidth: "576",
    imageHeight: "768",
  },
  {
    imageUrl: "/veranda_ipjnac.jpg",
    imageAlt:
      "View of the outside balcont seating area with marvellous view of Falmouth Harbour.",
    tag: "Balcony",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/SunnyVeranda_n0m0xo.jpg",
    imageAlt: "Relaxing, comfortable seating area - outside balcont area.",
    tag: "Balcony",
    imageWidth: "576",
    imageHeight: "768",
  },
  {
    imageUrl: "/RainbowHarbourView_qlzbo8.jpg",
    imageAlt:
      "The most stunning rainbow! Caught from Sugar Loaf's outside balcony area.",
    tag: "Balcony",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/MainLivingRoom2_klmf5f.jpg",
    imageAlt: "Brightly lit living room with ceiling fans and A/C.",
    tag: "LivingRoom",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/MainLivingRoom3_njhdjo.jpg",
    imageAlt:
      "The living room from a different angle showing a secluded work area if one needs it.",
    tag: "LivingRoom",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/MainLivingRoom_toe1oq.jpg",
    imageAlt: "The villa's living room.",
    tag: "LivingRoom",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/Kitchen3_nlvmfm.jpg",
    imageAlt: "Spacious kitchen with all conveniences",
    tag: "Kitchen",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/Kitchen2_vlydjd.jpg",
    imageAlt: "Ample room for the family to help prepare for your meals.",
    tag: "Kitchen",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/kitchen1_wa43b4.jpg",
    imageAlt: "The Kitchen area",
    tag: "Kitchen",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/Bedroom3_ctwctl.jpg",
    imageAlt: "One of the 4 spacious and cool bedrooms",
    tag: "Bedrooms",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/Bedroom1_yvhil9.jpg",
    imageAlt: "All bedrooms have excellent ventilation and mosquito nets",
    tag: "Bedrooms",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/Bedroom2_aluu4b.jpg",
    imageAlt: "Bedroom - the stunning views are everywhere!",
    tag: "Bedrooms",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/AbovePoolHarbourView_jwvqby.jpg",
    imageAlt: "",
    tag: "Other",
    imageWidth: "576",
    imageHeight: "768",
  },
  {
    imageUrl: "/DiningArea_bzmv0w.jpg",
    imageAlt: "",
    tag: "Other",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/Inside2_pdnyq1.jpg",
    imageAlt: "",
    tag: "Other",
    imageWidth: "576",
    imageHeight: "768",
  },
  {
    imageUrl: "/Inside3_dpxsi6.jpg",
    imageAlt: "",
    tag: "Other",
    imageWidth: "1024",
    imageHeight: "768",
  },
  {
    imageUrl: "/ViewFromBedroom_sfs040.jpg",
    imageAlt: "",
    tag: "Other",
    imageWidth: "1024",
    imageHeight: "768",
  },
];

onMounted(() => {});
</script>

<template>
  <div>
    <div
      class="overflow-hidden font-NeueMontrealLight bg-amber-50 text-slate-700"
    >
      <section
        class="relative flex flex-col h-screen w-screen place-content-end"
      >
        <div class="flex flex-col">
          <h1 class="text-6xl md:text-8xl xl:text-11xl m-1 sm:m-3 sm:p-3 my-20">
            Sugar Loaf
          </h1>
          <h1 class="text-4xl md:text-6xl xl:text-8xl m-1 sm:m-3 sm:p-3 mb-5">
            Photo Gallery
          </h1>
          <p
            class="text-xl md:text-2xl xl:text-3xl sm:w-3/4 xl:w-1/2 m-1 p-1 sm:m-3 sm:p-3 w-full mb-3 xl:mb-12 border-l-2 border-l-black"
          >
            Discover Sugar Loaf both inside and out. Simply click on the areas
            you would like to see in more detail or simply hover, click or touch
            the image you would like to view to see the image and a brief
            description.
          </p>
        </div>
      </section>

      <main class="h-auto w-screen bg-amber-50 z-10">
        <ul class="flex flex-row flex-wrap">
          <li
            class="h-50 sm:h-40 lg:h-60 xl:h-70 2xl:h-80 flex-grow m-1 p-1"
            v-for="image in images"
          >
            <NuxtImg
              class="max-h-full min-w-full object-cover align-bottom rounded-2xl"
              provider="cloudinary"
              :src="image.imageUrl"
              :alt="image.imageAlt"
              loading="lazy"
              sizes="xs:100vw sm:50vw md:25vw lg:20vw xl:20vw xxl:20vw"
            />
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>
