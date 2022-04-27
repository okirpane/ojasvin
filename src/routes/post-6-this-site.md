---
title: THIS SITE
thumbnail: /assets/sticker-timer.svg
---

<script>
	import PostContainer from '$lib/post-container.svelte';
	import Meta from '$lib/meta.svelte';
	import Video from '$lib/video-insert.svelte';
	import { workSwitch } from '$lib/workSwitch.js';

	workSwitch.turnOff();

</script>

<Meta>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:text:title" content={"Ojasvin's Portfolio - " + title} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://ojasvin.me/assets/site-banner.webp" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={"Ojasvin's Portfolio - " + title} />
	<meta property="og:image"
		content="https://ojasvin.me/assets/site-banner.webp" />
	<meta property="og:image:alt" content="Ojasvin's Portfolio!" />
</Meta>

<PostContainer>

# {title}

**Intro:** I designed & built this site over 2.5 weeks. I designed it using Figma. I built it with SvelteKit.

![{title} Banner](/assets/site-banner.webp)

My Figma iterations:

![Iterations](/assets/post-6-image-iterations.webp)
![Iterations](/assets/post-6-video-iterations.gif)
![Feather Banner](/assets/post-1-image-banner.webp)
![Bulbul Banner](/assets/post-2-image-banner.webp)
![Varuna Banner](/assets/post-3-image-banner.webp)
![DUET Banner](/assets/post-4-image-banner.webp)

*✨Thanks for reading✨* 

</PostContainer>

<style lang="scss">
    h1 {
		margin: 0%;
		font-size: 30px
	}
	p, li {
		overflow-wrap: break-word;
		max-width: 100%;
		font-size: 20px;
		line-height: 40px;
		/* text-align: justify; */
	}
	a {
        font-weight: 700;
        color: #99c0ff;
        text-decoration: none;
        transition: color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
	img {
		max-width: 100%;
		border: 1px solid rgba(128, 178, 254, 0.2);
		border-radius: 6px;

	}
    a:hover {
        transition: color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        color: #66a0ff;
    }
	iframe {
		max-width: 100%;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		border: 1px solid rgba(128, 178, 254, 0.2);
		border-radius: 6px;
	}
</style>