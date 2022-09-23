<template>
	<div class="rooms__section">
		<div class="rooms" action="">
			<input
				type="text"
				placeholder="add new ..."
				v-model="newRoomName"
			/>
			<button @click="addNewRoom">Add</button>
		</div>
		<div class="roomlist">
			<!-- hien tat ca cac room co trong db  -->
			<div
				class="roomlist__container"
				v-for="(room, index) in roomLists"
				:key="index"
			>
				<div
					class="roomlist__item"
					@click="onJoin(room)"
					:class="{
						'roomlist__item--selected': room.room_id === selectedRoomId,
					}"
				>
					{{ room.room_name }}
				</div>
			</div>
		</div>
	</div>
</template>
<script src="./RoomList.js"></script>
<style src="./RoomList.css"></style>
