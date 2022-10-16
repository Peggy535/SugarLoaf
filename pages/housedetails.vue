<script setup>
	import Bedroom from "~~/components/icons/Bedroom.vue";
	import Overview from "~~/components/icons/Overview.vue";
	import AC from "~~/components/icons/AC.vue";
	import Bathroom from "~~/components/icons/Bathroom.vue";
	import Info from "~~/components/icons/Info.vue";
	import View from "~~/components/icons/View.vue";
	import Garden from "~~/components/icons/Garden.vue";
	import Entertainment from "~~/components/icons/Entertainment.vue";
	import Wheelchair from "~~/components/icons/Wheelchair.vue";

	const title = ref("Sugar Loaf | Amenities & facilities");
	const description = ref("The description goes here");

	useHead({
		title,
		meta: [
			{
				name: "description",
				content: description,
			},
		],
	});
	definePageMeta({
		layout: "slate-nav",
	});
</script>

<template>
	<div>
		<Head>
			<Title>Sugar Loaf | House Details & Amenities</Title>
		</Head>
		<div class="font-NeueMontrealLight overflow-hidden">
			<!-- Video section -->
			<section class="h-screen w-screen fixed z-10">
				<video
					class="absolute top-0 right-0 w-screen h-screen object-center object-cover"
					src="https://res.cloudinary.com/peggy-co/video/upload/ac_none,c_scale,q_auto,vc_vp9,w_1024/v1664038068/SugarLoaf/production_ID_4782135_1_onpelh.webm"
					autoplay
					loop
					muted
					playsinline
					width="1024"
					height="576"
					poster="https://res.cloudinary.com/peggy-co/video/upload/c_scale,w_1920/v1664038068/SugarLoaf/production_ID_4782135_1_onpelh.jpg"
				></video>
			</section>
			<section class="relative flex h-screen w-screen bg-amber-50 bg-opacity-50 z-20">
				<div class="flex flex-col place-content-end text-slate-700 font-NeueMontrealBook">
					<h1 class="text-6xl sm:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl m-1 sm:m-2 sm:p-2 mt-20 mb-10">Sugar Loaf</h1>
					<h1 class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl m-1 sm:m-2 sm:p-2 mb-5">House details, amenities and facilities</h1>
					<p
						class="text-xl md:text-2xl xl:text-2xl sm:w-3/4 xl:w-1/2 m-1 p-1 sm:m-3 sm:p-3 w-full mb-3 xl:mb-12 border-l-2 border-l-slate-700"
					>
						A detailed listing of Sugar Loaf's amenities and offering's for your stay.
					</p>
				</div>
			</section>

			<section class="relative h-auto w-screen bg-amber-50 bg-opacity-50 z-20">
				<div class="w-full sm:w-4/5 md:w-2/3 xl:w-1/2 flex flex-col text-slate-700 p-2 mx-auto">
					<div class="flex border-2 border-white rounded-2xl bg-amber-50 my-4">
						<!-- Start of amenities -->
						<div class="m-1 p-1">
							<div class="flex flex-row w-full">
								<h1 class="text-xl lg:text-3xl xl:text-4xl m-1 p-1">Overview of Sugar Loaf</h1>
								<Overview class="fill-slate-700 w-8" />
							</div>
							<ul class="m-1 p-1 text-md lg:text-xl xl:text-2xl list-disc list-inside">
								<li>Up to 8 guests.</li>
								<li>4 Double bedrooms over 2 levels - 2 en-suite - with open air showers.</li>
								<li>1 Family bathroom.</li>
								<li>1 washroom on upper level.</li>
								<li>Swimming pool with stunning views, loungers and covered seating area, and fridge and loo in the pool house.</li>
								<li>Outdoor shower by pool with deck and BBQ.</li>
								<li>Secluded and secure gardens.</li>
								<li>Automatic gated entrance with ample parking.</li>
							</ul>
						</div>
					</div>

					<div class="flex border-2 border-white rounded-2xl bg-amber-50 my-4">
						<div class="m-1 p-1">
							<div class="flex flex-row">
								<h1 class="text-2xl lg:text-3xl xl:text-4xl m-1 p-1">Scenic Views</h1>
								<View class="fill-slate-700 w-8" />
							</div>
							<ul class="m-1 p-1 text-md lg:text-xl xl:text-2xl list-disc list-inside">
								<li>Uninterrupted views of Falmouth Harbour, Nelsons Dockyard and Montserrat.</li>
							</ul>
						</div>
					</div>

					<!-- <div class="flex border-2 border-white rounded-2xl bg-amber-50 my-4">
            <div class="m-1 p-1">
              <div class="flex flex-row">
                <h1 class="text-2xl lg:text-3xl xl:text-4xl m-1 p-1">
                  Outdoors
                </h1>
                <Garden class="fill-slate-700 w-8 stroke-1" />
              </div>
              <ul
                class="m-1 p-1 list-disc list-inside text-md lg:text-xl xl:text-2xl"
              >
                <li>
                  Private balcony area extending along two sides of the house.
                </li>
                <li>Private swimming pool and pool-side area.</li>
                <li>
                  Private garden Outdoor furniture including poolside sun
                  loungers/poolside sofa/outdoor dining area/relaxing &
                  comfortable seating and tables on balcony.
                </li>
                <li>Hammock.</li>
              </ul>
            </div>
          </div> -->

					<!-- <div class="flex border-2 border-white rounded-2xl bg-amber-50 my-2">
            <div class="m-1 p-1">
              <div class="flex flex-row">
                <h1 class="text-2xl lg:text-3xl xl:text-4xl m-1 p-1">
                  Bedrooms & Laundry
                </h1>
                <Bedroom class="fill-slate-700 w-8" />
              </div>
              <ul
                class="m-1 p-1 text-md lg:text-xl xl:text-2xl list-disc list-inside"
              >
                <li>Washing machine.</li>
                <li>Essentials - Towels/bed sheets/hand soap/toilet paper.</li>
                <li>Hangers.</li>
                <li>Bed linen.</li>
                <li>Mosquito nets.</li>
                <li>Wardrobes.</li>
              </ul>
            </div>
          </div> -->

					<div class="flex border-2 border-white rounded-2xl bg-amber-50 my-2">
						<div class="m-1 p-1">
							<div class="flex flex-row">
								<h1 class="text-2xl lg:text-3xl xl:text-4xl m-1 p-1">Heating & cooling</h1>
								<AC class="fill-slate-700 w-8" />
							</div>
							<ul class="m-1 p-1 text-md lg:text-xl xl:text-2xl list-disc list-inside">
								<li>Modern Air-conditioning Units in all rooms.</li>
								<li>Ceiling fans and Sun blinds on the gallery.</li>
							</ul>
						</div>
					</div>

					<div class="flex border-2 border-white rounded-2xl bg-amber-50 my-2">
						<div class="m-1 p-1">
							<div class="flex flex-row">
								<h1 class="text-2xl lg:text-3xl xl:text-4xl m-1 p-1">Entertainment</h1>
								<Entertainment class="fill-slate-700 w-8" />
							</div>
							<ul class="m-1 p-1 text-md lg:text-xl xl:text-2xl list-disc list-inside">
								<li>Wifi which works well, but you will need a VPN on your portable devices.</li>
								<li>TV which allows sign in to all your favourite viewing Apps. Typed notes are available and easy to follow.</li>
								<li>Bluetooth speaker.</li>
							</ul>
						</div>
					</div>

					<!-- <div class="flex border-2 border-white rounded-2xl bg-amber-50 my-2">
            <div class="m-1 p-1">
              <div class="flex flex-row">
                <h1 class="text-2xl lg:text-3xl xl:text-4xlm-1 p-1">
                  Bathrooms
                </h1>
                <Bathroom class="fill-slate-700 w-8" />
              </div>
              <ul
                class="m-1 p-1 text-md lg:text-xl xl:text-2xl list-disc list-inside"
              >
                <li>Hot Water</li>
                <li>Hair dryers</li>
                <li>2 indoor showers | 1 outdoor shower</li>
              </ul>
            </div>
          </div> -->

					<div class="flex border-2 border-white rounded-2xl bg-amber-50 my-2">
						<div class="m-1 p-1">
							<div class="flex flex-row">
								<h1 class="text-2xl lg:text-3xl xl:text-4xl m-1 p-1">Wheelchair access</h1>
								<Wheelchair class="fill-slate-700 w-8" />
							</div>
							<ul class="m-1 p-1 text-md lg:text-xl xl:text-2xl list-disc list-inside">
								<li>
									Wheelchairs can access the upper level and pool level by way of portable articulated ramps ( please discuss at
									time of booking).
								</li>
							</ul>
						</div>
					</div>

					<div class="flex border-2 border-white rounded-2xl bg-amber-50 my-2">
						<div class="m-1 p-1">
							<div class="flex flex-row">
								<h1 class="text-2xl lg:text-3xl xl:text-4xl m-1 p-1">Other important aspects</h1>
								<Info class="fill-slate-700 w-8" />
							</div>
							<ul class="m-1 p-1 text-md lg:text-xl xl:text-2xl list-disc list-inside">
								<li>There is a friendly cat that lives at the premises</li>
								<li>We have a rapid pick-up generator that provides power in the event of occasional power drops</li>
								<li>Water is supplied by 2 large tanks and is the Islands most precious resource</li>
								<li>Our Housekeeper, Hyacinth, visits two half days per week, for washing please liaise with her</li>
								<li>We can organise a welcome pack of essentials for your arrival.</li>
								<li>Our Host, is available for support and problem solving should the need arise.</li>
								<li>There is ample, gated parking.</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>
