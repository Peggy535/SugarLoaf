<script setup>
	import { gsap } from "gsap";
	import Arrowdown from "~~/components/icons/Arrowdown.vue";

	definePageMeta({
		layout: "default",
	});
	onMounted(() => {
		gsap.set("#scroll-down", { autoAlpha: 0 });
		gsap.fromTo("#scroll-down", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, yoyo: true, repeat: 5 });
	});
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
					playsinline
					autoplay
					muted
					loop
					id="backgroundVideo"
					class="absolute top-0 right-0 w-screen h-screen object-center object-cover"
					width="1920"
					height="1080"
					poster="https://res.cloudinary.com/peggy-co/video/upload/c_fit,q_auto,w_1024/v1663840583/SugarLoaf/antigua_sea_qof8pg.webp"
					alt="background video of smooth, gentle waves lapping up on a sun-lit beach."
				>
					<source
						src="https://res.cloudinary.com/peggy-co/video/upload/ac_none,q_auto,vc_auto/v1663840583/SugarLoaf/antigua_sea_qof8pg.webm"
					/>
					<source
						src="https://res.cloudinary.com/peggy-co/video/upload/ac_none,q_auto,vc_auto/v1663840583/SugarLoaf/antigua_sea_qof8pg.mp4"
					/>
					<source
						src="https://res.cloudinary.com/peggy-co/video/upload/ac_none,q_auto,vc_auto/v1663840583/SugarLoaf/antigua_sea_qof8pg.ogv"
					/>
					<source
						src="https://res.cloudinary.com/peggy-co/video/upload/ac_none,q_auto,vc_auto/v1663840583/SugarLoaf/antigua_sea_qof8pg.mov"
					/>
				</video>
			</section>
			<!-- Landing title -->
			<section class="relative h-screen w-full bg-amber-500 bg-opacity-30 z-20">
				<!-- Landing Page text -->
				<div class="flex flex-col absolute bottom-0 left-0 m-2 p-2 mb-20">
					<h1 class="text-6xl sm:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl text-white mb-10">Sugar Loaf</h1>
					<h6 class="text-3xl lg:text-4xl text-white mb-10">A luxurious Antiguan residence that is 'Home from Home'.</h6>
				</div>
				<div id="scroll-down" class="flex flex-col absolute bottom-1 right-1 m-2 p-2 z-20">
					<span class="text-white text-sm text-center">Scroll down</span>
					<Arrowdown class="fill-white h-10" />
				</div>
			</section>
			<section class="relative w-screen bg-amber-50 bg-opacity-70 z-20">
				<!-- Opening Section -->
				<div class="flex flex-col w-full">
					<div class="w-full">
						<NuxtImg
							provider="cloudinary"
							class="object-contain object-center rounded-md border border-white"
							src="/main_and_featured_image_icwuvl.webp"
							alt="An aerial view photohrapgh of Sugar Loaf showing the main house, pool and deck area and surrounding garden."
							width="2000"
							height="1333"
							loading="lazy"
							sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
							format="webp"
						/>
					</div>
					<div class="w-full">
						<NuxtImg
							provider="cloudinary"
							class="object-contain object-center rounded-md border border-white"
							src="/MainPoolView_danjqa.webp"
							alt="An uninterrupted view from the secluded pool area of Sugar Loaf looking towards Falmouth Harbour."
							width="2000"
							height="1280"
							loading="lazy"
							sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
							format="webp"
						/>
					</div>
					<div class="w-full lg:w-2/3 mx-auto">
						<p class="text-xl sm:text-2xl md:text-3xl md:leading-tight xl:text-4xl 2xl:text-5xl m-2 p-2 md:mx-5 md:px-5 py-10 md:py-16">
							Set in quiet gardens overlooking Falmouth Harbour, Sugar Loaf has fantastic views, privacy, and peace and quiet.
						</p>
					</div>
				</div>

				<!-- Gallery section -->
				<div class="flex flex-col">
					<div class="flex flex-col lg:flex-row lg:flex-wrap">
						<NuxtImg
							provider="cloudinary"
							class="object-contain object-center w-full lg:w-full xl:w-1/3 xl:object-fill rounded-md border border-white"
							src="/Spot_the_cat_inxsnz.webp"
							alt="View of the balcony with a large gloss varnished dining table set for 8 people with magnificent views in the background."
							width="2000"
							height="1500"
							loading="lazy"
							sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:33vw xxl:33vw"
							format="webp"
						/>
						<NuxtImg
							provider="cloudinary"
							class="object-contain object-center w-full lg:w-1/2 xl:w-1/3 xl:object-fill rounded-md border border-white"
							src="/Dining_table_seated_cjy3bs.webp"
							alt="A close up photograpgh of the outside wooden dining table."
							width="3648"
							height="2432"
							loading="lazy"
							sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
							format="webp"
						/>
						<NuxtImg
							provider="cloudinary"
							class="object-contain object-center w-full lg:w-1/2 xl:w-1/3 xl:object-fill rounded-md border border-white"
							src="/Dining_table_views_lwfog4.webp"
							alt="The view of the balcon area with the dining table looking in the opposite direction showing the surrounding hills with lush green vegetation."
							width="3648"
							height="2432"
							loading="lazy"
							sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
							format="webp"
						/>
					</div>
				</div>
				<div class="flex flex-col lg:flex-row">
					<div class="w-full lg:w-1/2">
						<NuxtImg
							provider="cloudinary"
							class="object-contain object-center rounded-md border border-white"
							src="/garden_view2_flvucr.webp"
							alt="The view of the main house from  the private, secluded gardens of Sugar Loaf. You are surrounded by beautiful tropical flowers."
							width="2736"
							height="1824"
							loading="lazy"
							sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
							format="webp"
						/>
					</div>
					<div class="w-full lg:w-1/2">
						<NuxtImg
							provider="cloudinary"
							class="object-contain object-center rounded-md border border-white"
							src="/Garden_1_hhctqx.webp"
							alt="A view of the grassed garden area to the left hand side of the main house."
							width="2736"
							height="1824"
							loading="lazy"
							sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
							format="webp"
						/>
					</div>
				</div>

				<div class="flex flex-col">
					<div class="w-full lg:w-2/3 mx-auto">
						<p class="text-xl sm:text-2xl md:text-3xl md:leading-tight xl:text-4xl m-2 p-2 md:mx-5 md:px-5 pt-10 md:pt-16">
							About 5 minutes drive from the beaches and restaurants of English Harbour, Sugarloaf has four large double bedrooms all
							with A/C; a big kitchen and sitting room and a gallery that really is just perfect - both day and night, for boat watching
							or just gazing at the Sea.
						</p>
					</div>
					<div class="w-full lg:w-2/3 mx-auto">
						<p class="text-xl sm:text-2xl md:text-3xl md:leading-tight xl:text-4xl m-2 p-2 md:mx-5 md:px-5 pb-10 md:pb-16">
							Utilities include an automatic generator and two large fresh water tanks for bathing and laundry.
						</p>
					</div>
				</div>

				<!-- Bedroom Section -->
				<div class="flex flex-col lg:flex-row">
					<div class="w-full lg:w-1/2">
						<NuxtImg
							provider="cloudinary"
							class="object-contain object-center rounded-md border border-white"
							src="/Master_Bedroom_1_ymtugr.webp"
							alt="The master bedroom showing a beautiful colonial style wooden bed."
							width="4032"
							height="3024"
							loading="lazy"
							sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
							format="webp"
						/>
					</div>
					<div class="w-full lg:w-1/2">
						<NuxtImg
							provider="cloudinary"
							class="object-contain object-center rounded-md border border-white"
							src="/MB2_hahs5l.webp"
							alt="One of the guest bedrooms that looks out onto the lower gallery."
							width="4032"
							height="3024"
							loading="lazy"
							sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
							format="webp"
						/>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="flex flex-col sm:flex-row items-center">
						<div class="w-full sm:w-2/3 mx-auto">
							<p class="text-xl sm:text-2xl md:text-3xl md:leading-tight xl:text-4xl m-2 p-2 md:mx-5 md:px-5 pt-10 md:pt-16">
								There are 3 double bedrooms on the lower level, two with en-suite bathrooms and open air (walled) showers.
							</p>
							<p class="text-xl sm:text-2xl md:text-3xl md:leading-tight xl:text-4xl m-2 p-2 md:mx-5 md:px-5 pb-10 md:pb-16">
								All rooms have A/C, and views out over the lower gallery to Falmouth Bay. For an early morning dip, just walk out
								through your French windows, through the gated gallery, and down the stairs to the pool.
							</p>
						</div>
						<div class="w-full sm:w-1/3">
							<NuxtImg
								provider="cloudinary"
								class="object-contain object-center rounded-md border border-white"
								src="/IMG_2692_dpdnbw.webp"
								alt="One of the stone-walled open-air showers."
								width="768"
								height="1024"
								loading="lazy"
								sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
								format="webp"
							/>
						</div>
					</div>

					<div class="flex flex-col lg:flex-row">
						<div class="w-full lg:w-1/2">
							<NuxtImg
								provider="cloudinary"
								class="object-contain object-center rounded-md border border-white"
								src="/Bedroom_3_watkxx.webp"
								alt="One of the guest bedrroms on the upper level showing the magnificent view you can wake up to every morning."
								width="2048"
								height="1536"
								loading="lazy"
								sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
								format="webp"
							/>
						</div>
						<div class="w-full lg:w-1/2">
							<NuxtImg
								provider="cloudinary"
								class="object-contain object-center rounded-md border border-white"
								src="/Bedroom_2_wbb9dy.webp"
								alt="All bedrooms have air-conditioning and mosquito nets."
								width="2048"
								height="1536"
								loading="lazy"
								sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
								format="webp"
							/>
						</div>
					</div>
					<div class="w-full lg:w-2/3 mx-auto">
						<p class="text-xl sm:text-2xl md:text-3xl md:leading-tight xl:text-4xl m-2 p-2 md:mx-5 md:px-5 py-10 md:py-16">
							Upstairs, there is a lovely double bedroom again with A/C. This bedroom is ideal for those with mobility issues, and for
							those that need a little more help there are articulated wheelchair ramps on site which should enable access to most
							areas. Oh, and there's a loo.
						</p>
					</div>
					<div class="flex flex-col lg:flex-row-reverse items-center">
						<div class="w-full lg:w-1/2">
							<NuxtImg
								provider="cloudinary"
								class="object-contain object-center rounded-md border border-white"
								src="/IMG_0646_lifxuw.webp"
								alt="Another guest bedroom, there are 4 in total and all are spacious, clean and very well presented."
								width="2048"
								height="1536"
								loading="lazy"
								sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
								format="webp"
							/>
						</div>
						<div class="w-full lg:w-1/2">
							<p class="text-xl sm:text-2xl md:text-3xl md:leading-tight xl:text-4xl m-2 p-2 md:mx-5 md:px-5 py-10 md:py-16">
								Also, on the upper floor there is a sitting room and a large kitchen: all with direct access to the upper gallery and
								dining table.
							</p>
						</div>
					</div>
				</div>

				<!-- Sitting Room section -->
				<div class="flex flex-col lg:flex-row lg:items-center">
					<NuxtImg
						provider="cloudinary"
						class="object-contain object-center lg:w-1/2 rounded-md border border-white"
						src="/IMG_2664_ckqmoj.webp"
						alt="The large spacious Sitting room area. There is also a desk area to the rear of the room."
						width="2048"
						height="1536"
						loading="lazy"
						sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
						format="webp"
					/>
					<div class="w-full lg:w-1/2">
						<p class="text-xl sm:text-2xl md:text-3xl md:leading-tight xl:text-4xl m-2 p-2 py-10 md:mx-5 md:px-5 xl:py-0">
							The Sitting room has A/C, comfy armchairs and sofas: there is also a table for any work that you need to do, a large tv,
							Bluetooth speaker, internet access, and a selection of books.
						</p>
					</div>
				</div>
				<div class="flex flex-col lg:flex-row-reverse lg:items-center">
					<div class="w-full lg:w-1/2">
						<NuxtImg
							provider="cloudinary"
							class="object-contain object-center rounded-md border border-white"
							src="/IMG_0632_qxa1oo.webp"
							alt="A view of the large Kitchen area. Well equipped and very spacious."
							width="2048"
							height="1536"
							loading="lazy"
							sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
							format="webp"
						/>
					</div>

					<div class="w-full lg:w-1/2">
						<p class="text-xl sm:text-2xl md:text-3xl md:leading-tight xl:text-4xl m-2 p-2 md:mx-5 md:px-5 py-10 xl:pt-0">
							The kitchen is fully equipped with A/C, gas stove, cooker, microwave, fridge freezer, dishwasher, water cooler and two
							sinks.
						</p>
					</div>
				</div>
				<div class="flex flex-col lg:flex-row lg:items-center">
					<NuxtImg
						provider="cloudinary"
						class="object-contain object-center lg:w-1/2 rounded-md border border-white"
						src="/Kitchen_3_fk4wzo.webp"
						alt="A view of the Kitchen area from the dining area. This is open-planned."
						width="1024"
						height="768"
						loading="lazy"
						sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
						format="webp"
					/>
					<div class="w-full lg:w-1/2">
						<p class="text-xl sm:text-2xl md:text-3xl md:leading-tight xl:text-4xl m-2 p-2 md:mx-5 md:px-5 py-10">
							Downstairs there is also a washing machine etc, and Hyacinth will come in twice a week (More if needed) to handle all your
							laundry needs.
						</p>
					</div>
				</div>
				<!-- Pool section -->
				<div class="flex flex-col">
					<div class="flex flex-col lg:flex-row lg:flex-wrap">
						<NuxtImg
							provider="cloudinary"
							class="object-contain object-center w-full lg:w-1/2 xl:w-1/3 rounded-md border border-white"
							src="/C3177D13-5531-49F0-ACE1-A50FBD65327D_bhqt6e.webp"
							alt="View of the swimming pool, the sunbathing area and covered, shaded decking area to suit everyones needs."
							width="4032"
							height="3024"
							loading="lazy"
							sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
							format="webp"
						/>
						<NuxtImg
							provider="cloudinary"
							class="object-contain object-center w-full lg:w-full xl:w-1/3 xl:object-fill rounded-md border border-white"
							src="/IMG_0493_s4efju.webp"
							alt="The swimming pool, as with all of Sugar Loaf, is quiet, tranquil and peaceful."
							width="5472"
							height="3648"
							loading="lazy"
							sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:33vw xxl:33vw"
							format="webp"
						/>

						<NuxtImg
							provider="cloudinary"
							class="object-contain object-center w-full lg:w-1/2 xl:w-1/3 rounded-md border border-white"
							src="/F0014839-C4AF-49BC-9D58-D7F78ED0BBFE_olf8e9.webp"
							alt="Stunning views are visible from virtually every location around Sugar Loaf, particularly though by the pool area."
							width="4032"
							height="3024"
							loading="lazy"
							sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
							format="webp"
						/>
					</div>
					<div class="w-full lg:w-2/3 mx-auto">
						<p class="text-xl sm:text-2xl md:text-3xl md:leading-tight xl:text-4xl m-2 p-2 md:mx-5 md:px-5 mt-5 pt-10 md:pt-16">
							The Pool is a good size and maintained weekly. Seating is plentiful as are shaded areas, and there is a Pool house with a
							loo and fridge.
						</p>
						<p class="text-xl sm:text-2xl md:text-3xl md:leading-tight xl:text-4xl m-2 p-2 md:mx-5 md:px-5 mb-5 pb-10 md:pb-16">
							There is also a Deck area, with cold water showers and BBQ.
						</p>
					</div>
					<!-- Front Entrance Section -->
					<div class="flex flex-col lg:flex-row">
						<NuxtImg
							provider="cloudinary"
							class="object-contain object-center lg:w-1/2 rounded-md border border-white"
							src="/5898D6C1-2AF1-4A23-B22C-FCEB2B2B99A3_ibzrds.webp"
							alt="You are surrounded by secure gates and fences"
							width="1024"
							height="768"
							loading="lazy"
							sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
							format="webp"
						/>
						<NuxtImg
							provider="cloudinary"
							class="object-contain object-center lg:w-1/2 rounded-md border border-white"
							src="/CourtYard_vm9m46.webp"
							alt="View of the front court yard area and entrance to sugar loaf. There is more than enough room for several vehicles."
							width="1024"
							height="768"
							loading="lazy"
							sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw xxl:50vw"
							format="webp"
						/>
					</div>
					<div class="flex flex-col">
						<div class="w-full lg:w-2/3 mx-auto">
							<p class="text-xl sm:text-2xl md:text-3xl md:leading-tight xl:text-4xl m-2 p-2 md:mx-5 md:px-5 pt-10 md:pt-16">
								Sugarloaf is situated on top of a hill overlooking Falmouth Harbour, and about 5 -10 minutes drive from Nelsons
								Dockyard, the beaches at Pigeon point and Galleon bay.
							</p>
						</div>
						<div class="w-full lg:w-2/3 mx-auto">
							<p class="text-xl sm:text-2xl md:text-3xl md:leading-tight xl:text-4xl m-2 p-2 md:mx-5 md:px-5 pb-10 md:pb-16">
								The property is easily accessible by car, secure, and has ample parking out front.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section
				class="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-auto h-auto w-screen bg-amber-50 bg-opacity-70 px-4"
			>
				<div class="grid col-span-1 row-span-1 h-48 m-2 p-2">
					<div class="relative flex">
						<h1 class="text-5xl lg:text-3xl lg:leading-normal xl:text-5xl 2xl:text-6xl">Discover more about Sugar Loaf</h1>
					</div>
				</div>
				<div
					class="grid col-span-1 row-span-1 rounded-2xl m-2 p-2 h-48 bg-brand-green bg-opacity-40 border-4 border-brand-green transition ease-in-out duration-300 hover:bg-opacity-100 hover:-translate-y-1 hover:scale-110"
				>
					<div class="grid relative">
						<h1 class="text-xl m-2 p-2">Sugar Loaf Photo Gallery</h1>
						<NuxtLink to="/gallery">
							<span class="absolute bottom-0 right-0">
								<button
									class="m-2 p-2 rounded-2xl ring-2 ring-black transition ease-in-out duration-300 hover:ring-6 hover:ring-white hover:text-white"
								>
									Press here
								</button>
							</span>
						</NuxtLink>
					</div>
				</div>
				<div
					class="grid col-span-1 row-span-1 rounded-2xl m-2 p-2 h-48 bg-brand-turquoise bg-opacity-30 border-4 border-brand-turquoise transition ease-in-out duration-300 hover:bg-opacity-100 hover:scale-110"
				>
					<div class="grid relative">
						<h1 class="text-xl m-2 p-2">House details, amenities and specifications</h1>
						<NuxtLink to="/housedetails">
							<span class="absolute bottom-0 right-0">
								<button
									class="m-2 p-2 rounded-2xl ring-2 ring-black transition ease-in-out duration-300 hover:ring-6 hover:ring-white hover:text-white"
								>
									Press here
								</button>
							</span>
						</NuxtLink>
					</div>
				</div>

				<div
					class="grid col-span-1 row-span-1 rounded-2xl m-2 p-2 h-48 bg-brand-yellow bg-opacity-40 border-2 border-brand-yellow transition ease-in-out duration-300 hover:bg-opacity-100 hover:-translate-y-1 hover:scale-110"
				>
					<div class="grid relative">
						<h1 class="text-xl m-2 p-2">Booking & Prices</h1>
						<NuxtLink to="/booking">
							<span class="absolute bottom-0 right-0">
								<button
									class="m-2 p-2 rounded-2xl ring-2 ring-black transition ease-in-out duration-300 hover:ring-6 hover:ring-white hover:text-white"
								>
									Press here
								</button>
							</span>
						</NuxtLink>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>
