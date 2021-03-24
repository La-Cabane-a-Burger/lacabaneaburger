<template>
	<div>
		<div class="flex items-center justify-center h-screen">
			<CardContactForm />
		</div>
	</div>
</template>
<script>
import CardContactForm from "~/components/contact/CardContactForm.vue";
export default {
	components: {
		CardContactForm
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
</style>
