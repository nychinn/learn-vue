
new Vue({
	el: 'image-slider',
	data: {
		images: [
			'https://unsplash.it/200/300?image=768',
			'https://unsplash.it/200/300?image=769',
			'https://unsplash.it/200/300?image=770',
			'https://unsplash.it/200/300?image=775',
			'https://unsplash.it/200/300?image=772',
		],
		currentNumber: 0,
		timer: null
	},

	computed: {
		currentImage: function() {
			return this.images[Math.abs(this.currentNumber) % this.images.length];
		}
	},

	mounted: function() {
		this.startRotation();
	},

	methods: {
		startRotation: function() {
			this.timer = setTimeout(this.next, 3000);
		},

		stopRotation: function() {
			clearTimeout(this.timer);
			this.timer = null;
		},

		next: function() {
			this.currentNumber += 1;
		},

		prev: function() {
			this.currentNumber -= 1;
		}
	}
});