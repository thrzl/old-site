<script>
	import '../app.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/700.css';
	import Presence from '../Presence.svelte';
	import Spotify from '../Spotify.svelte';
</script>

<slot />
<div id="spotify">
	<Spotify />
</div>
<div id="presence">
	<Presence />
</div>