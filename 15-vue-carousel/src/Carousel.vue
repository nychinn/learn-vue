<!-- source: https://medium.com/@davidatomhernandez/how-to-a-simple-carousel-with-vue-138715d615d7 -->

<!-- tag attribute allows us to specify this to render as a div -->
<!-- we pass in the :key so vue can keep track of each node -->

<template>
	<div class="carousel-view">
		
		<transition-group class="carousel" tag="div">
			<div v-for="slide in slides" class="slide" :key="slide.id">
				<h4>{{ slide.title }}</h4>
			</div>
		</transition-group>
		<div class="carousel-controls">
			<button class="carousel-controls__button" @click="previous">prev</button>
			<button class="carousel-controls__button" @click="next">next</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				slides: [
					{
						title: 'I am Slide A',
						id: 1
					},
					{
						title: 'I am Slide B',
						id: 2
					},
					{
						title: 'I am Slide C',
						id: 3
					},
					{
						title: 'I am Slide D',
						id: 4
					},
					{
						title: 'I am Slide E',
						id: 5
					},
				]
			}
		},
		methods: {
			next() {
				const first = this.slides.shift();
				this.slides = this.slides.concat(first);
			},
			previous() {
				const last = this.slides.pop();
				this.slides = [last].concat(this.slides);
			}
		}
	}

</script>


<style>
	.carousel-view {
		display: flex;
		flex-direction: column;
		align-items: center;
			
	}

	.carousel {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		
		width: 24em;
		width: 100%;
		min-height: 25em;
	}

	.slide {
		/*flex: 0 0 2em;*/
		height: 20em;
		margin: 1em;
		width: 100%;
		-webkit-flex-wrap: wrap;
		    -ms-flex-wrap: wrap;
		        flex-wrap: wrap;
		
		display: flex;
		justify-content: center;
		align-items: center;
		
		border: 0.1em dashed #000;
		/*border-radius: 50%;*/
		padding: 10px;
		
		transition: transform 0.3s ease-in-out;
	}

	.slide:first-of-type {
		opacity: 0;
	}

	.slide:last-of-type {
		opacity: 0;
	}
</style>









