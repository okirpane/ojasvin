<script>
	import { fade, fly } from 'svelte/transition';
</script>

<main in:fly={{ y: 60, duration: 300 }} out:fade={{ duration: 150 }}>
	<div id="content-container">
		<div class="padding">
			<slot />
		</div>
	</div>
</main>

<style lang="scss">
	@import './src/variables';
	main {
		width: 100vw;
		#content-container {
			width: clamp(320px, 55%, get-vw(660px));
			height: 200vh;
			margin-left: auto;
			margin-right: auto;

			overflow-y: scroll;

			background: #f7faff;
			box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.08), 0px 0px 12px rgba(0, 0, 0, 0.05);
			border-radius: 6px;
			.padding {
				width: 100%;
				height: 100%;
				padding: 5% 5% 10% 5%;
			}
		}
	}
</style>
