
<template>
	<div>
		<div class="card-form">
			<div class="card-form__inner">
				<InputForm label="Nom" id="value" for="value" style="width: 45%; display:inline-block" />
				<InputForm label="Prénom" id="value1" for="value1" style="width: 45%; float:right" />
				<InputForm label="Email" id="value2" for="value2" />
				<InputForm label="Sujet" id="value3" for="value3" />
				<TextareaForm label="Message" id="value4" for="value4" />
				<vs-button
				class="card-form__button"
				@click="active = 1"
				warn
				>
				Envoyer
				</vs-button>
			</div>
		</div>
	</div>
</template>
<script>
import InputForm from "~/components/contact/InputForm.vue";
import TextareaForm from "~/components/contact/TextareaForm.vue";
export default {
	data:() => ({
		value: '',
		value1: '',
		value2: '',
		value3: '',
		value4: '',
	}),
	components: {
		InputForm
	},
	computed: {
		validEmail() {
		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)
		},
	}
}
</script>
<style>
body {
background: #ffffff;
font-family: "Source Sans Pro", sans-serif;
font-size: 16px;
}
* {
box-sizing: border-box;
}
*:focus {
outline: none;
}
.card-form {
max-width: 570px;
margin: auto;
width: 100%;
}
@media screen and (max-width: 576px) {
.card-form {
margin: 0 auto;
}
}
.card-form__inner {
background: #fff;
box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
border-radius: 10px;
padding: 35px;
}
@media screen and (max-width: 480px) {
.card-form__inner {
padding: 25px;
padding-top: 165px;
}
}
@media screen and (max-width: 360px) {
.card-form__inner {
padding: 15px;
padding-top: 165px;
}
}
.card-form__button {
width: 60%;
height: 55px;
background: #EF7202;
border: none;
border-radius: 10px;
font-size: 22px;
font-weight: 500;
font-family: "Source Sans Pro", sans-serif;
box-shadow: 3px 10px 20px 0px #e0b895;
color: #fff;
margin-top: 20px;
cursor: pointer;
margin-left: auto;
margin-right: auto;
}
@media screen and (max-width: 480px) {
.card-form__button {
margin-top: 10px;
}
}
</style>
