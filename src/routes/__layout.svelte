<script>
	import '../app.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/700.css';
	import Presence from '../Presence.svelte';
	import Spotify from '../Spotify.svelte';
	import { onMount } from 'svelte';
	let onResume = false // (window && !window.location.pathname.includes("/resume"))
	onMount(() => {
		onResume = !window.location.pathname.includes("/resume")
	})
</script>

<slot />
{#if onResume}
	<div id="spotify">
		<Spotify />
	</div>
	<div id="presence">
		<Presence />
	</div>
{/if}