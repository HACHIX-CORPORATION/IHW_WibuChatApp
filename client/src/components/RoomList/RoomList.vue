<template>
	<div>
		<div class="rooms" action="">
			<input type="text" placeholder="add new ..." v-model="newRoom" />
			<button @click="addNewRoom">Add</button>
		</div>
		<div class="roomlist">
			<div class="roomlist-header">
				{{ roomHeader }}
			</div>
			<div
				class="roomlist__container"
				v-for="(list, index) in lists"
				:key="index"
			>
				<div class="roomlist--new-added">
					{{ list }}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'RoomLists',
	props: {
		roomheader: {
			type: String,
		},
		newroom: {
			type: String,
		},
		lists: {
			type: Array,
		},
	},
	data() {
		return {
			newRoom: '',
		};
	},
	methods: {
		addNewRoom() {
			// alert(typeof this.newRoom);
			this.$emit('addNewRoom', this.newRoom);
			this.newRoom = '';
		},
	},
};
</script>
<style>
.rooms {
	padding: 10px;
	display: flex;
	flex-direction: row;
}

.rooms input {
	width: 70%;
	margin-right: 5%;
}

.rooms button {
	cursor: pointer;
	width: 60px;
}

.room > button:hover {
	background-color: rgb(243, 157, 29);
}

.roomlist--new-added {
	color: rgb(17, 17, 17);
	font: 2em monospace;
	background-color: #f7c37f;
	margin: 5px;
	padding-left: 10px;
	border-radius: 10px;
	border: 1px solid;
}

.roomlist--new-added:hover {
	cursor: pointer;
	color: rgb(255, 255, 255);
	background-color: #ff9a15;
	padding-left: 20px;
	border-radius: 10px;
	border: 2px solid;
}
</style>
