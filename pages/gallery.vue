<script setup>
import { gsap } from "gsap";

const images = [
  {
    imageUrl:
      "https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840544/SugarLoaf/SideOfMainBuilding_rtdcok.jpg",
    imageAlt:
      "View from the side garden, blacony and Falmouth Harbour in the distance",
    tag: "Building",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840544/SugarLoaf/ViewFromCourtYard_nfevbp.jpg",
    imageAlt:
      "View of the surrounding area from the private front court yard/entrance",
    tag: "Building",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840537/SugarLoaf/CourtYard_khmzbz.jpg",
    imageAlt: "Front entrance to Sugar Loaf",
    tag: "Building",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840537/SugarLoaf/FrontDoor_ea8i9a.jpg",
    imageAlt: "Secure entrance with a beautiful view through to the Harbour",
    tag: "Building",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840542/SugarLoaf/PoolViewOfHarbour_qqmxlg.jpg",
    imageAlt:
      "View from the private pool side which looks directly towards Falmouth Harbour",
    tag: "Pool",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840542/SugarLoaf/PoolAreaWithCover_cmgtom.jpg",
    imageAlt: "View of the pool, sun loungers and shaded seating area",
    tag: "Pool",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840542/SugarLoaf/PoolArea2_ictxam.jpg",
    imageAlt:
      "A view of the pool area from underneath the shaded area. Stunning view can be seen from virtually all positions.",
    tag: "Pool",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840541/SugarLoaf/OpenAirShower_ygit2t.jpg",
    imageAlt: "Outside, stone-walled, rain-fall shower.",
    tag: "Pool",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840543/SugarLoaf/veranda_ipjnac.jpg",
    imageAlt:
      "View of the outside balcont seating area with marvellous view of Falmouth Harbour.",
    tag: "Balcony",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840543/SugarLoaf/SunnyVeranda_n0m0xo.jpg",
    imageAlt: "Relaxing, comfortable seating area - outside balcont area.",
    tag: "Balcony",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840542/SugarLoaf/RainbowHarbourView_qlzbo8.jpg",
    imageAlt:
      "The most stunning rainbow! Caught from Sugar Loaf's outside balcony area.",
    tag: "Balcony",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840542/SugarLoaf/RainbowHarbourView_qlzbo8.jpg",
    imageAlt:
      "A stunning wooden outside dining table with the most spectacular view",
    tag: "Balcony",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840540/SugarLoaf/MainLivingRoom2_klmf5f.jpg",
    imageAlt: "Brightly lit living room with ceiling fans and A/C.",
    tag: "LivingRoom",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840540/SugarLoaf/MainLivingRoom3_njhdjo.jpg",
    imageAlt:
      "The living room from a different angle showing a secluded work area if one needs it.",
    tag: "LivingRoom",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840540/SugarLoaf/MainLivingRoom_toe1oq.jpg",
    imageAlt: "The villa's living room.",
    tag: "LivingRoom",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto:best/v1663840540/SugarLoaf/Kitchen3_nlvmfm.jpg",
    imageAlt: "Spacious kitchen with all conveniences",
    tag: "Kitchen",
  },
  {
    imageUrl: "",
    imageAlt: "",
    tag: "",
  },
  {
    imageUrl: "",
    imageAlt: "",
    tag: "",
  },
  {
    imageUrl: "",
    imageAlt: "",
    tag: "",
  },
  {
    imageUrl: "",
    imageAlt: "",
    tag: "",
  },
  {
    imageUrl: "",
    imageAlt: "",
    tag: "",
  },
  {
    imageUrl: "",
    imageAlt: "",
    tag: "",
  },
];

onMounted(() => {
  const items = document.querySelectorAll(".item");

  items.forEach((el) => {
    const image = el.querySelector("img");
    el.addEvenetListener("mouseenter", (el) => {
      gsap.to(".imageOverlay", { duration: 1, autoAlpha: 1 });
    });
    el.addEvenetListener("mouseleave", (el) => {
      gsap.to(".imageOverlay", { duration: 1, autoAlpha: 0 });
    });
  });
});
</script>

<template>
  <div>
    <main class="h-auto w-screen bg-amber-50 z-10">
      <ul class="flex flex-row flex-wrap">
        <li
          class="h-50 sm:h-40 lg:h-60 xl:h-70 2xl:h-80 flex-grow m-1 p-1 item"
          v-for="image in images"
        >
          <img
            class="max-h-full min-w-full object-cover align-bottom rounded-2xl"
            :src="image.imageUrl"
            :alt="image.imageAlt"
            loading="lazy"
          />
        </li>
      </ul>
    </main>
    <section
      class="imageOverlay invisible w-1/2 h-3/4 absolute top-0 z-20 bg-orange-500"
    ></section>
  </div>
</template>
