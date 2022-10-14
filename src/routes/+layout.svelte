<script>
	import '../app.css';
	// import '@fontsource/poppins/400.css';
	// import '@fontsource/poppins/700.css';
	import Widgets from './Widgets.svelte';
	import { onMount } from 'svelte';
	let onResume = false // (window && !window.location.pathname.includes("/resume"))
	onMount(() => {
		onResume = !window.location.pathname.includes("/resume")
	})
</script>

<slot />
{#if onResume}
	<Widgets />
{/if}