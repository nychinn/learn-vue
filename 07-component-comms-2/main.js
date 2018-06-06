
//-- root event
// window.Event = new Vue();

//-- event dispatcher
//-- create names for emit and on
window.Event = new class {
	constructor() {
		this.vue = new Vue();
	}

	fire(event, data = null) {
		this.vue.$emit(event, data);
	}

	listen(event, callback) {
		this.vue.$on(event, callback);
	}
}



Vue.component('coupon', {
	template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

	methods: {
		onCouponApplied() {
			Event.fire('applied');
		}
	}
});



new Vue({
	el: '#root',

	data: {
		couponApplied: false
	},

	methods: {
		onCouponApplied() {
			this.couponApplied = true
		}
	},

	created() {
		Event.listen('applied', ()=> alert('Handling it'));
	}
});



