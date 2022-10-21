<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
	const favicon = ref("/icon.png");

	useHead({
		script: [
			{
				hid: "gtm",
				children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-WGK3R56');`,
				type: "text/javascript",
			},
		],
		noscript: [
			{
				children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WGK3R56"
							height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
			},
		],
		meta: [
			{
				name: "locale",
				content: "en-GB",
			},
			{
				name: "google",
				content: "notranslate",
			},
			{
				name: "theme-colour",
				content: "#fffbeb",
			},
			{
				name: "description",
				content:
					"A luxurious Antiguan holiday residence that is Home from Home. Set in large and quiet gardens overlooking Falmouth Harbour, Sugar Loaf has views to swoon at and plenty of privacy, peace and quiet",
			},
			{
				name: "twitter:title",
				content: "Sugar Loaf - A luxurious Antiguan holiday residence",
			},
			{
				name: "twitter:description",
				content:
					"A luxurious Antiguan holiday residence that is Home from Home. Set in large and quiet gardens overlooking Falmouth Harbour, Sugar Loaf has views to swoon at and plenty of privacy, peace and quiet",
			},
			{
				name: "twitter:url",
				content: "https://www.sugarloafantigua.com",
			},
			{
				name: "twitter:image",
				content: "https://res.cloudinary.com/peggy-co/image/upload/q_auto/v1664807725/SugarLoaf/twitterImage_bzr0tx.webp",
			},
			{
				name: "twitter:image:alt",
				content: "https://res.cloudinary.com/peggy-co/image/upload/q_auto/v1664817748/SugarLoaf/icon_qp0twv.webp",
			},
		],
		link: [
			{
				href: favicon,
				rel: "icon",
				type: "image/x-icon",
			},
			{
				rel: "canonical",
				href: "https://www.sugarloafantigua.com",
			},
		],
	});
</script>
<style>
	.page-enter-active,
	.page-leave-active {
		transition: all 0.5s;
	}
	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		filter: blur(1rem);
	}
</style>
