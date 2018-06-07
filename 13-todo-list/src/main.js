import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  data: {
  	tasks: [
	  	{ desc: 'Practice drawing', completed: false },
	  	{ desc: 'Practice drawing', completed: false },
	  	{ desc: 'Practice drawing', completed: false }
  	]
  },
  render: h => h(App)
})
