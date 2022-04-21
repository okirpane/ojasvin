<script context="module">
	const allPosts = import.meta.glob('./*.md');
	let body = [];
	for (let path in allPosts) {
		body.push(
			allPosts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}
	export const load = async () => {
		const posts = await Promise.all(body);
		// console.log(posts);
		return {
			props: {
				posts
			}
		};
	};
</script>

<script lang="ts">
	import '../app.scss';
	import { aboutSwitch } from '$lib/aboutSwitch';

	import Nav from '$lib/nav.svelte';
	import Work from '$lib/work.svelte';
	import About from '$lib/about.svelte';
	import Avatar from '$lib/avatar.svelte';
	import PostContainer from '$lib/post-container.svelte';
	import { onMount } from 'svelte';

	let canvas;
	export let posts;

	onMount(() => {
		console.log(posts);
		const ctx = canvas.getContext('2d');
		let frame = requestAnimationFrame(loop);

		// === function bag === //

		// set canvas
		const setUpCanvas = () => {
			// Feed the size back to the canvas.
			canvas.width = canvas.clientWidth * 1.5;
			canvas.height = canvas.clientHeight * 1.5;
		};
		// floor and randomize numbers between 0 and a max
		// const getRandomInt = (max) => {
		// 	return Math.floor(Math.random() * max);
		// };

		function getRandomInt(min, max) {
			// find diff
			let difference = max - min;

			// generate random number
			let rand = Math.random();

			// multiply with difference
			rand = Math.floor(rand * difference);

			// add with min value
			rand = rand + min;

			return rand;
		}
		// class of Lines
		class Line {
			// collection of sides
			sides: string[] = ['top', 'right', 'bottom', 'left'];

			// choose from above sides
			chooseSidePos(): any {
				let arr = this.sides;
				// get origin side
				let choiceOrigin: string = arr[getRandomInt(0, arr.length)];
				// set origin position
				this.position.start.x = canvas.width / 2;
				this.position.start.y = canvas.height / 2 - 100;
				// get an array without the origin side
				let dummyArr: string[] = arr.filter((arrs) => arrs !== choiceOrigin);
				// get end side
				let choiceEnd: string = dummyArr[getRandomInt(0, dummyArr.length)];
				// set end pos
				switch (choiceOrigin) {
					case 'top':
						this.position.end.x = getRandomInt(0, canvas.width);
						this.position.end.y = 0;
						break;
					case 'right':
						this.position.end.x = canvas.width;
						this.position.end.y = getRandomInt(0, canvas.height);
						break;
					case 'bottom':
						this.position.end.x = getRandomInt(0, canvas.width);
						this.position.end.y = canvas.height;
						break;
					case 'left':
						this.position.end.x = 0;
						this.position.end.y = getRandomInt(0, canvas.height);
						break;
				}
				this.chooseControlPoints();
				return { o: choiceOrigin, e: choiceEnd };
			}

			// set control points
			chooseControlPoints() {
				this.position.cp1.x = this.position.start.x + this.position.end.x / 2;
				this.position.cp1.y = this.position.start.y + this.position.end.y / 2;
				this.position.cp2.x = this.position.end.x + this.position.start.x / 2;
				this.position.cp2.y = this.position.end.y + this.position.start.y / 2;
			}

			// position object
			position = {
				start: { x: 0, y: 0 },
				cp1: { x: 0, y: 0 },
				cp2: { x: 0, y: 0 },
				end: { x: 0, y: 0 }
			};

			// actually draw object
			draw(i) {
				ctx.beginPath();
				ctx.moveTo(this.position.start.x, this.position.start.y);
				// border: 1px solid;
				// border-image-source: radial-gradient(50% 50% at 50% 50%, #F7FAFF 0%, rgba(247, 250, 255, 0) 100%);
				let strokeRadial = ctx.createRadialGradient(
					(this.position.start.x + this.position.end.x) / 2,
					(this.position.start.y + this.position.end.y) / 2,
					i / 2,
					(this.position.start.x + this.position.end.x) / 2,
					(this.position.start.y + this.position.end.y) / 2,
					i
				);
				strokeRadial.addColorStop(0, '#F7FAFF');
				strokeRadial.addColorStop(0.4, '#F7FAFF');
				strokeRadial.addColorStop(1, 'rgba(247, 250, 255, 0)');
				ctx.strokeStyle = strokeRadial;
				ctx.lineWidth = 2;
				ctx.bezierCurveTo(
					this.position.cp1.x,
					this.position.cp1.y,
					this.position.cp2.x,
					this.position.cp2.y,
					this.position.end.x,
					this.position.end.y
				);
				ctx.stroke();
			}
		}

		setUpCanvas();
		// declared to track minutes in loop()
		let last: number = 0;
		// track progress of radial gradient in Line.draw()
		let progress: number = 0;
		// track if progress of radial gradient exceeds or falls short of range
		let subtract: boolean = false;
		// array of Line() instances
		let lines: Line[] = [];
		for (let i = 0; i < 10; i++) {
			lines[i] = new Line();
		}
		for (let i = 0; i < lines.length; i++) {
			// randomize origin and end for each obj in array
			lines[i].chooseSidePos();
			// lines[i].choosePerimeterPoints(i);
		}

		// animation loop
		function loop(t) {
			frame = requestAnimationFrame(loop);
			setUpCanvas();

			// background
			ctx.fillStyle = '#BFD8FF';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			// Draw every x seconds
			// if (!last || t - last >= 30 * 1000) {
			// 	last = t;
			// 	progress = 0;
			// }

			for (let i = 0; i < lines.length; i++) {
				if (progress >= canvas.height - 500) subtract = true;
				if (progress <= 100) subtract = false;
				subtract ? lines[i].draw((progress -= 0.065)) : lines[i].draw((progress += 0.065));
			}
			// Draw Line
		}
		// kill loop if when sketch is terminated.
		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<div id="container">
	<!-- {JSON.stringify(posts)} -->
	<canvas bind:this={canvas} id="bg-sketch" />
	<main id="avatar-container">
		<Avatar />
	</main>
	<Work {posts} />
	<div style="position: absolute; top: 0%; min-height: 100vh; height:fit-content; z-index: 3">
		<slot />
	</div>
	{#if $aboutSwitch === 'on'}
		<About />
	{:else if $aboutSwitch === 'off'}
		<div />
	{/if}

	<Nav />
</div>

<style lang="scss">
	#container {
		min-width: 100vw;
		min-height: 100vh;
		// max-height: 100vh;
		// position: relative;
	}
	main#avatar-container {
		z-index: 1;
		position: relative;

		max-height: 100vh;
	}
	#bg-sketch {
		z-index: 0;

		position: absolute;
		top: 0%;
		left: 0%;

		width: 100vw;
		height: 100vh;

		display: none;
	}
</style>
