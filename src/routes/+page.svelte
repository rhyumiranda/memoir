<script>
	import {onMount} from 'svelte';
	let quoteDataGenerated = null;
	let dailyQuoteData = null;

	const scrollToResults = () => {
    setTimeout(() => {
      const element = document.getElementById('mood-result');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
      }
    }, 100); // Small delay to ensure content is rendered
  };

  const handleQuoteGeneration = async (mood) => {
    await fetchQuote(mood);
    scrollToResults();
  };

	onMount
	(async () => {
		await fetchTodayQuote();
	});

	const fetchQuote = async (mood) => {
		try {
			const response = await fetch(`/api/quote/${mood}`);
			const data = await response.json();
			quoteDataGenerated = data;
			console.log(data);
		} catch (error) {
			console.error('Error fetching quote:', error);
		}
	};

	const fetchTodayQuote = async () => {
		try {
			const response = await fetch(`/api/quote/daily`);
			const dailyData = await response.json();
			dailyQuoteData = dailyData;
			console.log(dailyQuoteData);
		} catch (error) {
			console.error('Error fetching quote:', error);
		}
	};
</script>

<div class="relative mx-auto flex w-full max-w-[75rem] flex-col border-opacity-50 px-7">
	<!-- // Quote of Day Container !  -->
	<div class="card grid rounded-box bg-base-300">
		<div class="card-body">
			<h1 class="card-title text-sm md:text-2xl">Hand Picked Quote For You Today ✿ </h1>
			<br />
			{#if dailyQuoteData}
				<p class="text-sm md:text-2xl">"{dailyQuoteData[0].q}"</p>
				<p class="">— {dailyQuoteData[0].a}</p>
			{:else}
				<p class="text-sm md:text-2xl">Quote goes here</p>
				<p></p>
			{/if}
		</div>
	</div>
	<div class="divider"></div>

	<!-- // Generated Quote  -->
	<div class="mb-20 flex w-full flex-col" id="mood-result">
		<div class="card grid flex-grow rounded-box bg-base-200">
			<div class="card-body">
				<h1 class="card-title text-sm md:text-xl">Your Inspiration ☻ ☁︎</h1>
				<br />
				{#if quoteDataGenerated}
					<p class="text-sm md:text-2xl">"{quoteDataGenerated[0].q}"</p>
					<p>— {quoteDataGenerated[0].a}</p>
				{:else}
					<pre class="font-mono whitespace-pre-wrap break-words text-left leading-4 text-[8px] sm:text-xs md:text-sm lg:text-base overflow-x-auto">
						✧･ﾟ: *✧･ﾟ:* 　　*:･ﾟ✧*:･ﾟ✧ 	⸜(｡˃ ᵕ ˂ )⸝♡   ✧･ﾟ: *✧･ﾟ:* 　　*:･ﾟ✧*:･ﾟ✧
					</pre>
					<p class="text-sm md:text-xl">Your quote goes here :></p>
					<p></p>
				{/if}
			</div>
		</div>

		<div class="divider sm:divider-vertical"></div>

		<!-- // Mood Choices Container -->

		<div class="flex w-full flex-col gap-5 border-opacity-50">
			<h1 class="card-title text-sm md:text-2xl mx-auto">How have you been feeling lately?</h1>
			<div class="divider"></div>

			<!-- // Mood Choices -->

			<!-- First Row -->

			<div class="flex w-full flex-col gap-2 md:flex-row md:gap-0">
				<div class="card grid w-full flex-grow rounded-box bg-base-300 md:w-10">
					<figure class="aspect-square relative overflow-hidden">
						<img 
							src="/Love.jpeg"
							alt="Love"
							class="h-full w-full object-cover transition-transform hover:scale-110"
						/>
					</figure>
					<div class="card-body">
						<h2 class="card-title">Love</h2>
						<p>A force that heals, grows, and connects.</p>
						<div class="card-actions justify-end">
							<button onclick={() => handleQuoteGeneration('love')} class="btn btn-primary"
								>Get Inspired</button
							>
						</div>
					</div>
				</div>
				<div class="divider divider-horizontal"></div>
				<div class="card grid w-full flex-grow rounded-box bg-base-300 md:w-10">
					<figure  class="aspect-square relative overflow-hidden">
						<img src="Kindness.GIF" alt="Kindness" class="h-full w-full object-cover transition-transform hover:scale-110" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Kindness</h2>
						<p>Small acts, big impact, spreading light everywhere.</p>
						<div class="card-actions justify-end">
							<button onclick={() => handleQuoteGeneration('kindness')} class="btn btn-primary"
								>Get Inspired</button
							>
						</div>
					</div>
				</div>
				
			</div>

			<!-- Second Row -->

			<div class="flex w-full flex-col gap-2 md:flex-row md:gap-0">
				<div class="card grid w-full flex-grow rounded-box bg-base-300 md:w-10">
					<figure class="aspect-square relative overflow-hidden">
						<img src="Life.JPG" alt="Life" class="h-full w-full object-cover transition-transform hover:scale-110"/>
					</figure>
					<div class="card-body">
						<h2 class="card-title">Life</h2>
						<p>A journey of moments, lessons, and endless possibilities.</p>
						<div class="card-actions justify-end">
							<button onclick={() => handleQuoteGeneration('life')} class="btn btn-primary"
								>Get Inspired</button
							>
						</div>
					</div>
				</div>
				<div class="divider divider-horizontal"></div>
				<div class="card grid w-full flex-grow rounded-box bg-base-300 md:w-10">
					<figure class="aspect-square relative overflow-hidden">
						<img src="/Happiness.webp" alt="Happiness" class="h-full w-full object-cover transition-transform hover:scale-110"/>
					</figure>
					<div class="card-body">
						<h2 class="card-title">Happiness</h2>
						<p>Found in the simple things, cherished in every moment.</p>
						<div class="card-actions justify-end">
							<button onclick={() => handleQuoteGeneration('happiness')} class="btn btn-primary"
								>Get Inspired</button
							>
						</div>
					</div>
				</div>
			</div>

			<!-- Third Row -->

			<div class="flex w-full flex-col gap-2 md:flex-row md:gap-0">
				<div class="card grid w-full flex-grow rounded-box bg-base-300 md:w-10">
					<figure class="aspect-square relative overflow-hidden">
						<img src="Time.jpeg" alt="Time" class="h-full w-full object-cover transition-transform hover:scale-110"/>
					</figure>
					<div class="card-body">
						<h2 class="card-title">Time</h2>
						<p>A precious gift, fleeting and irreplaceable, make it count.</p>
						<div class="card-actions justify-end">
							<button onclick={() => handleQuoteGeneration('time')} class="btn btn-primary"
								>Get Inspired</button
							>
						</div>
					</div>
				</div>
				<div class="divider divider-horizontal"></div>
				<div class="card grid w-full flex-grow rounded-box bg-base-300 md:w-10">
					<figure  class="aspect-square relative overflow-hidden">
						<img src="Today.jpg" alt="Today" class="h-full w-full object-cover transition-transform hover:scale-110"/>
					</figure>
					<div class="card-body">
						<h2 class="card-title">Today</h2>
						<p>Embrace the present; it's where life truly happens</p>
						<div class="card-actions justify-end">
							<button onclick={() => handleQuoteGeneration('today')} class="btn btn-primary"
								>Get Inspired</button
							>
						</div>
					</div>
				</div>
			</div>

			<!-- Fourth Row -->

			<div class="flex w-full flex-col gap-2 md:flex-row md:gap-0">
				<div class="card grid w-full flex-grow rounded-box bg-base-300 md:w-10">
					<figure class="aspect-square relative overflow-hidden">
						<img src="/Anxiety.png" alt="Anxiety" class="h-full w-full object-cover transition-transform hover:scale-110"/>
					</figure>
					<div class="card-body">
						<h2 class="card-title">Anxiety</h2>
						<p>A storm within, but you hold the calm.</p>
						<div class="card-actions justify-end">
							<button onclick={() => handleQuoteGeneration('anxiety')} class="btn btn-primary"
								>Get Inspired</button
							>
						</div>
					</div>
				</div>
				<div class="divider divider-horizontal"></div>
				<div class="card grid w-full flex-grow rounded-box bg-base-300 md:w-10">
					<figure  class="aspect-square relative overflow-hidden">
						<img src="Change.jpg" alt="Change" class="h-full w-full object-cover transition-transform hover:scale-110"/>
					</figure>
					<div class="card-body">
						<h2 class="card-title">Change</h2>
						<p>Growth begins when we embrace the unknown.</p>
						<div class="card-actions justify-end">
							<button onclick={() => handleQuoteGeneration('change')} class="btn btn-primary"
								>Get Inspired</button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="divider"></div>
<footer class="footer text-base-content">
	<div class="px-5 py-6 mx-auto flex items-center">
		<p class="text-center">2024 Memoir</p>
		<p class="text-center">Developed by Rhyu ∂^-^∂</p>
	</div>
</footer>
