<script>
	import { onMount } from 'svelte';
	import { workSwitch } from '$lib/workSwitch'
	onMount(async() => {
		const myTimeout = setTimeout(() =>{
			workSwitch.turnOn()

		}, 500);

	})
</script>

<svelte:head>
	<!-- Primary tags -->
	<title>Ojasvin's Portfolio</title>
	<meta name="title" content="Ojasvin's Portfolio" />
	<meta name="description" content="I'm a designer who codes." />
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:text:title" content="Ojasvin's Portfolio!" />
	<meta name="twitter:text:description" content="I'm a designer who codes." />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://ojasvin.me/assets/screen-banner.jpg" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/" />
	<meta property="og:title" content="Ojasvin's Portfolio" />
	<meta property="og:description" content="I'm a designer who codes." />
	<meta property="og:image" content="https://ojasvin.me/assets/screen-banner.jpg" />
	<meta property="og:image:alt" content="Ojasvin Portfolio!" />
</svelte:head>
