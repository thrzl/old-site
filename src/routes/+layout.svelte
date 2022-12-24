<script>
	import '../app.css';
	import 'uno.css';
	import PageTransition from '../components/PageTransition.svelte';
	import { page } from '$app/stores';
	$: refresh = page;
	console.log(refresh)
	// onMount(() => {
	// 	 refresh = window.location.pathname;
	// });
	console.log($page)

</script>

<svelte:head>
	<title>~{$page.url.pathname}</title>
</svelte:head>
{#key $page}
<PageTransition>
	<slot />
</PageTransition>
{/key}
