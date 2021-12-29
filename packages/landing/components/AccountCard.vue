<template>
  <div class="w-full xl:w-4/12 px-4">
    <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
      <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
        <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer"
           v-on:click="toggleTabs(1)"
           v-bind:class="{'text-gray-600 bg-white': openTab !== 1, 'text-white bg-gray-400': openTab === 1}">
          Nous rejoindre
        </a>
      </li>
      <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
        <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer"
           v-on:click="toggleTabs(2)"
           v-bind:class="{'text-gray-600 bg-white': openTab !== 2, 'text-white bg-gray-400': openTab === 2}">
          Identifiez-vous
        </a>
      </li>
    </ul>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div class="px-4 py-5 flex-auto custom_card">
        <div class="tab-content tab-space">
          <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
            <div class="btn-wrapper text-center mt-6">
              <button
                  class="bg-blue-800 bg-opacity-75 active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded-full py-3 px-6 outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                  type="button"
                  style="transition: all 0.15s ease 0s;"
              >
                <FacebookIcon class="w-5 mr-1"/>Facebook
              </button
              >
              <button
                  class="bg-red-600 bg-opacity-75 active:bg-red text-gray-800 font-normal px-4 py-2 rounded-full py-3 px-6 outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                  type="button"
                  style="transition: all 0.15s ease 0s;"
              >
                Google
              </button>
            </div>
            <input type="text" label="E-mail" v-model="registerFormData.email"/>
            <input label="Mot de passe" v-model="registerFormData.password"/>
            <input type="date" label="Date de naissance" v-model="registerFormData.birthDate"
                   style="width: 45%; display:inline-block"/>
            <input type="text" label="Téléphone" v-model="registerFormData.phone" style="width: 45%; float:right"/>
            <input type='checkbox' id="getEmail" name="getEmail" v-model="registerFormData.getEmail">
            <label for="getEmail">Je souhaite recevoir par email les nouveautés et bon plans</label>

            <input type='checkbox' id="termOfUse" name="termOfUse" v-model="registerFormData.termOfUse">
            <label for="termOfUse">J’ai lu et j’accepte les conditions d’utilisation</label>

            <Button
                class="card-form__button"
                @click="active = 1"
                warn
            >
              Créer mon compte
            </Button>
          </div>
          <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
            <div class="btn-wrapper text-center mt-6">
              <button
                  class="bg-blue-800 bg-opacity-75 active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded-full py-3 px-6 outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                  type="button"
                  style="transition: all 0.15s ease 0s;"
              >
                <FacebookIcon class="w-5 mr-1"/>
                Facebook
              </button
              >
              <button
                  class="bg-red-600 bg-opacity-75 active:bg-red text-gray-800 font-normal px-4 py-2 rounded-full py-3 px-6 outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                  type="button"
                  style="transition: all 0.15s ease 0s;"
              >Google
              </button>
            </div>
            <input class="input_custom" label="E-mail" v-model="loginFormData.email" type="text"/>
            <input class="input_custom" label="Mot de passe" type="password" v-model="loginFormData.password"/>
            <input type='checkbox' name="stayLogged" id="stayLogged" v-model="loginFormData.stayLogged">
            <label for="stayLogged">Rester connecté</label>

            <div class="min-h-131"></div>
            <Button
                class="card-form__button"
                @click="active = 1"
                warn
            >
              Me connecter
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent, ref, reactive} from "vue";
import Button from "~/components/Button.vue";
import FacebookIcon from "assets/icons/FacebookIcon.vue";

export default defineComponent({
  components: {
    FacebookIcon,
    Button
  }, setup() {
    const openTab = ref(1);

    const registerFormData = reactive({
      termOfUse: false,
      getEmail: false,
      email: '',
      password: '',
      birthDate: '',
      phone: ''
    })

    const loginFormData = reactive({
      email: '',
      password: '',
      stayLogged: false
    })

    const toggleTabs = tabNumber => {
      openTab.value = tabNumber
    }

    return {
      openTab,
      toggleTabs,
      registerFormData,
      loginFormData
    }

  }
})

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

.pt-3 {
  padding-top: 0;
}

.custom_card {
  min-height: 600px;
}
</style>
