---
title: BULBUL
thumbnail: /assets/sticker-bulbul.svg
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
	<meta name="twitter:image" content="https://ojasvin.me/assets/post-2-image-banner.webp" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={"Ojasvin's Portfolio - " + title} />
	<meta property="og:image"
		content="https://ojasvin.me/assets/post-2-image-banner.webp" />
	<meta property="og:image:alt" content="Ojasvin's Portfolio!" />
</Meta>

<PostContainer>

# {title}

**Intro:** Bulbul is a procedural music application that generates expressive pieces of music using interactive markov chains. Check it out [here](https://pretentious7.github.io/Bulbul-lite/).

![Bulbul Banner](/assets/post-2-image-banner.webp)

![Screenshot](/assets/post-2-image-product.webp)

**Context:** I’ve always wanted to make music. But, I’m held back by my lacklustre amounts of musical talent. So, I decided to use my thesis project as an oppurtunity to make a computer make music for me.

![Bulbul Banner](/assets/post-2-image-talent.webp)

**Guiding Concepts:**  Two major concepts shaped the development of Bulbul:
1. A **Meta-instrument** is a network of ideas and concerns that are ‘played’ in the creative process to make the aesthetics and philosophies of a given project.
2. **Procedural Music** is merely composition expressed as a set of principles and procedures. This kind of music composition is exemplified by artists like Steve Reich & Brian Eno. It's a philosophy for creating art.

Here's an example of procedural music:

<iframe width="397" height="298" src="https://www.youtube.com/embed/vugqRAX7xQE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Technical Approach:** The Technique/Procedure we used for generating music is called "Interactive Markov Chains". A Markov chain is a mathematical system that experiences transitions from one state to another according to certain probabilistic rules. An interactive Markov Chain basically allows you to change those probabilistic rules through an interface.

![Markov Chains](/assets/post-2-image-prog.webp)

**Design Approach:** To create this project I collaborated with Abhishek Cherath a physics student at Stony Brook University. We executed this project by setting goals and conducting three 36 hour development sprints over a semester with user testing between them to properly orient the development process.

![Process](/assets/post-2-image-process.webp)

**Iteration One:** The first iteration was a paper prototype. I obscured the interface of a weird synth app on an iPad. This was to encourage users to interact with making music semi-divorced from regular music interfaces. Here's an excerpt from the testing process:

<Video source = '/assets/post-2-video-proto-1.mp4'></Video>

**Iteration Two:** Prototype two was my first digital prototype. It was a quick program made with Java in the Processing library. The objective was to compare and contrast the paper prototype with the new digital interface.

<Video source = '/assets/post-2-video-proto-2-1.mp4'></Video>
<Video source = '/assets/post-2-video-proto-2-2.mp4'></Video>

**Iteration Three:**  This round of prototyping was more informal. I wanted to test out existing music projects and see what parts resonated with people the most. I concluded that the project needed to strike a balance between the avant-garde & the familiar.

<Video source = '/assets/post-2-video-proto-3-1.mp4'></Video>
<Video source = '/assets/post-2-video-proto-3-2.mp4'></Video>

**Iteration Four:** This is the crystalization of our iterations. It's an instrument. You *have* to learn how to use it, practice with it, and how to make the sounds you want to make.

<iframe width="1005" height="585" src="https://www.youtube.com/embed/U822oZbD-eI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
		border: 1px solid rgba(115, 181, 191, 0.2);
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
		border: 1px solid rgba(115, 181, 191, 0.2);
		border-radius: 6px;
	}
</style>