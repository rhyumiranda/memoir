<script>
	import '../app.css';
	import {ScrollWrapper} from '@shentohendriks/svelte-smoothscroll';
	let { children } = $props();
	import Nav from '$lib/components/Nav.svelte'
	import Prealoder from '$lib/components/Preloader.svelte'
</script>

<Prealoder/>
<Nav/>
<ScrollWrapper>
	{@render children()}
</ScrollWrapper>

