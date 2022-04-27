<script>
	export let source;
</script>

<video controls>
	<source src={source} type="video/mp4" />
	<track kind="captions" />
	Sorry, your browser doesn't support embedded videos.
</video>

<style>
	video {
		width: 100%;
        max-width: 100%;

		margin-left: auto;
		margin-right: auto;
        
		border: 1px solid rgba(115, 181, 191, 0.2);
		border-radius: 6px;
	}
</style>
