<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { workSwitch } from '$lib/workSwitch';

	let onCard: boolean = false;
	let handleMouseOver = () => {
		onCard = true;
	};
	let handleMouseOut = () => {
		onCard = false;
	};
	let handleClick = () => {
		if (onCard === false) goto('/'), workSwitch.turnOn();
	};
</script>

<main
	on:click={handleClick}
	class="overlay"
	in:fade={{ duration: 300 }}
	out:fade={{ duration: 150 }}
>
	<div
		on:blur={() => {}}
		on:focus={() => {}}
		on:mouseover={handleMouseOver}
		on:mouseout={handleMouseOut}
		in:fly={{ y: 600, duration: 600 }}
		id="content-container"
	>
		<div class="padding">
			<div class="close">
				<img
					on:click={() => {
						goto('/'), workSwitch.turnOn();
					}}
					src="/assets/close.svg"
					alt="close"
				/>
			</div>
			<slot />
		</div>
	</div>
	<!-- <div id="bg" on:click={() => goto('/')} /> -->
</main>

<style lang="scss">
	@import './src/variables';
	#bg {
		position: fixed;

		top: 0%;
		left: 0%;

		width: 100vw;
		height: 100vh;

		z-index: 2;
	}
	main {
		width: 100vw;
		position: fixed;
		overflow-y: scroll;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(247, 250, 255, 0.25);
		#content-container {
			margin: 10vh auto;

			position: relative;

			z-index: 3;

			width: clamp(320px, 100vw - 60px, get-vw(800px));
			max-width: 900px;
			padding: 15px;
			min-height: fit-content;

			background: #f7faff;
			box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.08), 0px 0px 12px rgba(0, 0, 0, 0.05);
			border-radius: 6px;
			@media screen and (max-width: $bp) {
				max-width: 100%;
				width: 85%;
			}
			.padding {
				position: relative;

				max-width: 100%;
				height: 100%;
				padding: 5% 5% 10% 5%;
				.close {
					img {
						cursor: pointer;
						position: absolute;
						padding: clamp(0%, 1.5%, 2%) 0%;
						right: 4%;
					}
				}
			}
		}
	}
</style>
