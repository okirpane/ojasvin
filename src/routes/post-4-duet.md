---
title: DUET
thumbnail: /assets/sticker-duet.svg
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
	<meta name="twitter:image" content="https://ojasvin.me/assets/post-4-image-banner.webp" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={"Ojasvin's Portfolio - " + title} />
	<meta property="og:image"
		content="https://ojasvin.me/assets/post-4-image-banner.webp" />
	<meta property="og:image:alt" content="Ojasvin's Portfolio!" />
</Meta>

<PostContainer>

# {title}

**Intro:** DUET is a ‘Social Sonic Interface’ — a collaborative space where two isolated participants work together to create an audio-visual experience through gesture-based interaction.

![{title} Banner](/assets/post-4-image-banner.webp)

![{title} Example](/assets/post-4-image-example.webp)
![{title} Example 2](/assets/post-4-image-girl.webp)
![{title} Example 3](/assets/post-4-image-dude.webp)

**Interface:** After iterating through prototypes the digital team landed on a solution that was intuitive & magical. The team decided to have a gesture-interface as the core interaction point. Users could then create beautiful melodies simply by waving their hands around a gesture-sensor like a conductor.

![Interface Explaination](/assets/post-4-image-interface.webp)

Our first prototype with gesture based control with a motion detector:

<Video source = '/assets/post-4-video-proto-1.mp4'></Video>

Our team testing out the collaborative aspect of our project:

<Video source = '/assets/post-4-video-proto-2.mp4'></Video>

Everything working together in the fabricated space:

<Video source = '/assets/post-4-video-proto-3.mp4'></Video>

**Environment:** The team also engineered & decorated a sturdy space the simultaneously took into account user needs such as comfort, accessibility, etc while hiding the tech effectively. The space was built to decontextualise the user from their usual experience of environments.

**Leading a Team:** For a project about exploring themes of collaboration, the team involved in making it experienced some issues in that department. The main issues were clashes of ego & some miscommunication. As the project manager it was my job to remedy these conflicts.
I fostered effective communication between team members. Effective communication lead to more empathy. Empathy lead to people puttinh aside their egos to work towards the final goal.

**Conclusion:** The project took us 3 months to finish. It was open to the public as part of a thesis exhibition. We were able to create an intuitive & gratifying experience for more than 50 people who came to see our project. Here's a video of the event:

<Video source = '/assets/post-4-video-final.mp4'></Video>

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
		border: 1px solid rgba(133, 71, 178, 0.2);
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
		border: 1px solid rgba(133, 71, 178, 0.2);
		border-radius: 6px;
	}
</style>