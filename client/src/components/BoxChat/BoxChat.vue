<template>
	<div class="boxchat">
		<div class="boxchat__container">
			<div class="boxchat__header">Wichat</div>
			<div class="boxchat__screen">
				<div class="message">
					<div
						class="message__container"
						v-for="(message, idx) in messages"
						:key="idx"
					>
						<div
							class="message__box"
							:class="{
								'message--sender': message.userId === userId,
								'message--receiver': message.userId !== userId,
							}"
						>
							<div class="message__text">{{ message }}</div>
							<img src="../../assets/02.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div class="boxchat__input">
				<form @submit.prevent="sendMess" class="boxchat__input--layout">
					<input type="text" placeholder=" Aa" v-model="newText" />
					<button>
						<div class="svg-wrapper-1">
							<div class="svg-wrapper">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
								>
									<path fill="none" d="M0 0h24v24H0z"></path>
									<path
										fill="currentColor"
										d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
									></path>
								</svg>
							</div>
						</div>
						<span>Send</span>
					</button>
				</form>
			</div>
		</div>
	</div>
</template>
<script src="./BoxChat.js"></script>

<style scoped src="./BoxChat.css"></style>
