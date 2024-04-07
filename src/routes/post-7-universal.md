---
title: UNIVERSAL PORTAL
thumbnail: /assets/sticker-portal.svg
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
	<meta name="twitter:image" content="https://ojasvin.me/assets/post-1-image-banner.webp" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={"Ojasvin's Portfolio - " + title} />
	<meta property="og:image"
		content="https://ojasvin.me/assets/post-1-image-banner.webp" />
	<meta property="og:image:alt" content="Ojasvin's Portfolio!" />
</Meta>

<PostContainer>

# {title}

**Intro:** Government dashboards – notoriously complex, often bureaucratic, and a pain for both designers and developers. We've all been there, tangled in the weeds of repetitive login flows, clunky forms, and support components. But what if there was a better way? Enter: The Universal portal, a modular design system built to revolutionize government UX.

![{title} Banner](/assets/post-7-video-first.gif)

**The spark:** It all started with two frustrated designers facing the same task: building dashboards for different government projects. We saw the endless repetition, the wasted time, and knew there had to be a better way. With our manager's blessing, we embarked on a mission to create a universal toolkit, a shared language for government UX.

![{title} Banner](/assets/post-7-image-flow-1.png)

![{title} Banner](/assets/post-7-image-flow-2.png)

**Building blocks:** Built on Figma's variable modes for effortless theming, our design system was pretty comprehensive. We created variants for every component, at every state. Collaboration with the dev team was key, translating designs into reality through an internal AI tool that transforms SVGs into React components with SASS styles. This seamless workflow empowers developers to tap into the system, adding components with ease.

![Card](/assets/post-7-image-ds-colors.png)

![Card](/assets/post-7-image-ds-buttons.png)

![Card](/assets/post-7-image-ds-components.png)

**Our process:** Our agile approach utilizes rotating developers based on availability, ensuring continuous progress without bottlenecks. To guarantee seamless integration, we developed a robust testing suite, making each component a lego-like block ready for any developer to play with.

![Flow](/assets/post-7-video-lego.gif)

**Mix & Match:** Components mix and match to effortlessly adapt to diverse needs, validated through rigorous testing with real users. To ensure this modular magic extends beyond individual designers, we tested ease of use with colleagues working on parallel projects. The result? Minimal onboarding and a system that seamlessly scales with any team.

**Conclusion:** We accomplished the following:
1. *Live impact:* 5+ client projects powered, 2 delivered by yours truly.
2. *Proposal magnet:* 15 pitches featuring the prototypes created with our system, showcasing its value.
3. *Time saved:* Design speed boost of 2+ weeks, measured and celebrated.



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
		border: 1px solid rgba(44, 44, 128, 0.2);
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
		border: 1px solid rgba(128, 44, 54, 0.2);
		border-radius: 6px;
	}
</style>
