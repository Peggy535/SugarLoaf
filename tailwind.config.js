/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{vue,js}",
		"composables/**/*.{js,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
		"App.{js,ts,vue}",
	],
	mode: "jit",
	theme: {
		extend: {
			transitionProperty: {},
			colors: {
				"brand-green": "#88ff9f",
				"brand-blue": "#7099ff",
				"brand-pink": "#ff7d90",
				"brand-yellow": "#ffbd1c",
				"brand-turquoise": "#63fffc",
			},
			fontFamily: {
				NeueMontrealThin: ["NeueMontrealThin"],
				NeueMontrealLight: ["NeueMontrealLight"],
			},
			fontSize: {
				"10xl": "10rem",
				"11xl": "11rem",
				"12xl": "12rem",
				"13xl": "13rem",
				"14xl": "14rem",
				"15xl": "15rem",
				"16xl": "16rem",
				"18xl": "18rem",
				"20xl": "20rem",
				"30xl": "30rem",
			},
		},
	},
	plugins: [require("daisyui")],
};
