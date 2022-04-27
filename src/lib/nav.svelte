<script lang="ts">
import { goto } from '$app/navigation';

	import { aboutSwitch } from '$lib/aboutSwitch';
	import { workSwitch } from '$lib/workSwitch';

	// $workSwitch === 'on' ? console.log('focus') : () => {};
</script>

<main>
	<div id="nav-container">
		<div class="flex">
			<div class="spacer-nav-left" />
			<div
				id="work"
				on:click={() => {
					goto('/');
					aboutSwitch.turnOff();
					workSwitch.toggle();
				}}
				class="text link"
				class:selected={$workSwitch === 'on'}
			>
				Work
			</div>
			<div class="spacer-nav-between" />
			<div
				on:click={() => {
					aboutSwitch.toggle();
				}}
				class="text link"
				class:selected={$aboutSwitch === 'on'}
			>
				About
			</div>
			<div class="spacer-nav-between" />
			<div on:click={() => (location.href = 'mailto:okirpane@gmail.com')} class="icon grow link">
				<img src="/assets/email.svg" alt="Email me" />
			</div>
			<div class="spacer-nav-right" />
		</div>
	</div>
</main>

<style lang="scss">
	@import './src/variables.scss';
	main {
		position: sticky;

		z-index: 4;

		pointer-events: none;

		display: grid;
		justify-items: center;

		bottom: 8%;
		// top: 85%;

		.flex {
			display: flex;
			align-items: center;

			width: 100%;
			height: 100%;
		}
		.text {
			padding: 2% 3%;

			border-radius: get-vw(6px);

			background-color: transparent;

			font-size: 65%;
			font-weight: 400;
			text-transform: uppercase;

			display: flex;
			text-align: center;
			align-items: center;

			border: solid 2px #ffdc8c00;

			-webkit-touch-callout: none; /* iOS Safari */
			-webkit-user-select: none; /* Safari */
			-khtml-user-select: none; /* Konqueror HTML */
			-moz-user-select: none; /* Old versions of Firefox */
			-ms-user-select: none; /* Internet Explorer/Edge */
			user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

			transition: border 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
			transition: background-color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

			@media screen and (max-width: $bp) {
				border-radius: max(get-vw(6px), 6px);
			}
			@media screen and (min-width: 1240px) {
				border-radius: min(get-vw(6px), 6px);
			}
		}
		.text:hover {
			transition: border 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
			border: solid 2px #ffdd8c;
		}
		.selected {
			transition: background-color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
			background-color: #ffdd8c;
		}
		.icon {
			height: 100%;

			img {
				width: 100%;
			}

			display: flex;
			// text-align: center;
			align-items: center;
		}

		.spacer-nav-right {
			height: 100%;
			width: 4.5%;
		}
		.spacer-nav-between {
			height: 100%;
			width: 1.5%;
		}
		.spacer-nav-left {
			height: 100%;
			width: 8.6%;
		}

		#nav-container {

			width: get-vw(220px);
			height: get-vw(60px);

			pointer-events: all;

			border-radius: get-vw(30px);
			background: #f7faff;
			box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1);

			@media screen and (max-width: $bp) {
				width: max(get-vw(220px), 220px);
				height: max(get-vw(60px), 60px);
				border-radius: max(get-vw(30px), 30px);
			}
			@media screen and (min-width: 1240px) {
				width: min(get-vw(220px), 220px);
				height: min(get-vw(60px), 60px);
				border-radius: min(get-vw(30px), 30px);
			}
		}
	}
</style>
