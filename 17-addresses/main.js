

// idk how to do this with components yet

new Vue({
	el: '#root',
	data: {
		addresses: [
			{
				name: 'Snow White',
				firstName: 'Snow',
				lastName: 'White',
				company: 'Bad Apple Cleaning',
				street: '123 Apple Street',
				city: 'Far Far Away',
				postcode: '4993',
				editmode: false
			},
			{
				name: 'Cinderella',
				firstName: 'Ella',
				lastName: 'Cinders',
				company: 'The Glass Slipper',
				street: '98 Whistle Road',
				city: 'Far Far Away',
				postcode: '9145',
				editmode: false
			}
		]
	},

	methods: {
		toggle: function(index) {
			this.addresses[index].editmode = !this.addresses[index].editmode;
		},
		deleteAddress: function(index) {
			this.addresses.splice(index, 1)
		},
		saveAddress: function(index) {
			console.log('address is saved!');
			this.addresses[index].editmode = false;
		},
		addAddress: function() {
			var newAddress = {
				name: '',
				firstName: '',
				lastName: '',
				company: '',
				street: '',
				city: '',
				postcode: '',
				editmode: true
			}

			this.addresses.push(newAddress);
		}
	}
});