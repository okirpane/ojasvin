<script context="module">
	// const allPosts = import.meta.glob('./*.md');
	// let body = [];
	// for (let path in allPosts) {
	// 	body.push(
	// 		allPosts[path]().then(({ metadata }) => {
	// 			return { path, metadata };
	// 		})
	// 	);
	// }
	// export const load = async () => {
	// 	const posts = await Promise.all(body);
	// 	// console.log(posts);
	// 	return {
	// 		props: {
	// 			posts
	// 		}
	// 	};
	// };
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Ojasvin | WOrk</title>
</svelte:head>

<div class="feed-container">
	{#each posts as { path, metadata: { title, tag, thumbnail } }}
		<div>
			<a sveltekit:prefetch href={`/work/${path.replace('.md', '')}`} style="position:relative">
				<img
					src={thumbnail}
					alt={title}
					class="grow"
				/>
			</a>
		</div>
		<div class="spacer bottom" />
	{/each}
</div>

<style lang="scss">
	@import './src/variables';
	.feed-container {
		width: clamp(300px, 80%, get-vw(420px));
		height: fit-content;

		padding: 5%;

		img {
			// content-visibility: auto;
			max-width: 100%;
		}
		.spacer.bottom {
			width: auto;
			height: clamp(15px, 15%, get-vw(15px));
		}
	}
</style>
