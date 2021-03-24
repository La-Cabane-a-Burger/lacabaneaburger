<template>
    <div class="xl:w-4/12 px-4">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div class="px-4 py-5 flex-auto custom_card">
                <div class="tab-content tab-space">
                    <div>
                        <InputForm class="custom_input1" type="text" label="Nom" id="value" for="value" />
                        <InputForm class="custom_input2" type="text" label="Prénom" id="value1" for="value1" />
                        <InputForm type="text" label="Email" id="value2" for="value2" />
                        <InputForm type="text" label="Sujet" id="value3" for="value3" />
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
        </div>
    </div>
</template>
<script>
import InputForm from "~/components/contact/InputForm.vue";
import InputPassword from "~/components/contact/InputPassword.vue";
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
		InputForm,
        InputPassword,
        TextareaForm
	},
}
</script>
<style>
.card-form__button {
    width: 50%;
    height: 50px;
    background: #EF7202;
    border: none;
    border-radius: 10px;
    font-size: 22px;
    font-weight: 500;
    font-family: "Source Sans Pro", sans-serif;
    color: #fff;
    margin-top: 30px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
}
@media screen and (min-width: 415px) {
    .custom_input1 {
        width: 45%; 
        display:inline-block
    }
    .custom_input2 {
        width: 45%; 
        float:right
    }
}
</style>