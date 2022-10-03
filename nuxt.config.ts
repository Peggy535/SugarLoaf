import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "@kevinmarrec/nuxt-pwa"],
  image: {
    cloudinary: {
      baseURL:
        "https://res.cloudinary.com/peggy-co/image/upload/v1663840544/SugarLoaf",
    },
  },
  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["gsap"],
  },
  pwa: {
    icon: {
      sizes: [512],
    },
    meta: {
      name: "Sugar Loaf",
      theme_color: "#ffffff",
      ogDescription:
        "A luxurious Antiguan residence that is Home from Home. Set in large and quiet gardens overlooking Falmouth Harbour, Sugar Loaf has views to swoon at and plenty of privacy, peace and quiet",
      ogTitle: "Sugar Loaf - An Antiguan Residence",
      ogUrl: "https://sugarloaf.netlify.app",
      ogImage: {
        path: "https://res.cloudinary.com/peggy-co/image/upload/v1664807725/SugarLoaf/ogImage_dvfc0c.webp",
        width: 1200,
        height: 630,
      },
      twitterCard: "summary_large_image",
    },
    workbox: {
      enabled: false,
    },
    manifest: {
      name: "Sugar Loaf - An Antiguan Residence",
      short_name: "Sugar Loaf",
      description:
        "A luxurious Antiguan residence that is Home from Home. Set in large and quiet gardens overlooking Falmouth Harbour, Sugar Loaf has views to swoon at and plenty of privacy, peace and quiet",
    },
  },
});
