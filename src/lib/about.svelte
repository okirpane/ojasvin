<script>
	import { aboutSwitch } from '$lib/aboutSwitch.js';
	import { fade, fly } from 'svelte/transition';
</script>

<div class="container">
	<div
		in:fade={{ duration: 100 }}
		out:fade={{ duration: 50 }}
		on:click={aboutSwitch.turnOff}
		class="below"
	>
		<main class="center">
			<div class="outline-rect center">
				<div class="content-container">
					<img src="/assets/avatar-ojas-small.svg" alt="Ojas" class="logo" />
					<div class="content">
						Hey, I’m <b>Ojasvin Kirpane</b>. I’m a <b>designer who codes</b>. Checkout my
						<a class="inline" href="/assets/email.svg" download>Resume</a>.
					</div>
				</div>
			</div>
		</main>
	</div>
</div>

<style lang="scss">
	@import './src/variables';
	.container {
		position: sticky;

		bottom: 0%;
		left: 0%;

		z-index: 4;
	}
	.below {
		width: 100vw;
		height: 100vh;
		background-color: #5797ff8c;
		display: grid;
		place-items: center;
		main {
			position: relative;
			width: clamp(300px, 80%, get-vw(570px));

			height: get-vw(220px);
			min-height: 220px;

			border-radius: get-vw(6px);

			background-color: #f7faff;

			.outline-rect {
				border-radius: get-vw(6px);
				border: 2px solid #bfd8ff;

				height: 72%;
				width: 90%;
				.logo {
					position: absolute;
					z-index: 2;

					top: 0%;
					margin-left: auto;
					margin-right: auto;
					left: 0;
					right: 0;
				}
				.content-container {
					.content {
						// font-family: IBM Plex Mono;
						font-size: clamp(20px, 2vw, get-vw(30px));

						font-weight: 400;
						text-align: center;
						b {
							font-family: 'Plex', monospace;

							font-weight: 700;
						}
					}
				}
			}
		}
	}
	.center {
		display: grid;
		place-items: center;
	}
</style>
