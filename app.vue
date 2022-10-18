<template>
	<div>
		<Head>
			<!-- Google tag (gtag.js) -->
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-JSGYMB6J9Z"></Script>
			<Script>
				window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag("js", new Date()); gtag("config",
				"G-JSGYMB6J9Z");
			</Script>
		</Head>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
	const favicon = ref("/icon.png");

	useHead({
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
