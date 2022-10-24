<script setup lang="ts">
	const route = useRouter();

	const props = defineProps({
		error: Object,
	});
	const handleError = () => clearError({ redirect: "/" });
</script>

<template>
	<div>
		<Head>
			<Title>Sugar Loaf | A Luxurious Antiguan Holiday Residence</Title>
		</Head>

		<div class="h-auto w-screen overflow-hidden font-NeueMontrealThin text-slate-800 page">
			<!-- Video section -->
			<section class="h-screen w-screen fixed z-10">
				<video
					src="https://res.cloudinary.com/peggy-co/video/upload/q_auto/v1666611099/SugarLoaf/video_mavapp.webm"
					class="absolute top-0 right-0 w-screen h-screen object-center object-cover"
					width="1280"
					height="720"
					autoplay
					loop
					muted
					playsinline
					poster="https://res.cloudinary.com/peggy-co/video/upload/q_auto/v1666611099/SugarLoaf/video_mavapp.jpg"
					alt="A beautiful caribbean beach with a light turquoise sea in the background, shaded palm tress surround you."
				></video>
			</section>
			<!-- Landing title -->
			<section class="relative h-screen w-full bg-amber-500 bg-opacity-30 z-20">
				<!-- Landing Page text -->
				<div class="flex flex-col absolute bottom-0 left-0 m-2 p-2 mb-20">
					<h1 class="text-6xl sm:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl text-white mb-10">
						Hold on, that shouldn't have happened!
					</h1>
					<h3 class="text-2xl sm:text-3xl lg:text-4xl">
						We're so sorry, but something has gone wrong. Please click the botton below to go back to the previous page or stay a while
						and admire the beautiful view.
					</h3>
					<NuxtLink to="/">
						<button @click="handleError">
							<p class="text-xl md:text-2xl m-1 p-1">Go back</p>
						</button>
					</NuxtLink>
				</div>
			</section>
		</div>
	</div>
</template>
