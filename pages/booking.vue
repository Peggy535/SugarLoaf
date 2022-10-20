<script setup>
	import emailjs from "@emailjs/browser";

	const config = useRuntimeConfig();
	const form = ref(null);
	const submitting = ref(false);
	const submitted = ref(false);
	const inputFieldReset = ref(null);

	const title = ref("Sugar Loaf | Booking & Pricing");
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
		layout: "default",
	});

	const submitHandler = () => {
		submitting.value = true;
		emailjs.sendForm(config.EMAILJS_SERVICE_ID, config.EMAILJS_TEMPLATE_ID, form.value, config.EMAILJS_PUBLIC_KEY).then(
			(result) => {
				submitting.value = false;
				submitted.value = true;
				inputFieldReset.value = "";
			},
			(error) => {
				alert("FAILED...", error.text);
			}
		);
	};
</script>

<template>
	<div>
		<Head>
			<Title>Sugar Loaf | Booking & Pricing</Title>
		</Head>
		<div class="h-auto w-screen overflow-hidden font-NeueMontrealLight text-slate-700">
			<!-- Video section -->
			<section class="h-screen w-screen fixed">
				<video
					class="absolute top-0 right-0 w-screen h-screen object-center object-cover"
					src="https://res.cloudinary.com/peggy-co/video/upload/ac_none,c_scale,q_auto,vc_vp9,w_1024/v1664041139/SugarLoaf/video_dfr9s3.webm"
					width="1024"
					height="576"
					autoplay
					loop
					muted
					playsinline
					poster="https://res.cloudinary.com/peggy-co/video/upload/q_auto/v1664041139/SugarLoaf/video_dfr9s3.jpg"
				></video>
			</section>

			<section class="relative flex h-screen w-full bg-amber-50 bg-opacity-40 z-20">
				<div class="flex flex-col place-content-end font-NeueMontrealBook my-10 text-slate-700">
					<h1 class="text-6xl sm:text-9xl md:text-8xl lg:text-9xl xl:text-10xl m-1 sm:m-2 sm:p-2 mt-20 mb-10">Sugar Loaf</h1>
					<h1 class="text-3xl sm:text-5xl md:text-6xl xl:text-7xl m-1 sm:m-2 sm:p-2 mb-5">How to book and pricing</h1>
					<p class="text-xl md:text-3xl xl:text-2xl sm:w-3/4 xl:w-1/2 m-1 p-1 w-full mb-3 xl:mb-12 border-l-2 border-l-slate-700">
						Discover the weekly pricing for Sugar Loaf and how best to book your stay.
					</p>
				</div>
			</section>
			<section class="relative h-auto w-screen z-20 flex bg-amber-50 bg-opacity-40 p-2">
				<div class="flex-flex-col w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
					<!-- Section 1 -->
					<div class="flex flex-col my-10 bg-amber-50 border-2 border-white rounded-2xl">
						<h1 class="p-1 m-1 sm:m-2 sm:p-2 text-2xl lg:text-3xl xl:text-4xl">
							1. Choose how many bedrooms you would like to book for.
						</h1>
						<p class="m-1 p-1 sm:m-2 sm:p-2 lg:text-xl xl:text-2xl">
							Sugar Loaf has 4 bedrooms in total. You can book the entire house with 2, 3 or 4 bedrooms - depending on the size of your
							party. The weekly pricing for 2, 3 or 4 bedroom options are listed below.
						</p>
					</div>
					<!-- Section 2 -->
					<div class="flex flex-col w-full bg-amber-50 border-2 border-white rounded-2xl">
						<h1 class="p-1 m-1 sm:m-2 sm:p-2 text-2xl lg:text-3xl xl:text-4xl">2. Review the pricing for your selected stay.</h1>
						<div class="flex flex-col border border-slate-700 rounded-2xl m-1 my-5 sm:m-2 sm:p-2">
							<h2 class="m-1 p-1 text-lg lg:text-xl xl:text-2xl font-semibold">2 Bedroom Option | Price per week US$</h2>
							<table class="table-fixed text-center m-1 p-1 mb-3 lg:text-xl xl:text-2xl">
								<thead>
									<tr>
										<th>Summer</th>
										<th>Winter</th>
										<th>Peak</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>US$ 3192</td>
										<td>US$ 3990</td>
										<td>US$ 5586</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div class="flex flex-col border border-slate-700 rounded-2xl m-1 my-5 sm:m-2 sm:p-2">
							<h2 class="m-1 p-1 text-lg lg:text-xl xl:text-2xl font-semibold">3 Bedroom Option | Price per week US$</h2>
							<table class="table-fixed text-center m-1 p-1 mb-5 lg:text-xl xl:text-2xl">
								<thead>
									<tr>
										<th>Summer</th>
										<th>Winter</th>
										<th>Peak</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>US$ 4788</td>
										<td>US$ 5985</td>
										<td>US$ 8379</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="flex flex-col border border-slate-700 rounded-2xl m-1 my-5 sm:m-2 sm:p-2">
							<h2 class="m-1 p-1 text-lg lg:text-xl xl:text-2xl font-semibold">4 Bedroom Option | Price per week US$</h2>
							<table class="table-fixed text-center m-1 p-1 mb-5 lg:text-xl xl:text-2xl">
								<thead>
									<tr>
										<th>Summer</th>
										<th>Winter</th>
										<th>Peak</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>US$ 6384</td>
										<td>US$ 7980</td>
										<td>US$ 11172</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="flex flex-col border border-white rounded-2xl m-1 my-5 bg-amber-50">
						<h1 class="m-1 p-1 text-2xl lg:text-3xl xl:text-4xl">Booking period information:</h1>
						<ul class="m-1 p-1 text-lg lg:text-xl xl:text-2xl">
							<li class="m-1 p-1">Summer: 16th May - 14th Nov incl.</li>
							<li class="m-1 p-1">Winter: 15th Nov - 15th May incl.</li>
							<li class="m-1 p-1">
								Peak: Peak periods are detailed below. Please click on the event link to take you to the official event website.
								<table class="table-auto border-collapse text-center w-full my-5 text-sm lg:text-xl xl:text-2xl">
									<thead>
										<tr class="font-NeueMontrealMedium">
											<th>Event</th>
											<th>Dates</th>
										</tr>
									</thead>
									<tbody>
										<tr class="transition delay-75 ease-in-out duration-700 hover:text-amber-500 hover:scale-110">
											<td>
												<NuxtLink to="https://www.antiguayachtshow.com/" target="_blank" rel="noopener noreferrer"
													><p class="m-1 p-1">Antigua Charter Yacht Show</p></NuxtLink
												>
											</td>
											<td>4-9th Dec 22</td>
										</tr>
										<tr>
											<td><p class="m-1 p-1">Christmas/New Year</p></td>
											<td>-</td>
										</tr>

										<tr class="transition delay-75 ease-in-out duration-700 hover:text-amber-500 hover:scale-110">
											<td>
												<NuxtLink to="https://caribbean600.rorc.org/" target="_blank" rel="noopener noreferrer"
													><p class="m-1 p-1">Caribbean RORC 600</p></NuxtLink
												>
											</td>
											<td>14-24th February 23</td>
										</tr>
										<tr class="transition delay-75 ease-in-out duration-700 hover:text-amber-500 hover:scale-110">
											<td>
												<NuxtLink to="http://superyachtchallengeantigua.com/" target="_blank" rel="noopener noreferrer"
													><p class="m-1 p-1">The Super Yacht Challenge</p></NuxtLink
												>
											</td>
											<td>6-12th March 23</td>
										</tr>
										<tr class="transition delay-75 ease-in-out duration-700 hover:text-amber-500 hover:scale-110">
											<td>
												<NuxtLink
													to="https://oysteryachts.com/events/antigua-regatta-2023/"
													target="_blank"
													rel="noopener noreferrer"
													><p class="m-1 p-1">The Oyster Antigua Regatta</p></NuxtLink
												>
											</td>
											<td>5-8th April 23</td>
										</tr>
										<tr class="transition delay-75 ease-in-out duration-700 hover:text-amber-500 hover:scale-110">
											<td>
												<NuxtLink to="http://antiguaclassics.com/" target="_blank" rel="noopener noreferrer"
													><p class="m-1 p-1">The Antigua Classic Yacht Regatta</p></NuxtLink
												>
											</td>
											<td>19-24th April 23</td>
										</tr>
										<tr class="transition delay-75 ease-in-out duration-700 hover:text-amber-500 hover:scale-110">
											<td>
												<NuxtLink to="https://sailingweek.com/" target="_blank" rel="noopener noreferrer"
													><p class="m-1 p-1">Antigua Sailing Week</p></NuxtLink
												>
											</td>
											<td>25th April-5th May 23</td>
										</tr>

										<tr class="transition delay-75 ease-in-out duration-700 hover:text-amber-500 hover:scale-110">
											<td>
												<NuxtLink
													to="https://visitantiguabarbuda.com/antiguas-carnival/"
													target="_blank"
													rel="noopener noreferrer"
													><p class="m-1 p-1">Carnival</p></NuxtLink
												>
											</td>
											<td>7th Aug 23</td>
										</tr>
									</tbody>
								</table>
							</li>
							<li class="m-1 p-1">Please enquire for accurate rates prior to booking. Minimum 5 night stay, 7 nights in Peak times.</li>
							<li class="m-1 p-1">
								Points to note: No smoking inside, There is a cat living on the property. Cat friendly guests only.
							</li>
						</ul>
					</div>
					<div class="flex flex-col my-10 bg-amber-50 border-2 border-white rounded-2xl">
						<h1 class="p-1 m-1 sm:m-2 sm:p-2 text-2xl lg:text-3xl xl:text-4xl">
							3. To make your booking please send an email using the form below.
						</h1>

						<section class="flex w-full">
							<div
								v-if="submitting"
								class="w-full h-full text-slate-800 items-center mx-auto text-center"
								:class="{ [`hidden`]: submitted }"
							>
								<h1 text="p-1 m-1 sm:m-2 sm:p-2 text-2xl lg:text-3xl xl:text-4xl">Submitting your email</h1>
							</div>
							<div v-if="submitted" class="w-full h-full text-slate-800 items-center mx-auto text-center">
								<h1 class="p-1 m-1 sm:m-2 sm:p-2 text-2xl lg:text-3xl xl:text-4xl">
									Your email has been sent to enquiries@sugarloafantigua.com. We will be in touch very shortly.
								</h1>
							</div>
							<div
								:class="{ [`hidden`]: submitting || submitted }"
								class="text-md sm:text-xl lg:text-2xl mx-auto transition duration-700 ease-in-out"
							>
								<form class="form" ref="form" @submit.prevent="submitHandler">
									<div class="form-group">
										<input
											class="border border-slate-800 rounded-2xl bg-white text-slate-800 pointer-events-auto m-2 p-2"
											name="from_name"
											placeholder="name"
											type="text"
											:value="inputFieldReset"
											required
											size="30"
										/>
									</div>
									<div class="form-group">
										<input
											class="border border-slate-800 rounded-2xl bg-white text-slate-800 pointer-events-auto m-2 p-2"
											name="user_email"
											placeholder="email address"
											type="email"
											:value="inputFieldReset"
											required
											size="30"
										/>
									</div>

									<div class="form-group">
										<textarea
											class="border border-slate-800 rounded-2xl bg-white text-slate-800 pointer-events-auto m-2 p-2 text-area"
											name="message"
											placeholder="message"
											type="text"
											:value="inputFieldReset"
											required
											cols="30"
											rows="10"
										></textarea>
									</div>
									<div class="form-group">
										<input
											class="submit text-slate-800 m-1 p-1 border border-slate-800 rounded-2xl transition duration-500 delay-75 ease-in-out hover:border-amber-600 hover:text-amber-600 hover:bg-amber-200 hover:scale-110"
											type="submit"
											name="send"
											value="Send email"
										/>
									</div>
								</form>
							</div>
						</section>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<style scoped>
	input[type="text"],
	input[type="email"],
	input[type="textarea"],
	textarea,
	fieldset {
		width: 100%;
		border: 1px solid #333;
		box-sizing: border-box;
	}

	input:invalid,
	textarea:invalid {
		box-shadow: 0 0 5px 1px lightcoral;
	}

	input:focus:invalid {
		box-shadow: none;
	}
</style>
