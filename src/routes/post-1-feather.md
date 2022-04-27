---
title: FEATHER
thumbnail: /assets/sticker-feather.svg
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

**Intro:** In a nutshell, Feather brings zero-config distributed computing to consumers with a unique approach to remote desktop technology. Feather aims to give users the ability to run intensive software on even the weakest devices. (Check it out [here](https://feather.systems/))

![{title} Banner](/assets/post-1-image-banner.webp)

**Team:** Co-founded Feather with 3 incredibly talented engineers & creatives.

![{title} Banner](/assets/post-1-image-team.webp)

**How Design Helped:** In early-stage startups, design can lend a lot of credence to the founding team. It can give investors a better idea of what your value proposition is through visuals. I can also smooth over early prototypes and give users a better experience with early tech. Our goals with the designs were the following:
1. Improve website layout & communication to convert users.
2. Create a butter smooth user experience to fit our app seamlessly into users' existing workflows.
3. Improve pitch messaging to convert more investors.

![Card](/assets/post-1-image-everything.webp)

**Website:** When we started, we didn't really have a clear direction. When people would come to our site, they would see some vague pitch about "The future of computing" and leave. We wanted to be specific about what we did & how the user could benefit. So, we redesigned & increased sign-ups for our alpha product & newsletter by 75%.

Our iterations for the new site:

![Iterations](/assets/post-1-video-iterations.gif)

![Feature Illustrations](/assets/post-1-image-features.webp)

![Onboarding](/assets/post-1-video-onboarding.gif)

![CTA](/assets/post-1-image-cta.webp)

**Desktop App:** We had rigorous pre-alpha testing. Before the app was released to the public, it was tested almost constantly by the team, a few friends and enthusiasts in our network. I also lead our front-end development effort & was able to rapidly implement & gain insights on everything from wireframes, to live interaction with the product.

![Flow](/assets/post-1-image-flow.webp)

![Style Iterations](/assets/post-1-video-style.gif)

![Interface](/assets/post-1-image-interface-1.webp)

![Interface](/assets/post-1-image-interface-2.webp)

![Interface](/assets/post-1-image-interface-3.webp)

**Pitch Deck:** Our pitch deck is amazing. I collaborated with my co-founder Kyle on bringing it to reality. This deck also went through several versions. The version we landed on is professional & self-assured. It communicates our idea, our research and our plan clearly. You can check it out [here](https://brieflink.com/v/pomaf/) (Seriously, check it out, it's beautiful).

![Pitch](/assets/post-1-image-pitch.webp)
![Pitch](/assets/post-1-image-pitch-2.webp)
![Pitch](/assets/post-1-image-pitch-3.webp)

**Conclusion:** We were able to:
1. Increase sign-ups on the website by 75% through our improved site design.
2. Secured 45+ web sign-ups in a week for our launch with no marketing budget.
3. Increase the usability of our demo & retain users through our app interface.
4. Increase VC meeting conversions by 50% & raise an angel investing round of $200,000.



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
		border: 1px solid rgba(128, 44, 54, 0.2);
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