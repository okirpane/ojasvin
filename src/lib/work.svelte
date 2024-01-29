<script>
	import { workSwitch } from '$lib/workSwitch';
	import { fade, fly } from 'svelte/transition';
	export let posts;
</script>

{#if $workSwitch === 'on'}
	<!-- <div id="work-container">
		<div id="background" />
		{#each posts as { path, metadata: { title, thumbnail } }}
			<a sveltekit:prefetch href={`/${path.replace('.md', '')}`}>
				<img src={`${thumbnail}`} alt={title} />
			</a>
		{/each}
	</div> -->
	<div id="work-container">
		<div in:fly={{ x: -30, duration: 300 }} out:fade={{ duration: 150 }} class="sizing absolute">
			<a sveltekit:prefetch href={`/${posts[0].path.replace('.md', '')}`}>
				<img
					class="p-one saturate"
					src={`${posts[0].metadata.thumbnail}`}
					alt={posts[0].metadata.title}
				/>
			</a>
		</div>
		<div
			in:fly={{ delay: 60, x: 30, duration: 300 }}
			out:fade={{ duration: 150 }}
			class="sizing absolute"
		>
			<a sveltekit:prefetch href={`/${posts[1].path.replace('.md', '')}`}>
				<img
					class="p-two saturate"
					src={`${posts[1].metadata.thumbnail}`}
					alt={posts[1].metadata.title}
				/>
			</a>
		</div>
		<div
			in:fly={{ delay: 120, x: -30, duration: 300 }}
			out:fade={{ duration: 150 }}
			class="sizing absolute"
		>
			<a sveltekit:prefetch href={`/${posts[2].path.replace('.md', '')}`}>
				<img
					class="p-three saturate"
					src={`${posts[2].metadata.thumbnail}`}
					alt={posts[2].metadata.title}
				/>
			</a>
		</div>
		<div
			in:fly={{ delay: 180, x: 30, duration: 300 }}
			out:fade={{ duration: 150 }}
			class="sizing absolute"
		>
			<a sveltekit:prefetch href={`/${posts[3].path.replace('.md', '')}`}>
				<img
					class="p-four saturate"
					src={`${posts[3].metadata.thumbnail}`}
					alt={posts[3].metadata.title}
				/>
			</a>
		</div>
		<div
			in:fly={{ delay: 240, x: -30, duration: 300 }}
			out:fade={{ duration: 150 }}
			class="sizing fixed absolute"
		>
			<a sveltekit:prefetch href={`/${posts[6].path.replace('.md', '')}`}>
				<img
					class="p-five saturate"
					src={`${posts[4].metadata.thumbnail}`}
					alt={posts[4].metadata.title}
				/>
			</a>
		</div>
		<div
			in:fly={{ delay: 300, x: -30, duration: 300 }}
			out:fade={{ duration: 150 }}
			class="sizing fixed absolute"
		>
			<a sveltekit:prefetch href={`/${posts[5].path.replace('.md', '')}`}>
				<img
					class="p-six saturate"
					src={`${posts[5].metadata.thumbnail}`}
					alt={posts[5].metadata.title}
				/>
			</a>
		</div>
	</div>
{:else if $workSwitch === 'off'}
	<div />
{/if}

<style lang="scss">
	@import './src/variables';

	#work-container {
		position: absolute;
		top: 0%;
		width: 100vw;
		min-height: 100vh;
		height: fit-content;
		z-index: 3;

		.absolute img {
			position: absolute;
		}
		.absolute img:hover {
			// position: absolute;
			transform: rotate(0deg);
			transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
		}
		.absolute {
			.p-one {
				top: get-vh(135px);
				left: get-vw(375px);

				height: get-vh(150px);

				transform: rotate(-15deg);
				transition: transform 0.15s cubic-bezier(0.075, 0.82, 0.165, 1);
				@media screen and (max-width: 1100px) {
					left: 25%;
				}
				@media screen and (max-width: 915px) {
					left: min(5%, get-vw(375px));
				}
				@media (max-height: 400px) and (max-width: 915px) {
					left: get-vw(375px);
				}
				// @media screen and (max-width: 915px) {
				// 	left: min(5%, get-vw(375px));
				// }
			}
			.p-two {
				top: get-vh(190px);
				right: get-vw(325px);

				height: get-vh(80px);

				transform: rotate(15deg);
				transition: transform 0.15s cubic-bezier(0.075, 0.82, 0.165, 1);

				@media screen and (max-width: 1100px) {
					right: 25%;
				}
				@media screen and (max-width: 915px) {
					right: 5%;
				}
				@media (max-height: 400px) and (max-width: 915px) {
					right: get-vw(325px);
				}
			}
			.p-three {
				top: get-vh(290px);
				left: get-vw(285px);

				height: get-vh(175px);

				transform: rotate(-30deg);
				transition: transform 0.15s cubic-bezier(0.075, 0.82, 0.165, 1);

				@media screen and (max-width: 1100px) {
					left: 25%;
				}
				@media screen and (max-width: 915px) {
					left: 5%;
				}
				@media (max-height: 400px) and (max-width: 915px) {
					left: get-vw(375px);
				}
				@media (max-height: 400px) and (max-width: 915px) {
					left: get-vw(285px);
				}
			}
			.p-four {
				top: get-vh(320px);
				right: get-vw(345px);

				height: get-vh(165px);

				transform: rotate(30deg);
				transition: transform 0.15s cubic-bezier(0.075, 0.82, 0.165, 1);

				@media screen and (max-width: 1100px) {
					right: 25%;
				}
				@media screen and (max-width: 915px) {
					right: 5%;
				}
				@media (max-height: 400px) and (max-width: 915px) {
					right: get-vw(345px);
				}
			}
			.p-five {
				top: get-vh(410px);
				right: get-vw(900px);

				height: get-vh(50px);

				transform: rotate(30deg);
				transition: transform 0.15s cubic-bezier(0.075, 0.82, 0.165, 1);

				@media screen and (max-width: 1100px) {
					right: 36.5%;
				}
				@media screen and (max-width: 915px) {
					right: 5%;
				}
				@media (max-height: 400px) and (max-width: 915px) {
					right: get-vw(900px);
				}
			}
			.p-six {
				top: get-vh(330px);
				left: get-vw(510px);

				height: get-vh(55px);

				transform: rotate(-15deg);
				transition: transform 0.15s cubic-bezier(0.075, 0.82, 0.165, 1);

				@media screen and (max-width: 1100px) {
					left: 39%;
				}
				@media screen and (max-width: 915px) {
					left: 5%;
				}
				@media (max-height: 400px) and (max-width: 915px) {
					left: get-vw(510px);
				}
			}
		}
	}
</style>
