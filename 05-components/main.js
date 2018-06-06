

//-- best practice to use hyphens for component name

//-- bulma components similar to vue

//-- <slot></slot> take anything within tag and slot it in

//-- @[customevent] -> @click="@emit('customevent')"


Vue.component('task', {

	template: '<li><slot></slot></li>',

	data() {
		return {
			message: 'Foobar'
		}
	}

});



Vue.component('task-list', {
	template: '<div><task v-for="task in tasks">{{ task.desc }}</task></div>',
	data() {
		return {
			tasks: [
				{ desc: 'Go to the store', complete: true },
				{ desc: 'Go to the email', complete: false },
				{ desc: 'Go to the farm', complete: true },
				{ desc: 'Go to work', complete: false }
			]
		}
	}
});



Vue.component('message', {
	props: ['title', 'body'],
	data() {
		return {
			isVisible: true
		}
	} ,
	template:  `<article class="message" v-show="isVisible">
					<div class="message-header">
						{{ title }}
						<button class="delete" aria-label="delete" @click="isVisible = false"></button>
					</div>
					<div class="message-body">
						{{ body }}
					</div>
				</article>`,
	methods: {
		hideModal() {
			this.isVisible = false;
		}
	}

});



Vue.component('modal', {
	template:  `<div class="modal is-active">
					<div class="modal-background"></div>
					<div class="modal-content">
						<div class="box">
							<slot></slot>
						</div>
					</div>
					<button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
				</div>`
});



//-- https://laracasts.com/series/learn-vue-2-step-by-step/episodes/11?autoplay=true
Vue.component('tabs', {
	template:  `<div>
					<div class="tabs">
					  <ul>
					    <li v-for="tab in tabs" :class="{ 'is-active':tab.isActive }">
					    	<a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
					    </li>
					  </ul>
					</div>
					
					<div class="tabs-details">
						<slot></slot>
					</div>
				</div>`,
	data() {
		return {
			tabs: []
		}
	},
	created() {
		this.tabs = this.$children;
	},
	methods: {
		selectTab(selectedTab) {
			this.tabs.forEach(tab => {
				tab.isActive = (tab.name == selectedTab.name)
			});
		}
	}
});



Vue.component('tab', {
	props: {
		name: { required: true },
		selected: { default: false }
	},
	data() {
		return {
			isActive: false
		}
	},
	computed: {
		href() {
			return '#' + this.name.toLowerCase().replace(/ /g, '-')
		}
	},
	mounted() {
		this.isActive = this.selected;
	},
	template: `<div v-show="isActive"><slot></slot></div>`
});



new Vue({
	el: '#root',
	data: {
		showModal: false
	}
});









