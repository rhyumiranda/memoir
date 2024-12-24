<script>
	import '../app.css';
	let { children } = $props();
	import Nav from '$lib/components/Nav.svelte'
	import Prealoder from '$lib/components/Preloader.svelte'
</script>

<Prealoder/>
<Nav/>
{@render children()}
