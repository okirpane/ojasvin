---
title: VARUNA
thumbnail: /assets/sticker-varuna.svg
---

<script>
	import PostContainer from '$lib/post-container.svelte';
	import Meta from '$lib/meta.svelte';
	import { workSwitch } from '$lib/workSwitch.js';

	workSwitch.turnOff();

</script>

<Meta>
<!-- Primary tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:text:title" content={"Ojasvin's Portfolio - " + title} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://ojasvin.me/assets/post-3-image-banner.webp" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={"Ojasvin's Portfolio - " + title} />
	<meta property="og:image"
		content="https://ojasvin.me/assets/post-3-image-banner.webp" />
	<meta property="og:image:alt" content="Ojasvin's Portfolio!" />
</Meta>

<PostContainer>

# {title}

**Intro:** Varuna is a low-cost, beautiful scheduling system for doctors.

![Varuna Banner](/assets/post-3-image-banner.webp)

**Context:** This project started in March 2020. When COVID cases were rising in India. My creative partner & I were talking to his mom (a doctor) who was complaining about the medical software she was using.

**Problem:** We spoke with around 15-20 doctors in our immediate network and found that:
1. They were tired of using their hospital’s **clunky** & ugly digital systems. 
2. Third party applications were **expensive** & irresponsible with data collection.
3. They wanted something **easy to use, and cheap** to setup.

**Solution:** Varuna, a low-cost, intuitive scheduling system for doctors. Check it out [here](https://docjayalakshmithelapurath.varunadao.com/).

![Our Product](/assets/post-3-image-product.webp)

**Approach:** Our consumers needed a solution immediately. We were in the middle of a crisis. We needed to move fast. So we did. After ideation we just started iterating and making usable prototypes of higher and higher fidelity.

![Our Process](/assets/post-3-image-process.webp)

Let me take you through our iterations.

**Iteration One:** In a few weeks, we built our MVP. We had our friends & family try it out. Our main insights after testing were:
1. **Onboarding** Doctor's onto the scheduling system **was difficult**.
2. We were a small team, we needed provide a **pared down, focused experience**.
3. The **patient facing experience** needed to be **dead simple**.

![Our Product](/assets/post-3-image-sketch.webp)

**Iteration Two:** When it came to onboarding Doctors, we decided that an **existing interface was the best interface**. We integrated Varuna into the Doctor's existing workflow. Doctor's just had to add "VARUNA" to their Google calendar events, & it would automatically list them as available appointments for patients.

![Calendar](/assets/post-3-image-calendar.webp)

**Iteration Three:** We refined the UI. Points of interaction & related information were broken up into modules called **"cards"**. Each card had a single button to progress towards booking an appointment. We created cards by **focusing on hard data about pain points** in the interface rather than user suggestions.

![Cards](/assets/post-3-image-card-1.webp)
![Cards](/assets/post-3-image-card-2.webp)

**Iteration Four:** We needed a way to remind users & doctors about upcoming appointments. So, we started sending **reminders through text messages** with links the meeting. We also spawned a **meeting URLs** with a countdown timer & all relevant information.

![Cards](/assets/post-3-image-card-3.webp)

**Conclusion:** We successfully designed & deployed a web app that allowed doctor's to schedule & conduct appointments online. Through live user feedback & data, we rapidly added necesary features & refined the interface. **In a few weeks**, we were able to provide **half a dozen doctors & over 50 patients** in Mumbai with the ability to give & receive help through the COVID pandemic.

**Lessons:** This project was very formative for me. It has very much influenced so much of how I approach design today. Here are some high-level take-aways:
1. Keep your **design simple**. Helps you make complex projects.
2. Pay attention to the **data**. User opinion should follow data, not the other way around.
3. **Use existing interfaces** when you can. The user will be more comfortable in familiarity.

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
</style>