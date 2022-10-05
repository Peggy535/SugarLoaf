// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@kevinmarrec/nuxt-pwa",
    "@nuxtjs/robots",
    "@nuxtjs/sanity",
  ],
  tailwind: {
    cssPath: "~/assets/css/tailwind.css",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    cloudinary: {
      baseURL:
        "https://res.cloudinary.com/peggy-co/image/upload/v1663840544/SugarLoaf",
    },
  },
  sanity: {
    projectId: "tpr5d0ar",
  },
  build: {
    transpile: ["gsap"],
  },
  robots: {
    UserAgent: "*",
    Allow: "*",
  },
  pwa: {
    icon: {
      sizes: [512],
    },
    meta: {
      name: "Sugar Loaf",
      theme_color: "#fef9c3",
      ogDescription:
        "A luxurious Antiguan residence that is Home from Home. Set in large and quiet gardens overlooking Falmouth Harbour, Sugar Loaf has views to swoon at and plenty of privacy, peace and quiet",
      ogTitle: "Sugar Loaf - An Antiguan Residence",
      ogImage: {
        path: "https://res.cloudinary.com/peggy-co/image/upload/q_auto/v1664817748/SugarLoaf/icon_qp0twv.webp",
        width: 512,
        height: 512,
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
