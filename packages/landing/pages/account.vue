<template>
  <div
    class="bg-transparent container flex justify-center pt-60 flex-col w-auto max-w-none items-center h-auto"
    :style="{
      backgroundImage: `url('./assets/backgrounds/background-transparent.png')`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
  >
    <h1 class="text-secondary-900 text-2xl font-bold text-center">
      Mon compte
    </h1>
    <div
      id="account-info"
      class="container flex justify-center flex-col mt-24 shadow-lg shadow-zinc-400 rounded-md p-6 bg-white"
    >
      <div id="account-info-nav" class="flex justify-between">
        <div id="account-info-title" class="flex">
          <ProfileIcon class="mr-4 h-12 w-12" />
          <h2 class="text-secondary-900 text-xl font-bold m-auto">
            Mon Profil
          </h2>
        </div>
        <div class="border-solid border-2 rounded-xl border-secondary-900">
          <PencilAltIcon class="h-8 m-2" />
        </div>
      </div>
      <form id="account-info-form" class="flex justify-between mt-4">
        <ClientOnly>
          <InlineInput
            class="mw-70"
            type="tel"
            label="Téléphone :"
            name="tel"
            :placeholder="tel"
          />
        </ClientOnly>
        <ClientOnly>
          <InlineInput
            type="email"
            label="E-mail :"
            name="email"
            :placeholder="email"
          />
        </ClientOnly>
        <ClientOnly>
          <InlineInput
            type="password"
            label="Mot de passe :"
            name="password"
            placeholder="**********"
          />
        </ClientOnly>
      </form>
    </div>
    <div
      id="account-fidelity"
      class="container flex justify-start flex-col mt-12 mb-12 shadow-lg shadow-zinc-400 rounded-md p-6 bg-white"
    >
      <div id="account-info-nav" class="flex justify-between">
        <div id="account-info-title" class="flex">
          <FidelityIcon class="mr-4 h-12 w-12" />
          <h2 class="text-secondary-900 text-xl font-bold m-auto">Fidélité</h2>
        </div>
        <div
          class="border-solid border-2 rounded-xl border-gray-500 flex justify-center align-"
        >
          <button
            class="my-0.5 mx-4 font-bold text-gray-500 text-md"
            type="button"
          >
            Voir Plus
          </button>
        </div>
      </div>
      <ProgressBar class="mx-6 my-4" value="4" max="15" />
    </div>
    <div
      id="account-orders"
      class="container flex justify-start flex-col mt-12 mb-12 shadow-lg shadow-zinc-400 rounded-md p-6 bg-white"
    >
      <div id="account-info-nav" class="flex justify-between">
        <div id="account-info-title" class="flex">
          <HistoryIcon class="mr-4 h-12 w-12" />
          <h2 class="text-secondary-900 text-xl font-bold m-auto">
            Mes commandes
          </h2>
        </div>
        <div
          class="border-solid border-2 rounded-xl border-gray-500 flex justify-center align-"
        >
          <button
            class="my-0.5 mx-4 font-bold text-gray-500 text-md"
            type="button"
          >
            Voir Plus
          </button>
        </div>
      </div>
      <hr class="my-4 border-gray-800 mx-40" />
    </div>
    <div
      id="account-delete"
      class="container flex justify-start flex-col mt-12 mb-12 shadow-lg shadow-zinc-400 rounded-md p-6 bg-white"
    >
      <div id="account-info-nav" class="flex justify-between">
        <div id="account-info-title" class="flex">
          <DeleteIcon class="mr-4 h-12 w-12" />
          <h2 class="text-secondary-900 text-xl font-bold m-auto">
            Supprimer mon compte
          </h2>
        </div>
      </div>
      <p class="mt-2 font-semibold text-md text-gray-500">
        Pour supprimer définitivement votre compte, vous devez saisir votre mot
        de passe. Une fois la suppression effectuée, il ne sera plus possible de
        réactiver votre compte.
      </p>
      <form
        id="account-delete-form"
        class="flex flex-col items-start w-max mt-8"
      >
        <ClientOnly>
          <InlineInput
            class="mw-70"
            type="password"
            label="Mot de passe :"
            name="password"
          />
        </ClientOnly>
        <ReliefButton type="secondary" class="mt-4">Confirmer</ReliefButton>
      </form>
    </div>
  </div>
</template>

<script>
import InlineInput from "~/components/form/InlineInput.vue";
import ProfileIcon from "~/assets/icons/ProfileIcon.vue";
import FidelityIcon from "~/assets/icons/FidelityIcon.vue";
import HistoryIcon from "~/assets/icons/HistoryIcon.vue";
import DeleteIcon from "~/assets/icons/DeleteIcon.vue";
import { PencilAltIcon } from "@heroicons/vue/solid";
import ProgressBar from "~/components/ProgressBar.vue";
import ReliefButton from "~/components/form/ReliefButton.vue";

export default defineComponent({
  name: "Mon Compte",
  data() {
    return {
      tel: "0234567890",
      email: "client@gmail.com",
    };
  },
  methods: {},
  components: {
    InlineInput,
    ProfileIcon,
    PencilAltIcon,
    FidelityIcon,
    HistoryIcon,
    DeleteIcon,
    ProgressBar,
    ReliefButton,
  },
});
</script>
