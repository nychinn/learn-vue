
<template>
	<div class="ui basic content center aligned segment">
		<button class="ui basic button icon" v-on:click="openForm" v-show="!isCreating">
			<i class="plus icon"></i>
		</button>
		<div class="ui centered card" v-show="isCreating">
			<div class="content">
				<div class="ui form">
					<div class="field">
						<label for="">Title</label>
						<input type="text" v-model="titleText">
					</div>

					<div class="field">
						<label for="">Project</label>
						<input type="text" v-model="projectText">
					</div>

					<div class="ui two button attached buttons">
						<button class="ui basic blue button" v-on:click="sendForm()">Create</button>
						<button class="ui basic red button" v-on:click="closeForm">Cancel</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>



<script type="text/javascript">
	export default {
		data() {
			return {
				titleText: '',
				projectText: '',
				isCreating: false
			}
		},
		methods: {
			openForm() {
				this.isCreating = true;
			},
			closeForm() {
				this.isCreating = false;
			},
			sendForm() {
				console.log('sent');
				if ( this.titleText.length > 0 && this.projectText.length > 0 ) {
					const title = this.titleText;
					const project = this.projectText;
					this.$emit('create-todo', {
						title,
						project,
						done: false
					});
					// this.newTodoText = '';
					this.titleText = '';
					this.projectText = '';
					this.isCreating = false;
				}
			}
		}
	}
</script>


















