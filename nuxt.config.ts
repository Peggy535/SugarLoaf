export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "@kevinmarrec/nuxt-pwa", "@nuxtjs/sanity"],
	tailwind: {
		cssPath: "@/assets/css/tailwind.css",
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	image: {
		domains: ["sugarloafantigua.com"],
		cloudinary: {
			baseURL: "https://res.cloudinary.com/peggy-co/image/upload/v1663840544/SugarLoaf",
		},
		modifiers: {
			quality: "auto:best",
		},
	},
	sanity: {
		projectId: "tpr5d0ar",
	},
	build: {
		transpile: ["gsap"],
	},

	pwa: {
		icon: {
			source: "public/icon.png",
			sizes: [120, 144, 152, 192, 384, 512],
		},
		meta: {
			name: "Sugar Loaf",
			theme_color: "#fffbeb",
			mobileApp: true,
			mobileAppIOS: true,
			lang: "en-GB",
			ogType: "website",
			ogSiteName: "Sugar Loaf - A luxurious Antiguan holiday residence.",
			ogUrl: "https://www.sugarloafantigua.com",
			ogDescription:
				"A luxurious Antiguan holiday residence that is Home from Home. Set in large and quiet gardens overlooking Falmouth Harbour, Sugar Loaf has views to swoon at and plenty of privacy, peace and quiet",
			ogTitle: "Sugar Loaf - An Antiguan holiday Residence",
			ogImage: {
				path: "/maskable_icon.png",
				width: 512,
				height: 512,
			},
			twitterCard: "summary",
		},
		workbox: {
			enabled: true,
		},
		manifest: {
			name: "Sugar Loaf - An Antiguan Residence",
			short_name: "Sugar Loaf",
			description:
				"A luxurious Antiguan holiday residence that is Home from Home. Set in large and quiet gardens overlooking Falmouth Harbour, Sugar Loaf has views to swoon at and plenty of privacy, peace and quiet",
			display: "standalone",
		},
	},
	runtimeConfig: {
		public: {
			EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
			EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
			EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
		},
	},
});
