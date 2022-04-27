<script>
	import { onMount } from 'svelte';
	let loaded = false;
	onMount(async () => {
		loaded = true;
	});
</script>

<div id="avatar">
	<object
		title="Ojasvin Avatar"
		type="image/svg+xml"
		data="/assets/avatar-ojas-calli.svg"
		class="svg-content notLoaded"
		class:loaded={loaded === true}
	/>
</div>

<style lang="scss">
	@import './src/variables';
	#avatar {
		width: 100%;
		height: 100%;

		display: grid;
		place-items: center;
		.notLoaded {
			opacity: 0%;
			transition: opacity 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
		}
		.loaded {
			opacity: 100%;
			transition: opacity 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
		}
		object {
			position: relative;
			// width: get-vw(680px);
			height: get-vh(825px);
			// max-height: 100vh;
			margin-top: -(get-vh(120px));
			@media screen and (max-width: 1024px) {
				max-width: 100vw;
				height: min(get-vh(825px), 90vh);
				margin-top: 0%;
			}
		}
	}
</style>
