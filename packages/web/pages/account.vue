
<template>
	<div>
        <div class="flex items-center justify-center h-screen">
            <CardAccount />
            <CardFidelite />
        </div>
	</div>
</template>
<script>
import CardAccount from "~/components/account/CardAccount.vue";
import CardFidelite from "~/components/account/CardFidelite.vue";
export default {
    name: "login-page",
	components: {
        CardAccount,
        CardFidelite
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
