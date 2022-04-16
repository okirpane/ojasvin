<script lang="ts">
	import '../app.scss';
	import { onMount } from 'svelte';

	let canvas;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		let frame = requestAnimationFrame(loop);
		const min = Math.min(canvas.height, canvas.width);

		// === function bag === //

		// set canvas
		const setUpCanvas = () => {
			// Feed the size back to the canvas.
			canvas.width = canvas.clientWidth * 1.5;
			canvas.height = canvas.clientHeight * 1.5;
		};
		const getRandomInt = (max) => {
			return Math.floor(Math.random() * max);
		};
		class Line {
			// collection of sides
			sides: string[] = ['top', 'right', 'bottom', 'left'];

			// choose from above sides
			chooseSidePos(): any {
				let arr = this.sides;
				// get origin side
				let choiceOrigin: string = arr[getRandomInt(arr.length)];
				// set origin position
				switch (choiceOrigin) {
					case 'top':
						this.position.start.x = getRandomInt(canvas.width);
						this.position.start.y = 0;
						break;
					case 'right':
						this.position.start.x = canvas.width;
						this.position.start.y = getRandomInt(canvas.height);
						break;
					case 'bottom':
						this.position.start.x = getRandomInt(canvas.width);
						this.position.start.y = canvas.height;
						break;
					case 'left':
						this.position.start.x = 0;
						this.position.start.y = getRandomInt(canvas.height);
						break;
				}
				// get an array without the origin side
				let dummyArr: string[] = arr.filter((arrs) => arrs !== choiceOrigin);
				// get end side
				let choiceEnd: string = dummyArr[getRandomInt(dummyArr.length)];
				// set end pos
				switch (choiceOrigin) {
					case 'top':
						// go to bottom
						this.position.end.x = getRandomInt(canvas.width);
						this.position.end.y = canvas.height;
						break;
					case 'right':
						// go to top
						this.position.end.x = getRandomInt(canvas.width);
						this.position.end.y = 0;
						break;
					case 'bottom':
						// go to top
						this.position.end.x = getRandomInt(canvas.width);
						this.position.end.y = 0;
						break;
					case 'left':
						this.position.end.x = getRandomInt(canvas.width);
						this.position.end.y = canvas.height;
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
				strokeRadial.addColorStop(0.5, '#F7FAFF');
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
		let last = 0;
		let progress = 500;
		let subtract = false;
		let lines: Line[] = [];
		for (let i = 0; i < 4; i++) {
			lines[i] = new Line();
		}
		function loop(t) {
			frame = requestAnimationFrame(loop);
			setUpCanvas();

			// background
			ctx.fillStyle = '#BFD8FF';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			// Draw every 5 seconds
			if (!last || t - last >= 8.3 * 1000) {
				last = t;
				for (let i = 0; i < 4; i++) {
					// randomize origin and end for each obj in array
					lines[i].chooseSidePos();
				}
				progress = 0;
			}

			for (let i = 0; i < 4; i++) {
				if (progress >= 1000) subtract = true;
				if (progress <= 0) subtract = false;
				subtract ? lines[i].draw(progress--) : lines[i].draw(progress++);
			}
			console.log(progress);
			// Draw Line
		}

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<slot />
<canvas bind:this={canvas} id="bg-sketch" />

<style lang="scss">
	#bg-sketch {
		position: absolute;
		top: 0%;
		left: 0%;

		width: 100vw;
		height: 100vh;
	}
</style>
