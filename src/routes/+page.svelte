<script>
  let quote = '';
  
  // Function that is called when a button is clicked
  async function fetchQuote(keyword) {
    const res = await fetch(`https://zenquotes.io/api/random/${keyword}`);
    
    // Check if the response is successful
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error response:", errorText);
      return;
    }

    const data = await res.json();
    
    if (data.quote) {
      quote = data.quote;
    } else {
      quote = 'Sorry, no quote found for that keyword.';
    }
  }
</script>

<button onclick={() => fetchQuote('happiness')}>Happiness</button>


<div class="relative mx-auto flex w-full max-w-[75rem] flex-col border-opacity-50 px-7">
	<!-- // Quote of Day Container !  -->
	<div class="card grid rounded-box bg-base-300">
		<div class="card-body">
			<h1 class="card-title text-sm md:text-2xl">Hand Picked Quote For You Today ✿</h1>
			<br />
			<p class="text-sm md:text-2xl">"Muddy water is best cleared by leaving it alone.”</p>
			<p>— Author</p>
		</div>
	</div>
	<div class="divider"></div>

	<!-- // Generated Quote  -->
	<div class="mb-20 flex w-full flex-col">
		<div class="card grid flex-grow rounded-box bg-base-200">
			<div class="card-body">
				<h1 class="card-title text-sm md:text-xl">Your Inspiration ☻ ☁︎</h1>
				<br />
				<p class="text-sm md:text-xl">"Muddy water is best cleared by leaving it alone.”</p>
				<p>— Author</p>
			</div>
		</div>

		<div class="divider sm:divider-vertical"></div>

		<!-- // Mood Choices Container -->

		<div class="flex w-full flex-col gap-5 border-opacity-50">
			<h1 class="card-title text-sm md:text-2xl">How have you been feeling lately?</h1>
			<div class="divider"></div>

			<!-- // Mood Choices -->

			<!-- First Row -->

			<div class="flex w-full flex-col gap-2 md:flex-row md:gap-0">
				<div class="card grid w-full flex-grow rounded-box bg-base-300 md:w-10">
					<figure>
						<img src="/Happiness.webp" alt="Happiness" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Happiness</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">Get Inspired</button>
						</div>
					</div>
				</div>
				<div class="divider divider-horizontal"></div>
				<div class="card grid w-full flex-grow rounded-box bg-base-300 md:w-10">
					<figure>
						<img src="Love.jpeg" alt="Love" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Love</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">Get Inspired</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Second Row -->

			<div class="flex w-full flex-col gap-2 md:flex-row md:gap-0">
				<div class="card grid w-full flex-grow rounded-box bg-base-300 md:w-10">
					<figure>
						<img src="Life.JPG" alt="Life" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Life</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">Get Inspired</button>
						</div>
					</div>
				</div>
				<div class="divider divider-horizontal"></div>
				<div class="card grid w-full flex-grow rounded-box bg-base-300 md:w-10">
					<figure>
						<img src="Kindness.GIF" alt="Kindness" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Kindness</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">Get Inspired</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Third Row -->

			<div class="flex w-full flex-col gap-2 md:flex-row md:gap-0">
				<div class="card grid w-full flex-grow rounded-box bg-base-300 md:w-10">
					<figure>
						<img src="Time.jpeg" alt="Time" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Time</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">Get Inspired</button>
						</div>
					</div>
				</div>
				<div class="divider divider-horizontal"></div>
				<div class="card grid w-full flex-grow rounded-box bg-base-300 md:w-10">
					<figure>
						<img src="Today.jpg" alt="Today" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Today</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">Get Inspired</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Fourth Row -->

			<div class="flex w-full flex-col gap-2 md:flex-row md:gap-0">
				<div class="card grid w-full flex-grow rounded-box bg-base-300 md:w-10">
					<figure>
						<img src="/Anxiety.png" alt="Anxiety" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Anxiety</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">Get Inspired</button>
						</div>
					</div>
				</div>
				<div class="divider divider-horizontal"></div>
				<div class="card grid w-full flex-grow rounded-box bg-base-300 md:w-10">
					<figure>
						<img src="Change.jpg" alt="Change" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Change</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">Get Inspired</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

//Anxiety/Change/Happiness/Life/Today/Love/Time/Kindness
