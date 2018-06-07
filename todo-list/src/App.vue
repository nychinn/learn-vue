
<template>
  <div id="app" class="container">

  	<ToDoList v-bind:todos="todos"></ToDoList>
  	<CreateTodo v-on:add-todo="addTodo"></CreateTodo>

  </div>
</template>



<script>

import CreateTodo from './components/CreateTodo.vue';
import ToDoList from './components/ToDoList.vue';



export default {
  name: 'app',

  components: { 
  	ToDoList,
  	CreateTodo
  },

  data() {
  	return {
  		todos: [
  			{
  				title: 'To do A',
  				project: 'Project A',
  				done: false
  			},
  			{
  				title: 'To do B',
  				project: 'Project B',
  				done: true
  			},
  			{
  				title: 'To do C',
  				project: 'Project C',
  				done: false
  			},
  			{
  				title: 'To do D',
  				project: 'Project D',
  				done: false
  			}
  		]
  	}
  },

  methods: {
  	addTodo(title) {
  		this.todos.push({
  			title,
  			done: false
  		});
  	}
  }
}
</script>




<style lang="scss">

  

</style>
