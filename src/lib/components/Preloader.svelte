<script>
	import gsap from 'gsap';
	import tl from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.style.overflow = 'hidden';

		function startLoader() {
			let counterElement = document.querySelector('.counter');
			let currentValue = 0;

			function updateCounter() {
				if (currentValue === 100) {
					return;
				}
				console.log(Math.floor(Math.random() * 10));
				currentValue += Math.floor(Math.random() * 10) + 1;

				if (currentValue > 100) {
					currentValue = 100;
					document.body.style.overflow = 'auto';
				}

				counterElement.textContent = currentValue;

				let delay = Math.floor(Math.random() * 200) + 50;
				setTimeout(updateCounter, delay);
			}

			updateCounter();
		}

		startLoader();

		gsap.to('.container', {
			y: '-100%',
      ease: "power4.inOut",
			duration: 2.25,
    }, 3);
	});
</script>

<div class="container relative">
	<p class="counter absolute bottom-0 right-0"></p>
</div>

<style>
	.container {
		position: absolute;
		min-width: 100%;
		min-height: 100vh;
		background-color: rgb(9, 3, 1);
		z-index: 99;
		overflow: hidden;
	}
	.counter {
		font-size: 5rem;
		padding: 0 2rem 0 2rem;
	}
</style>
